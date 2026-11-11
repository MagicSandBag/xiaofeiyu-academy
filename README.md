# 🐟 小肥鱼学习平台

给小学 1–6 年级孩子的 DeepSeek Harness 学习插件：闯关、教材知识点、拍照收错题、变式复习、成长养成和学情报告。

## 安装（推荐）

[**⬇️ 下载最新安装包**](https://github.com/MagicSandBag/xiaofeiyu-academy/releases/latest/download/xiaofeiyu-academy-latest.tgz)

1. 下载上面的 `.tgz` 文件（**不要解压**）。
2. 打开 DeepSeek Harness → 左侧 **插件** → 找到 **安装 bundle / 从本地安装**。
3. 选择这个 `.tgz`，启用 `xiaofeiyu-academy`，刷新页面。

左侧会出现 **小肥鱼学堂**，右下角会出现小肥鱼头像。

如果插件管理器只有输入框，填：

```text
file:C:/Users/你的用户名/Downloads/xiaofeiyu-academy-latest.tgz
```

需要说明书/离线包时，可下载 [完整安装包 ZIP](https://github.com/MagicSandBag/xiaofeiyu-academy/releases/latest/download/xiaofeiyu-academy-installer.zip)。

> 浏览器出于安全限制，不能从一个 GitHub 链接直接往本机 DSH 里装插件，所以至少需要“下载一次 + 在插件页选一次文件”。  
> 想要真正一键安装，需要上架 DSH 插件市场；市场条目可以从 [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) 提交。

## 能做什么

| 功能 | 说明 |
| --- | --- |
| 学习舱 | 今日任务、三科入口、专注计时、知识贝壳、小肥鱼日记 |
| 闯关岛 | 数学/语文/英语/混合，轻松/标准/挑战三档 |
| 教材库 | 内置示例目录；可上传任意版本 PDF，知识点可练、可问 |
| 错题礁 | 自动收错题；拍照或手动录入；知识点关联；变式再练 |
| 变式掌握 | 同题型换数字/问法；连续答对 2 次才收进贝壳罐 |
| 成长湾 | 等级、金币、饱饱度、装扮、成就、知识贝壳 |
| 成绩单 | 7 天/30 天/本学期/自定义，可打印学情报告 |
| 学习档案 | 最多 6 个孩子，进度/错题/贝壳/日记各自独立 |

## 更新

打开 **家长设置 → 关于小肥鱼 → 检查更新**。

- 有新版本会显示版本号、更新内容和下载按钮；
- 下载后在 DSH 插件管理器里覆盖安装；
- 学习数据保存在本机浏览器，覆盖安装不会清空；
- 不会静默自动替换文件。

## 给开发者

- 仓库：<https://github.com/MagicSandBag/xiaofeiyu-academy>
- 最新 Release：<https://github.com/MagicSandBag/xiaofeiyu-academy/releases/latest>
- 更新清单：<https://github.com/MagicSandBag/xiaofeiyu-academy/releases/latest/download/update.json>
- 发版脚本：[`scripts/build-release.ps1`](scripts/build-release.ps1)
- 发布说明：[`docs/更新与发布.md`](docs/更新与发布.md)
- 设计语言：[`设计语言/xiaofeiyu-design-spec.md`](设计语言/xiaofeiyu-design-spec.md)

推送 `v*` tag 会自动触发 GitHub Actions 打包并发 Release。

## 说明

- 学习数据只存本机 `localStorage`，不上云。
- 题目、讲解、PDF 文字层解析在本地完成。
- 拍照识题和扫描版读目录会调用当前 DSH 模型一次；不支持图片或没有额度时，可手动填写/粘贴。
- 内置目录只是示例，不绑定人教版；任何版本 PDF 都可以上传。
- 小肥鱼形象来自 `dsh-pet`，按素材许可仅供非商业使用。
