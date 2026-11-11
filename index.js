/**
 * Host half of 小肥鱼学习平台.
 *
 * - Serves the mascot artwork and the bundled PDF.js runtime from the package.
 * - Optionally analyzes a photographed homework/test with the current model.
 *   The client compresses the image first and explicitly asks before calling.
 * - Optionally reads a scanned textbook's table-of-contents pages with the
 *   current vision model; only the selected pages are sent.
 */
import { readFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(ROOT, 'assets');
const PREFIX = '/xiaofeiyu-academy/assets/';
const HEALTH_PATH = '/xiaofeiyu-academy/health';
const ANALYZE_PATH = '/xiaofeiyu-academy/analyze-homework';
const ANALYZE_TOC_PATH = '/xiaofeiyu-academy/analyze-toc';
const MAX_BODY_BYTES = 8 * 1024 * 1024;
const MAX_TOC_IMAGES = 6;
const CONTENT_TYPES = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.mjs': 'text/javascript; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
};
const ALLOWED_IMAGE_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif']);

export const inject = ['webServer', 'attachments', 'llm', 'agentDefaultModel'];

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('图片太大了，请换一张小一点的图片。'), { code: 'too-large' }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function cleanBase64(input) {
  if (typeof input !== 'string') return null;
  const comma = input.indexOf(',');
  const raw = input.startsWith('data:') && comma >= 0 ? input.slice(comma + 1) : input;
  if (!/^[A-Za-z0-9+/=\s]+$/.test(raw)) return null;
  return raw.replace(/\s+/g, '');
}

function extractJson(text) {
  const source = String(text || '').replace(/```(?:json)?/gi, '').replace(/```/g, '').trim();
  const start = source.indexOf('{');
  const end = source.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(source.slice(start, end + 1));
  } catch {
    return null;
  }
}

function textOf(value, max = 1200) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

/*
 * Keep model output readable for a primary-school child. Fractions become
 * "7/6" (the client draws them as stacked fractions); LaTeX commands and
 * dollar delimiters are removed before anything is stored or rendered.
 */
function kidMathText(value, max = 1200) {
  let text = textOf(value, max);
  text = text.replace(/\$\$?/g, '').replace(/\\\[|\\\]|\\\(|\\\)/g, '');
  text = text.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (_, num, den) => {
    const n = String(num).trim();
    const d = String(den).trim();
    if (/^[\d.]+$/.test(n) && /^[\d.]+$/.test(d)) return `${n}/${d}`;
    return `(${n})/(${d})`;
  });
  text = text.replace(/\\sqrt\s*\{([^{}]*)\}/g, '√($1)');
  text = text.replace(/\\times|\\cdot/g, '×');
  text = text.replace(/\\div/g, '÷');
  text = text.replace(/\\pm/g, '±');
  text = text.replace(/\\neq/g, '≠');
  text = text.replace(/\\leq/g, '≤');
  text = text.replace(/\\geq/g, '≥');
  text = text.replace(/\\pi/g, 'π');
  text = text.replace(/\\circ/g, '°');
  text = text.replace(/\\text\s*\{([^{}]*)\}/g, '$1');
  text = text.replace(/\\mathrm\s*\{([^{}]*)\}/g, '$1');
  text = text.replace(/\\left|\\right/g, '');
  text = text.replace(/\\[,;:!]/g, ' ');
  text = text.replace(/\\[a-zA-Z]+/g, '');
  text = text.replace(/[{}]/g, '');
  text = text.replace(/([a-zA-Z])\s*=\s*(\d+(?:\.\d+)?)\s*÷\s*(\d+(?:\.\d+)?)/g, '$1 = $2/$3');
  return text.replace(/[ \t]+\n/g, '\n').trim();
}

function analysisPrompt(grade) {
  return [
    '请识别这张小学作业或试卷图片，找出其中被老师批改标记为错误、或明显做错的题目。',
    `孩子当前年级：${grade || '未知'}。`,
    '只返回严格 JSON，不要 Markdown，不要解释。字段如下：',
    '{',
    '  "subject": "math | chinese | english | unknown",',
    '  "question": "题目原文，尽量完整",',
    '  "studentAnswer": "孩子写在图上的答案",',
    '  "correctAnswer": "正确答案；如果不确定就写空字符串",',
    '  "analysis": "错在哪里、正确思路，2-4 句，孩子能听懂",',
    '  "knowledgePoint": "这道题对应的知识点，尽量具体，如：两位数乘一位数",',
    '  "confidence": "high | medium | low"',
    '}',
    '数学内容要写成小学生看得懂的样子：不要用 LaTeX，不要出现 \\frac、$...$、\\times 这类代码；分数直接写成 7/6 这种形式。',
    '如果图片里没有明显错题，把 question 留空，confidence 设为 low。不要编造题目。',
  ].join('\n');
}

function tocPrompt() {
  return [
    '这些图片可能是一本小学教材的前几页，也可能是扫描版。请找出其中的“目录”页，并把目录整理成结构化数据。',
    '只返回严格 JSON，不要 Markdown，不要解释。格式：',
    '{',
    '  "subject": "math | chinese | english | unknown",',
    '  "grade": 1,',
    '  "volume": "up | down | unknown",',
    '  "units": [',
    '    { "title": "第一单元 走进数学乐园", "points": ["1. 立体图形", "2. 平面图形"] }',
    '  ]',
    '}',
    '规则：',
    '- 只读目录，不要读正文；不要把页码当成单元名。',
    '- 保留单元编号（第一单元、一、Unit 1 等）和课时/小节编号。',
    '- 双栏目录先读左栏再读右栏；跨页目录合并成一个 units 数组。',
    '- 没有课时/小节时 points 写空数组，不要编造。',
    '- 最多 24 个单元，每个单元最多 12 个知识点。',
    '- 不要使用 LaTeX；分数写成 7/6 这种形式。',
    '- 如果图片里没有目录，units 返回空数组。',
  ].join('\n');
}

function normalizeTocUnits(value) {
  const units = [];
  (Array.isArray(value) ? value : []).slice(0, 24).forEach((unit) => {
    if (!unit || typeof unit !== 'object') return;
    const title = kidMathText(unit.title, 80);
    if (!title) return;
    const points = [];
    (Array.isArray(unit.points) ? unit.points : []).slice(0, 12).forEach((point) => {
      const text = kidMathText(point, 80);
      if (text && !points.includes(text)) points.push(text);
    });
    units.push({ title, points });
  });
  return units;
}

export function apply(ctx) {
  ctx.effect(
    () =>
      ctx.webServer.register({
        kind: 'prefix',
        path: PREFIX.slice(0, -1),
        handler: async (req, res) => {
          if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.statusCode = 405;
            res.setHeader('Allow', 'GET, HEAD');
            res.end('Method not allowed');
            return;
          }
          const url = new URL(req.url ?? '/', 'http://xiaofeiyu.local');
          const name = decodeURIComponent(url.pathname.slice(PREFIX.length));
          if (!/^[a-zA-Z0-9._-]+$/.test(name)) {
            res.statusCode = 404;
            res.end('Not found');
            return;
          }
          try {
            const body = await readFile(join(ASSETS, name));
            res.statusCode = 200;
            res.setHeader('Content-Type', CONTENT_TYPES[extname(name).toLowerCase()] ?? 'application/octet-stream');
            res.setHeader('Cache-Control', 'public, max-age=300');
            res.setHeader('X-Content-Type-Options', 'nosniff');
            if (req.method === 'HEAD') res.end();
            else res.end(body);
          } catch {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Artwork not found');
          }
        },
      }),
    'xiaofeiyu-academy: artwork and runtime route',
  );

  ctx.effect(
    () =>
      ctx.webServer.register({
        kind: 'exact',
        path: HEALTH_PATH,
        handler: (req, res) => {
          if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.statusCode = 405;
            res.setHeader('Allow', 'GET, HEAD');
            res.end();
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.setHeader('Cache-Control', 'no-store');
          const body = JSON.stringify({ ok: true, app: 'xiaofeiyu-academy', version: 4 });
          if (req.method === 'HEAD') res.end();
          else res.end(body);
        },
      }),
    'xiaofeiyu-academy: health route',
  );

  ctx.effect(
    () =>
      ctx.webServer.register({
        kind: 'exact',
        path: ANALYZE_PATH,
        handler: async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.setHeader('Allow', 'POST');
            res.end();
            return;
          }
          let body;
          try {
            body = await readBody(req);
          } catch (error) {
            sendJson(res, 413, { ok: false, reason: 'too-large', message: error.message });
            return;
          }
          let payload;
          try {
            payload = JSON.parse(body.toString('utf8'));
          } catch {
            sendJson(res, 400, { ok: false, reason: 'bad-request', message: '请求格式不正确。' });
            return;
          }
          const mediaType = payload.mediaType;
          if (!ALLOWED_IMAGE_TYPES.has(mediaType)) {
            sendJson(res, 400, { ok: false, reason: 'bad-image', message: '请上传 PNG / JPG / WebP / GIF 图片。' });
            return;
          }
          const base64 = cleanBase64(payload.image);
          if (!base64) {
            sendJson(res, 400, { ok: false, reason: 'bad-image', message: '图片编码不正确。' });
            return;
          }
          const bytes = Buffer.from(base64, 'base64');
          if (bytes.length === 0 || bytes.length > MAX_BODY_BYTES) {
            sendJson(res, 413, { ok: false, reason: 'too-large', message: '图片太大了，请换一张小一点的图片。' });
            return;
          }

          const selection = ctx.agentDefaultModel.currentSelection();
          if (!selection || !selection.provider || !selection.model) {
            sendJson(res, 200, { ok: false, reason: 'no-model', message: '当前没有配置可用模型。' });
            return;
          }

          let imageRef;
          try {
            imageRef = await ctx.attachments.saveImage({
              data: bytes,
              mediaType,
              name: 'homework-photo.jpg',
            });
          } catch (error) {
            sendJson(res, 200, {
              ok: false,
              reason: 'image-rejected',
              message: error instanceof Error ? error.message : '图片保存失败。',
            });
            return;
          }

          let modelInfo;
          try {
            modelInfo = await ctx.llm.resolveModelInfo(selection.provider, selection.model);
          } catch (error) {
            sendJson(res, 200, {
              ok: false,
              reason: 'model-unavailable',
              message: error instanceof Error ? error.message : '当前模型不可用。',
            });
            return;
          }
          const modalities = Array.isArray(modelInfo?.inputModalities) ? modelInfo.inputModalities : [];
          if (!modalities.includes('image')) {
            sendJson(res, 200, {
              ok: false,
              reason: 'vision-unsupported',
              message: '当前模型不能识别图片，请手动填写题目，或切换一个支持图片的模型。',
            });
            return;
          }

          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 60_000);
          let text = '';
          let failure = '';
          try {
            const stream = ctx.llm.stream({
              provider: selection.provider,
              model: selection.model,
              temperature: 0.2,
              system: [
                '你是小肥鱼学习平台的小学错题识别助手，面向中国小学 1-6 年级。',
                '只做识别与错因分析，不批评孩子，不编造看不清的内容。',
                '输出必须是严格 JSON，字段名和取值按用户要求。',
              ].join('\n'),
              messages: [
                {
                  role: 'user',
                  content: [
                    { type: 'text', text: analysisPrompt(payload.grade) },
                    { type: 'image', attachment: imageRef },
                  ],
                },
              ],
              signal: controller.signal,
            });
            for await (const chunk of stream) {
              if (chunk && chunk.type === 'text-delta') text += chunk.text;
              if (chunk && chunk.type === 'finish' && chunk.reason && chunk.reason.kind === 'error') {
                failure = chunk.reason.failure?.message || '模型生成失败';
              }
            }
          } catch (error) {
            failure = error instanceof Error ? error.message : String(error);
          } finally {
            clearTimeout(timer);
          }

          if (failure && !text.trim()) {
            sendJson(res, 200, { ok: false, reason: 'analysis-failed', message: failure });
            return;
          }
          const parsed = extractJson(text);
          if (!parsed) {
            sendJson(res, 200, {
              ok: false,
              reason: 'bad-analysis',
              message: '小肥鱼没读懂这张图，请换一张更清楚的照片，或手动填写。',
            });
            return;
          }
          sendJson(res, 200, {
            ok: true,
            data: {
              subject: ({ math: 'math', chinese: 'chinese', english: 'english', 数学: 'math', 语文: 'chinese', 英语: 'english' })[parsed.subject] || 'unknown',
              question: kidMathText(parsed.question, 1600),
              studentAnswer: kidMathText(parsed.studentAnswer, 600),
              correctAnswer: kidMathText(parsed.correctAnswer, 600),
              analysis: kidMathText(parsed.analysis, 1200),
              knowledgePoint: kidMathText(parsed.knowledgePoint, 120),
              confidence: ['high', 'medium', 'low'].includes(parsed.confidence) ? parsed.confidence : 'low',
            },
            model: { provider: selection.provider, model: selection.model },
          });
        },
      }),
    'xiaofeiyu-academy: photo mistake analysis',
  );

  ctx.effect(
    () =>
      ctx.webServer.register({
        kind: 'exact',
        path: ANALYZE_TOC_PATH,
        handler: async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.setHeader('Allow', 'POST');
            res.end();
            return;
          }
          let body;
          try {
            body = await readBody(req);
          } catch (error) {
            sendJson(res, 413, { ok: false, reason: 'too-large', message: error.message });
            return;
          }
          let payload;
          try {
            payload = JSON.parse(body.toString('utf8'));
          } catch {
            sendJson(res, 400, { ok: false, reason: 'bad-request', message: '请求格式不正确。' });
            return;
          }
          const images = Array.isArray(payload.images) ? payload.images.slice(0, MAX_TOC_IMAGES) : [];
          if (!images.length) {
            sendJson(res, 400, { ok: false, reason: 'bad-image', message: '请先选择目录页。' });
            return;
          }
          const prepared = [];
          for (const item of images) {
            const mediaType = typeof item === 'string'
              ? (item.startsWith('data:image/png') ? 'image/png' : item.startsWith('data:image/webp') ? 'image/webp' : 'image/jpeg')
              : item && item.mediaType;
            const source = typeof item === 'string' ? item : item && item.image;
            if (!ALLOWED_IMAGE_TYPES.has(mediaType)) {
              sendJson(res, 400, { ok: false, reason: 'bad-image', message: '目录页需要是 PNG / JPG / WebP 图片。' });
              return;
            }
            const base64 = cleanBase64(source);
            if (!base64) {
              sendJson(res, 400, { ok: false, reason: 'bad-image', message: '目录页图片编码不正确。' });
              return;
            }
            const bytes = Buffer.from(base64, 'base64');
            if (!bytes.length || bytes.length > MAX_BODY_BYTES) {
              sendJson(res, 413, { ok: false, reason: 'too-large', message: '目录页图片太大了。' });
              return;
            }
            prepared.push({ bytes, mediaType });
          }

          const selection = ctx.agentDefaultModel.currentSelection();
          if (!selection || !selection.provider || !selection.model) {
            sendJson(res, 200, { ok: false, reason: 'no-model', message: '当前没有配置可用模型。' });
            return;
          }
          let modelInfo;
          try {
            modelInfo = await ctx.llm.resolveModelInfo(selection.provider, selection.model);
          } catch (error) {
            sendJson(res, 200, {
              ok: false,
              reason: 'model-unavailable',
              message: error instanceof Error ? error.message : '当前模型不可用。',
            });
            return;
          }
          const modalities = Array.isArray(modelInfo?.inputModalities) ? modelInfo.inputModalities : [];
          if (!modalities.includes('image')) {
            sendJson(res, 200, {
              ok: false,
              reason: 'vision-unsupported',
              message: '当前模型不能识别图片，请手动粘贴目录，或切换一个支持图片的模型。',
            });
            return;
          }

          const imageRefs = [];
          try {
            for (let i = 0; i < prepared.length; i += 1) {
              imageRefs.push(await ctx.attachments.saveImage({
                data: prepared[i].bytes,
                mediaType: prepared[i].mediaType,
                name: `textbook-toc-${i + 1}.jpg`,
              }));
            }
          } catch (error) {
            sendJson(res, 200, {
              ok: false,
              reason: 'image-rejected',
              message: error instanceof Error ? error.message : '目录页图片保存失败。',
            });
            return;
          }

          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 90_000);
          let text = '';
          let failure = '';
          try {
            const stream = ctx.llm.stream({
              provider: selection.provider,
              model: selection.model,
              temperature: 0.1,
              system: [
                '你是小肥鱼学习平台的小学教材目录识别助手。',
                '只读目录页，不读正文，不编造；双栏、跨页和扫描版都要尽量还原。',
                '输出必须是严格 JSON，字段名和取值按用户要求。',
              ].join('\n'),
              messages: [
                {
                  role: 'user',
                  content: [
                    { type: 'text', text: tocPrompt() },
                    ...imageRefs.map((attachment) => ({ type: 'image', attachment })),
                  ],
                },
              ],
              signal: controller.signal,
            });
            for await (const chunk of stream) {
              if (chunk && chunk.type === 'text-delta') text += chunk.text;
              if (chunk && chunk.type === 'finish' && chunk.reason && chunk.reason.kind === 'error') {
                failure = chunk.reason.failure?.message || '模型生成失败';
              }
            }
          } catch (error) {
            failure = error instanceof Error ? error.message : String(error);
          } finally {
            clearTimeout(timer);
          }
          if (failure && !text.trim()) {
            sendJson(res, 200, { ok: false, reason: 'analysis-failed', message: failure });
            return;
          }
          const parsed = extractJson(text);
          const units = normalizeTocUnits(parsed && parsed.units);
          if (!parsed || !units.length) {
            sendJson(res, 200, {
              ok: false,
              reason: 'bad-toc',
              message: '小肥鱼没有在这些页里找到清晰目录，可以调整目录页范围再试，或手动粘贴目录。',
            });
            return;
          }
          const subjectAlias = { math: 'math', chinese: 'chinese', english: 'english', 数学: 'math', 语文: 'chinese', 英语: 'english' };
          const grade = Number(parsed.grade);
          sendJson(res, 200, {
            ok: true,
            data: {
              subject: subjectAlias[parsed.subject] || 'unknown',
              grade: Number.isFinite(grade) ? Math.max(1, Math.min(6, Math.round(grade))) : null,
              volume: parsed.volume === 'down' || parsed.volume === '下册' ? 'down' : parsed.volume === 'up' || parsed.volume === '上册' ? 'up' : 'unknown',
              units,
            },
            model: { provider: selection.provider, model: selection.model },
          });
        },
      }),
    'xiaofeiyu-academy: textbook table-of-contents analysis',
  );
}
