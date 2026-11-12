window.__ModuleLoader__.load({
  id: 'xiaofeiyu-academy',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const { useState, useEffect, useRef, useMemo, useCallback } = React;

    const NS = 'xiaofeiyu-academy';
    const STORAGE_KEY = 'xiaofeiyu-academy:v1';
    const ART = '/xiaofeiyu-academy/assets/';
    const APP_VERSION = '1.2.5';
    const UPDATE_API = '/xiaofeiyu-academy/update';
    const UPDATE_PAGE = 'https://github.com/MagicSandBag/xiaofeiyu-academy/releases/latest';

    const zh = {
      'app.title': '小肥鱼学习平台',
      'app.subtitle': '海底糖果补习社',
      'app.tagline': '把今天的知识，一口一口吃掉！',
      'launcher.bubble': '学习吗？小肥鱼请客！',
      'launcher.cta': '打开学习舱',
      'sidebar.entry': '小肥鱼学堂',
      'nav.home': '学习舱',
      'nav.practice': '闯关岛',
      'nav.library': '教材库',
      'nav.tutor': '问问鱼',
      'nav.mistakes': '错题礁',
      'nav.growth': '成长湾',
      'nav.report': '成绩单',
      'header.streak': '连续',
      'header.coins': '金币',
      'header.level': '等级',
      'header.settings': '家长设置',
      'header.close': '关闭学习舱',
      'header.exit': '返回对话',
      'common.claim': '领取',
      'common.claimed': '已领取',
      'common.start': '出发',
      'common.next': '下一题',
      'common.back': '返回',
      'common.cancel': '取消',
      'common.save': '保存',
      'common.close': '关闭',
      'common.locked': '还没解锁',
      'common.equip': '穿上',
      'common.unequip': '脱下',
      'common.equipped': '已穿上',
      'common.buy': '兑换',
      'common.owned': '已拥有',
      'common.notEnough': '金币不够',
      'home.morning': '早上好',
      'home.afternoon': '下午好',
      'home.evening': '晚上好',
      'home.hero.kicker': '今日份的海底冒险',
      'home.hero.title': '把不会的，变成会的！',
      'home.hero.subtitle': '小肥鱼已经把题目烤得香香的，选一科开吃吧。',
      'home.hero.cta': '开始今天的闯关',
      'home.hero.side': '小肥鱼今天也想被你夸夸',
      'home.quests': '今日任务',
      'home.quests.sub': '做完可以领金币和小鱼干',
      'home.subjects': '选一片海，开始学习',
      'home.subjects.sub': '每次只要 3 分钟',
      'home.focus': '专注海域',
      'home.focus.sub': '和小肥鱼一起吐泡泡',
      'home.focus.start': '开始专注',
      'home.focus.pause': '暂停一下',
      'home.focus.resume': '继续专注',
      'home.focus.done': '专注完成',
      'home.tip': '今日冷知识',
      'home.fish': '小肥鱼的饱饱度',
      'home.fish.feed': '去喂一口',
      'home.fish.hungry': '肚子咕噜咕噜叫了',
      'home.fish.full': '肚皮圆滚滚，学习更有劲！',
      'home.recent': '最近错题',
      'home.recent.empty': '错题礁还是空的，太厉害啦！',
      'practice.title': '闯关岛',
      'practice.subtitle': '每一关都很短，答完就能拿星星。',
      'practice.choose': '选一科',
      'practice.difficulty': '选难度',
      'practice.easy': '轻松',
      'practice.easy.sub': '4 题 · 慢慢来',
      'practice.normal': '标准',
      'practice.normal.sub': '5 题 · 刚刚好',
      'practice.hard': '挑战',
      'practice.hard.sub': '7 题 · 大魔王',
      'practice.start': '开始闯关',
      'practice.mixed': '混合',
      'practice.mixed.name': '混合闯关',
      'practice.mixed.desc': '三科随机，看看哪科最拿手',
      'practice.questions': '题',
      'practice.progress': '第 {n} 题',
      'practice.correct': '答对啦！',
      'practice.wrong': '差一点点！',
      'practice.explanation': '小肥鱼讲解',
      'practice.hint': '小提示',
      'practice.combo': '连击',
      'practice.result.title': '闯关完成！',
      'practice.result.sub': '小肥鱼把星星都给你装进罐子里啦。',
      'practice.result.again': '再来一关',
      'practice.result.review': '去错题礁看看',
      'practice.result.home': '回学习舱',
      'practice.result.accuracy': '正确率',
      'practice.result.xp': '经验',
      'practice.result.coins': '金币',
      'tutor.title': '问问小肥鱼',
      'tutor.subtitle': '算数、讲知识点、出题，都可以。',
      'tutor.placeholder': '比如：3/4 + 1/4 等于多少？',
      'tutor.send': '发送',
      'tutor.thinking': '小肥鱼正在吐泡泡思考…',
      'tutor.chip1': '给我出一道题',
      'tutor.chip2': '讲讲分数',
      'tutor.chip3': '怎么背单词',
      'tutor.chip4': '我有点不想学',
      'tutor.copy': '复制问题，去问 DeepSeek 老师',
      'mistakes.title': '错题礁',
      'mistakes.subtitle': '错题不是敌人，是藏在海底的宝藏。',
      'mistakes.empty': '错题礁空空的，去闯关岛捡几道题吧！',
      'mistakes.understood': '我懂了，收进贝壳里',
      'mistakes.your': '你的答案',
      'mistakes.right': '正确答案',
      'mistakes.all': '全部',
      'mistakes.count': '道待复习',
      'growth.title': '成长湾',
      'growth.subtitle': '学习攒下的每一分，都会变成小肥鱼的力气。',
      'growth.level': '等级',
      'growth.xp': '经验值',
      'growth.hunger': '饱饱度',
      'growth.food': '小卖部',
      'growth.food.sub': '用金币换零食，喂饱小肥鱼',
      'growth.outfit': '换装间',
      'growth.outfit.sub': '解锁后点一下就能穿',
      'growth.achievements': '成就贝壳',
      'growth.achievements.sub': '每一枚都是你努力过的证据',
      'growth.feed': '喂它',
      'growth.equip': '穿上',
      'growth.lockedLevel': '等级 {n} 解锁',
      'report.title': '成绩单',
      'report.subtitle': '不是比较，是看见自己一点点变厉害。',
      'report.total': '累计答题',
      'report.accuracy': '总正确率',
      'report.days': '学习天数',
      'report.focus': '专注分钟',
      'report.week': '最近 7 天',
      'report.week.sub': '柱子越高，今天越努力',
      'report.subject': '学科雷达',
      'report.strong': '最拿手',
      'report.weak': '最想补',
      'report.comment': '小肥鱼评语',
      'report.tips': '下周的小建议',
      'report.noData': '还没有数据，先去闯一关吧',
      'settings.title': '家长设置',
      'settings.name': '孩子的昵称',
      'settings.grade': '当前年级',
      'settings.sound': '答题音效',
      'settings.reset': '重置全部学习进度',
      'settings.resetConfirm': '真的重置？再点一次',
      'settings.about': '关于小肥鱼',
      'settings.update': '版本更新',
      'settings.currentVersion': '当前版本',
      'settings.checkUpdate': '检查更新',
      'settings.checking': '正在检查…',
      'settings.upToDate': '已经是最新版本',
      'settings.updateAvailable': '发现新版本',
      'settings.updateNotes': '更新内容',
      'settings.downloadUpdate': '下载新版本',
      'settings.updateHint': '下载后在 DSH 插件管理器里覆盖安装；学习数据会保留。',
      'settings.updateFailed': '暂时检查不到更新，稍后再试。',
      'settings.aboutText': '小肥鱼学习平台 1.2.5 · 本地保存进度 · 默认不联网；拍照/读目录需主动点击，调用当前模型一次。',
      'settings.credit': '形象来自本机 dsh-pet 的小肥鱼 IP，仅供个人学习使用。',
      'toast.saved': '设置保存啦',
      'toast.reset': '学习进度已重置',
      'toast.claimed': '奖励到手！',
      'toast.fed': '小肥鱼吃得肚皮圆圆',
      'toast.bought': '兑换成功，去换装间穿上吧',
      'toast.equipped': '换装完成！',
      'toast.levelup': '升级啦！小肥鱼长胖了一点点',
      'toast.focusDone': '专注完成，奖励已入账',
      'toast.copied': '已复制，去对话框粘贴给 DeepSeek 老师吧',
      'toast.notEnough': '金币不够，先去闯关赚一点',
      'toast.hungry': '小肥鱼已经吃得饱饱的啦',
      'toast.wrongAdded': '这道题已经住进错题礁',
      'subject.math': '数学',
      'subject.chinese': '语文',
      'subject.english': '英语',
      'subject.math.tag': '数字海里冲浪',
      'subject.chinese.tag': '汉字贝壳寻宝',
      'subject.english.tag': '单词珊瑚礁',
      'grade.1': '一年级',
      'grade.2': '二年级',
      'grade.3': '三年级',
      'grade.4': '四年级',
      'grade.5': '五年级',
      'grade.6': '六年级',
      'library.title': '教材库',
      'library.subtitle': '把教材装进学习舱。',
      'library.current': '当前教材',
      'library.builtin': '示例目录',
      'library.uploaded': '我上传的教材',
      'library.upload': '上传 PDF 教材',
      'library.uploadHint': '支持人教版、苏教版、北师大版等任何版本；只解析目录，PDF 原文件不上传、不写入浏览器存储。',
      'library.units': '单元',
      'library.points': '知识点',
      'library.use': '设为当前教材',
      'library.inUse': '正在使用',
      'library.practice': '练这个知识点',
      'library.ask': '问小肥鱼',
      'library.linked': '关联错题',
      'library.parsing': '正在拆这本书的目录…',
      'library.parseFail': '没有提取到清晰目录，可能是扫描版 PDF。可以让小肥鱼读目录页，或粘贴目录文本。',
      'library.scanned': '这份 PDF 像是扫描版，目录暂时读不出来。',
      'library.import': '确认导入教材',
      'library.importTitle': '把教材放上书架',
      'library.file': '文件',
      'library.sourceNote': '目录来自 PDF 文本层或你粘贴的内容；支持任何版本教材，可随时重新上传校准。',
      'library.pasteToc': '粘贴目录文本（每行一个单元/课）',
      'library.parsePaste': '重新解析目录',
      'library.aiToc': '让小肥鱼读目录',
      'library.aiTocBusy': '小肥鱼正在读目录页…',
      'library.aiTocNote': '扫描版、双栏或复杂目录可以试；会调用当前模型一次，最多 6 页。',
      'library.tocPages': '目录页范围',
      'library.aiTocFail': '没读到清晰目录，调整页数再试，或手动粘贴。',
      'library.saveEmpty': '只保存教材档案',
      'library.saveEmptyHint': '暂时没有目录也可以先保存书名，之后重新上传补齐。',
      'library.noOutline': '还没有目录。先上传 PDF，或使用内置参考目录。',
      'library.official': '示例目录',
      'library.shelf': '我的教材架',
      'library.useBook': '使用这本',
      'library.shelfNote': '上传过的教材都会留在这里；同一学科/年级/册次可以随时切换版本。',

      'library.prep': '校本预备',
      'library.preview': '目录预览',
      'library.saveOk': '教材已关联',
      'library.volume.up': '上册',
      'library.volume.down': '下册',
      'library.term': '册次',
      'library.pointFallback': '这个知识点还没有单独的讲解，先记住单元重点，再做一道变式。',
      'capture.title': '拍照收录错题',
      'capture.subtitle': '试卷、作业都可以。小肥鱼会先识题，你再核对。',
      'capture.pick': '拍照 / 选择图片',
      'capture.retake': '换一张',
      'capture.analyze': '让小肥鱼识题',
      'capture.analyzing': '小肥鱼正在看题…',
      'capture.visionNote': '识题会调用当前模型一次；如果模型不支持图片，就手动填写。',
      'capture.visionUnsupported': '当前模型不能识别图片，请手动填写题目。',
      'capture.manual': '手动填写',
      'capture.question': '题目内容',
      'capture.studentAnswer': '孩子写的答案',
      'capture.correctAnswer': '正确答案',
      'capture.analysis': '错因与讲解',
      'capture.knowledgePoint': '对应知识点',
      'capture.save': '存进错题礁',
      'capture.required': '至少填写题目和正确答案。',
      'capture.saved': '这张试卷已经收进错题礁',
      'capture.autoFilled': '识题完成，请核对一下再保存。',
      'capture.lowConfidence': '小肥鱼有点不确定，请重点核对题目和答案。',
      'capture.reference': '参考图',
      'capture.err': '识题没有成功，可以手动填写。',
      'capture.noVision': '图片识别不可用',
      'variant.title': '变式再练',
      'variant.subtitle': '数字或问法换一下，确认真的会了。',
      'variant.original': '原题',
      'variant.round': '第 {n} 次变式',
      'variant.correct': '答对啦，掌握进度 +1',
      'variant.wrong': '这次还差一点，掌握进度回到 0。',
      'variant.next': '再来一道变式',
      'variant.mastered': '掌握啦！错题变成知识贝壳',
      'variant.masteredNote': '连续答对 2 次，小肥鱼把这道题收进贝壳罐。',
      'variant.close': '先收起来',
      'variant.progress': '掌握进度',
      'variant.answer': '看讲解',
      'variant.note': '错题不是删掉就会了，换个数再答对才算数。',
      'report.generate': '生成学情报告',
      'report.range': '统计范围',
      'report.week': '最近 7 天',
      'report.month': '最近 30 天',
      'report.term': '本学期',
      'report.custom': '自定义',
      'report.start': '开始日期',
      'report.end': '结束日期',
      'report.min7': '至少选择 7 天，才能看出一点趋势。',
      'report.generated': '报告生成好啦',
      'report.generatedSub': '这是给家长看的版本，也可以打印或复制。',
      'report.print': '打印 / 存 PDF',
      'report.copy': '复制报告文本',
      'report.copied': '报告已复制',
      'report.noData': '这个范围还没有学习记录，先去闯一关吧。',
      'report.mastered': '掌握错题',
      'report.activeDays': '有效学习天',
      'report.bestDay': '最努力的一天',
      'report.pending': '待复习',
      'report.weakPoints': '重点知识点',
      'report.strength': '最稳的一科',
      'report.growth': '小肥鱼看到了',
      'report.reportTitle': '小肥鱼学情报告',
      'report.rangeSummary': '{start} 至 {end} · {days} 天',
      'report.printBlocked': '浏览器拦截了新窗口，请允许弹窗后再试。',
      'pet.shells': '知识贝壳',
      'pet.diary': '小肥鱼日记',
      'pet.diaryEmpty': '今天还没有日记，去学一点点吧。',
      'pet.mastery': '掌握',
      'pet.knowledgeFeed': '每掌握一道错题，就会多一枚知识贝壳。',
      'mistakes.variant': '变式再练',
      'mistakes.mastery': '掌握进度',
      'mistakes.photo': '拍照收录',
      'mistakes.photoTag': '拍照收录',
      'mistakes.analysis': '错因分析',
      'mistakes.knowledge': '知识点',
      'mistakes.noOptions': '这道题来自拍照/手动录入，没有选项。',
      'mistakes.understoodShort': '直接掌握',
    };

    const en = {
      'app.title': 'Xiaofeiyu Academy',
      'app.subtitle': 'Undersea Candy School',
      'app.tagline': 'Take a bite out of today’s knowledge!',
      'launcher.bubble': 'Study with me?',
      'launcher.cta': 'Open the learning cabin',
      'sidebar.entry': 'Fishy Academy',
      'nav.home': 'Cabin',
      'nav.practice': 'Quest Island',
      'nav.library': 'Library',
      'nav.tutor': 'Ask Fishy',
      'nav.mistakes': 'Mistake Reef',
      'nav.growth': 'Growth Bay',
      'nav.report': 'Report',
      'header.streak': 'Streak',
      'header.coins': 'Coins',
      'header.level': 'Level',
      'header.settings': 'Parent settings',
      'header.close': 'Close academy',
      'header.exit': 'Back to chat',
      'common.claim': 'Claim',
      'common.claimed': 'Claimed',
      'common.start': 'Go',
      'common.next': 'Next',
      'common.back': 'Back',
      'common.cancel': 'Cancel',
      'common.save': 'Save',
      'common.close': 'Close',
      'common.locked': 'Locked',
      'common.equip': 'Wear',
      'common.unequip': 'Take off',
      'common.equipped': 'Wearing',
      'common.buy': 'Get',
      'common.owned': 'Owned',
      'common.notEnough': 'Not enough coins',
      'home.morning': 'Good morning',
      'home.afternoon': 'Good afternoon',
      'home.evening': 'Good evening',
      'home.hero.kicker': 'Today’s undersea adventure',
      'home.hero.title': 'Turn “I can’t” into “I can!”',
      'home.hero.subtitle': 'Fishy has warmed up a few questions. Pick a subject and dig in.',
      'home.hero.cta': 'Start today’s quest',
      'home.hero.side': 'Fishy would love a little praise today',
      'home.quests': 'Daily quests',
      'home.quests.sub': 'Finish them for coins and snacks',
      'home.subjects': 'Pick a sea and start learning',
      'home.subjects.sub': 'Three minutes is enough',
      'home.focus': 'Focus Reef',
      'home.focus.sub': 'Blow bubbles with Fishy',
      'home.focus.start': 'Start focusing',
      'home.focus.pause': 'Pause',
      'home.focus.resume': 'Resume',
      'home.focus.done': 'Focus complete',
      'home.tip': 'Today’s tiny fact',
      'home.fish': 'Fishy’s fullness',
      'home.fish.feed': 'Feed a snack',
      'home.fish.hungry': 'Fishy’s tummy is rumbling',
      'home.fish.full': 'Round tummy, strong brain!',
      'home.recent': 'Recent mistakes',
      'home.recent.empty': 'The mistake reef is empty. Amazing!',
      'practice.title': 'Quest Island',
      'practice.subtitle': 'Every quest is short. Finish it and collect stars.',
      'practice.choose': 'Choose a subject',
      'practice.difficulty': 'Choose a level',
      'practice.easy': 'Easy',
      'practice.easy.sub': '4 questions · no rush',
      'practice.normal': 'Normal',
      'practice.normal.sub': '5 questions · just right',
      'practice.hard': 'Challenge',
      'practice.hard.sub': '7 questions · boss level',
      'practice.start': 'Start quest',
      'practice.mixed': 'Mixed',
      'practice.mixed.name': 'Mixed quest',
      'practice.mixed.desc': 'All three subjects, random order',
      'practice.questions': 'questions',
      'practice.progress': 'Question {n}',
      'practice.correct': 'Correct!',
      'practice.wrong': 'Almost there!',
      'practice.explanation': 'Fishy explains',
      'practice.hint': 'Hint',
      'practice.combo': 'Combo',
      'practice.result.title': 'Quest complete!',
      'practice.result.sub': 'Fishy packed all your stars into a jar.',
      'practice.result.again': 'Another quest',
      'practice.result.review': 'Visit mistake reef',
      'practice.result.home': 'Back to cabin',
      'practice.result.accuracy': 'Accuracy',
      'practice.result.xp': 'XP',
      'practice.result.coins': 'Coins',
      'tutor.title': 'Ask Fishy',
      'tutor.subtitle': 'Math, concepts, or a fresh question — just ask.',
      'tutor.placeholder': 'Try: 3/4 + 1/4 = ?',
      'tutor.send': 'Send',
      'tutor.thinking': 'Fishy is blowing thinking bubbles…',
      'tutor.chip1': 'Give me a question',
      'tutor.chip2': 'Explain fractions',
      'tutor.chip3': 'How to memorize words',
      'tutor.chip4': 'I don’t feel like studying',
      'tutor.copy': 'Copy to ask DeepSeek',
      'mistakes.title': 'Mistake Reef',
      'mistakes.subtitle': 'Mistakes are not enemies. They are treasure.',
      'mistakes.empty': 'The reef is empty. Go collect some questions!',
      'mistakes.understood': 'Got it — tuck it away',
      'mistakes.your': 'Your answer',
      'mistakes.right': 'Correct answer',
      'mistakes.all': 'All',
      'mistakes.count': 'to review',
      'growth.title': 'Growth Bay',
      'growth.subtitle': 'Every bit of studying becomes Fishy’s strength.',
      'growth.level': 'Level',
      'growth.xp': 'XP',
      'growth.hunger': 'Fullness',
      'growth.food': 'Snack shop',
      'growth.food.sub': 'Trade coins for snacks',
      'growth.outfit': 'Dress-up',
      'growth.outfit.sub': 'Unlock it, then tap to wear',
      'growth.achievements': 'Achievement shells',
      'growth.achievements.sub': 'Proof of every effort',
      'growth.feed': 'Feed',
      'growth.equip': 'Wear',
      'growth.lockedLevel': 'Unlocks at level {n}',
      'report.title': 'Report',
      'report.subtitle': 'Not comparison — just watching yourself grow.',
      'report.total': 'Questions',
      'report.accuracy': 'Accuracy',
      'report.days': 'Study days',
      'report.focus': 'Focus minutes',
      'report.week': 'Last 7 days',
      'report.week.sub': 'Higher bars mean more effort',
      'report.subject': 'Subject radar',
      'report.strong': 'Strongest',
      'report.weak': 'Needs love',
      'report.comment': 'Fishy’s note',
      'report.tips': 'Next-week tips',
      'report.noData': 'No data yet. Try a quest first!',
      'settings.title': 'Parent settings',
      'settings.name': 'Child nickname',
      'settings.grade': 'Grade',
      'settings.sound': 'Answer sounds',
      'settings.reset': 'Reset all progress',
      'settings.resetConfirm': 'Really reset? Tap again',
      'settings.about': 'About Fishy',
      'settings.update': 'Updates',
      'settings.currentVersion': 'Current version',
      'settings.checkUpdate': 'Check for updates',
      'settings.checking': 'Checking…',
      'settings.upToDate': 'You are up to date',
      'settings.updateAvailable': 'New version available',
      'settings.updateNotes': 'What’s new',
      'settings.downloadUpdate': 'Download update',
      'settings.updateHint': 'Install it over the old bundle in DSH; learning data is kept.',
      'settings.updateFailed': 'Could not check for updates. Try again later.',
      'settings.aboutText': 'Xiaofeiyu Academy 1.2.5 · progress stays local · no network by default; photo/TOC reading calls the current model only when you tap it.',
      'settings.credit': 'Mascot art comes from the local dsh-pet Xiaofeiyu IP, for personal study use.',
      'toast.saved': 'Settings saved',
      'toast.reset': 'Progress reset',
      'toast.claimed': 'Reward collected!',
      'toast.fed': 'Fishy is happily full',
      'toast.bought': 'Unlocked! Put it on in the dress-up room',
      'toast.equipped': 'New look!',
      'toast.levelup': 'Level up! Fishy grew a little',
      'toast.focusDone': 'Focus complete — reward added',
      'toast.copied': 'Copied. Paste it to DeepSeek in the chat.',
      'toast.notEnough': 'Not enough coins. Earn more in a quest.',
      'toast.hungry': 'Fishy is already full',
      'toast.wrongAdded': 'This one moved into the mistake reef',
      'subject.math': 'Math',
      'subject.chinese': 'Chinese',
      'subject.english': 'English',
      'subject.math.tag': 'Surf the number sea',
      'subject.chinese.tag': 'Hunt character shells',
      'subject.english.tag': 'Word coral reef',
      'grade.1': 'Grade 1',
      'grade.2': 'Grade 2',
      'grade.3': 'Grade 3',
      'grade.4': 'Grade 4',
      'grade.5': 'Grade 5',
      'grade.6': 'Grade 6',
      'library.title': 'Textbook Library',
      'library.subtitle': 'Put a textbook into the cabin.',
      'library.current': 'Current textbook',
      'library.builtin': 'Sample outline',
      'library.uploaded': 'Uploaded textbook',
      'library.upload': 'Upload a PDF textbook',
      'library.uploadHint': 'Any edition works (PEP, Sujiao, Beijing Normal, etc.). Only the outline is parsed; the PDF itself is never uploaded or stored.',
      'library.units': 'units',
      'library.points': 'knowledge points',
      'library.use': 'Use this textbook',
      'library.inUse': 'In use',
      'library.practice': 'Practice this point',
      'library.ask': 'Ask Fishy',
      'library.linked': 'linked mistakes',
      'library.parsing': 'Fishy is reading the table of contents…',
      'library.parseFail': 'No clear outline found; this may be a scanned PDF. Let Fishy read the TOC pages, or paste the outline.',
      'library.scanned': 'This PDF looks scanned, so its outline cannot be read yet.',
      'library.import': 'Import textbook',
      'library.importTitle': 'Put it on the shelf',
      'library.file': 'File',
      'library.sourceNote': 'The outline comes from the PDF text layer or your pasted content. Any edition is supported and can be recalibrated anytime.',
      'library.pasteToc': 'Paste a table of contents (one unit/lesson per line)',
      'library.parsePaste': 'Parse pasted outline',
      'library.aiToc': 'Let Fishy read the TOC',
      'library.aiTocBusy': 'Fishy is reading the TOC pages…',
      'library.aiTocNote': 'Good for scans, two-column or messy TOCs. Calls the current model once, up to 6 pages.',
      'library.tocPages': 'TOC pages',
      'library.aiTocFail': 'No clear TOC found. Adjust the pages or paste the outline manually.',
      'library.saveEmpty': 'Save book only',
      'library.saveEmptyHint': 'You can save the book without an outline and upload it again later.',
      'library.noOutline': 'No outline yet. Upload a PDF or use the built-in reference.',
      'library.official': 'Sample outline',
      'library.shelf': 'My textbooks',
      'library.useBook': 'Use this book',
      'library.shelfNote': 'Uploaded books stay here. Switch editions for the same subject/grade/volume anytime.',

      'library.prep': 'School prep',
      'library.preview': 'Outline preview',
      'library.saveOk': 'Textbook linked',
      'library.volume.up': 'Volume 1',
      'library.volume.down': 'Volume 2',
      'library.term': 'Volume',
      'library.pointFallback': 'This point has no separate note yet. Learn the unit focus, then try a variant.',
      'capture.title': 'Capture a mistake',
      'capture.subtitle': 'Tests and homework both work. Fishy reads first; you check before saving.',
      'capture.pick': 'Take / choose a photo',
      'capture.retake': 'Change photo',
      'capture.analyze': 'Let Fishy read it',
      'capture.analyzing': 'Fishy is reading the question…',
      'capture.visionNote': 'Reading the photo calls the current model once. If it cannot read images, fill the form manually.',
      'capture.visionUnsupported': 'The current model cannot read images. Please fill the question manually.',
      'capture.manual': 'Fill manually',
      'capture.question': 'Question',
      'capture.studentAnswer': 'Child’s answer',
      'capture.correctAnswer': 'Correct answer',
      'capture.analysis': 'What went wrong',
      'capture.knowledgePoint': 'Knowledge point',
      'capture.save': 'Save to mistake reef',
      'capture.required': 'Please fill at least the question and the correct answer.',
      'capture.saved': 'This test moved into the mistake reef',
      'capture.autoFilled': 'Read complete. Please check before saving.',
      'capture.lowConfidence': 'Fishy is not fully sure; check the question and answer carefully.',
      'capture.reference': 'Reference photo',
      'capture.err': 'Reading failed. You can fill it manually.',
      'capture.noVision': 'Image reading unavailable',
      'variant.title': 'Variant practice',
      'variant.subtitle': 'Change the numbers or wording to prove you really know it.',
      'variant.original': 'Original',
      'variant.round': 'Variant {n}',
      'variant.correct': 'Correct — mastery +1',
      'variant.wrong': 'Almost; mastery goes back to 0.',
      'variant.next': 'Another variant',
      'variant.mastered': 'Mastered! The mistake became a knowledge shell',
      'variant.masteredNote': 'Two correct variants in a row, and Fishy tucks it into the shell jar.',
      'variant.close': 'Put it away',
      'variant.progress': 'Mastery',
      'variant.answer': 'See explanation',
      'variant.note': 'Deleting a mistake is not mastery; changing the numbers and answering correctly is.',
      'report.generate': 'Generate learning report',
      'report.range': 'Range',
      'report.week': 'Last 7 days',
      'report.month': 'Last 30 days',
      'report.term': 'This term',
      'report.custom': 'Custom',
      'report.start': 'Start',
      'report.end': 'End',
      'report.min7': 'Choose at least 7 days to see a trend.',
      'report.generated': 'Report ready',
      'report.generatedSub': 'A parent-friendly version you can print or copy.',
      'report.print': 'Print / save PDF',
      'report.copy': 'Copy report text',
      'report.copied': 'Report copied',
      'report.noData': 'No learning records in this range yet.',
      'report.mastered': 'Mistakes mastered',
      'report.activeDays': 'Active days',
      'report.bestDay': 'Best day',
      'report.pending': 'To review',
      'report.weakPoints': 'Focus points',
      'report.strength': 'Steadiest subject',
      'report.growth': 'Fishy noticed',
      'report.reportTitle': 'Fishy Learning Report',
      'report.rangeSummary': '{start} to {end} · {days} days',
      'report.printBlocked': 'The browser blocked the new window. Allow pop-ups and try again.',
      'pet.shells': 'Knowledge shells',
      'pet.diary': 'Fishy’s diary',
      'pet.diaryEmpty': 'No diary yet today. Learn a little first.',
      'pet.mastery': 'Mastery',
      'pet.knowledgeFeed': 'Every mastered mistake adds a knowledge shell.',
      'mistakes.variant': 'Variant practice',
      'mistakes.mastery': 'Mastery',
      'mistakes.photo': 'Capture mistake',
      'mistakes.photoTag': 'Photo',
      'mistakes.analysis': 'Error analysis',
      'mistakes.knowledge': 'Knowledge point',
      'mistakes.noOptions': 'This came from a photo or manual entry and has no options.',
      'mistakes.understoodShort': 'Mastered',
    };

    const SUBJECTS = [
      { id: 'math', icon: '🧮', color: '#ff7a59', soft: '#ffe1d8', ring: '#ffb39e' },
      { id: 'chinese', icon: '📖', color: '#0aafa0', soft: '#d3f7f1', ring: '#8ee2d8' },
      { id: 'english', icon: '🔤', color: '#6e7bff', soft: '#e4e6ff', ring: '#b8beff' },
    ];
    const GRADE_IDS = [1, 2, 3, 4, 5, 6];
    const DIFFICULTIES = [
      { id: 'easy', n: 4 },
      { id: 'normal', n: 5 },
      { id: 'hard', n: 7 },
    ];

    const OUTFITS = [
      { id: 'bow', name: '珊瑚蝴蝶结', en: 'Coral bow', emoji: '🎀', cost: 80, level: 1, x: '18%', y: '9%' },
      { id: 'scholar', name: '学士帽', en: 'Scholar cap', emoji: '🎓', cost: 0, level: 2, x: '55%', y: '2%' },
      { id: 'duck', name: '小黄鸭泳圈', en: 'Duck float', emoji: '🛟', cost: 180, level: 2, x: '4%', y: '48%' },
      { id: 'glasses', name: '星星墨镜', en: 'Star shades', emoji: '🕶️', cost: 260, level: 3, x: '47%', y: '28%' },
      { id: 'chef', name: '海藻厨师帽', en: 'Seaweed chef hat', emoji: '👨‍🍳', cost: 320, level: 4, x: '50%', y: '-2%' },
      { id: 'crown', name: '贝壳小皇冠', en: 'Shell crown', emoji: '👑', cost: 420, level: 5, x: '48%', y: '0%' },
    ];

    const FOODS = [
      { id: 'fish', name: '小鱼干', en: 'Dried fish', emoji: '🐟', cost: 15, hunger: 18, xp: 5 },
      { id: 'pudding', name: '海藻布丁', en: 'Seaweed pudding', emoji: '🍮', cost: 30, hunger: 32, xp: 10 },
      { id: 'boba', name: '珍珠奶茶', en: 'Bubble tea', emoji: '🧋', cost: 50, hunger: 48, xp: 18 },
      { id: 'cake', name: '贝壳蛋糕', en: 'Shell cake', emoji: '🍰', cost: 70, hunger: 62, xp: 24 },
      { id: 'sushi', name: '小鱼寿司', en: 'Fish sushi', emoji: '🍣', cost: 95, hunger: 78, xp: 32 },
      { id: 'feast', name: '海底大餐', en: 'Undersea feast', emoji: '🍱', cost: 140, hunger: 100, xp: 50 },
    ];

    const ACHIEVEMENTS = [
      { id: 'first', icon: '🐣', name: '初次下海', en: 'First dive', desc: '完成第 1 道题', test: (d) => d.stats.totalQuestions >= 1 },
      { id: 'combo10', icon: '🔥', name: '十连击', en: '10 combo', desc: '一关内连续答对 10 题', test: (d) => d.stats.bestCombo >= 10 },
      { id: 'fifty', icon: '🌟', name: '小小学霸', en: 'Little scholar', desc: '累计答对 50 题', test: (d) => d.stats.totalCorrect >= 50 },
      { id: 'perfect', icon: '💯', name: '满分泡泡', en: 'Perfect bubble', desc: '拿到一次满分闯关', test: (d) => d.stats.perfectQuizzes >= 1 },
      { id: 'streak7', icon: '🪸', name: '七日鱼鳍', en: 'Seven-day fin', desc: '连续学习 7 天', test: (d) => d.stats.bestStreak >= 7 },
      { id: 'review20', icon: '🧹', name: '错题清道夫', en: 'Reef cleaner', desc: '复习掌握 20 道错题', test: (d) => d.stats.reviewed >= 20 },
      { id: 'focus60', icon: '🫧', name: '专注泡泡王', en: 'Bubble focus king', desc: '累计专注 60 分钟', test: (d) => d.stats.focusMinutes >= 60 },
      { id: 'feed10', icon: '🍙', name: '喂鱼大师', en: 'Snack master', desc: '投喂小肥鱼 10 次', test: (d) => d.stats.feedCount >= 10 },
      { id: 'library', icon: '📚', name: '教材上架', en: 'Shelf builder', desc: '关联一本教材', test: (d) => (d.textbooks || []).length >= 1 },
      { id: 'photo', icon: '📷', name: '拍照侦探', en: 'Photo detective', desc: '拍照收录 1 道错题', test: (d) => (d.mistakes || []).some((m) => m.source === 'photo') },
      { id: 'shell10', icon: '🐚', name: '贝壳收藏家', en: 'Shell collector', desc: '收集 10 枚知识贝壳', test: (d) => (d.stats.shells || 0) >= 10 },
      { id: 'master10', icon: '🧠', name: '错题猎人', en: 'Mistake hunter', desc: '掌握 10 道错题', test: (d) => (d.stats.masteredMistakes || 0) >= 10 },
    ];

    const TIPS = [
      '章鱼有三颗心脏，游泳的时候会累得心跳加快，所以它们更喜欢爬行。',
      '蜜蜂跳舞是在给同伴“报路”：转圈的方向和摆动的次数都有意思。',
      '把难记的单词编成一个夸张的小故事，比反复抄写更容易记住。',
      '学完一节内容，合上书用 30 秒复述一遍，记忆会牢很多。',
      '水母没有大脑，却能靠一张神经网感知光线和猎物。',
      '错题不可怕，间隔一天再做一次，比当场做三遍更有效。',
      '鲸鱼睡觉时只让一半大脑休息，另一半负责浮上水面呼吸。',
    ];

    const SPEECH_CORRECT = ['哇！这题被你一口吞掉啦！', '咕噜咕噜～答案正确！', '小肥鱼给你放一朵海底烟花！', '漂亮！你的鱼鳍越来越稳了。', '这波操作，连海星都鼓掌了。'];
    const SPEECH_WRONG = ['差一点点！小肥鱼陪你再看一遍。', '咕噜～错题也是宝藏，先收进错题礁。', '没关系，聪明的鱼也会撞珊瑚。', '再想一步就够到答案啦。'];

    const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
    const ri = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const shuffle = (arr) => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    const fmt = (n) => {
      const v = Math.round(Number(n) * 1000) / 1000;
      return String(v);
    };
    const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
    const pad = (n) => String(n).padStart(2, '0');
    const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    const addDays = (d, n) => {
      const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      x.setDate(x.getDate() + n);
      return x;
    };
    const weekday = (d) => ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    const gradeText = (t, g) => t(`grade.${clamp(Number(g) || 1, 1, 6)}`);
    const subjectText = (t, s) => t(`subject.${s}`);
    const levelOf = (xp) => Math.floor(Math.max(0, xp) / 120) + 1;
    const levelFloor = (xp) => (levelOf(xp) - 1) * 120;
    const pct = (a, b) => (b > 0 ? Math.round((a / b) * 100) : 0);
    const uid = (prefix = 'id') => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

    function emptyDay() {
      return {
        questions: 0,
        correct: 0,
        minutes: 0,
        reviewed: 0,
        quizzes: 0,
        mastered: 0,
        subjects: {
          math: { q: 0, c: 0 },
          chinese: { q: 0, c: 0 },
          english: { q: 0, c: 0 },
        },
      };
    }

    const CHILD_AVATARS = ['🐳', '🐣', '🦊', '🐼', '🐸', '🐰', '🦄', '🐙'];
    const HUNGER_DECAY_MINUTES_PER_POINT = 16;
    const LEARNING_KEYS = [
      'name', 'grade', 'xp', 'coins', 'hunger', 'hungerAt', 'lastFed',
      'streak', 'bestStreak', 'lastStudyDate', 'lastSubject',
      'daily', 'claimed', 'stats', 'bySubject', 'mistakes', 'diary',
      'owned', 'outfit',
    ];

    function cloneValue(value) {
      try {
        return JSON.parse(JSON.stringify(value));
      } catch {
        return value;
      }
    }

    function extractLearning(state) {
      const snapshot = {};
      LEARNING_KEYS.forEach((key) => {
        if (state && state[key] !== undefined) snapshot[key] = cloneValue(state[key]);
      });
      return snapshot;
    }

    function applyLearning(state, snapshot) {
      const fallback = extractLearning(defaultState());
      const source = { ...fallback, ...(snapshot && typeof snapshot === 'object' ? snapshot : {}) };
      LEARNING_KEYS.forEach((key) => {
        state[key] = cloneValue(source[key]);
      });
      state.name = typeof state.name === 'string' && state.name.trim() ? state.name.trim().slice(0, 12) : '小海星';
      state.grade = clamp(Number(state.grade) || 3, 1, 6);
    }

    function blankLearning(name, grade) {
      const snapshot = extractLearning(defaultState());
      snapshot.name = String(name || '小海星').trim().slice(0, 12) || '小海星';
      snapshot.grade = clamp(Number(grade) || 3, 1, 6);
      return snapshot;
    }

    function findActiveChild(data) {
      const children = Array.isArray(data && data.children) ? data.children : [];
      return children.find((child) => child.id === data.activeChildId) || children[0] || null;
    }

    function defaultState() {
      return {
        version: 2,
        name: '小海星',
        grade: 3,
        xp: 0,
        coins: 60,
        hunger: 70,
        hungerAt: Date.now(),
        lastFed: '',
        streak: 0,
        bestStreak: 0,
        lastStudyDate: '',
        lastSubject: 'math',
        daily: {},
        claimed: {},
        stats: {
          totalQuestions: 0,
          totalCorrect: 0,
          bestCombo: 0,
          perfectQuizzes: 0,
          focusMinutes: 0,
          reviewed: 0,
          feedCount: 0,
          studyDays: 0,
          masteredMistakes: 0,
          shells: 0,
        },
        bySubject: {
          math: { q: 0, c: 0 },
          chinese: { q: 0, c: 0 },
          english: { q: 0, c: 0 },
        },
        mistakes: [],
        textbooks: [],
        activeTextbooks: {},
        diary: [],
        owned: [],
        outfit: '',
        settings: { sound: true },
        children: [{ id: 'child-main', name: '小海星', grade: 3, avatar: '🐳', createdAt: 0 }],
        activeChildId: 'child-main',
        childSnapshots: {},
      };
    }

    function normalizeState(raw) {
      const base = defaultState();
      if (!raw || typeof raw !== 'object') return base;
      const s = { ...base, ...raw };
      s.grade = clamp(Number(s.grade) || 3, 1, 6);
      s.name = typeof s.name === 'string' && s.name.trim() ? s.name.trim().slice(0, 12) : base.name;
      s.xp = Math.max(0, Number(s.xp) || 0);
      s.coins = Math.max(0, Number(s.coins) || 0);
      s.hunger = clamp(Number(s.hunger) || 0, 0, 100);
      if (!Number(s.hungerAt)) s.hungerAt = Date.now();
      s.streak = Math.max(0, Number(s.streak) || 0);
      s.bestStreak = Math.max(s.bestStreak || 0, s.streak);
      s.stats = { ...base.stats, ...(s.stats || {}) };
      s.bySubject = {
        math: { ...base.bySubject.math, ...(s.bySubject && s.bySubject.math) },
        chinese: { ...base.bySubject.chinese, ...(s.bySubject && s.bySubject.chinese) },
        english: { ...base.bySubject.english, ...(s.bySubject && s.bySubject.english) },
      };
      s.daily = s.daily && typeof s.daily === 'object' ? s.daily : {};
      Object.keys(s.daily).forEach((key) => {
        s.daily[key] = { ...emptyDay(), ...(s.daily[key] || {}) };
        s.daily[key].subjects = {
          math: { ...emptyDay().subjects.math, ...(s.daily[key].subjects && s.daily[key].subjects.math) },
          chinese: { ...emptyDay().subjects.chinese, ...(s.daily[key].subjects && s.daily[key].subjects.chinese) },
          english: { ...emptyDay().subjects.english, ...(s.daily[key].subjects && s.daily[key].subjects.english) },
        };
      });
      s.claimed = s.claimed && typeof s.claimed === 'object' ? s.claimed : {};
      s.mistakes = Array.isArray(s.mistakes) ? s.mistakes.filter((m) => m && m.prompt).slice(0, 80).map((m) => ({
        ...m,
        prompt: normalizeMathText(m.prompt),
        selected: normalizeMathText(m.selected || ''),
        correctAnswer: normalizeMathText(m.correctAnswer || ''),
        explanation: normalizeMathText(m.explanation || ''),
        mastery: clamp(Number(m.mastery) || 0, 0, 2),
        attempts: Math.max(0, Number(m.attempts) || 0),
        knowledgePoint: typeof m.knowledgePoint === 'string' ? normalizeMathText(m.knowledgePoint) : '',
        analysis: typeof m.analysis === 'string' ? normalizeMathText(m.analysis) : normalizeMathText(m.explanation || ''),
        source: m.source || 'practice',
      })) : [];
      s.textbooks = Array.isArray(s.textbooks) ? s.textbooks.filter((book) => book && book.id && book.title && Array.isArray(book.units)).slice(0, 24) : [];
      s.activeTextbooks = s.activeTextbooks && typeof s.activeTextbooks === 'object' ? s.activeTextbooks : {};
      s.diary = Array.isArray(s.diary) ? s.diary.filter((entry) => entry && entry.text).slice(0, 24) : [];
      s.stats.masteredMistakes = Math.max(0, Number(s.stats.masteredMistakes) || 0);
      s.stats.shells = Math.max(0, Number(s.stats.shells) || 0);
      s.owned = Array.isArray(s.owned) ? s.owned.filter((id) => OUTFITS.some((o) => o.id === id)) : [];
      s.outfit = OUTFITS.some((o) => o.id === s.outfit) ? s.outfit : '';
      s.settings = { ...base.settings, ...(s.settings || {}) };
      s.lastSubject = SUBJECTS.some((x) => x.id === s.lastSubject) ? s.lastSubject : 'math';

      const rawChildren = Array.isArray(s.children) ? s.children : [];
      if (!rawChildren.length) {
        s.children = [{ id: uid('child'), name: s.name, grade: s.grade, avatar: '🐳', createdAt: Date.now() }];
      } else {
        s.children = rawChildren
          .filter((child) => child && child.id)
          .slice(0, 6)
          .map((child) => ({
            id: String(child.id),
            name: typeof child.name === 'string' && child.name.trim() ? child.name.trim().slice(0, 12) : s.name,
            grade: clamp(Number(child.grade) || s.grade, 1, 6),
            avatar: CHILD_AVATARS.includes(child.avatar) ? child.avatar : '🐳',
            createdAt: Number(child.createdAt) || 0,
          }));
        if (!s.children.length) {
          s.children = [{ id: uid('child'), name: s.name, grade: s.grade, avatar: '🐳', createdAt: Date.now() }];
        }
      }
      if (!s.children.some((child) => child.id === s.activeChildId)) s.activeChildId = s.children[0].id;
      s.childSnapshots = s.childSnapshots && typeof s.childSnapshots === 'object' ? s.childSnapshots : {};
      s.children.forEach((child) => {
        if (child.id !== s.activeChildId && !s.childSnapshots[child.id]) {
          s.childSnapshots[child.id] = blankLearning(child.name, child.grade);
        }
      });
      const activeChild = s.children.find((child) => child.id === s.activeChildId);
      if (activeChild) {
        activeChild.name = s.name;
        activeChild.grade = s.grade;
      }
      return s;
    }

    function loadState() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return previewHungerOverride(applyHungerDecay(normalizeState(raw ? JSON.parse(raw) : null)));
      } catch {
        return defaultState();
      }
    }

    /*
     * One shared store for both seats: the floating overlay and the left-sidebar
     * main panel. They must never drift apart just because both are mounted.
     */
    let sharedAcademyData = null;
    const academyDataListeners = new Set();

    function getAcademyData() {
      if (!sharedAcademyData) sharedAcademyData = loadState();
      return sharedAcademyData;
    }

    function setAcademyData(updater) {
      const previous = getAcademyData();
      const candidate = typeof updater === 'function' ? updater(previous) : updater;
      const next = normalizeState(candidate);
      sharedAcademyData = next;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage may be disabled; the session still works in memory */
      }
      academyDataListeners.forEach((listener) => listener(next));
      return next;
    }

    function useAcademyData() {
      const [data, setData] = useState(getAcademyData);
      useEffect(() => {
        academyDataListeners.add(setData);
        setData(getAcademyData());
        return () => academyDataListeners.delete(setData);
      }, []);
      return [data, setAcademyData];
    }

    /* ---------------------------------------------------------------------
     * Curriculum library
     * ------------------------------------------------------------------- */
    const CURRICULUM_URL = `${ART}pep-curriculum.json`;
    let curriculumPromise = null;

    function loadCurriculum() {
      if (!curriculumPromise) {
        curriculumPromise = fetch(CURRICULUM_URL)
          .then((res) => (res.ok ? res.json() : null))
          .catch(() => null);
      }
      return curriculumPromise;
    }

    function builtinBook(curriculum, subject, grade, volume) {
      const book = curriculum && curriculum.subjects && curriculum.subjects[subject] && curriculum.subjects[subject][grade] && curriculum.subjects[subject][grade][volume];
      if (!book) return null;
      return {
        ...book,
        id: `builtin-${subject}-${grade}-${volume}`,
        subject,
        grade,
        volume,
        source: 'builtin',
        edition: curriculum.edition || '人教版',
      };
    }

    function bookKey(subject, grade, volume) {
      return `${subject}:${grade}:${volume}`;
    }

    function compareVersion(a, b) {
      const pa = String(a || '').split('.').map((n) => Number(n) || 0);
      const pb = String(b || '').split('.').map((n) => Number(n) || 0);
      for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
        const diff = (pa[i] || 0) - (pb[i] || 0);
        if (diff !== 0) return diff > 0 ? 1 : -1;
      }
      return 0;
    }

    let updatePromise = null;
    function checkLatestUpdate(force = false) {
      if (!force && updatePromise) return updatePromise;
      updatePromise = fetch(`${UPDATE_API}${force ? '?t=' + Date.now() : ''}`, { cache: 'no-store' })
        .then((res) => (res.ok ? res.json() : null))
        .then((payload) => (payload && payload.ok && payload.data && payload.data.version ? payload.data : null))
        .catch(() => null);
      return updatePromise;
    }

    function activeTextbook(data, curriculum, subject, grade, volume) {
      const key = bookKey(subject, grade, volume);
      const id = data.activeTextbooks && data.activeTextbooks[key];
      if (id) {
        const found = (data.textbooks || []).find((book) => book.id === id);
        if (found) return { ...found, source: 'uploaded' };
      }
      return builtinBook(curriculum, subject, grade, volume);
    }

    function activeBookAny(data, curriculum, subject, grade) {
      for (const volume of ['up', 'down']) {
        const key = bookKey(subject, grade, volume);
        if (data.activeTextbooks && data.activeTextbooks[key]) {
          const found = (data.textbooks || []).find((book) => book.id === data.activeTextbooks[key]);
          if (found) return { ...found, source: 'uploaded' };
        }
      }
      return builtinBook(curriculum, subject, grade, 'up') || builtinBook(curriculum, subject, grade, 'down');
    }

    function bookPoints(book) {
      if (!book || !Array.isArray(book.units)) return [];
      const out = [];
      book.units.forEach((unit, ui) => {
        (unit.points || []).forEach((point, pi) => {
          out.push({
            name: point,
            unitTitle: unit.title,
            unitId: `${book.id || 'book'}-u${ui}`,
            pointId: `${book.id || 'book'}-u${ui}-p${pi}`,
          });
        });
      });
      return out;
    }

    function findPointContext(book, pointName) {
      if (!book || !pointName) return null;
      for (let ui = 0; ui < (book.units || []).length; ui += 1) {
        const unit = book.units[ui];
        const point = (unit.points || []).find((p) => p === pointName || pointName.includes(p) || p.includes(pointName));
        if (point) return { unit, point, unitId: `${book.id || 'book'}-u${ui}` };
      }
      return null;
    }

    function addDiary(state, emoji, text) {
      if (!Array.isArray(state.diary)) state.diary = [];
      state.diary.unshift({ id: uid('diary'), emoji, text, at: Date.now() });
      if (state.diary.length > 24) state.diary.length = 24;
    }

    function inferKnowledgePoint(subject, prompt, grade) {
      const text = String(prompt || '');
      if (subject === 'math') {
        if (/周长/.test(text)) return '长方形和正方形的周长';
        if (/面积/.test(text)) return '面积';
        if (/体积/.test(text)) return '长方体和正方体的体积';
        if (/百分数|百分之|折/.test(text)) return '百分数';
        if (/分数|\/\d/.test(text)) return '分数的认识与运算';
        if (/小数|\./.test(text)) return '小数的认识与运算';
        if (/圆|半径|直径|π/.test(text)) return '圆';
        if (/比例|比/.test(text)) return '比和比例';
        if (/时间|时|分/.test(text)) return '时间单位';
        if (/人民币|元|角/.test(text)) return '人民币';
        if (/平均|统计|条形|折线/.test(text)) return '统计与数据';
        if (/乘法|×|\*/.test(text)) return '乘法';
        if (/除法|÷|\//.test(text)) return '除法';
        if (/加法|\+/.test(text)) return '加法';
        if (/减法|-/.test(text)) return '减法';
        return `${grade || ''}年级数学`;
      }
      if (subject === 'chinese') {
        if (/古诗|诗人|诗句/.test(text)) return '古诗积累';
        if (/阅读|短文|段意|中心/.test(text)) return '阅读理解';
        if (/成语|词语|近义|反义/.test(text)) return '词语积累';
        if (/修辞|比喻|拟人|夸张/.test(text)) return '修辞手法';
        if (/病句|语病/.test(text)) return '修改病句';
        if (/拼音|读音|声调/.test(text)) return '拼音与字音';
        if (/量词|一（\s*）/.test(text)) return '量词';
        if (/作文|写话|习作/.test(text)) return '表达与写作';
        return '语文基础';
      }
      if (subject === 'english') {
        if (/过去|yesterday|last|went|did/.test(text)) return '一般过去时';
        if (/进行|now|doing/.test(text)) return '现在进行时';
        if (/复数|boxes|apples|tomatoes/.test(text)) return '名词复数';
        if (/介词|in |on |at /.test(text)) return '介词';
        if (/比较|taller|bigger/.test(text)) return '形容词比较级';
        if (/单词|词汇|意思是|怎么说/.test(text)) return '词汇';
        return '英语基础';
      }
      return `${grade || ''}年级`;
    }

    function unitPointFallback(title) {
      const source = String(title || '').trim();
      const clean = source.replace(/^第[一二三四五六七八九十百\d]+(?:单元|章|课|节)\s*[、.．:：\-]?\s*/, '').trim();
      return clean || source;
    }

    function ensureUnitPoints(units) {
      return (Array.isArray(units) ? units : []).map((unit) => {
        const points = Array.isArray(unit.points) ? unit.points.filter(Boolean) : [];
        return {
          ...unit,
          points: points.length ? points : [unitPointFallback(unit.title)].filter(Boolean),
        };
      }).filter((unit) => unit.title);
    }

    async function parseTocText(rawText) {
      const lines = String(rawText || '')
        .replace(/\r/g, '\n')
        .replace(/[ \t]+/g, ' ')
        .split(/\n+/)
        .map((line) => line
          .replace(/^[•·\-–—\s]+/, '')
          .replace(/\s*[.…·]{2,}\s*\d*\s*$/, '')
          .replace(/\s+\d{1,4}\s*$/, '')
          .trim())
        .filter((line) => line.length >= 2 && line.length <= 64)
        .filter((line) => !/^(目录|目 录|contents|table of contents)$/i.test(line))
        .filter((line) => !/^\d{1,4}$/.test(line));
      const units = [];
      let current = null;
      const unitPattern = /^(第[一二三四五六七八九十百\d]+(?:单元|章|课|节)|unit\s*\d+|recycle\s*\d+|[一二三四五六七八九十]+\s*[、.．:：]?\s+)/i;
      for (const line of lines) {
        if (unitPattern.test(line)) {
          current = { title: line, points: [] };
          units.push(current);
          continue;
        }
        if (!current) continue;
        if (current.points.length >= 12) continue;
        if (/^(语文园地|口语交际|习作|快乐读书吧|练一练|整理与|复习|总复习|附录|智慧乐园)/.test(line)) {
          current.points.push(line);
          continue;
        }
        if (line.length <= 32 && !/[。！？!?]/.test(line)) current.points.push(line);
      }
      if (!units.length) {
        const tocIndex = lines.findIndex((line) => /目\s*录/.test(line));
        const candidates = lines
          .slice(tocIndex >= 0 ? tocIndex + 1 : 0)
          .filter((line) => line.length >= 3 && line.length <= 28)
          .filter((line) => !/^\d+$/.test(line))
          .filter((line) => !/人民教育出版社|出版|目录/.test(line))
          .slice(0, 12);
        candidates.forEach((line) => units.push({ title: line, points: [] }));
      }
      return units.slice(0, 24);
    }

    function pdfTextToLines(items) {
      const entries = (Array.isArray(items) ? items : [])
        .filter((item) => item && typeof item.str === 'string' && item.str.trim())
        .map((item) => {
          const transform = Array.isArray(item.transform) ? item.transform : [1, 0, 0, 1, 0, 0];
          return {
            text: item.str,
            x: Number(transform[4]) || 0,
            y: Number(transform[5]) || 0,
            size: Math.max(6, Math.abs(Number(transform[3])) || Number(item.height) || 10),
            width: Number(item.width) || 0,
          };
        });
      entries.sort((a, b) => b.y - a.y || a.x - b.x);
      const grouped = [];
      entries.forEach((entry) => {
        let line = grouped.find((candidate) => Math.abs(candidate.y - entry.y) <= 6);
        if (!line) {
          line = { y: entry.y, items: [] };
          grouped.push(line);
        }
        line.items.push(entry);
      });
      return grouped.map((line) => {
        const sorted = line.items.slice().sort((a, b) => a.x - b.x);
        let text = '';
        let prevEnd = null;
        sorted.forEach((item) => {
          if (prevEnd !== null && item.x - prevEnd > 3) text += ' ';
          text += item.text;
          prevEnd = item.x + item.width;
        });
        return {
          text: text.replace(/\s+/g, ' ').trim(),
          y: line.y,
          x0: sorted[0] ? sorted[0].x : 0,
          x1: sorted.length ? sorted[sorted.length - 1].x + (sorted[sorted.length - 1].width || 0) : 0,
          size: sorted.reduce((max, item) => Math.max(max, item.size), 0),
        };
      }).filter((line) => line.text);
    }

    function parseTocLayout(lines, pageWidth) {
      const clean = (Array.isArray(lines) ? lines : [])
        .map((line) => ({
          ...line,
          text: String(line.text || '')
            .replace(/\s*[.…·]{2,}\s*\d*\s*$/, '')
            .replace(/\s+\d{1,4}\s*$/, '')
            .trim(),
        }))
        .filter((line) => line.text.length >= 2 && line.text.length <= 42)
        .filter((line) => !/^(目录|目 录|contents|table of contents)$/i.test(line.text))
        .filter((line) => !/人民教育出版社|出版|定价|ISBN|网址|电话/i.test(line.text))
        .filter((line) => !/^\d{1,4}$/.test(line.text))
        .filter((line) => line.size >= 14 && line.x0 > pageWidth * 0.16);
      if (clean.length < 2) return [];
      return clean
        .sort((a, b) => b.y - a.y)
        .slice(0, 16)
        .map((line) => ({ title: line.text, points: [] }));
    }

    function outlineToUnits(outline) {
      const titles = [];
      const walk = (items, depth) => {
        if (!Array.isArray(items) || depth > 2) return;
        items.forEach((item) => {
          if (!item) return;
          const title = typeof item === 'string' ? item : item.title;
          if (typeof title === 'string' && title.trim() && title.trim().length <= 42) titles.push(title.trim());
          if (item && Array.isArray(item.items)) walk(item.items, depth + 1);
        });
      };
      walk(outline, 0);
      return titles.slice(0, 24).map((title) => ({ title, points: [] }));
    }

    function detectBookMeta(text) {
      const source = String(text || '');
      const gradeMap = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };
      const gradeMatch = source.match(/([一二三四五六])年级/);
      const subject = /数学/.test(source) ? 'math' : /语文/.test(source) ? 'chinese' : /英语|english/i.test(source) ? 'english' : null;
      return {
        grade: gradeMatch ? gradeMap[gradeMatch[1]] : null,
        volume: /下册/.test(source) ? 'down' : /上册/.test(source) ? 'up' : null,
        subject,
      };
    }

    async function extractPdfOutline(file) {
      const pdfjs = await import(`${ART}pdf.min.mjs`);
      pdfjs.GlobalWorkerOptions.workerSrc = `${ART}pdf.worker.min.mjs`;
      const data = new Uint8Array(await file.arrayBuffer());
      const doc = await pdfjs.getDocument({ data }).promise;
      const limit = Math.min(doc.numPages, 18);
      let text = '';
      let layoutUnits = [];
      const tocPages = [];
      for (let pageNo = 1; pageNo <= limit; pageNo += 1) {
        const page = await doc.getPage(pageNo);
        const viewport = page.getViewport({ scale: 1 });
        const content = await page.getTextContent();
        const lines = pdfTextToLines(content.items);
        const pageText = lines.map((line) => line.text).join('\n');
        text += `${pageText}\n`;
        if (/目\s*录|contents/i.test(pageText)) {
          tocPages.push(pageNo);
          const units = parseTocLayout(lines, viewport.width);
          if (units.length > layoutUnits.length) layoutUnits = units;
        }
      }
      let units = layoutUnits.length ? layoutUnits : await parseTocText(text);
      if (!units.length) {
        try {
          const outline = await doc.getOutline();
          const outlineUnits = outlineToUnits(outline);
          if (outlineUnits.length) units = outlineUnits;
        } catch {
          /* bookmarks are optional */
        }
      }
      const meta = detectBookMeta(text);
      return {
        units,
        pages: doc.numPages,
        extractedChars: text.trim().length,
        scanned: text.trim().length < 80,
        tocPages,
        hasText: text.trim().length >= 80,
        detectedGrade: meta.grade,
        detectedVolume: meta.volume,
        detectedSubject: meta.subject,
        preview: text.slice(0, 1200),
      };
    }

    async function renderPdfPages(file, startPage = 1, endPage = 6, maxEdge = 1100) {
      const pdfjs = await import(`${ART}pdf.min.mjs`);
      pdfjs.GlobalWorkerOptions.workerSrc = `${ART}pdf.worker.min.mjs`;
      const data = new Uint8Array(await file.arrayBuffer());
      const doc = await pdfjs.getDocument({ data }).promise;
      const start = Math.max(1, Math.min(doc.numPages, Number(startPage) || 1));
      const end = Math.max(start, Math.min(doc.numPages, Number(endPage) || start));
      const images = [];
      for (let pageNo = start; pageNo <= end && images.length < 6; pageNo += 1) {
        const page = await doc.getPage(pageNo);
        const base = page.getViewport({ scale: 1 });
        const scale = Math.min(2.2, maxEdge / Math.max(1, base.width));
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(viewport.width));
        canvas.height = Math.max(1, Math.round(viewport.height));
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvasContext: ctx, viewport }).promise;
        images.push(canvas.toDataURL('image/jpeg', 0.82));
      }
      return { images, start, end, pages: doc.numPages };
    }

    function shrinkDataUrl(dataUrl, maxEdge = 1600, quality = 0.84) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth, img.naturalHeight));
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
          canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = () => resolve('');
        img.src = dataUrl;
      });
    }

    function fileToCompressedDataUrl(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(new Error('图片读取失败'));
        reader.readAsDataURL(file);
      });
    }

    async function preparePhoto(file) {
      const raw = await fileToCompressedDataUrl(file);
      const full = await shrinkDataUrl(raw, 1600, 0.86);
      const thumb = await shrinkDataUrl(raw, 420, 0.72);
      return { full, thumb };
    }

    let mainPanelVisible = false;
    const mainPanelListeners = new Set();

    function setMainPanelVisible(visible) {
      if (mainPanelVisible === visible) return;
      mainPanelVisible = visible;
      mainPanelListeners.forEach((listener) => listener(visible));
    }

    function useMainPanelVisible() {
      const [visible, setVisible] = useState(mainPanelVisible);
      useEffect(() => {
        mainPanelListeners.add(setVisible);
        setVisible(mainPanelVisible);
        return () => mainPanelListeners.delete(setVisible);
      }, []);
      return visible;
    }

    function ensureDay(state, key = dayKey()) {
      if (!state.daily[key]) state.daily[key] = emptyDay();
      return state.daily[key];
    }

    function hungerDecayPoints(state, now = Date.now()) {
      const at = Number(state && state.hungerAt) || 0;
      if (!at || !state || state.hunger <= 0) return 0;
      const minutes = (now - at) / 60000;
      if (minutes < 1) return 0;
      return Math.min(state.hunger, Math.floor(minutes / HUNGER_DECAY_MINUTES_PER_POINT));
    }

    function applyHungerDecay(state, now = Date.now()) {
      const at = Number(state && state.hungerAt) || 0;
      const points = hungerDecayPoints(state, now);
      if (!points) return state;
      const before = state.hunger;
      state.hunger = clamp(state.hunger - points, 0, 100);
      state.hungerAt = at + points * HUNGER_DECAY_MINUTES_PER_POINT * 60000;
      if (before >= 30 && state.hunger < 30) {
        addDiary(state, '🍽️', '咕噜咕噜…小肥鱼饿晕啦，趴在海底等你喂一口。');
      }
      if (state.hunger === 0) {
        addDiary(state, '😵', '小肥鱼饿得吐不出泡泡啦，喂点好吃的马上满血复活。');
      }
      return state;
    }

    function hungerMood(hunger) {
      if (hunger >= 80) return 'full';
      if (hunger >= 30) return 'hungry';
      return 'faint';
    }

    function previewHungerOverride(state) {
      try {
        const raw = new URLSearchParams(window.location.search).get('xfe-hunger');
        if (raw === null) return state;
        state.hunger = clamp(Math.round(Number(raw) || 0), 0, 100);
        state.hungerAt = Date.now();
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch {
          /* keep the preview in memory even if storage is unavailable */
        }
        return state;
      } catch {
        return state;
      }
    }

    function touchStreak(state) {
      const today = dayKey();
      if (state.lastStudyDate === today) return;
      const yesterday = dayKey(addDays(new Date(), -1));
      state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
      state.lastStudyDate = today;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      state.stats.studyDays = Math.max(state.stats.studyDays || 0, Object.keys(state.daily).filter((k) => {
        const d = state.daily[k];
        return d && (d.questions > 0 || d.minutes > 0 || d.reviewed > 0 || d.mastered > 0);
      }).length);
    }

    function grant(state, xp, coins) {
      const before = levelOf(state.xp);
      state.xp = Math.max(0, state.xp + xp);
      state.coins = Math.max(0, state.coins + coins);
      return levelOf(state.xp) > before;
    }

    function numericChoices(answer, extras = []) {
      const ans = Number(answer);
      const keep = [fmt(ans)];
      extras.forEach((x) => {
        const v = fmt(x);
        if (!keep.includes(v)) keep.push(v);
      });
      let guard = 0;
      while (keep.length < 4 && guard < 60) {
        guard += 1;
        const delta = pick([1, -1, 2, -2, 5, -5, 10, -10, 0.5, -0.5]);
        const v = ans + delta;
        if (v >= 0 && !keep.includes(fmt(v))) keep.push(fmt(v));
      }
      const options = shuffle(keep);
      return { options, correct: options.indexOf(fmt(ans)) };
    }

    function textChoices(answer, extras) {
      const options = [answer, ...extras].filter((v, i, a) => a.indexOf(v) === i).slice(0, 4);
      while (options.length < 4) options.push(`选项${options.length + 1}`);
      const shuffled = shuffle(options);
      return { options: shuffled, correct: shuffled.indexOf(answer) };
    }

    function mathQuestion(grade) {
      const g = clamp(Number(grade) || 1, 1, 6);
      const mode = ri(0, 4);
      if (g === 1) {
        if (mode === 0) {
          const a = ri(3, 12);
          const b = ri(2, 20 - a);
          const ans = a + b;
          const c = numericChoices(ans, [ans + 1, ans - 1, a + b + 10]);
          return { subject: 'math', grade: g, prompt: `${a} + ${b} = ?`, ...c, hint: '可以先把大数放心里，再往上数小数。', explanation: `从 ${a} 开始，往后数 ${b} 个，就是 ${ans}。也可以想：${a} 和 ${b} 合起来是 ${ans}。` };
        }
        if (mode === 1) {
          const a = ri(6, 20);
          const b = ri(1, a - 1);
          const ans = a - b;
          const c = numericChoices(ans, [ans + 1, ans - 1, ans + 10]);
          return { subject: 'math', grade: g, prompt: `${a} - ${b} = ?`, ...c, hint: '从大数开始，往回倒数小数。', explanation: `从 ${a} 往回数 ${b} 个，就停在 ${ans}。检查一下：${ans} + ${b} = ${a}，所以答案对啦。` };
        }
        if (mode === 2) {
          const a = ri(3, 9);
          const b = ri(2, 9);
          const d = ri(1, Math.min(6, a + b - 1));
          const ans = a + b - d;
          const c = numericChoices(ans, [ans + 1, ans - 1, a + b]);
          return { subject: 'math', grade: g, prompt: `${a} + ${b} - ${d} = ?`, ...c, hint: '从左往右算，先算加法。', explanation: `先算 ${a} + ${b} = ${a + b}，再减 ${d}，得到 ${ans}。` };
        }
        const a = ri(3, 9);
        const b = ri(2, 8);
        const ans = a + b;
        const c = numericChoices(ans, [ans + 1, a - b, a * b]);
        return { subject: 'math', grade: g, prompt: `🍎 盘子里有 ${a} 个苹果，妈妈又放进 ${b} 个。一共有几个苹果？`, ...c, hint: '“又放进”表示变多，用加法。', explanation: `原来 ${a} 个，又放进 ${b} 个，列式 ${a} + ${b} = ${ans}（个）。` };
      }
      if (g === 2) {
        if (mode === 0) {
          const a = ri(12, 78);
          const b = ri(3, 99 - a);
          const ans = a + b;
          const c = numericChoices(ans, [ans + 10, ans - 10, ans + 1]);
          return { subject: 'math', grade: g, prompt: `${a} + ${b} = ?`, ...c, hint: '个位加个位，十位加十位，满十进一。', explanation: `先算个位，再算十位。${a} + ${b} = ${ans}。` };
        }
        if (mode === 1) {
          const a = ri(25, 99);
          const b = ri(3, a - 2);
          const ans = a - b;
          const c = numericChoices(ans, [ans + 10, ans - 10, ans + 1]);
          return { subject: 'math', grade: g, prompt: `${a} - ${b} = ?`, ...c, hint: '个位不够减，就向十位借 1 当 10。', explanation: `从 ${a} 里拿走 ${b}，还剩 ${ans}。可以用加法检查：${ans} + ${b} = ${a}。` };
        }
        if (mode === 2) {
          const a = ri(2, 9);
          const b = ri(2, 9);
          const ans = a * b;
          const c = numericChoices(ans, [ans + a, ans - b, a + b]);
          return { subject: 'math', grade: g, prompt: `${a} × ${b} = ?`, ...c, hint: `背一背：${a} 的乘法口诀。`, explanation: `${a} × ${b} 就是 ${b} 个 ${a} 相加，结果是 ${ans}。` };
        }
        if (mode === 3) {
          const a = ri(2, 9);
          const b = ri(2, 8);
          const ans = a * b;
          const c = numericChoices(ans, [a + b, ans - a, ans + b]);
          return { subject: 'math', grade: g, prompt: `✏️ 一盒彩笔有 ${a} 支，${b} 盒一共有多少支？`, ...c, hint: '每盒一样多，用乘法。', explanation: `每盒 ${a} 支，有 ${b} 盒，列式 ${a} × ${b} = ${ans}（支）。` };
        }
        const a = ri(2, 9);
        const b = ri(2, 9);
        const ans = a * b;
        const c = numericChoices(a, [b, ans, a + b]);
        return { subject: 'math', grade: g, prompt: `${ans} ÷ ${b} = ?`, ...c, hint: `想：${b} 乘几等于 ${ans}？`, explanation: `因为 ${b} × ${a} = ${ans}，所以 ${ans} ÷ ${b} = ${a}。` };
      }
      if (g === 3) {
        if (mode === 0) {
          const a = ri(12, 39);
          const b = ri(3, 8);
          const ans = a * b;
          const c = numericChoices(ans, [ans + 10, ans - 10, a + b]);
          return { subject: 'math', grade: g, prompt: `${a} × ${b} = ?`, ...c, hint: '拆开算：先算整十，再算个位。', explanation: `把 ${a} 拆成 ${Math.floor(a / 10) * 10} 和 ${a % 10}：${Math.floor(a / 10) * 10} × ${b} + ${a % 10} × ${b} = ${ans}。` };
        }
        if (mode === 1) {
          const b = ri(3, 9);
          const a = ri(2, 12);
          const ans = a * b;
          const c = numericChoices(a, [b, ans, a + 1]);
          return { subject: 'math', grade: g, prompt: `${ans} ÷ ${b} = ?`, ...c, hint: `想：${b} 乘几等于 ${ans}。`, explanation: `因为 ${b} × ${a} = ${ans}，所以商是 ${a}。` };
        }
        if (mode === 2) {
          const a = ri(4, 12);
          const b = ri(3, 9);
          const ans = a * b;
          const c = numericChoices(ans, [2 * (a + b), a + b, ans + a]);
          return { subject: 'math', grade: g, prompt: `📐 一个长方形长 ${a} 厘米，宽 ${b} 厘米。面积是多少平方厘米？`, ...c, hint: '长方形面积 = 长 × 宽。', explanation: `面积 = 长 × 宽 = ${a} × ${b} = ${ans}（平方厘米）。` };
        }
        if (mode === 3) {
          const a = ri(4, 12);
          const b = ri(3, 9);
          const ans = 2 * (a + b);
          const c = numericChoices(ans, [a * b, a + b, ans - 2]);
          return { subject: 'math', grade: g, prompt: `📏 长方形长 ${a} 厘米，宽 ${b} 厘米。周长是多少厘米？`, ...c, hint: '长方形周长 = (长 + 宽) × 2。', explanation: `周长 = (${a} + ${b}) × 2 = ${a + b} × 2 = ${ans}（厘米）。` };
        }
        const a = ri(120, 680);
        const b = ri(20, 99);
        const ans = a + b;
        const c = numericChoices(ans, [ans + 100, ans - 100, ans + 10]);
        return { subject: 'math', grade: g, prompt: `${a} + ${b} = ?`, ...c, hint: '按数位对齐，从个位加起。', explanation: `${a} + ${b} = ${ans}。可以拆成整百、整十和个位分别相加。` };
      }
      if (g === 4) {
        if (mode === 0) {
          const a = ri(13, 48);
          const b = ri(4, 9);
          const ans = a * b;
          const c = numericChoices(ans, [ans + 10, ans - 10, a + b]);
          return { subject: 'math', grade: g, prompt: `${a} × ${b} = ?`, ...c, hint: '把两位数拆成整十和个位分别乘。', explanation: `把 ${a} 拆成 ${Math.floor(a / 10) * 10} 和 ${a % 10}：${Math.floor(a / 10) * 10} × ${b} + ${a % 10} × ${b} = ${ans}。` };
        }
        if (mode === 1) {
          const a = ri(12, 25);
          const b = ri(12, 25);
          const ans = a * b;
          const c = numericChoices(ans, [ans + 100, ans - 100, a + b]);
          return { subject: 'math', grade: g, prompt: `${a} × ${b} = ?`, ...c, hint: '先用个位乘，再用十位乘，最后把两部分加起来。', explanation: `${a} × ${b} = ${a} × ${Math.floor(b / 10) * 10} + ${a} × ${b % 10} = ${ans}。` };
        }
        if (mode === 2) {
          const b = ri(3, 9);
          const q = ri(4, 12);
          const r = ri(1, b - 1);
          const a = b * q + r;
          const c = numericChoices(q, [q + 1, q - 1, r]);
          return { subject: 'math', grade: g, prompt: `${a} ÷ ${b} 的商是多少？（有余数也没关系）`, ...c, hint: '先找最大的整倍数，再看剩下多少。', explanation: `${b} × ${q} = ${b * q}，${a} - ${b * q} = ${r}，所以商是 ${q}，余 ${r}。` };
        }
        if (mode === 3) {
          const d = ri(3, 9);
          let a = ri(1, d - 1);
          let b = ri(1, d - 1);
          if (a === b) b = a === d - 1 ? 1 : a + 1;
          const left = `${a}/${d}`;
          const right = `${b}/${d}`;
          const bigger = a > b ? left : right;
          const smaller = a > b ? right : left;
          const c = textChoices(bigger, [smaller, `${a + b}/${d}`, `${a}/${d + 1}`]);
          return { subject: 'math', grade: g, prompt: `🍰 同分母分数比大小：${left} 和 ${right}，哪个更大？`, ...c, hint: '分母相同，分子越大分数越大。', explanation: `分母相同，就看分子。${a} 和 ${b} 中较大的是 ${Math.max(a, b)}，所以 ${bigger} 更大。` };
        }
        const a = ri(12, 89) / 10;
        const b = ri(11, 79) / 10;
        const ans = Math.round((a + b) * 10) / 10;
        const c = numericChoices(ans, [ans + 1, ans - 1, Math.round((a + b) * 100) / 100]);
        return { subject: 'math', grade: g, prompt: `${fmt(a)} + ${fmt(b)} = ?`, ...c, hint: '小数点对齐，再按整数加法算。', explanation: `小数点对齐后相加：${fmt(a)} + ${fmt(b)} = ${fmt(ans)}。` };
      }
      if (g === 5) {
        if (mode === 0) {
          const a = ri(11, 89) / 10;
          const b = ri(2, 9);
          const ans = Math.round(a * b * 10) / 10;
          const c = numericChoices(ans, [ans * 10, ans + 1, ans - 1]);
          return { subject: 'math', grade: g, prompt: `${fmt(a)} × ${b} = ?`, ...c, hint: '先按整数乘，再数一数一共有几位小数。', explanation: `${fmt(a * 10)} × ${b} = ${fmt(a * 10 * b)}，再把小数点向左移一位，得到 ${fmt(ans)}。` };
        }
        if (mode === 1) {
          const base = ri(2, 20) * 10;
          const percent = pick([10, 20, 25, 50]);
          const ans = (base * percent) / 100;
          const c = numericChoices(ans, [base - ans, ans + 10, ans - 10]);
          return { subject: 'math', grade: g, prompt: `💰 ${base} 元的 ${percent}% 是多少元？`, ...c, hint: `${percent}% 就是 ${percent}/100。`, explanation: `${base} × ${percent}/100 = ${ans}（元）。` };
        }
        if (mode === 2) {
          const b = ri(4, 12);
          const h = ri(3, 9);
          const ans = (b * h) / 2;
          const c = numericChoices(ans, [b * h, b + h, ans + b]);
          return { subject: 'math', grade: g, prompt: `🔺 三角形底 ${b} 厘米，高 ${h} 厘米，面积是多少平方厘米？`, ...c, hint: '三角形面积 = 底 × 高 ÷ 2。', explanation: `面积 = ${b} × ${h} ÷ 2 = ${ans}（平方厘米）。别忘了最后除以 2。` };
        }
        if (mode === 3) {
          const b = ri(2, 8);
          const q = ri(11, 49) / 10;
          const a = Math.round(b * q * 10) / 10;
          const c = numericChoices(q, [q + 1, q - 1, b]);
          return { subject: 'math', grade: g, prompt: `${fmt(a)} ÷ ${b} = ?`, ...c, hint: '除数是整数，直接按小数除法算。', explanation: `${fmt(a)} ÷ ${b} = ${fmt(q)}。可以想：${b} × ${fmt(q)} = ${fmt(a)}。` };
        }
        const d = ri(5, 10);
        const a = ri(1, d - 2);
        const b = ri(1, d - a);
        const ans = `${a + b}/${d}`;
        const c = textChoices(ans, [`${a + b}/${d + 1}`, `${a + b}/${d * 2}`, `${a * b}/${d}`]);
        return { subject: 'math', grade: g, prompt: `🍕 ${a}/${d} + ${b}/${d} = ?`, ...c, hint: '同分母分数相加，分母不变，分子相加。', explanation: `分母不变，分子相加：${a} + ${b} = ${a + b}，所以结果是 ${ans}。` };
      }
      if (mode === 0) {
        const a = pick([2, 3, 4, 5]);
        const b = pick([3, 4, 6, 8].filter((x) => x !== a));
        const n = a + b;
        const d = a * b;
        const k = gcd(n, d);
        const ans = `${n / k}/${d / k}`;
        const c = textChoices(ans, [`${n}/${d}`, `${a + b}/${a + b}`, `${d}/${n}`]);
        return { subject: 'math', grade: g, prompt: `1/${a} + 1/${b} = ?`, ...c, hint: '先通分，再相加，最后别忘了约分。', explanation: `公分母是 ${a * b}，1/${a} = ${b}/${a * b}，1/${b} = ${a}/${a * b}，相加得到 ${n}/${d}，约分后是 ${ans}。` };
      }
      if (mode === 1) {
        const k = ri(2, 6);
        const a = k * ri(2, 6);
        const b = k * ri(2, 6);
        const factor = gcd(a, b);
        const ans = `${a / factor}:${b / factor}`;
        const c = textChoices(ans, [`${a}:${b}`, `${a / k}:${b}`, `${a}:${b / k}`]);
        return { subject: 'math', grade: g, prompt: `化简比：${a} : ${b} = ?`, ...c, hint: '同时除以最大公因数。', explanation: `${a} 和 ${b} 的最大公因数是 ${factor}，同时除以 ${factor}，得到 ${ans}。` };
      }
      if (mode === 2) {
        const r = ri(2, 6);
        const ans = Math.round(2 * 3.14 * r * 100) / 100;
        const c = numericChoices(ans, [Math.round(3.14 * r * r * 100) / 100, Math.round(3.14 * r * 100) / 100, ans + 6.28]);
        return { subject: 'math', grade: g, prompt: `⭕ 圆的半径是 ${r} 厘米，周长是多少厘米？（π 取 3.14）`, ...c, hint: '圆的周长 = 2 × π × 半径。', explanation: `周长 = 2 × 3.14 × ${r} = ${fmt(ans)}（厘米）。` };
      }
      if (mode === 3) {
        const price = ri(5, 20) * 10;
        const discount = pick([8, 7, 6]);
        const ans = price * discount / 10;
        const c = numericChoices(ans, [price - discount, price * discount / 100, price - ans]);
        return { subject: 'math', grade: g, prompt: `🛍️ 一件玩具原价 ${price} 元，打 ${discount} 折，现价是多少元？`, ...c, hint: '打几折就是原价的十分之几。', explanation: `${discount} 折 = ${discount}/10，现价 = ${price} × ${discount}/10 = ${ans}（元）。` };
      }
      const r = ri(2, 5);
      const ans = Math.round(3.14 * r * r * 100) / 100;
      const c = numericChoices(ans, [Math.round(2 * 3.14 * r * 100) / 100, ans + 3.14, ans - 3.14]);
      return { subject: 'math', grade: g, prompt: `⭕ 圆的半径是 ${r} 厘米，面积是多少平方厘米？（π 取 3.14）`, ...c, hint: '圆的面积 = π × 半径 × 半径。', explanation: `面积 = 3.14 × ${r} × ${r} = ${fmt(ans)}（平方厘米）。` };
    }

    const BANK = {
      chinese: {
        1: [
          { prompt: '“春眠不觉晓”的下一句是？', options: ['处处闻啼鸟', '疑是地上霜', '白日依山尽', '粒粒皆辛苦'], correct: 0, explanation: '出自孟浩然《春晓》：“春眠不觉晓，处处闻啼鸟。”', hint: '想一想春天的早晨，到处都能听到什么声音。' },
          { prompt: '“大”的反义词是？', options: ['小', '多', '高', '快'], correct: 0, explanation: '“大”和“小”是一对反义词。', hint: '和“大”相反的那个字。' },
          { prompt: '一（ ）小鱼，括号里填什么量词？', options: ['条', '只', '朵', '棵'], correct: 0, explanation: '鱼通常用“条”来数，比如“一条小鱼”。', hint: '鱼的身体长长的、弯弯的。' },
          { prompt: '“明”字由哪两部分组成？', options: ['日 + 月', '目 + 月', '日 + 目', '月 + 月'], correct: 0, explanation: '“明”左边是“日”，右边是“月”，合起来表示光亮。', hint: '左边是太阳，右边是月亮。' },
          { prompt: '“弯弯的月亮像什么？”最合适的答案是？', options: ['小船', '太阳', '大山', '小狗'], correct: 0, explanation: '弯弯的月亮常常被比作小船。', hint: '它在夜空中弯弯的，像水里的什么东西？' },
          { prompt: '下面哪个字读“shān”？', options: ['山', '水', '火', '田'], correct: 0, explanation: '“山”的拼音是 shān。', hint: '它由三座“山峰”组成。' },
          { prompt: '“白毛浮绿水，红掌拨清波”写的是哪种动物？', options: ['鹅', '鸭', '鱼', '鸡'], correct: 0, explanation: '这两句出自骆宾王《咏鹅》，写的是白鹅。', hint: '白白的羽毛，红红的脚掌。' },
          { prompt: '“一去二三里”的下一句是？', options: ['烟村四五家', '处处闻啼鸟', '粒粒皆辛苦', '疑是地上霜'], correct: 0, explanation: '《山村咏怀》：“一去二三里，烟村四五家。”', hint: '后面接着出现了四、五两个数字。' },
          { prompt: '“早”的反义词是？', options: ['晚', '快', '少', '远'], correct: 0, explanation: '“早”和“晚”是一对反义词。', hint: '太阳落山的时候。' },
          { prompt: '“目”字一共有几笔？', options: ['5', '4', '6', '3'], correct: 0, explanation: '“目”的笔顺是：竖、横折、横、横、横，共 5 画。', hint: '数一数里面的横。' },
        ],
        2: [
          { prompt: '“亡羊补牢”告诉我们什么道理？', options: ['出了问题及时补救还不晚', '羊跑了就不要找了', '做事要慢慢来', '不要养羊'], correct: 0, explanation: '“亡羊补牢”比喻出了问题以后及时想办法补救，可以防止继续受损失。', hint: '重点在“补牢”两个字。' },
          { prompt: '“画蛇添足”比喻什么？', options: ['做多余的事，反而不好', '画画很厉害', '蛇有很多脚', '做事很认真'], correct: 0, explanation: '“画蛇添足”比喻做了多余的事，非但无益，反而不合适。', hint: '蛇本来就没有脚。' },
          { prompt: '“床前明月光”的下一句是？', options: ['疑是地上霜', '处处闻啼鸟', '白日依山尽', '粒粒皆辛苦'], correct: 0, explanation: '出自李白《静夜思》：“床前明月光，疑是地上霜。”', hint: '月光白白的，像地上的什么？' },
          { prompt: '“蜜蜂在花丛中跳舞”用了什么修辞手法？', options: ['拟人', '比喻', '夸张', '排比'], correct: 0, explanation: '把蜜蜂当作人来写，会“跳舞”，这是拟人。', hint: '蜜蜂真的会跳舞吗？' },
          { prompt: '《西游记》的作者是？', options: ['吴承恩', '罗贯中', '施耐庵', '曹雪芹'], correct: 0, explanation: '《西游记》的作者是明代小说家吴承恩。', hint: '师徒四人去西天取经的故事。' },
          { prompt: '“不仅……而且……”表示什么关系？', options: ['递进', '转折', '因果', '并列'], correct: 0, explanation: '“不仅……而且……”表示意思更进一层，是递进关系。', hint: '后面的意思比前面更进一步。' },
          { prompt: '“一叶知秋”中的“知”是什么意思？', options: ['知道', '知识', '通知', '朋友'], correct: 0, explanation: '“一叶知秋”意思是看到一片落叶就知道秋天来了，“知”是知道。', hint: '看到一片叶子，就知道了什么？' },
          { prompt: '下面哪句话没有语病？', options: ['我们要养成认真读书的好习惯。', '我们要养成认真读书。', '我们要认真读书的好习惯。', '我们认真读书好习惯要养成。'], correct: 0, explanation: '第一句搭配完整：“养成……好习惯”。', hint: '“养成”后面要跟“习惯”。' },
          { prompt: '“两岸青山相对出”的下一句是？', options: ['孤帆一片日边来', '疑是银河落九天', '润物细无声', '为有源头活水来'], correct: 0, explanation: '出自李白《望天门山》：“两岸青山相对出，孤帆一片日边来。”', hint: '江面上有一片帆船。' },
          { prompt: '“不假思索”的意思是？', options: ['用不着想，形容说话做事迅速', '假装在思考', '思考得很慢', '不喜欢思考'], correct: 0, explanation: '“假”在这里是“借助”的意思，“不假思索”指不经过思考就作出反应。', hint: '“假”不是真假，而是借助。' },
        ],
        3: [
          { prompt: '“落红不是无情物”的下一句是？', options: ['化作春泥更护花', '润物细无声', '为有源头活水来', '孤帆一片日边来'], correct: 0, explanation: '出自龚自珍《己亥杂诗》：“落红不是无情物，化作春泥更护花。”', hint: '落花变成了春泥，继续护着花。' },
          { prompt: '“不以为然”的意思是？', options: ['不认为是对的', '不觉得奇怪', '不放在心上', '不知道怎么办'], correct: 0, explanation: '“然”是“对”的意思，“不以为然”指不认为是对的，表示不同意。', hint: '“然”在这里是“对”。' },
          { prompt: '“飞流直下三千尺”用了什么修辞手法？', options: ['夸张', '拟人', '排比', '反问'], correct: 0, explanation: '“三千尺”夸大了瀑布的高度，是夸张。', hint: '瀑布真的有三千尺吗？' },
          { prompt: '“京口瓜洲一水间”的作者是？', options: ['王安石', '李白', '杜甫', '苏轼'], correct: 0, explanation: '出自王安石《泊船瓜洲》。', hint: '他还写过“春风又绿江南岸”。' },
          { prompt: '“他像一只快乐的小鸟”用了什么修辞手法？', options: ['比喻', '拟人', '夸张', '设问'], correct: 0, explanation: '把“他”比作“小鸟”，有本体和喻体，是比喻。', hint: '句子里有“像”。' },
          { prompt: '“与其……不如……”表示什么关系？', options: ['选择', '递进', '转折', '因果'], correct: 0, explanation: '“与其……不如……”表示在两者之间做选择。', hint: '是在两个做法里挑一个。' },
          { prompt: '“路遥知马力”的下一句是？', options: ['日久见人心', '近山识鸟音', '更上一层楼', '一览众山小'], correct: 0, explanation: '“路遥知马力，日久见人心。”', hint: '时间久了，才能看清人心。' },
          { prompt: '“目瞪口呆”形容什么？', options: ['受惊或发愣的样子', '非常高兴的样子', '非常生气的样子', '非常困的样子'], correct: 0, explanation: '“目瞪口呆”形容因吃惊或害怕而发愣的样子。', hint: '眼睛瞪大，嘴巴说不出话。' },
          { prompt: '“随风潜入夜”的下一句是？', options: ['润物细无声', '疑是地上霜', '江船火独明', '花重锦官城'], correct: 0, explanation: '出自杜甫《春夜喜雨》：“随风潜入夜，润物细无声。”', hint: '春雨悄悄滋润万物。' },
          { prompt: '“问渠那得清如许”的下一句是？', options: ['为有源头活水来', '化作春泥更护花', '孤帆一片日边来', '更上一层楼'], correct: 0, explanation: '出自朱熹《观书有感》：“问渠那得清如许？为有源头活水来。”', hint: '池塘清澈，是因为有源头不断送水。' },
        ],
      },
      english: {
        1: [
          { prompt: '“苹果”用英语怎么说？', options: ['apple', 'banana', 'orange', 'pear'], correct: 0, explanation: 'apple = 苹果。', hint: 'a-p-p-l-e.' },
          { prompt: '“cat”是什么意思？', options: ['猫', '狗', '鱼', '鸟'], correct: 0, explanation: 'cat = 猫。', hint: '喵喵叫的小动物。' },
          { prompt: '“red”是什么颜色？', options: ['红色', '蓝色', '绿色', '黄色'], correct: 0, explanation: 'red = 红色。', hint: '苹果常见的颜色。' },
          { prompt: 'I ___ a student.', options: ['am', 'is', 'are', 'be'], correct: 0, explanation: 'I 后面用 am：I am a student.', hint: '“I”的固定搭配。' },
          { prompt: 'A, B, C, ___ ？', options: ['D', 'E', 'F', 'G'], correct: 0, explanation: '字母顺序是 A, B, C, D。', hint: '紧接着 C 的字母。' },
          { prompt: '“你好”用英语怎么说？', options: ['Hello', 'Bye', 'Thanks', 'Sorry'], correct: 0, explanation: 'Hello = 你好。', hint: '见面时最常说的词。' },
          { prompt: '“How many apples?” 最合适的回答是？', options: ['Three.', 'Tree.', 'There.', 'Thank.'], correct: 0, explanation: '问数量用数字回答：Three.（三个）', hint: '要回答一个数字。' },
          { prompt: 'This is ___ apple.', options: ['an', 'a', 'the', '不填'], correct: 0, explanation: 'apple 以元音音素开头，用 an：an apple。', hint: 'apple 的第一个音是元音。' },
        ],
        2: [
          { prompt: '“box”的复数形式是？', options: ['boxes', 'boxs', 'box', 'boxies'], correct: 0, explanation: '以 x 结尾的名词加 -es：box → boxes。', hint: '以 x 结尾，要加 -es。' },
          { prompt: 'She ___ to school every day.', options: ['goes', 'go', 'going', 'went'], correct: 0, explanation: '一般现在时，主语 She 是第三人称单数，动词加 -es：goes。', hint: 'every day 表示一般现在时。' },
          { prompt: '“What’s this?” 最合适的回答是？', options: ['It’s a pencil.', 'I’m nine.', 'It’s Monday.', 'I’m fine.'], correct: 0, explanation: '问“这是什么”，回答“It’s a pencil.”（这是一支铅笔）', hint: '回答一个物品。' },
          { prompt: 'I like ___.', options: ['apples', 'apple', 'an apple', 'apples’'], correct: 0, explanation: '表示喜欢一类事物，可数名词用复数：I like apples.', hint: '喜欢“苹果这一类”。' },
          { prompt: '“How old are you?” 最合适的回答是？', options: ['I’m nine.', 'I’m fine.', 'It’s nine.', 'I’m a student.'], correct: 0, explanation: '问年龄，回答“I’m nine.”（我九岁）', hint: '回答年龄。' },
          { prompt: '“在星期一”用英语怎么说？', options: ['on Monday', 'in Monday', 'at Monday', 'to Monday'], correct: 0, explanation: '具体的某一天用介词 on：on Monday。', hint: '星期几前面用 on。' },
          { prompt: '“play”的过去式是？', options: ['played', 'plaied', 'plays', 'playing'], correct: 0, explanation: '规则动词直接加 -ed：play → played。', hint: '一般动词加 -ed。' },
          { prompt: '“tomato”的复数形式是？', options: ['tomatoes', 'tomatos', 'tomato', 'tomatoies'], correct: 0, explanation: '以 o 结尾的部分名词加 -es：tomato → tomatoes。', hint: '和 potato 的变法一样。' },
        ],
        3: [
          { prompt: 'He ___ TV every day.', options: ['watches', 'watch', 'watching', 'watched'], correct: 0, explanation: '一般现在时，主语 He 是第三人称单数，watch 加 -es：watches。', hint: 'every day 提示一般现在时。' },
          { prompt: 'Yesterday I ___ to the park.', options: ['went', 'go', 'goes', 'going'], correct: 0, explanation: 'yesterday 表示过去，go 的过去式是 went。', hint: 'yesterday 是过去时间。' },
          { prompt: 'There ___ some milk in the glass.', options: ['is', 'are', 'be', 'am'], correct: 0, explanation: 'milk 是不可数名词，用 is。', hint: 'milk 不可数。' },
          { prompt: '“tall”的比较级是？', options: ['taller', 'tallest', 'more tall', 'talls'], correct: 0, explanation: '单音节形容词比较级加 -er：tall → taller。', hint: '比较级通常加 -er。' },
          { prompt: 'If it ___ tomorrow, we’ll stay home.', options: ['rains', 'rain', 'rained', 'raining'], correct: 0, explanation: 'if 条件句主将从现：主句用 will，从句用一般现在时 rains。', hint: '“主将从现”。' },
          { prompt: '“What are you doing?” 最合适的回答是？', options: ['I’m reading.', 'I’m nine.', 'I’m fine.', 'I’m a student.'], correct: 0, explanation: '问正在做什么，用现在进行时回答：I’m reading.', hint: '回答正在做的动作。' },
          { prompt: '“书在桌子上”用英语怎么说？', options: ['The book is on the table.', 'The book is in the table.', 'The book is at the table.', 'The book is under the table.'], correct: 0, explanation: '在桌子表面用 on：on the table。', hint: '在……表面上用 on。' },
          { prompt: '“已经”用英语怎么说？', options: ['already', 'yet', 'still', 'ever'], correct: 0, explanation: 'already = 已经，常用于肯定句。', hint: '常用于肯定句。' },
        ],
      },
    };

    const CHINESE_READING = {
      passage: '小雨点从云朵里跳下来，落进池塘，发出“叮咚叮咚”的声音。荷叶上的青蛙听见了，鼓起腮帮子“呱呱”地唱起来。',
      prompt: '小雨点落进池塘，发出了什么声音？',
      options: ['叮咚叮咚', '呱呱', '沙沙沙', '哗啦啦'],
      correct: 0,
      explanation: '短文第二句说小雨点落进池塘，发出“叮咚叮咚”的声音。',
      hint: '回到短文里找小雨点落下的那一句。',
    };
    BANK.chinese[2].push(CHINESE_READING);

    const TUTOR_TOPICS = [
      {
        keys: ['分数', '通分', '分母', '分子'],
        title: '分数小课堂',
        text: '分数就像把一张大饼切开。\n\n• 分母：一共切成几份。\n• 分子：你拿走了几份。\n\n同分母相加：分母不变，分子相加。比如 2/5 + 1/5 = 3/5。\n异分母相加：先通分，再相加。比如 1/2 + 1/3 = 3/6 + 2/6 = 5/6。\n\n小口诀：同分母，分子加；异分母，先通分。',
      },
      {
        keys: ['面积', '长方形', '三角形', '圆'],
        title: '面积小抄',
        text: '面积就是“铺满一个面需要多少个小方格”。\n\n• 长方形：长 × 宽\n• 正方形：边长 × 边长\n• 三角形：底 × 高 ÷ 2\n• 圆：π × 半径 × 半径（π 取 3.14）\n\n注意：周长是“围一圈的长度”，面积是“铺满的大小”，别弄混哦。',
      },
      {
        keys: ['周长', '长方形周长', '正方形周长'],
        title: '周长小抄',
        text: '周长就是沿着图形边缘走一圈的长度。\n\n• 长方形周长 = (长 + 宽) × 2\n• 正方形周长 = 边长 × 4\n• 圆周长 = 2 × π × 半径\n\n小技巧：算长方形周长时，先把长和宽加起来，再乘 2。',
      },
      {
        keys: ['百分数', '百分比', '折扣', '打折'],
        title: '百分数 & 折扣',
        text: '百分数就是“每一百份里占几份”。\n\n• 25% = 25/100 = 1/4\n• 求一个数的百分之几：用这个数 × 百分数\n\n打折：打八折就是原价 × 80%，打七折就是原价 × 70%。\n例：100 元打八折，现价 100 × 0.8 = 80 元。',
      },
      {
        keys: ['小数', '小数点'],
        title: '小数小课堂',
        text: '小数点是整数部分和小数部分的分界线。\n\n• 加减法：小数点对齐，再算。\n• 乘法：先按整数乘，最后数一数两个数一共有几位小数，点上小数点。\n• 除法：除数是小数时，先把除数变成整数，被除数也跟着移动相同的位数。\n\n例：0.3 × 4 = 1.2。',
      },
      {
        keys: ['比例', '比', '化简比'],
        title: '比例小课堂',
        text: '“比”表示两个量之间的关系，比如 12 : 18。\n\n化简比：同时除以它们的最大公因数。\n12 和 18 的最大公因数是 6，所以 12 : 18 = 2 : 3。\n\n比和分数、除法是好朋友：a : b = a/b = a ÷ b。',
      },
      {
        keys: ['方程', '未知数', '解方程'],
        title: '方程小课堂',
        text: '方程就是含有未知数的等式。\n\n解方程的目标：让未知数单独站在等号一边。\n\n例：x + 5 = 12\n两边同时减 5：x = 12 - 5 = 7。\n\n记住：等式两边要同时做相同的运算，天平才不会歪。',
      },
      {
        keys: ['古诗', '背诗', '唐诗'],
        title: '背古诗的小鱼招',
        text: '背古诗别硬啃，试试三步：\n\n1. 先读三遍，读顺口。\n2. 在脑子里画一幅画：诗里有什么人、什么景、什么动作？\n3. 只看每句的第一个字，试着接下去。\n\n比如《静夜思》：床前 → 疑是 → 举头 → 低头。画面一出来，诗就住进脑子里啦。',
      },
      {
        keys: ['阅读', '阅读理解', '概括', '中心思想'],
        title: '阅读理解的寻宝图',
        text: '做阅读题，先当“海底侦探”：\n\n1. 先看题目，圈出关键词。\n2. 带着问题回短文里找原句。\n3. 答案尽量用短文里的词，别自己编。\n4. 问“为什么”时，往前找原因；问“怎么样”时，找描写。\n\n口诀：题目指路，原文作证。',
      },
      {
        keys: ['作文', '写话', '写作'],
        title: '作文开头不卡壳',
        text: '写作文卡住时，先回答三个问题：\n\n• 谁？\n• 在哪里？\n• 发生了什么？\n\n然后加一个“五感”细节：看到的、听到的、闻到的、摸到的、想到的。\n\n开头可以用一句话制造画面，比如：“雨点噼里啪啦敲着窗，我的铅笔却停在半空。”',
      },
      {
        keys: ['单词', '背单词', '英语单词'],
        title: '背单词的泡泡法',
        text: '背单词别一个字母一个字母硬记，试试“泡泡法”：\n\n1. 读准发音，按音节拆：com-pu-ter。\n2. 造一个夸张的画面：computer 是一台会唱歌的电脑。\n3. 当天、第二天、第四天各复习一次。\n4. 把单词放进句子里说一遍。\n\n记住：见面次数比一次背很久更重要。',
      },
      {
        keys: ['时态', '过去式', '现在进行时', '一般现在时'],
        title: '英语时态小地图',
        text: '时态就是“动作发生在什么时候”。\n\n• 一般现在时：经常发生。He plays football every day.\n• 现在进行时：正在发生。He is playing football now.\n• 一般过去时：过去发生。He played football yesterday.\n\n先找时间词：every day / now / yesterday，它们会给你线索。',
      },
      {
        keys: ['介词', 'in on at'],
        title: '介词 in / on / at',
        text: '记三个小场景：\n\n• in：在……里面。in the box（在盒子里）\n• on：在……表面上。on the table（在桌子上）\n• at：在某个点。at 7 o’clock（在七点）\n\n时间上：in 年/月，on 具体某天，at 具体时刻。',
      },
      {
        keys: ['乘法口诀', '乘法', '口诀'],
        title: '乘法口诀小节奏',
        text: '乘法就是“几个相同的数加在一起”。\n\n3 × 4 = 12，可以想成 4 个 3 相加：3 + 3 + 3 + 3 = 12。\n\n背口诀时拍手打节奏：三七二十一、四七二十八。节奏一出来，口诀就不容易串门啦。',
      },
    ];

    function makeQuestion(subject, grade) {
      if (subject === 'math') {
        const q = mathQuestion(grade);
        q.knowledgePoint = inferKnowledgePoint('math', q.prompt, grade);
        return q;
      }
      const band = grade <= 2 ? 1 : grade <= 4 ? 2 : 3;
      const pool = BANK[subject][band];
      const item = pick(pool);
      const options = shuffle(item.options);
      const correct = options.indexOf(item.options[item.correct]);
      return {
        subject,
        grade,
        prompt: item.prompt,
        passage: item.prompt === CHINESE_READING.prompt ? CHINESE_READING.passage : undefined,
        options,
        correct,
        explanation: item.explanation,
        hint: item.hint,
        knowledgePoint: inferKnowledgePoint(subject, item.prompt, grade),
      };
    }

    function makeQuiz(subject, grade, difficulty, focus = '') {
      const diff = DIFFICULTIES.find((d) => d.id === difficulty) || DIFFICULTIES[1];
      const questions = [];
      const seen = new Set();
      let guard = 0;
      while (questions.length < diff.n && guard < 120) {
        guard += 1;
        const actual = subject === 'mixed' ? pick(['math', 'chinese', 'english']) : subject;
        const q = makeQuestion(actual, grade);
        const key = `${q.subject}|${q.prompt}`;
        if (seen.has(key)) continue;
        seen.add(key);
        questions.push({ ...q, id: uid('q') });
      }
      return {
        id: uid('quiz'),
        subject,
        grade,
        difficulty,
        focus,
        questions,
        index: 0,
        selected: null,
        locked: false,
        correct: false,
        correctCount: 0,
        combo: 0,
        bestCombo: 0,
        finished: false,
        startedAt: Date.now(),
      };
    }

    function safeEvalExpression(input) {
      const src = input.replace(/×/g, '*').replace(/÷/g, '/').replace(/x/gi, '*').replace(/\s+/g, '');
      if (!/^[0-9.+\-*/()]+$/.test(src) || !/[+\-*/]/.test(src) || !/[0-9]/.test(src)) return null;
      let i = 0;
      const peek = () => src[i];
      const eat = (ch) => {
        if (src[i] === ch) { i += 1; return true; }
        return false;
      };
      const parseNumber = () => {
        const start = i;
        while (i < src.length && /[0-9.]/.test(src[i])) i += 1;
        const raw = src.slice(start, i);
        if (!raw || (raw.match(/\./g) || []).length > 1) throw new Error('bad number');
        return Number(raw);
      };
      const parseFactor = () => {
        if (eat('+')) return parseFactor();
        if (eat('-')) return -parseFactor();
        if (eat('(')) {
          const v = parseExpr();
          if (!eat(')')) throw new Error('missing )');
          return v;
        }
        return parseNumber();
      };
      const parseTerm = () => {
        let v = parseFactor();
        for (;;) {
          if (eat('*')) v *= parseFactor();
          else if (eat('/')) v /= parseFactor();
          else return v;
        }
      };
      const parseExpr = () => {
        let v = parseTerm();
        for (;;) {
          if (eat('+')) v += parseTerm();
          else if (eat('-')) v -= parseTerm();
          else return v;
        }
      };
      try {
        const value = parseExpr();
        if (i !== src.length || !Number.isFinite(value)) return null;
        return { source: src, value };
      } catch {
        return null;
      }
    }

    function expressionReply(expr) {
      const simple = expr.source.match(/^(-?[0-9.]+)([+\-*/])(-?[0-9.]+)$/);
      const fractions = expr.source.match(/^([0-9]+)\/([0-9]+)\+([0-9]+)\/([0-9]+)$/);
      let steps = '';
      if (fractions) {
        const n1 = Number(fractions[1]);
        const d1 = Number(fractions[2]);
        const n2 = Number(fractions[3]);
        const d2 = Number(fractions[4]);
        if (d1 === d2) {
          steps = `同分母分数相加，分母不变，分子相加：${n1}/${d1} + ${n2}/${d2} = ${n1 + n2}/${d1} = ${fmt(expr.value)}。`;
        } else {
          steps = `分母不同，先通分再相加：${n1}/${d1} + ${n2}/${d2} = ${n1 * d2}/${d1 * d2} + ${n2 * d1}/${d1 * d2} = ${fmt(expr.value)}。`;
        }
      } else if (simple) {
        const a = Number(simple[1]);
        const b = Number(simple[3]);
        const op = simple[2];
        if (op === '+') steps = `先算 ${fmt(a)} + ${fmt(b)}：从 ${fmt(a)} 往后数 ${fmt(b)} 个，得到 ${fmt(expr.value)}。`;
        else if (op === '-') steps = `先算 ${fmt(a)} - ${fmt(b)}：从 ${fmt(a)} 往回数 ${fmt(b)} 个，得到 ${fmt(expr.value)}。`;
        else if (op === '*') steps = `乘法可以想成“几个相同的数相加”，${fmt(a)} × ${fmt(b)} = ${fmt(expr.value)}。`;
        else steps = `除法可以想“${fmt(b)} 乘几等于 ${fmt(a)}”，答案是 ${fmt(expr.value)}。`;
      } else {
        steps = '有括号先算括号，再算乘除，最后算加减。一步一步来，别跳步。';
      }
      return `答案：${fmt(expr.value)}\n\n${steps}\n\n小肥鱼提醒：算完可以用估算检查一下，答案是不是在合理范围内。`;
    }

    function tutorReply(text, grade, currentQuestion) {
      const raw = String(text || '').trim();
      const lower = raw.toLowerCase();
      if (!raw) return { text: '小肥鱼在这里！你想先聊哪一科？', chips: ['给我出一道题', '讲讲分数', '怎么背单词'] };
      if (/告诉我答案|答案是什么|这题答案|答案呢/.test(raw)) {
        if (!currentQuestion) return { text: '先让小肥鱼给你出一道题吧，答完再对答案更有意思。', chips: ['给我出一道题', '讲讲分数'] };
        return {
          text: `这道题的答案是：${currentQuestion.options[currentQuestion.correct]}\n\n${currentQuestion.explanation}\n\n对了，答错也没关系，错题会自己游进错题礁。`,
          chips: ['再出一道题', '讲讲这类题', '换一题'],
        };
      }
      if (/给我提示|提示一下|怎么想|不会做/.test(raw)) {
        if (!currentQuestion) return { text: '先让小肥鱼给你出一道题，我再偷偷给你塞小抄。', chips: ['给我出一道题', '讲讲阅读'] };
        return { text: `小提示：${currentQuestion.hint || '先把题目里的关键词圈出来，再想想用哪个公式。'}`, chips: ['告诉我答案', '换一题', '再出一道题'] };
      }
      if (/换一题|再来一题|再出一道题/.test(raw)) {
        const subject = /语文|汉字|古诗/.test(raw) ? 'chinese' : /英语|单词|english/i.test(raw) ? 'english' : 'math';
        const q = makeQuestion(subject, grade);
        const letters = ['A', 'B', 'C', 'D'];
        return {
          text: `换一道 ${subject === 'math' ? '数学' : subject === 'chinese' ? '语文' : '英语'} 题：\n\n${q.prompt}\n\n${q.options.map((o, idx) => `${letters[idx]}. ${o}`).join('\n')}`,
          chips: ['告诉我答案', '给我提示', '换一题'],
          question: q,
        };
      }
      const candidates = [raw, raw.replace(/[^\d.+\-*/()×÷xX\s]/g, ' ')];
      let expr = null;
      for (const candidate of candidates) {
        expr = safeEvalExpression(candidate);
        if (expr) break;
      }
      if (expr) return { text: expressionReply(expr), chips: ['再来一题', '讲讲运算顺序', '给我出一道题'] };
      if (/出.*题|来一?道|给.*一道|练习|考考我/.test(raw)) {
        const subject = /语文|汉字|古诗/.test(raw) ? 'chinese' : /英语|单词|english/i.test(raw) ? 'english' : 'math';
        const q = makeQuestion(subject, grade);
        const letters = ['A', 'B', 'C', 'D'];
        const subjectName = { math: '数学', chinese: '语文', english: '英语' }[subject] || '数学';
        return {
          text: `来！一道 ${subjectName} 题：\n\n${q.prompt}\n\n${q.options.map((o, idx) => `${letters[idx]}. ${o}`).join('\n')}\n\n先自己想一想，再点“闯关岛”对答案。`,
          chips: ['告诉我答案', '给我提示', '换一题'],
          question: q,
        };
      }
      if (/不想学|好累|没意思|难过|哭|难死|放弃/.test(raw)) {
        return {
          text: '咕噜……小肥鱼把鳍搭在你肩上。\n\n不想学的时候，不用一下子做完一大张卷子。我们只做一件很小的事：\n\n1. 喝口水，伸个懒腰。\n2. 挑一道最简单的题。\n3. 做完就夸自己一句。\n\n要不要现在来一道 3 分钟就能搞定的小题？',
          chips: ['来一道简单题', '先休息一下', '讲讲分数'],
        };
      }
      if (/你好|嗨|hello|hi|在吗/.test(lower)) {
        return { text: '咕噜咕噜～小肥鱼在！今天想学数学、语文还是英语？', chips: ['给我出一道题', '讲讲分数', '怎么背单词'] };
      }
      const topic = TUTOR_TOPICS.find((item) => item.keys.some((k) => raw.includes(k) || lower.includes(k.toLowerCase())));
      if (topic) return { text: `${topic.title}\n\n${topic.text}`, chips: ['给我出一道题', '再讲一个知识点', '我懂了'] };
      if (/为什么/.test(raw)) {
        return {
          text: '问“为什么”是特别好的习惯！小肥鱼建议分三步找原因：\n\n1. 先找题目里的关键词。\n2. 想一想它和哪个公式/规则有关。\n3. 用一句自己的话复述原因。\n\n你把完整题目发给我，或者复制去问 DeepSeek 老师，小肥鱼陪你一起拆。',
          chips: ['给我一道数学题', '讲讲阅读', '怎么背单词'],
          canCopy: raw,
        };
      }
      return {
        text: '这道题有点超出小肥鱼的鱼脑容量啦，不过别急！\n\n你可以先做两件事：\n1. 把题目里的数字、关键词圈出来。\n2. 想一想它属于哪一科、哪个知识点。\n\n如果还是卡住，点下面的按钮复制问题，去问 DeepSeek 老师；小肥鱼也会在旁边给你加油。',
        chips: ['给我一道题', '讲讲阅读', '怎么背单词'],
        canCopy: raw,
      };
    }

    function makeVariant(mistake) {
      const subject = SUBJECTS.some((s) => s.id === mistake.subject) ? mistake.subject : 'math';
      const grade = clamp(Number(mistake.grade) || 1, 1, 6);
      const text = String(mistake.prompt || '');
      const expression = text.match(/(\d+(?:\.\d+)?)\s*([+\-×x*÷/])\s*(\d+(?:\.\d+)?)/);
      if (subject === 'math' && expression) {
        const op = expression[2];
        let a;
        let b;
        let answer;
        if (op === '÷' || op === '/') {
          b = ri(2, 9);
          answer = ri(2, 12);
          a = b * answer;
        } else if (op === '×' || op === 'x' || op === '*') {
          a = ri(2, 12);
          b = ri(2, 9);
          answer = a * b;
        } else if (op === '+') {
          a = ri(5, 40);
          b = ri(2, 30);
          answer = a + b;
        } else {
          a = ri(10, 60);
          b = ri(2, 9);
          answer = a - b;
        }
        const prompt = text.replace(expression[0], `${a} ${op} ${b}`).replace(/=\s*\d+(?:\.\d+)?/g, '= ?');
        const c = numericChoices(answer, [answer + 1, answer - 1, answer + 10]);
        return {
          subject,
          grade,
          prompt,
          ...c,
          sameType: true,
          hint: '这是同一题型的变式：数字变了，思路不变。',
          explanation: `把数字换掉再算一次：${a} ${op} ${b} = ${answer}。${mistake.explanation ? `原题的关键是：${mistake.explanation}` : ''}`,
          knowledgePoint: mistake.knowledgePoint || inferKnowledgePoint(subject, text, grade),
        };
      }
      if (subject === 'math') {
        const nums = [...text.matchAll(/\d+(?:\.\d+)?/g)].slice(0, 2);
        const addition = /一共|共有|总共|合计|又买|又来|又飞|合起来/.test(text);
        const subtraction = /还剩|剩下|吃了|用去|飞走|卖出|拿走|少了/.test(text);
        if (nums.length >= 2 && (addition || subtraction)) {
          let a = ri(8, 30);
          let b = ri(2, 15);
          let answer;
          if (subtraction) {
            if (a <= b) a = b + ri(3, 15);
            answer = a - b;
          } else {
            answer = a + b;
          }
          let replaced = 0;
          const prompt = text.replace(/\d+(?:\.\d+)?/g, () => {
            if (replaced === 0) { replaced += 1; return String(a); }
            if (replaced === 1) { replaced += 1; return String(b); }
            return String(ri(1, 5));
          });
          const c = numericChoices(answer, [answer + 1, answer - 1, answer + 10]);
          return {
            subject,
            grade,
            prompt,
            ...c,
            sameType: true,
            hint: '换了数字，还是同一类应用题。先找数量关系。',
            explanation: `把数字换掉后，列式 ${a} ${subtraction ? '-' : '+'} ${b} = ${answer}。${mistake.explanation ? `原题的关键是：${mistake.explanation}` : ''}`,
            knowledgePoint: mistake.knowledgePoint || inferKnowledgePoint(subject, text, grade),
          };
        }
      }
      const q = makeQuestion(subject, grade);
      return {
        ...q,
        prompt: q.prompt,
        sameType: false,
        knowledgePoint: q.knowledgePoint || inferKnowledgePoint(subject, q.prompt, grade),
        hint: q.knowledgePoint ? `想一想“${q.knowledgePoint}”里最关键的那一步。` : q.hint,
      };
    }

    function dateKeysBetween(startKey, endKey) {
      const out = [];
      const start = new Date(`${startKey}T00:00:00`);
      const end = new Date(`${endKey}T00:00:00`);
      if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) return out;
      const cursor = new Date(start);
      let guard = 0;
      while (cursor <= end && guard < 400) {
        out.push(dayKey(cursor));
        cursor.setDate(cursor.getDate() + 1);
        guard += 1;
      }
      return out;
    }

    function termStartKey() {
      const now = new Date();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      if (month >= 9) return dayKey(new Date(year, 8, 1));
      if (month >= 2) return dayKey(new Date(year, 1, 1));
      return dayKey(new Date(year - 1, 8, 1));
    }

    function escapeHtml(value) {
      return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    /*
     * The model sometimes returns LaTeX. A child should never see "\frac{7}{6}".
     * Normalize to readable math text ("7/6" or "(3x+3)/(6)") and let MathText
     * draw real stacked fractions in the UI.
     */
    function normalizeMathText(value) {
      let text = String(value ?? '');
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

    function mathNodes(value) {
      const text = normalizeMathText(value);
      if (!text) return [];
      const nodes = [];
      const pattern = /\(([^()\n]+)\)\s*\/\s*\(([^()\n]+)\)|(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/g;
      let last = 0;
      let match;
      while ((match = pattern.exec(text)) !== null) {
        if (match.index > last) nodes.push(text.slice(last, match.index));
        const num = (match[1] ?? match[3] ?? '').trim();
        const den = (match[2] ?? match[4] ?? '').trim();
        if (num && den) nodes.push({ num, den });
        else nodes.push(match[0]);
        last = pattern.lastIndex;
      }
      if (last < text.length) nodes.push(text.slice(last));
      return nodes;
    }

    function MathText({ text, className = '' }) {
      const nodes = mathNodes(text);
      return h(
        'span',
        { className: `xfe-math-text ${className}`.trim() },
        nodes.map((node, i) => (
          typeof node === 'string'
            ? node
            : h(
                'span',
                {
                  key: `frac-${i}`,
                  className: 'xfe-frac',
                  role: 'math',
                  'aria-label': `${node.den}分之${node.num}`,
                },
                h('span', { className: 'xfe-frac-num' }, node.num),
                h('span', { className: 'xfe-frac-den' }, node.den),
              )
        )),
      );
    }

    function buildLearningReport(data, startKey, endKey, label) {
      const keys = dateKeysBetween(startKey, endKey);
      const days = keys.map((key) => ({ key, ...(data.daily[key] || emptyDay()) }));
      const total = days.reduce((n, d) => n + (d.questions || 0), 0);
      const correct = days.reduce((n, d) => n + (d.correct || 0), 0);
      const minutes = days.reduce((n, d) => n + (d.minutes || 0), 0);
      const quizzes = days.reduce((n, d) => n + (d.quizzes || 0), 0);
      const mastered = days.reduce((n, d) => n + (d.mastered || 0), 0);
      const activeDays = days.filter((d) => (d.questions || 0) > 0 || (d.minutes || 0) > 0 || (d.mastered || 0) > 0 || (d.reviewed || 0) > 0).length;
      const bySubject = SUBJECTS.map((s) => {
        const q = days.reduce((n, d) => n + ((d.subjects && d.subjects[s.id] && d.subjects[s.id].q) || 0), 0);
        const c = days.reduce((n, d) => n + ((d.subjects && d.subjects[s.id] && d.subjects[s.id].c) || 0), 0);
        return { id: s.id, q, c, acc: pct(c, q) };
      });
      const best = days.slice().sort((a, b) => (b.questions || 0) - (a.questions || 0))[0];
      const startMs = new Date(`${startKey}T00:00:00`).getTime();
      const endMs = new Date(`${endKey}T23:59:59`).getTime();
      const rangeMistakes = (data.mistakes || []).filter((m) => m.createdAt >= startMs && m.createdAt <= endMs);
      const pointCounts = new Map();
      rangeMistakes.forEach((m) => {
        const key = m.knowledgePoint || '未标注知识点';
        pointCounts.set(key, (pointCounts.get(key) || 0) + 1);
      });
      const weakPoints = [...pointCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([name, count]) => ({ name, count }));
      const weakSubject = bySubject.filter((s) => s.q >= 3).sort((a, b) => a.acc - b.acc)[0];
      const strongest = bySubject.filter((s) => s.q >= 3).sort((a, b) => b.acc - a.acc)[0];
      const suggestions = [];
      if (weakSubject) {
        const subjectName = { math: '数学', chinese: '语文', english: '英语' }[weakSubject.id] || weakSubject.id;
        suggestions.push(`每天给${subjectName}留 5 分钟，先做 2 道简单题热身，再复盘 1 道错题。`);
      }
      if (weakPoints.length) suggestions.push(`把“${weakPoints[0].name}”当成下周的小目标：先看教材知识点，再做 2 道变式，最后讲给小肥鱼听。`);
      if (activeDays < 3) suggestions.push('把学习拆成 3 个 5 分钟的小段，比周末一次补很久更容易坚持。');
      if (mastered === 0) suggestions.push('错题不要只收藏：在错题礁点“变式再练”，连续答对 2 次，小肥鱼才会把它变成知识贝壳。');
      if (!suggestions.length) suggestions.push('保持现在的节奏，每周挑一个最想变强的知识点，做 3 次变式练习。');
      return {
        label,
        startKey,
        endKey,
        days: keys.length,
        activeDays,
        total,
        correct,
        accuracy: pct(correct, total),
        minutes,
        quizzes,
        mastered,
        rangeMistakes: rangeMistakes.length,
        pending: data.mistakes.length,
        shells: mastered,
        bySubject,
        bestDay: best && best.questions ? best : null,
        weakestSubject: weakSubject || null,
        strongestSubject: strongest || null,
        weakPoints,
        suggestions: suggestions.slice(0, 3),
        childName: data.name,
        generatedAt: Date.now(),
      };
    }

    function reportToText(report) {
      const lines = [
        `小肥鱼学情报告 · ${report.childName}`,
        `统计范围：${report.startKey} 至 ${report.endKey}（${report.days} 天）`,
        '',
        `学习概况：答题 ${report.total} 道，答对 ${report.correct} 道，正确率 ${report.accuracy}%，专注 ${report.minutes} 分钟，完成闯关 ${report.quizzes} 次。`,
        `学习习惯：有效学习 ${report.activeDays} 天，掌握错题 ${report.mastered} 道，当前待复习 ${report.pending} 道，知识贝壳 ${report.shells} 枚。`,
        '',
        '学科表现：',
        ...report.bySubject.map((s) => `- ${({ math: '数学', chinese: '语文', english: '英语' })[s.id] || s.id}：${s.q ? `${s.c}/${s.q}（${s.acc}%）` : '本阶段还没有练习'}`),
        '',
        report.weakPoints.length ? `重点知识点：${report.weakPoints.map((p) => `${p.name}（${p.count} 次）`).join('、')}` : '重点知识点：本阶段没有集中错题。',
        '',
        '小肥鱼建议：',
        ...report.suggestions.map((s) => `- ${s}`),
        '',
        `生成时间：${new Date(report.generatedAt).toLocaleString('zh-CN')}`,
      ];
      return lines.join('\n');
    }

    function questList(t, data) {
      const d = data.daily[dayKey()] || emptyDay();
      const claimed = data.claimed[dayKey()] || [];
      return [
        { id: 'q1', icon: '✅', label: '答对 8 道题', hint: '每答对一题都算', value: d.correct, target: 8, xp: 20, coins: 20, claimed: claimed.includes('q1') },
        { id: 'q2', icon: '🧹', label: '复习 2 道错题', hint: '在错题礁点“我懂了”', value: d.reviewed, target: 2, xp: 15, coins: 15, claimed: claimed.includes('q2') },
        { id: 'q3', icon: '🫧', label: '专注 10 分钟', hint: '在专注海域和小肥鱼一起', value: d.minutes, target: 10, xp: 25, coins: 25, claimed: claimed.includes('q3') },
      ];
    }

    const CSS = `
      .xfe-root, .xfe-root * { box-sizing: border-box; }
      .xfe-root {
        --xfe-ink: #1f2a5b;
        --xfe-ink-soft: #465184;
        --xfe-cream: #fff8e6;
        --xfe-paper: #fffdf7;
        --xfe-coral: #ff6f61;
        --xfe-sun: #ffd23f;
        --xfe-mint: #20c8b8;
        --xfe-sky: #7bdff2;
        --xfe-lilac: #b9a7ff;
        --xfe-pink: #ffb7d5;
        --xfe-navy: #1b2550;
        pointer-events: none;
        font-family: "Nunito", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif;
        color: var(--xfe-ink);
        -webkit-font-smoothing: antialiased;
      }
      .xfe-root button, .xfe-root input, .xfe-root select, .xfe-root textarea { font: inherit; }
      .xfe-root button { -webkit-tap-highlight-color: transparent; }
      .xfe-root ::selection { background: var(--xfe-sun); color: var(--xfe-ink); }

      .xfe-launcher-wrap {
        position: fixed; right: 24px; bottom: 92px; z-index: 2147483000;
        display: flex; align-items: flex-end; gap: 9px; pointer-events: none;
        font-family: "Nunito", "PingFang SC", "Microsoft YaHei", sans-serif;
      }
      .xfe-launcher-bubble {
        pointer-events: none; max-width: 168px; margin-bottom: 18px; padding: 9px 13px;
        background: #fffdf7; border: 2px solid #1f2a5b; border-radius: 16px 16px 4px 16px;
        box-shadow: 0 4px 0 rgba(31,42,91,.28); color: #1f2a5b; font-size: 12px; font-weight: 900;
        line-height: 1.35; animation: xfe-float 4.2s ease-in-out infinite;
      }
      .xfe-launcher {
        pointer-events: auto; position: relative; width: 84px; height: 84px; padding: 0;
        border: 3px solid #1f2a5b; border-radius: 30px 30px 26px 26px; cursor: grab; touch-action: none;
        background: linear-gradient(160deg, #fff7c9, #ffd23f 55%, #ff9c5b);
        box-shadow: 0 7px 0 #1f2a5b, 0 14px 28px rgba(13,24,60,.35);
        transition: transform .18s ease, box-shadow .18s ease; overflow: visible;
        user-select: none; -webkit-user-select: none;
      }
      .xfe-launcher:hover { transform: translateY(-4px) rotate(-2deg); box-shadow: 0 11px 0 #1f2a5b, 0 18px 32px rgba(13,24,60,.38); }
      .xfe-launcher:active { cursor: grabbing; transform: translateY(2px) scale(.97); box-shadow: 0 3px 0 #1f2a5b; }
      .xfe-launcher-grip {
        position: absolute; left: 7px; top: 7px; font-size: 13px; line-height: 1;
        color: #1f2a5b; opacity: .5; letter-spacing: 0; pointer-events: none;
      }
      .xfe-launcher img { width: 100%; height: 100%; display: block; object-fit: contain; padding: 4px;  }
      .xfe-launcher-level {
        position: absolute; right: -8px; top: -8px; min-width: 30px; height: 26px; padding: 0 8px;
        display: grid; place-items: center; border: 2px solid #1f2a5b; border-radius: 999px;
        background: var(--xfe-coral); color: #fff; font-size: 11px; font-weight: 900;
        box-shadow: 0 3px 0 #1f2a5b;
      }
      .xfe-launcher-star { position: absolute; left: -10px; bottom: 5px; font-size: 22px; transform: rotate(-12deg); animation: xfe-wiggle 2.4s ease-in-out infinite; }

      @keyframes xfe-float { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-7px) rotate(1deg); } }
      @keyframes xfe-bob { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-9px) rotate(1.5deg); } }
      @keyframes xfe-wiggle { 0%,100% { transform: rotate(-12deg) scale(1); } 50% { transform: rotate(8deg) scale(1.08); } }
      @keyframes xfe-pop { 0% { transform: scale(.6); opacity: 0; } 70% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
      @keyframes xfe-rise { 0% { transform: translateY(16px) scale(.8); opacity: 0; } 20% { opacity: .55; } 100% { transform: translateY(-120px) scale(1.2); opacity: 0; } }
      @keyframes xfe-confetti { 0% { transform: translate3d(0,-20px,0) rotate(0); opacity: 1; } 100% { transform: translate3d(var(--dx), 110vh, 0) rotate(720deg); opacity: .1; } }
      @keyframes xfe-shimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
      @keyframes xfe-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }

      .xfe-backdrop {
        position: fixed; inset: 0; z-index: 2147483000; padding: 4vh 2vw;
        display: flex; align-items: center; justify-content: center;
        pointer-events: auto;
        background: radial-gradient(circle at 18% 12%, rgba(123,223,242,.32), transparent 34%),
                    radial-gradient(circle at 82% 84%, rgba(255,183,213,.24), transparent 30%),
                    rgba(14,23,54,.68);
        backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);
        animation: xfe-pop .22s ease-out;
      }
      .xfe-app {
        position: relative; width: min(1260px, 100%); height: min(870px, calc(100vh - 36px));
        display: grid; grid-template-columns: 98px minmax(0,1fr) 302px;
        background: var(--xfe-cream); border: 3px solid var(--xfe-ink); border-radius: 34px;
        box-shadow: 0 16px 0 rgba(8,15,40,.38), 0 36px 90px rgba(4,10,30,.48);
        overflow: hidden; isolation: isolate;
      }
      .xfe-app.is-overlay {
        width: min(2100px, 100%); height: 100%; max-width: none;
        grid-template-columns: 118px minmax(0,1fr) 352px;
        border-radius: 30px;
      }
      .xfe-app.is-overlay .xfe-main { padding: 24px 30px 40px; }
      .xfe-app.is-overlay .xfe-header { gap: 12px; margin-bottom: 22px; }
      .xfe-app.is-overlay .xfe-page-head { gap: 16px; margin-bottom: 20px; }
      .xfe-app.is-overlay .xfe-home-grid { gap: 18px; }
      .xfe-app.is-overlay .xfe-question-card,
      .xfe-app.is-overlay .xfe-quest-card,
      .xfe-app.is-overlay .xfe-card-pad { padding: 20px; }
      .xfe-app.is-overlay .xfe-section-head { margin: 26px 0 12px; }
      .xfe-app.is-overlay .xfe-subjects { gap: 16px; }
      .xfe-app.is-overlay .xfe-bottom-grid { gap: 18px; margin-top: 18px; }
      .xfe-app.is-overlay .xfe-practice-grid { gap: 14px; }
      .xfe-app.is-overlay .xfe-quest-list { gap: 11px; margin-top: 15px; }
      .xfe-app.is-overlay .xfe-mistake-list { gap: 14px; }
      .xfe-app.is-overlay .xfe-tutor { gap: 18px; }
      .xfe-app.is-overlay .xfe-growth-grid { gap: 16px; }
      .xfe-app.is-overlay .xfe-report-cols { gap: 18px; margin-top: 18px; }
      .xfe-app.is-overlay .xfe-side { padding: 24px 20px 30px; }
      .xfe-app.is-overlay .xfe-side-card { padding: 17px; margin-bottom: 16px; }
      .xfe-app.is-overlay .xfe-library-book { padding: 20px 22px; }
      .xfe-app.is-overlay .xfe-library-units { gap: 9px; margin-top: 15px; }
      .xfe-app.is-overlay .xfe-library-unit-head { padding: 11px 12px; }
      @media (max-height: 900px) {
        .xfe-backdrop { padding: 12px 2vw; }
      }
      @media (min-width: 2200px) {
        .xfe-backdrop { padding: 10vh 2vw; }
      }
      @media (min-width: 761px) and (max-width: 1499px) {
        .xfe-app.is-overlay { grid-template-columns: 110px minmax(0,1fr) 330px; }
        .xfe-app.is-overlay .xfe-hero { grid-template-columns: minmax(0,1fr) 250px; padding: 22px; }
        .xfe-app.is-overlay .xfe-hero h2 { font-size: clamp(28px, 2.8vw, 38px); }
      }

      /* Large screens: keep the same playful proportions, but make everything
         bigger and airier for kids sitting farther from a desktop monitor. */
      @media (min-width: 1500px) {
        .xfe-app.is-overlay { grid-template-columns: 126px minmax(0,1fr) 372px; }
        .xfe-app.is-overlay .xfe-main { padding: 28px 36px 34px; }
        .xfe-app.is-overlay .xfe-header { gap: 14px; margin-bottom: 24px; }
        .xfe-app.is-overlay .xfe-header-title { font-size: 14px; }
        .xfe-app.is-overlay .xfe-nav button { min-height: 66px; font-size: 12px; }
        .xfe-app.is-overlay .xfe-nav button .xfe-nav-icon { font-size: 24px; }
        .xfe-app.is-overlay .xfe-brand-text { font-size: 10px; }
        .xfe-app.is-overlay .xfe-grade-select { height: 34px; font-size: 13px; }
        .xfe-app.is-overlay .xfe-profile-switch { min-height: 34px; font-size: 12px; }
        .xfe-app.is-overlay .xfe-profile-avatar { width: 28px; height: 28px; font-size: 17px; }
        .xfe-app.is-overlay .xfe-chip { min-height: 34px; padding: 5px 12px; font-size: 14px; }
        .xfe-app.is-overlay .xfe-icon-btn { width: 38px; height: 38px; font-size: 17px; }
        .xfe-app.is-overlay .xfe-page-head h1 { font-size: clamp(32px, 2.4vw, 46px); }
        .xfe-app.is-overlay .xfe-page-head p { font-size: 16px; line-height: 1.6; }
        .xfe-app.is-overlay .xfe-kicker { font-size: 12px; }
        .xfe-app.is-overlay .xfe-card-sub { font-size: 15px; }
        .xfe-app.is-overlay .xfe-section-head h3 { font-size: 20px; }
        .xfe-app.is-overlay .xfe-section-head p { font-size: 12px; }
        .xfe-app.is-overlay .xfe-hero { min-height: 300px; padding: 24px; }
        .xfe-app.is-overlay .xfe-hero h2 { font-size: clamp(36px, 3vw, 48px); }
        .xfe-app.is-overlay .xfe-hero p { font-size: 16px; line-height: 1.65; }
        .xfe-app.is-overlay .xfe-hero-stats { margin-top: 10px; }
        .xfe-app.is-overlay .xfe-subject-card { min-height: 180px; }
        .xfe-app.is-overlay .xfe-daily-card { padding: 14px; margin-top: 14px; }
        .xfe-app.is-overlay .xfe-section-head { margin: 20px 0 10px; }
        .xfe-app.is-overlay .xfe-daily-head h3 { font-size: 20px; }
        .xfe-app.is-overlay .xfe-daily-head p { font-size: 12px; }
        .xfe-app.is-overlay .xfe-daily-grid { gap: 12px; margin-top: 12px; }
        .xfe-app.is-overlay .xfe-daily-quest { padding: 10px; }
        .xfe-app.is-overlay .xfe-daily-copy b { font-size: 13px; }
        .xfe-app.is-overlay .xfe-daily-copy small { font-size: 10px; }
        .xfe-app.is-overlay .xfe-daily-claim { min-height: 32px; padding: 4px 9px; font-size: 10px; }
        .xfe-app.is-overlay .xfe-hero-stat { min-height: 34px; padding: 4px 10px; font-size: 11px; }
        .xfe-app.is-overlay .xfe-hero-stat b { font-size: 15px; }
        .xfe-app.is-overlay .xfe-hero-stat small { font-size: 10px; }
        .xfe-app.is-overlay .xfe-recent-card { padding: 18px; }
        .xfe-app.is-overlay .xfe-recent-head h4 { font-size: 18px; }
        .xfe-app.is-overlay .xfe-recent-item span { font-size: 12px; }
        .xfe-app.is-overlay .xfe-recent-item small { font-size: 9px; }
        .xfe-app.is-overlay .xfe-focus-card,
        .xfe-app.is-overlay .xfe-tip-card,
        .xfe-app.is-overlay .xfe-recent-card { min-height: 0; }
        .xfe-app.is-overlay .xfe-quest-card { min-height: 480px; }
        .xfe-app.is-overlay .xfe-subject-card { padding: 20px 18px 17px; }
        .xfe-app.is-overlay .xfe-subject-icon { width: 48px; height: 48px; font-size: 24px; }
        .xfe-app.is-overlay .xfe-subject-card h4 { font-size: 22px; }
        .xfe-app.is-overlay .xfe-subject-card p { font-size: 13px; }
        .xfe-app.is-overlay .xfe-subject-meta { font-size: 11px; }
        .xfe-app.is-overlay .xfe-quest-label { font-size: 14px; }
        .xfe-app.is-overlay .xfe-quest-hint { font-size: 12px; }
        .xfe-app.is-overlay .xfe-quest button { min-height: 32px; font-size: 11px; padding: 5px 10px; }
        .xfe-app.is-overlay .xfe-focus-copy h4 { font-size: 19px; }
        .xfe-app.is-overlay .xfe-focus-copy p { font-size: 13px; }
        .xfe-app.is-overlay .xfe-focus-ring { width: 98px; height: 98px; }
        .xfe-app.is-overlay .xfe-focus-time { font-size: 20px; }
        .xfe-app.is-overlay .xfe-focus-modes button { min-height: 29px; font-size: 11px; padding: 3px 9px; }
        .xfe-app.is-overlay .xfe-tip-card h4 { font-size: 18px; }
        .xfe-app.is-overlay .xfe-tip-card p { font-size: 14px; }
        .xfe-app.is-overlay .xfe-btn { min-height: 42px; padding: 8px 17px; font-size: 14px; }
        .xfe-app.is-overlay .xfe-btn.is-sm { min-height: 35px; padding: 6px 13px; font-size: 12px; }
        .xfe-app.is-overlay .xfe-side-title { font-size: 14px; }
        .xfe-app.is-overlay .xfe-side-speech { font-size: 12px; }
        .xfe-app.is-overlay .xfe-side-row { padding: 9px 10px; font-size: 11px; }
        .xfe-app.is-overlay .xfe-side-mini b { font-size: 18px; }
        .xfe-app.is-overlay .xfe-side-mini small { font-size: 10px; }
        .xfe-app.is-overlay .xfe-mistake h4 { font-size: 17px; }
        .xfe-app.is-overlay .xfe-mistake p { font-size: 14px; }
        .xfe-app.is-overlay .xfe-answer { font-size: 11px; }
        .xfe-app.is-overlay .xfe-question-prompt { font-size: clamp(26px, 2.2vw, 36px); }
        .xfe-app.is-overlay .xfe-option { min-height: 72px; font-size: 18px; }
        .xfe-app.is-overlay .xfe-option-letter { width: 32px; height: 32px; font-size: 13px; }
        .xfe-app.is-overlay .xfe-feedback-title { font-size: 17px; }
        .xfe-app.is-overlay .xfe-feedback p { font-size: 14px; }
        .xfe-app.is-overlay .xfe-msg-bubble { font-size: 15px; line-height: 1.65; }
        .xfe-app.is-overlay .xfe-chat-head b { font-size: 15px; }
        .xfe-app.is-overlay .xfe-chat-head small { font-size: 11px; }
        .xfe-app.is-overlay .xfe-tutor-side h4 { font-size: 14px; }
        .xfe-app.is-overlay .xfe-tutor-side p,
        .xfe-app.is-overlay .xfe-tutor-side ul { font-size: 11.5px; }
        .xfe-app.is-overlay .xfe-library-book-title { font-size: 23px; }
        .xfe-app.is-overlay .xfe-library-unit-title { font-size: 15px; }
        .xfe-app.is-overlay .xfe-library-unit-count { font-size: 10px; }
        .xfe-app.is-overlay .xfe-library-point { font-size: 12px; padding: 7px 12px; }
        .xfe-app.is-overlay .xfe-library-shelf-copy b { font-size: 12px; }
        .xfe-app.is-overlay .xfe-stat-card b { font-size: 32px; }
        .xfe-app.is-overlay .xfe-stat-card small { font-size: 11px; }
        .xfe-app.is-overlay .xfe-comment p { font-size: 13px; }
        .xfe-app.is-overlay .xfe-advice { font-size: 12px; }
        .xfe-app.is-overlay .xfe-pet-card h3 { font-size: 22px; }
        .xfe-app.is-overlay .xfe-pet-card p { font-size: 12px; }
        .xfe-app.is-overlay .xfe-empty b { font-size: 19px; }
        .xfe-app.is-overlay .xfe-empty p { font-size: 13px; }
        .xfe-app.is-overlay .xfe-filter { font-size: 12px; padding: 7px 13px; }
        .xfe-app.is-overlay .xfe-tag { font-size: 10px; padding: 3px 9px; }
      }
      .xfe-app:before {
        content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
        background-image: radial-gradient(rgba(31,42,91,.055) 1.4px, transparent 1.4px);
        background-size: 18px 18px; opacity: .8;
      }

      .xfe-rail {
        position: relative; display: flex; flex-direction: column; align-items: center;
        padding: 18px 10px 14px; background: linear-gradient(180deg, #1b2550, #24336e 60%, #172047);
        color: #fff; border-right: 3px solid var(--xfe-ink); overflow: hidden;
      }
      .xfe-rail:before {
        content: ""; position: absolute; width: 160px; height: 160px; left: -80px; top: 90px;
        border-radius: 50%; background: rgba(123,223,242,.11); box-shadow: 0 0 0 18px rgba(123,223,242,.05);
      }
      .xfe-brand {
        width: 58px; height: 58px; display: grid; place-items: center; border: 3px solid #fff;
        border-radius: 22px; background: linear-gradient(150deg, #ffd23f, #ff8a63);
        box-shadow: 0 5px 0 rgba(0,0,0,.28); transform: rotate(-4deg); overflow: hidden;
      }
      .xfe-brand img { width: 100%; height: 100%; object-fit: contain; padding: 2px;  }
      .xfe-brand-text { margin: 8px 0 18px; font-size: 9px; font-weight: 900; letter-spacing: .12em; color: #cfe8ff; text-align: center; line-height: 1.35; }
      .xfe-nav { display: flex; flex-direction: column; gap: 7px; width: 100%; }
      .xfe-nav button {
        position: relative; width: 100%; min-height: 62px; padding: 7px 2px 6px; border: 0; border-radius: 18px;
        background: transparent; color: #c7d6ff; cursor: pointer; display: flex; flex-direction: column;
        align-items: center; justify-content: center; gap: 3px; font-size: 9px; font-weight: 900;
        transition: background .16s ease, color .16s ease, transform .16s ease;
      }
      .xfe-nav button .xfe-nav-icon { font-size: 21px; line-height: 1; filter: drop-shadow(0 2px 0 rgba(0,0,0,.18)); }
      .xfe-nav button:hover { background: rgba(255,255,255,.1); color: #fff; transform: translateY(-1px); }
      .xfe-nav button.is-active { background: #fff8e6; color: var(--xfe-ink); box-shadow: 0 4px 0 rgba(0,0,0,.25); }
      .xfe-nav button.is-active:after {
        content: ""; position: absolute; right: -9px; top: 50%; width: 10px; height: 10px;
        background: #fff8e6; transform: translateY(-50%) rotate(45deg); border-radius: 2px;
      }
      .xfe-nav-dot { position: absolute; right: 8px; top: 7px; width: 8px; height: 8px; border-radius: 50%; background: var(--xfe-coral); border: 1.5px solid #fff; }
      .xfe-rail-bottom { margin-top: auto; display: flex; flex-direction: column; align-items: center; gap: 8px; }
      .xfe-mini-avatar { width: 46px; height: 46px; border-radius: 16px; border: 2px solid rgba(255,255,255,.7); background: #ffd23f; overflow: hidden; }
      .xfe-mini-avatar img { width: 100%; height: 100%; object-fit: contain;  }
      .xfe-rail-xp { font-size: 8px; font-weight: 900; color: #cfe8ff; text-align: center; line-height: 1.4; }

      .xfe-main { min-width: 0; overflow-y: auto; overflow-x: hidden; padding: 20px 26px 32px; scrollbar-width: thin; scrollbar-color: #c9c3ad transparent; }
      .xfe-main::-webkit-scrollbar, .xfe-side::-webkit-scrollbar, .xfe-chat-scroll::-webkit-scrollbar { width: 8px; }
      .xfe-main::-webkit-scrollbar-thumb, .xfe-side::-webkit-scrollbar-thumb, .xfe-chat-scroll::-webkit-scrollbar-thumb { background: #cfc7b0; border-radius: 99px; }
      .xfe-header { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 18px; }
      .xfe-header-title { font-size: 12px; font-weight: 900; letter-spacing: .08em; color: var(--xfe-ink-soft); }
      .xfe-header-spacer { flex: 1; }
      .xfe-chip {
        display: inline-flex; align-items: center; gap: 6px; min-height: 34px; padding: 5px 10px;
        border: 2px solid var(--xfe-ink); border-radius: 999px; background: #fff; font-size: 12px;
        font-weight: 900; box-shadow: 0 3px 0 rgba(31,42,91,.18); white-space: nowrap;
      }
      .xfe-chip.is-sun { background: #ffe98a; }
      .xfe-chip.is-mint { background: #c9fbf3; }
      .xfe-chip.is-coral { background: #ffd9d3; }
      .xfe-grade-select {
        height: 34px; padding: 0 8px; border: 2px solid var(--xfe-ink); border-radius: 999px;
        background: #fff; color: var(--xfe-ink); font-size: 12px; font-weight: 900; cursor: pointer; outline: none;
      }
      .xfe-grade-wrap {
        display: inline-flex; align-items: center; gap: 2px; padding: 0 3px 0 10px; height: 34px;
        border: 2px solid var(--xfe-ink); border-radius: 999px; background: #fff;
        box-shadow: 0 3px 0 rgba(31,42,91,.18);
      }
      .xfe-grade-label { font-size: 10px; font-weight: 900; color: var(--xfe-ink-soft); letter-spacing: .04em; }
      .xfe-grade-wrap .xfe-grade-select { height: 28px; border: none; background: transparent; box-shadow: none; padding: 0 4px; }
      .xfe-icon-btn {
        position: relative; width: 36px; height: 36px; display: grid; place-items: center; border: 2px solid var(--xfe-ink);
        border-radius: 13px; background: #fff; color: var(--xfe-ink); font-size: 16px; cursor: pointer;
        box-shadow: 0 3px 0 rgba(31,42,91,.18); transition: transform .15s ease, box-shadow .15s ease;
      }
      .xfe-icon-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 0 rgba(31,42,91,.18); }
      .xfe-icon-btn.is-close { background: var(--xfe-coral); color: #fff; }
      .xfe-update-dot {
        position: absolute; top: -3px; right: -3px; width: 10px; height: 10px; border-radius: 50%;
        background: var(--xfe-coral); border: 1.5px solid var(--xfe-paper); box-shadow: 0 1px 0 rgba(31,42,91,.3);
      }
      .xfe-update-box { padding: 10px 11px; border: 1.5px dashed var(--xfe-line-strong); border-radius: 11px; background: #fff; }
      .xfe-update-box-head { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
      .xfe-update-box-head b { font-size: 11px; }
      .xfe-update-box-head span { margin-left: auto; color: var(--xfe-ink-soft); font-size: 9px; font-weight: 800; }
      .xfe-update-box p { margin: 6px 0 0; color: var(--xfe-ink-soft); font-size: 10px; line-height: 1.55; font-weight: 700; }
      .xfe-update-actions { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }

      .xfe-page-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
      .xfe-page-head h1 { margin: 0; font-size: clamp(24px, 3vw, 34px); line-height: 1.08; letter-spacing: -.03em; font-weight: 900; }
      .xfe-page-head p { margin: 6px 0 0; font-size: 13px; line-height: 1.5; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-kicker { display: inline-flex; align-items: center; gap: 6px; margin-bottom: 7px; padding: 3px 9px; border-radius: 999px; background: var(--xfe-sun); border: 1.5px solid var(--xfe-ink); font-size: 9px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }

      .xfe-card { border: 2px solid var(--xfe-ink); border-radius: 23px; background: var(--xfe-paper); box-shadow: 0 5px 0 rgba(31,42,91,.2); }
      .xfe-card-soft { border: 2px dashed rgba(31,42,91,.24); border-radius: 20px; background: rgba(255,255,255,.66); }
      .xfe-card-pad { padding: 18px; }
      .xfe-card-title { display: flex; align-items: center; gap: 8px; margin: 0 0 3px; font-size: 16px; font-weight: 900; letter-spacing: -.02em; }
      .xfe-card-sub { margin: 0; font-size: 11px; line-height: 1.45; color: var(--xfe-ink-soft); font-weight: 700; }

      .xfe-hero {
        position: relative; min-height: 230px; display: grid; grid-template-columns: minmax(0,1.15fr) minmax(170px,.85fr);
        gap: 8px; padding: 24px 24px 20px; overflow: hidden;
        background: radial-gradient(circle at 86% 24%, #fff6be, transparent 30%),
                    linear-gradient(128deg, #fff, #fff4d1 52%, #ffe0c7);
      }
      .xfe-hero:before { content: "🫧"; position: absolute; right: 27px; top: 17px; font-size: 25px; animation: xfe-float 4s ease-in-out infinite; opacity: .9; }
      .xfe-hero:after { content: "✨"; position: absolute; left: 46%; bottom: 15px; font-size: 20px; animation: xfe-wiggle 3s ease-in-out infinite; }
      .xfe-hero-copy { align-self: center; position: relative; z-index: 1; }
      .xfe-hero h2 { margin: 0 0 8px; font-size: clamp(26px, 3.2vw, 42px); line-height: 1.02; letter-spacing: -.045em; font-weight: 900; }
      .xfe-hero p { margin: 0; max-width: 380px; font-size: 13px; line-height: 1.6; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-hero-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 17px; }
      .xfe-hero-mascot { position: relative; align-self: end; justify-self: center; width: min(230px, 100%); }
      .xfe-hero-mascot .xfe-speech { position: absolute; right: -6px; top: -8px; z-index: 4; max-width: 150px; font-size: 10px; transform: rotate(2deg); }
      .xfe-hero-stats { display: flex; align-items: stretch; gap: 7px; flex-wrap: wrap; margin-top: 13px; }
      .xfe-hero-stat {
        display: flex; align-items: center; gap: 5px; min-height: 34px; padding: 4px 9px;
        border: 1.5px solid rgba(31,42,91,.18); border-radius: 999px; background: rgba(255,255,255,.72);
        color: var(--xfe-ink); font-size: 10px; font-weight: 800;
      }
      .xfe-hero-stat b { font-size: 14px; letter-spacing: -.02em; }
      .xfe-hero-stat small { color: var(--xfe-ink-soft); font-size: 9px; font-weight: 700; }

      .xfe-daily-card { padding: 18px; margin-top: 18px; }
      .xfe-daily-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
      .xfe-daily-head h3 { margin: 0; color: var(--xfe-ink); font-size: 18px; font-weight: 900; }
      .xfe-daily-head p { margin: 3px 0 0; color: var(--xfe-ink-soft); font-size: 11px; font-weight: 700; }
      .xfe-daily-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 12px; }
      .xfe-daily-quest {
        display: grid; grid-template-columns: 38px minmax(0,1fr) auto; gap: 8px; align-items: center;
        padding: 10px; border: 1.5px solid rgba(31,42,91,.14); border-radius: 15px; background: #f7f4e8;
      }
      .xfe-daily-quest.is-done { background: var(--xfe-mint-soft); border-color: var(--xfe-mint-ink); }
      .xfe-daily-quest.is-claimed { opacity: .72; }
      .xfe-daily-icon { width: 38px; height: 38px; display: grid; place-items: center; border: 1.5px solid rgba(31,42,91,.16); border-radius: 12px; background: #fff; font-size: 18px; }
      .xfe-daily-copy { min-width: 0; }
      .xfe-daily-copy b { display: block; color: var(--xfe-ink); font-size: 11px; line-height: 1.25; }
      .xfe-daily-copy small { display: block; margin-top: 2px; color: var(--xfe-ink-soft); font-size: 9px; font-weight: 700; line-height: 1.3; }
      .xfe-daily-claim {
        min-height: 29px; padding: 3px 8px; border: 1.5px solid var(--xfe-ink); border-radius: 9px;
        background: var(--xfe-sun); color: var(--xfe-ink); font-size: 9px; font-weight: 900; cursor: pointer;
        box-shadow: 0 2px 0 rgba(31,42,91,.22); white-space: nowrap;
      }
      .xfe-daily-claim:disabled { background: #eee9da; color: #9b967f; border-color: rgba(31,42,91,.2); box-shadow: none; cursor: default; }
      .xfe-daily-foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; margin-top: 10px; padding-top: 9px; border-top: 1px dashed var(--xfe-line); color: var(--xfe-ink-soft); font-size: 9px; font-weight: 700; }
      .xfe-bottom-grid-3 { grid-template-columns: 1.05fr .95fr .9fr; }
      .xfe-bottom-grid.xfe-bottom-grid-3 { grid-template-columns: 1.05fr .95fr .9fr; }
      @media (max-width: 1400px) {
        .xfe-daily-grid { grid-template-columns: 1fr 1fr; }
        .xfe-bottom-grid.xfe-bottom-grid-3 { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 1120px) {
        .xfe-bottom-grid.xfe-bottom-grid-3 { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 760px) {
        .xfe-bottom-grid.xfe-bottom-grid-3 { grid-template-columns: 1fr; }
      }
      .xfe-recent-card { padding: 16px; background: linear-gradient(145deg, #fff, #f8f4e8); }
      .xfe-recent-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .xfe-recent-head h4 { margin: 0; color: var(--xfe-ink); font-size: 16px; }
      .xfe-recent-list { display: flex; flex-direction: column; gap: 6px; margin-top: 9px; }
      .xfe-recent-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 9px; border: 1px solid var(--xfe-line); border-radius: 10px; background: #fff; color: var(--xfe-ink); text-align: left; cursor: pointer; }
      .xfe-recent-item span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-weight: 800; }
      .xfe-recent-item small { flex: 0 0 auto; color: var(--xfe-coral-ink); font-size: 8px; font-weight: 900; }
      .xfe-resume-banner {
        display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;
        margin-bottom: 14px; padding: 11px 13px; border: 2px solid var(--xfe-mint-ink); border-radius: 14px;
        background: var(--xfe-mint-soft); box-shadow: var(--xfe-shadow-hard-xs);
      }
      .xfe-resume-banner b { display: block; color: var(--xfe-ink); font-size: 12px; }
      .xfe-resume-banner small { display: block; margin-top: 2px; color: var(--xfe-ink-soft); font-size: 9px; font-weight: 700; }

      .xfe-btn {
        display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 42px;
        padding: 9px 18px; border: 2px solid var(--xfe-ink); border-radius: 14px; cursor: pointer;
        background: #fff; color: var(--xfe-ink); font-size: 13px; font-weight: 900;
        box-shadow: 0 4px 0 var(--xfe-ink); transition: transform .14s ease, box-shadow .14s ease, filter .14s ease;
        text-decoration: none; line-height: 1.15;
      }
      .xfe-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 0 var(--xfe-ink); filter: brightness(1.02); }
      .xfe-btn:active { transform: translateY(2px); box-shadow: 0 2px 0 var(--xfe-ink); }
      .xfe-btn:disabled { cursor: not-allowed; opacity: .55; transform: none; box-shadow: 0 4px 0 var(--xfe-ink); filter: grayscale(.2); }
      .xfe-btn.is-primary { background: var(--xfe-coral); color: #fff; }
      .xfe-btn.is-sun { background: var(--xfe-sun); }
      .xfe-btn.is-mint { background: var(--xfe-mint); color: #073b38; }
      .xfe-btn.is-ghost { background: rgba(255,255,255,.55); box-shadow: 0 3px 0 rgba(31,42,91,.25); }
      .xfe-btn.is-sm { min-height: 32px; padding: 5px 11px; font-size: 11px; border-radius: 11px; box-shadow: 0 3px 0 var(--xfe-ink); }
      .xfe-btn.is-full { width: 100%; }

      .xfe-mascot { position: relative; z-index: 2; width: 100%; aspect-ratio: 1 / 1; display: grid; place-items: center; }
      .xfe-mascot-blob {
        position: absolute; inset: 8% 2% 2%; border-radius: 48% 52% 43% 57% / 45% 45% 55% 55%;
        background: radial-gradient(circle at 32% 24%, #d9f8ff, #9ae6f4 46%, #65cbe1);
        border: 2px dashed rgba(31,42,91,.35); box-shadow: inset 0 -12px 0 rgba(31,42,91,.06);
        animation: xfe-float 5.2s ease-in-out infinite;
      }
      .xfe-mascot-img { position: relative; z-index: 2; width: 94%; height: 94%; object-fit: contain;  filter: drop-shadow(0 12px 10px rgba(31,42,91,.2)); animation: xfe-bob 4.4s ease-in-out infinite; }
      .xfe-mascot-img.is-hungry { animation: xfe-bob 4.4s ease-in-out infinite, xfe-pet-nudge 3.2s ease-in-out infinite; }
      .xfe-mascot-img.is-faint {
        animation: none; transform: rotate(76deg) translateY(16%) scale(.94);
        filter: drop-shadow(0 4px 6px rgba(31,42,91,.24)) saturate(.7) brightness(.95);
      }
      @keyframes xfe-pet-nudge {
        0%, 100% { margin-top: 0; }
        12%, 22% { margin-top: -5px; }
        30% { margin-top: 0; }
        46%, 56% { margin-top: -3px; }
        64% { margin-top: 0; }
      }
      .xfe-mascot-fallback { position: relative; z-index: 2; width: 86%; height: 86%; animation: xfe-bob 4.4s ease-in-out infinite; }
      .xfe-accessory { position: absolute; z-index: 5; transform: translate(-50%, -50%); font-size: clamp(24px, 4vw, 43px); filter: drop-shadow(0 3px 0 rgba(31,42,91,.2)); pointer-events: none; }
      .xfe-mascot-spark { position: absolute; z-index: 4; font-size: 18px; animation: xfe-wiggle 2.5s ease-in-out infinite; }
      .xfe-mascot-mood { position: absolute; z-index: 6; right: 4%; top: 4%; font-size: clamp(22px, 3vw, 34px); animation: xfe-wiggle 2s ease-in-out infinite; filter: drop-shadow(0 3px 0 rgba(31,42,91,.18)); }

      .xfe-speech {
        position: relative; display: inline-block; padding: 9px 12px; background: #fff; border: 2px solid var(--xfe-ink);
        border-radius: 15px; font-size: 11px; line-height: 1.35; font-weight: 900; box-shadow: 0 3px 0 rgba(31,42,91,.16);
      }
      .xfe-speech:after { content: ""; position: absolute; left: 18px; bottom: -8px; width: 12px; height: 12px; background: #fff; border-right: 2px solid var(--xfe-ink); border-bottom: 2px solid var(--xfe-ink); transform: rotate(45deg); }

      .xfe-home-grid { display: grid; grid-template-columns: minmax(0,1.25fr) minmax(255px,.75fr); gap: 16px; align-items: stretch; }
      .xfe-quest-card { display: flex; flex-direction: column; padding: 18px; background: #fff; }
      .xfe-quest-list { display: flex; flex-direction: column; gap: 9px; margin-top: 13px; flex: 1; }
      .xfe-quest { display: grid; grid-template-columns: 34px minmax(0,1fr) auto; gap: 9px; align-items: center; padding: 8px; border-radius: 14px; background: #f7f4e8; border: 1.5px solid rgba(31,42,91,.12); }
      .xfe-quest.is-done { background: #d8faf1; border-color: rgba(32,200,184,.5); }
      .xfe-quest-icon { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 11px; background: #fff; font-size: 17px; border: 1.5px solid rgba(31,42,91,.12); }
      .xfe-quest-label { font-size: 11px; font-weight: 900; line-height: 1.2; }
      .xfe-quest-hint { margin-top: 2px; font-size: 9px; color: var(--xfe-ink-soft); font-weight: 700; line-height: 1.2; }
      .xfe-quest-progress { margin-top: 5px; height: 6px; border-radius: 99px; background: rgba(31,42,91,.1); overflow: hidden; }
      .xfe-quest-progress span { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--xfe-mint), #6be2d4); transition: width .25s ease; }
      .xfe-quest button { min-height: 27px; padding: 4px 8px; border-radius: 9px; border: 1.5px solid var(--xfe-ink); background: var(--xfe-sun); font-size: 9px; font-weight: 900; cursor: pointer; box-shadow: 0 2px 0 rgba(31,42,91,.22); }
      .xfe-quest button:disabled { background: #eee9da; color: #9b967f; cursor: default; box-shadow: none; }

      .xfe-section-head { display: flex; align-items: center; gap: 10px; margin: 22px 0 10px; }
      .xfe-section-head h3 { margin: 0; font-size: 16px; font-weight: 900; letter-spacing: -.02em; }
      .xfe-section-head p { margin: 0; font-size: 10px; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-section-head .xfe-line { flex: 1; height: 2px; background: repeating-linear-gradient(90deg, rgba(31,42,91,.2) 0 6px, transparent 6px 11px); }
      .xfe-subjects { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 12px; }
      .xfe-subject-card {
        position: relative; padding: 16px 14px 14px; border: 2px solid var(--xfe-ink); border-radius: 21px;
        background: var(--xfe-paper); box-shadow: 0 4px 0 rgba(31,42,91,.18); cursor: pointer; overflow: hidden;
        transition: transform .16s ease, box-shadow .16s ease; text-align: left;
      }
      .xfe-subject-card:hover { transform: translateY(-4px) rotate(-.5deg); box-shadow: 0 8px 0 rgba(31,42,91,.18); }
      .xfe-subject-card:after { content: ""; position: absolute; width: 88px; height: 88px; right: -36px; bottom: -38px; border-radius: 50%; background: var(--soft); }
      .xfe-subject-icon { width: 42px; height: 42px; display: grid; place-items: center; border: 2px solid var(--xfe-ink); border-radius: 14px; background: var(--soft); font-size: 21px; margin-bottom: 10px; }
      .xfe-subject-card h4 { margin: 0; font-size: 18px; font-weight: 900; letter-spacing: -.02em; }
      .xfe-subject-card p { margin: 3px 0 10px; font-size: 10px; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-subject-meta { display: flex; align-items: center; gap: 6px; font-size: 9px; font-weight: 900; color: var(--xfe-ink-soft); }
      .xfe-mini-bar { flex: 1; height: 6px; border-radius: 99px; background: rgba(31,42,91,.1); overflow: hidden; }
      .xfe-mini-bar span { display: block; height: 100%; border-radius: inherit; background: var(--bar); }

      .xfe-bottom-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 16px; margin-top: 16px; }
      .xfe-focus-card { position: relative; overflow: hidden; padding: 17px; background: linear-gradient(145deg, #e9fbff, #c9f6f1); }
      .xfe-focus-card:before { content: "🫧"; position: absolute; right: 14px; top: 8px; font-size: 22px; opacity: .8; animation: xfe-float 4s ease-in-out infinite; }
      .xfe-focus-top { display: flex; align-items: center; gap: 14px; }
      .xfe-focus-ring { --p: 0; position: relative; width: 88px; height: 88px; flex: 0 0 auto; border-radius: 50%; background: conic-gradient(var(--xfe-mint) calc(var(--p) * 1%), rgba(255,255,255,.75) 0); display: grid; place-items: center; border: 2px solid var(--xfe-ink); }
      .xfe-focus-ring:after { content: ""; position: absolute; inset: 8px; background: #f4fffc; border-radius: 50%; }
      .xfe-focus-time { position: relative; z-index: 1; font-size: 17px; font-weight: 900; letter-spacing: -.04em; }
      .xfe-focus-copy { flex: 1; min-width: 0; }
      .xfe-focus-copy h4 { margin: 0 0 3px; font-size: 16px; font-weight: 900; }
      .xfe-focus-copy p { margin: 0 0 8px; font-size: 10px; line-height: 1.4; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-focus-modes { display: flex; gap: 5px; flex-wrap: wrap; }
      .xfe-focus-modes button { min-height: 24px; padding: 2px 7px; border: 1.5px solid var(--xfe-ink); border-radius: 8px; background: #fff; font-size: 9px; font-weight: 900; cursor: pointer; }
      .xfe-focus-modes button.is-on { background: var(--xfe-sun); }

      .xfe-tip-card { position: relative; padding: 17px; background: linear-gradient(140deg, #fff7cf, #ffe7ef); overflow: hidden; }
      .xfe-tip-card:before { content: "💡"; position: absolute; right: 12px; bottom: 5px; font-size: 62px; opacity: .13; transform: rotate(10deg); }
      .xfe-tip-card h4 { margin: 0 0 6px; font-size: 15px; font-weight: 900; }
      .xfe-tip-card p { margin: 0; font-size: 11px; line-height: 1.6; color: var(--xfe-ink-soft); font-weight: 700; max-width: 94%; }

      .xfe-side { position: relative; overflow-y: auto; padding: 20px 17px 24px; background: linear-gradient(180deg, #f0fdff, #e6f9f5 55%, #fff3dd); border-left: 3px dashed rgba(31,42,91,.22); }
      .xfe-side-card { border: 2px solid var(--xfe-ink); border-radius: 22px; background: #fffdf7; box-shadow: 0 4px 0 rgba(31,42,91,.18); padding: 15px; margin-bottom: 13px; }
      .xfe-side-mascot { position: relative; width: 100%; aspect-ratio: 1/1; margin: 0 auto 4px; }
      .xfe-side-mascot .xfe-mascot { max-width: 190px; margin: 0 auto; }
      .xfe-side-speech { position: relative; margin: 2px auto 8px; padding: 8px 10px; background: #fff; border: 2px solid var(--xfe-ink); border-radius: 14px; font-size: 10px; line-height: 1.4; font-weight: 800; box-shadow: 0 3px 0 rgba(31,42,91,.15); }
      .xfe-side-speech:after { content: ""; position: absolute; left: 22px; bottom: -7px; width: 10px; height: 10px; background: #fff; border-right: 2px solid var(--xfe-ink); border-bottom: 2px solid var(--xfe-ink); transform: rotate(45deg); }
      .xfe-level-line { display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 10px; font-weight: 900; }
      .xfe-level-badge { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 999px; background: var(--xfe-coral); color: #fff; border: 1.5px solid var(--xfe-ink); font-size: 9px; }
      .xfe-bar { height: 9px; border-radius: 99px; background: rgba(31,42,91,.1); border: 1.5px solid rgba(31,42,91,.18); overflow: hidden; margin-top: 7px; }
      .xfe-bar span { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--xfe-sun), #ffa14a); transition: width .3s ease; }
      .xfe-bar.is-hunger span { background: linear-gradient(90deg, #ffb7d5, var(--xfe-coral)); }
      .xfe-side-mini-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin-top: 10px; }
      .xfe-side-mini { padding: 8px; border-radius: 13px; background: #f6f2e3; border: 1.5px solid rgba(31,42,91,.12); text-align: center; }
      .xfe-side-mini b { display: block; font-size: 15px; letter-spacing: -.03em; }
      .xfe-side-mini small { font-size: 8px; font-weight: 800; color: var(--xfe-ink-soft); }
      .xfe-side-title { display: flex; align-items: center; gap: 6px; margin: 0 0 8px; font-size: 12px; font-weight: 900; }
      .xfe-side-list { display: flex; flex-direction: column; gap: 7px; }
      .xfe-side-row { display: flex; align-items: center; gap: 8px; padding: 7px 8px; border-radius: 11px; background: #f8f5e9; border: 1.5px solid rgba(31,42,91,.1); font-size: 10px; font-weight: 800; }
      .xfe-side-row .xfe-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c, var(--xfe-mint)); flex: 0 0 auto; }
      .xfe-side-row span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .xfe-side-row b { margin-left: auto; font-size: 10px; }

      .xfe-practice-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 10px; margin: 7px 0 16px; }
      .xfe-pick-card { position: relative; padding: 13px 11px; border: 2px solid var(--xfe-ink); border-radius: 18px; background: #fff; text-align: left; cursor: pointer; box-shadow: 0 3px 0 rgba(31,42,91,.18); transition: transform .15s ease, box-shadow .15s ease; }
      .xfe-pick-card:hover { transform: translateY(-2px); box-shadow: 0 5px 0 rgba(31,42,91,.18); }
      .xfe-pick-card.is-on { background: var(--xfe-sun); box-shadow: 0 3px 0 var(--xfe-ink); transform: translateY(-1px); }
      .xfe-pick-card.is-mixed { background: linear-gradient(140deg, #f0ebff, #ffe8f1); }
      .xfe-pick-icon { display: block; font-size: 24px; margin-bottom: 7px; }
      .xfe-pick-card b { display: block; font-size: 13px; font-weight: 900; }
      .xfe-pick-card small { display: block; margin-top: 2px; font-size: 9px; line-height: 1.3; font-weight: 700; color: var(--xfe-ink-soft); }
      .xfe-diff-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 8px 0 18px; }
      .xfe-diff { padding: 8px 12px; border: 2px solid var(--xfe-ink); border-radius: 13px; background: #fff; cursor: pointer; box-shadow: 0 3px 0 rgba(31,42,91,.16); font-size: 11px; font-weight: 900; text-align: left; }
      .xfe-diff small { display: block; margin-top: 1px; font-size: 8px; font-weight: 700; color: var(--xfe-ink-soft); }
      .xfe-diff.is-on { background: var(--xfe-mint); color: #063c38; }
      .xfe-start-banner { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 15px 17px; background: linear-gradient(110deg, #fff5c6, #ffd7c9); border: 2px solid var(--xfe-ink); border-radius: 20px; box-shadow: 0 4px 0 rgba(31,42,91,.18); }
      .xfe-start-banner b { display: block; font-size: 14px; }
      .xfe-start-banner small { font-size: 10px; font-weight: 700; color: var(--xfe-ink-soft); }

      .xfe-quiz { max-width: 890px; margin: 0 auto; }
      .xfe-quiz-top { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 12px; }
      .xfe-quiz-pill { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border: 2px solid var(--xfe-ink); border-radius: 999px; background: #fff; font-size: 10px; font-weight: 900; }
      .xfe-quiz-progress { flex: 1; min-width: 120px; height: 9px; border-radius: 99px; background: rgba(31,42,91,.1); border: 1.5px solid rgba(31,42,91,.18); overflow: hidden; }
      .xfe-quiz-progress span { display: block; height: 100%; background: linear-gradient(90deg, var(--xfe-coral), var(--xfe-sun)); transition: width .3s ease; }
      .xfe-question-card { position: relative; padding: 24px 25px; background: #fff; overflow: hidden; }
      .xfe-question-card:before { content: "🐟"; position: absolute; right: 15px; top: 11px; font-size: 22px; opacity: .18; }
      .xfe-question-prompt { margin: 6px 0 18px; font-size: clamp(19px, 2.3vw, 27px); line-height: 1.42; font-weight: 900; letter-spacing: -.02em; white-space: pre-wrap; }
      .xfe-passage { margin: 0 0 14px; padding: 12px 14px; border-left: 4px solid var(--xfe-mint); border-radius: 0 13px 13px 0; background: #eefcf8; font-size: 12px; line-height: 1.7; font-weight: 700; color: #2c4b59; }
      .xfe-options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .xfe-option { display: flex; align-items: center; gap: 10px; min-height: 55px; padding: 9px 12px; text-align: left; border: 2px solid rgba(31,42,91,.22); border-radius: 15px; background: #fffdf7; cursor: pointer; font-size: 13px; font-weight: 800; transition: transform .14s ease, border-color .14s ease, background .14s ease; }
      .xfe-option:hover:not(:disabled) { transform: translateY(-2px); border-color: var(--xfe-ink); background: #fff7d8; }
      .xfe-option:disabled { cursor: default; }
      .xfe-option-letter { width: 28px; height: 28px; flex: 0 0 auto; display: grid; place-items: center; border: 2px solid var(--xfe-ink); border-radius: 9px; background: #ffe98a; font-size: 11px; font-weight: 900; }
      .xfe-option.is-correct { background: #d9faf1; border-color: #0b8f81; }
      .xfe-option.is-correct .xfe-option-letter { background: #20c8b8; color: #fff; }
      .xfe-option.is-wrong { background: #ffe0dd; border-color: #d94b40; }
      .xfe-option.is-wrong .xfe-option-letter { background: #ff6f61; color: #fff; }
      .xfe-option.is-dim { opacity: .5; }
      .xfe-feedback { margin-top: 15px; padding: 14px; border: 2px solid var(--xfe-ink); border-radius: 16px; background: #fff8e6; animation: xfe-pop .2s ease-out; }
      .xfe-feedback.is-good { background: #dcfbf4; }
      .xfe-feedback.is-bad { background: #ffe6e2; }
      .xfe-feedback-title { display: flex; align-items: center; gap: 7px; font-size: 14px; font-weight: 900; }
      .xfe-feedback p { margin: 7px 0 0; font-size: 11px; line-height: 1.65; font-weight: 700; color: var(--xfe-ink-soft); }
      .xfe-feedback-actions { display: flex; justify-content: flex-end; margin-top: 11px; }
      .xfe-hint-box { margin-top: 12px; padding: 9px 11px; border-radius: 11px; background: #fff3bf; border: 1.5px dashed #c69b19; font-size: 10px; line-height: 1.5; font-weight: 700; color: #604b0c; }

      .xfe-result { text-align: center; padding: 24px 20px 20px; position: relative; overflow: hidden; }
      .xfe-result-stars { display: flex; justify-content: center; gap: 8px; margin: 3px 0 12px; font-size: 40px; }
      .xfe-result-stars span { animation: xfe-pop .55s cubic-bezier(.2,1.5,.4,1) both; display: inline-block; filter: drop-shadow(0 3px 0 rgba(31,42,91,.2)); }
      .xfe-result h2 { margin: 0; font-size: clamp(27px, 4vw, 42px); letter-spacing: -.04em; }
      .xfe-result p { margin: 6px 0 17px; font-size: 12px; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-result-stats { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
      .xfe-result-stat { min-width: 100px; padding: 10px 13px; border: 2px solid var(--xfe-ink); border-radius: 14px; background: #fff; box-shadow: 0 3px 0 rgba(31,42,91,.16); }
      .xfe-result-stat b { display: block; font-size: 20px; letter-spacing: -.04em; }
      .xfe-result-stat small { font-size: 8px; font-weight: 900; color: var(--xfe-ink-soft); letter-spacing: .05em; }
      .xfe-result-actions { display: flex; justify-content: center; gap: 9px; flex-wrap: wrap; }
      .xfe-confetti { position: fixed; inset: 0; pointer-events: none; z-index: 2147483100; overflow: hidden; }
      .xfe-confetti i { position: absolute; top: 0; width: 10px; height: 16px; border-radius: 3px; animation: xfe-confetti 2.6s ease-in forwards; }

      .xfe-tutor { display: grid; grid-template-columns: minmax(0,1fr) 220px; gap: 14px; }
      .xfe-chat-card { display: flex; flex-direction: column; min-height: 520px; padding: 0; overflow: hidden; background: #fff; }
      .xfe-chat-head { display: flex; align-items: center; gap: 10px; padding: 13px 15px; background: linear-gradient(110deg, #e7fbff, #fff2cc); border-bottom: 2px solid rgba(31,42,91,.16); }
      .xfe-chat-avatar { width: 41px; height: 41px; border-radius: 14px; border: 2px solid var(--xfe-ink); background: #ffe98a; overflow: hidden; }
      .xfe-chat-avatar img { width: 100%; height: 100%; object-fit: contain;  }
      .xfe-chat-head b { display: block; font-size: 13px; }
      .xfe-chat-head small { display: block; font-size: 9px; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-chat-scroll { flex: 1; overflow-y: auto; padding: 14px; background-image: radial-gradient(rgba(31,42,91,.045) 1px, transparent 1px); background-size: 14px 14px; }
      .xfe-msg { display: flex; gap: 8px; margin-bottom: 11px; align-items: flex-start; }
      .xfe-msg.is-user { flex-direction: row-reverse; }
      .xfe-msg-avatar { width: 27px; height: 27px; flex: 0 0 auto; border-radius: 9px; border: 1.5px solid var(--xfe-ink); background: #ffe98a; display: grid; place-items: center; font-size: 13px; overflow: hidden; }
      .xfe-msg-avatar img { width: 100%; height: 100%; object-fit: contain;  }
      .xfe-msg-bubble { max-width: 82%; padding: 9px 12px; border: 1.5px solid rgba(31,42,91,.22); border-radius: 4px 15px 15px 15px; background: #fff9e9; font-size: 11px; line-height: 1.65; font-weight: 700; white-space: pre-wrap; }
      .xfe-msg.is-user .xfe-msg-bubble { background: #d9f6ff; border-radius: 15px 4px 15px 15px; border-color: rgba(31,42,91,.15); }
      .xfe-msg.is-user .xfe-msg-avatar { background: #d9f6ff; }
      .xfe-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 14px 8px; }
      .xfe-chip-btn { padding: 5px 9px; border: 1.5px solid var(--xfe-ink); border-radius: 999px; background: #fff; cursor: pointer; font-size: 9px; font-weight: 900; box-shadow: 0 2px 0 rgba(31,42,91,.15); }
      .xfe-chip-btn:hover { background: var(--xfe-sun); }
      .xfe-chat-input { display: flex; gap: 8px; padding: 10px; border-top: 2px solid rgba(31,42,91,.13); background: #fffdf7; }
      .xfe-chat-input input { flex: 1; min-width: 0; height: 39px; padding: 0 12px; border: 2px solid rgba(31,42,91,.28); border-radius: 11px; background: #fff; outline: none; font-size: 11px; font-weight: 700; color: var(--xfe-ink); }
      .xfe-chat-input input:focus { border-color: var(--xfe-coral); box-shadow: 0 0 0 3px rgba(255,111,97,.15); }
      .xfe-tutor-side { display: flex; flex-direction: column; gap: 11px; }
      .xfe-tutor-side .xfe-side-card { margin-bottom: 0; }
      .xfe-tutor-side h4 { margin: 0 0 7px; font-size: 12px; }
      .xfe-tutor-side p { margin: 0; font-size: 9px; line-height: 1.55; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-tutor-side ul { margin: 7px 0 0; padding-left: 16px; font-size: 9px; line-height: 1.65; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-typing { display: inline-flex; gap: 3px; padding: 4px 0; }
      .xfe-typing i { width: 5px; height: 5px; border-radius: 50%; background: var(--xfe-ink-soft); animation: xfe-pulse 1s infinite; }
      .xfe-typing i:nth-child(2) { animation-delay: .15s; }
      .xfe-typing i:nth-child(3) { animation-delay: .3s; }

      .xfe-filter-row { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
      .xfe-filter { padding: 6px 11px; border: 1.5px solid var(--xfe-ink); border-radius: 999px; background: #fff; font-size: 10px; font-weight: 900; cursor: pointer; }
      .xfe-filter.is-on { background: var(--xfe-sun); }
      .xfe-mistake-list { display: grid; gap: 10px; }
      .xfe-mistake { padding: 14px 16px; background: #fff; border-left: 6px solid var(--mc, var(--xfe-coral)); }
      .xfe-mistake-top { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-bottom: 6px; }
      .xfe-tag { display: inline-flex; align-items: center; gap: 3px; padding: 2px 7px; border: 1.5px solid rgba(31,42,91,.2); border-radius: 999px; background: #f5f1e4; font-size: 8px; font-weight: 900; }
      .xfe-mistake h4 { margin: 0 0 9px; font-size: 13px; line-height: 1.45; font-weight: 900; white-space: pre-wrap; }
      .xfe-answer-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 7px; }
      .xfe-answer { padding: 5px 8px; border-radius: 8px; font-size: 9px; font-weight: 800; }
      .xfe-answer.is-wrong { background: #ffe3df; color: #a4332a; }
      .xfe-answer.is-right { background: #d9faf1; color: #086b61; }
      .xfe-mistake p { margin: 0; font-size: 10px; line-height: 1.55; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-mistake-actions { display: flex; justify-content: flex-end; margin-top: 9px; }
      .xfe-empty { padding: 30px 20px; text-align: center; }
      .xfe-empty-emoji { font-size: 46px; display: block; margin-bottom: 6px; animation: xfe-bob 3s ease-in-out infinite; }
      .xfe-empty b { display: block; font-size: 15px; }
      .xfe-empty p { margin: 5px 0 13px; font-size: 11px; color: var(--xfe-ink-soft); font-weight: 700; }

      .xfe-growth-grid { display: grid; grid-template-columns: minmax(230px,.8fr) minmax(0,1.2fr); gap: 14px; align-items: start; }
      .xfe-pet-card { position: relative; overflow: hidden; padding: 16px; background: linear-gradient(150deg, #ecfcff, #d7f6ff 50%, #fff2c8); text-align: center; }
      .xfe-pet-card .xfe-mascot { max-width: 230px; margin: 0 auto; }
      .xfe-pet-card h3 { margin: 1px 0 2px; font-size: 18px; }
      .xfe-pet-card p { margin: 0; font-size: 10px; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-pet-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px; text-align: left; }
      .xfe-pet-stat { padding: 8px 9px; border-radius: 12px; border: 1.5px solid rgba(31,42,91,.14); background: rgba(255,255,255,.7); }
      .xfe-pet-stat b { display: block; font-size: 9px; }
      .xfe-pet-stat small { display: block; margin-top: 2px; font-size: 14px; font-weight: 900; letter-spacing: -.03em; }
      .xfe-shop-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; }
      .xfe-shop-item { display: flex; align-items: center; gap: 9px; padding: 9px; border: 1.5px solid rgba(31,42,91,.16); border-radius: 13px; background: #fff; }
      .xfe-shop-emoji { width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 11px; background: #f7f2df; font-size: 19px; }
      .xfe-shop-copy { flex: 1; min-width: 0; }
      .xfe-shop-copy b { display: block; font-size: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .xfe-shop-copy small { display: block; font-size: 8px; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-shop-item button { flex: 0 0 auto; min-height: 26px; padding: 3px 7px; border: 1.5px solid var(--xfe-ink); border-radius: 8px; background: var(--xfe-sun); font-size: 8px; font-weight: 900; cursor: pointer; }
      .xfe-shop-item button:disabled { background: #eee9d9; color: #9d9885; cursor: not-allowed; }
      .xfe-outfit-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; }
      .xfe-outfit { position: relative; padding: 10px 8px; border: 1.5px solid rgba(31,42,91,.18); border-radius: 13px; background: #fff; text-align: center; }
      .xfe-outfit.is-on { background: #d9faf1; border-color: #0b8f81; box-shadow: inset 0 0 0 2px rgba(11,143,129,.25); }
      .xfe-outfit.is-locked { opacity: .62; }
      .xfe-outfit-emoji { display: block; font-size: 23px; margin-bottom: 3px; }
      .xfe-outfit b { display: block; font-size: 9px; line-height: 1.2; }
      .xfe-outfit small { display: block; margin-top: 2px; font-size: 8px; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-outfit button { margin-top: 5px; width: 100%; min-height: 24px; padding: 2px 5px; border: 1.5px solid var(--xfe-ink); border-radius: 7px; background: #fff; font-size: 8px; font-weight: 900; cursor: pointer; }
      .xfe-outfit button.is-buy { background: var(--xfe-sun); }
      .xfe-outfit button:disabled { cursor: not-allowed; background: #f0ecdf; color: #99927e; }
      .xfe-achievement-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 8px; }
      .xfe-achievement { padding: 9px 6px; border: 1.5px solid rgba(31,42,91,.16); border-radius: 12px; background: #f7f3e7; text-align: center; opacity: .46; filter: grayscale(.7); }
      .xfe-achievement.is-on { opacity: 1; filter: none; background: #fff5c6; border-color: rgba(31,42,91,.34); }
      .xfe-achievement span { display: block; font-size: 22px; }
      .xfe-achievement b { display: block; margin-top: 2px; font-size: 8px; }

      .xfe-report-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 10px; }
      .xfe-stat-card { padding: 13px 14px; background: #fff; }
      .xfe-stat-card b { display: block; font-size: 25px; letter-spacing: -.05em; line-height: 1.1; }
      .xfe-stat-card small { display: block; margin-top: 3px; font-size: 9px; font-weight: 800; color: var(--xfe-ink-soft); }
      .xfe-report-cols { display: grid; grid-template-columns: 1.1fr .9fr; gap: 14px; margin-top: 14px; }
      .xfe-chart-card { padding: 15px 16px; background: #fff; }
      .xfe-bars { display: flex; align-items: flex-end; justify-content: space-between; gap: 6px; height: 150px; margin-top: 12px; padding-top: 18px; }
      .xfe-bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; height: 100%; justify-content: flex-end; }
      .xfe-bar-col .xfe-bar-fill { position: relative; width: 100%; max-width: 28px; border: 1.5px solid var(--xfe-ink); border-bottom: 0; border-radius: 7px 7px 0 0; background: linear-gradient(180deg, #7bdff2, #20c8b8); min-height: 4px; transition: height .4s ease; }
      .xfe-bar-col.is-today .xfe-bar-fill { background: linear-gradient(180deg, #ffd23f, #ff8a63); }
      .xfe-bar-col .xfe-bar-fill em { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); font-size: 8px; font-style: normal; font-weight: 900; color: var(--xfe-ink-soft); }
      .xfe-bar-col small { font-size: 8px; font-weight: 900; color: var(--xfe-ink-soft); }
      .xfe-subject-bars { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
      .xfe-subject-bar-top { display: flex; align-items: center; justify-content: space-between; font-size: 10px; font-weight: 900; margin-bottom: 4px; }
      .xfe-subject-bar { height: 10px; border-radius: 99px; background: #f0ecdd; overflow: hidden; border: 1.5px solid rgba(31,42,91,.12); }
      .xfe-subject-bar span { display: block; height: 100%; border-radius: inherit; background: var(--bc); }
      .xfe-comment { margin-top: 14px; padding: 14px 16px; background: linear-gradient(120deg, #fff6ce, #ffe5dd); border: 2px solid var(--xfe-ink); border-radius: 18px; box-shadow: 0 4px 0 rgba(31,42,91,.16); }
      .xfe-comment b { display: flex; align-items: center; gap: 6px; font-size: 12px; margin-bottom: 5px; }
      .xfe-comment p { margin: 0; font-size: 11px; line-height: 1.65; font-weight: 700; color: var(--xfe-ink-soft); }
      .xfe-advice { margin: 7px 0 0; padding-left: 17px; font-size: 10px; line-height: 1.7; font-weight: 700; color: var(--xfe-ink-soft); }

      .xfe-settings-layer { position: absolute; inset: 0; z-index: 20; display: flex; align-items: center; justify-content: center; padding: 18px; background: rgba(16,25,56,.48); backdrop-filter: blur(4px); animation: xfe-pop .16s ease-out; }
      .xfe-settings { width: min(480px,100%); max-height: 88%; overflow-y: auto; padding: 19px; background: #fffdf7; border: 2.5px solid var(--xfe-ink); border-radius: 22px; box-shadow: 0 9px 0 rgba(10,20,50,.35); }
      .xfe-settings-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 13px; }
      .xfe-settings-head h3 { margin: 0; font-size: 19px; }
      .xfe-field { margin-bottom: 13px; }
      .xfe-field label { display: block; margin-bottom: 5px; font-size: 10px; font-weight: 900; }
      .xfe-field input, .xfe-field select { width: 100%; height: 39px; padding: 0 11px; border: 2px solid rgba(31,42,91,.25); border-radius: 10px; background: #fff; outline: none; font-size: 12px; font-weight: 800; color: var(--xfe-ink); }
      .xfe-switch-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 9px 11px; border: 1.5px solid rgba(31,42,91,.16); border-radius: 11px; background: #f8f4e7; }
      .xfe-switch { position: relative; width: 45px; height: 25px; border: 2px solid var(--xfe-ink); border-radius: 999px; background: #ded8c6; cursor: pointer; flex: 0 0 auto; }
      .xfe-switch:after { content: ""; position: absolute; top: 2px; left: 2px; width: 17px; height: 17px; border-radius: 50%; background: #fff; border: 1.5px solid var(--xfe-ink); transition: transform .16s ease; }
      .xfe-switch.is-on { background: var(--xfe-mint); }
      .xfe-switch.is-on:after { transform: translateX(20px); }
      .xfe-settings-note { padding: 10px; border-radius: 10px; background: #eefcf8; border: 1.5px dashed rgba(31,42,91,.2); font-size: 9px; line-height: 1.55; color: var(--xfe-ink-soft); font-weight: 700; }
      .xfe-settings-actions { display: flex; justify-content: flex-end; gap: 7px; margin-top: 14px; }
      .xfe-danger { background: #ffe2de; color: #a4332a; }

      .xfe-toast { position: fixed; left: 50%; bottom: 30px; transform: translateX(-50%); z-index: 2147483200; max-width: min(440px, calc(100vw - 30px)); padding: 10px 16px; border: 2px solid var(--xfe-ink); border-radius: 13px; background: #fff8d6; box-shadow: 0 5px 0 var(--xfe-ink); font-size: 11px; font-weight: 900; animation: xfe-pop .2s ease-out; text-align: center; pointer-events: none; }
      .xfe-fallback-fish { width: 100%; height: 100%; display: block; }
      .xfe-embed {
        width: 100%; height: auto; min-height: 0; padding: 10px;
        display: flex; align-items: stretch; justify-content: stretch;
        flex: 1 1 auto;
        background: var(--xfe-cream);
        container-type: inline-size; container-name: xfe-embed;
      }
      .xfe-app.is-embedded {
        width: 100%; max-width: none; height: auto; min-height: 620px;
        flex: 1 1 auto;
        border-radius: 26px;
        box-shadow: 0 6px 0 rgba(8,15,40,.22), 0 18px 40px rgba(4,10,30,.18);
      }
      .xfe-sidebar-glyph {
        display: inline-flex; align-items: center; justify-content: center;
        color: currentColor; overflow: visible;
      }
      .xfe-sidebar-glyph svg { display: block; width: 100%; height: 100%; overflow: visible; }
      .xfe-sidebar-glyph.is-active { filter: drop-shadow(0 0 5px rgba(255,111,97,.58)); }
      .xfe-embedded-root {
        pointer-events: auto; height: 100%; min-height: 0;
        display: flex; flex-direction: column; flex: 1 1 auto;
      }
      .xfe-msg-content { display: flex; flex-direction: column; align-items: flex-start; gap: 5px; min-width: 0; max-width: 82%; }
      .xfe-msg.is-user .xfe-msg-content { align-items: flex-end; }
      .xfe-msg-content .xfe-msg-bubble { max-width: 100%; }
      .xfe-msg-content .xfe-chips { padding: 0; }
      .xfe-quiz-tips { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 12px; padding: 10px 13px; border: 2px dashed rgba(31,42,91,.18); border-radius: 15px; background: rgba(255,255,255,.55); font-size: 10px; font-weight: 800; color: var(--xfe-ink-soft); }
      .xfe-quiz-tips span { padding: 4px 8px; border-radius: 999px; background: #fff; }

      /* A readability pass: the app is for kids, so nudge the smallest text up. */
      .xfe-card-sub { font-size: 12px; line-height: 1.5; }
      .xfe-quest-label { font-size: 12px; }
      .xfe-quest-hint { font-size: 10px; }
      .xfe-option { font-size: 15px; min-height: 62px; }
      .xfe-option-letter { font-size: 12px; }
      .xfe-question-prompt { font-size: clamp(21px, 2.5vw, 30px); }
      .xfe-feedback-title { font-size: 15px; }
      .xfe-feedback p { font-size: 12.5px; }
      .xfe-msg-bubble { font-size: 12.5px; }
      .xfe-nav button { font-size: 10px; }
      .xfe-chip { font-size: 13px; }
      .xfe-subject-card p { font-size: 11px; }
      .xfe-subject-meta { font-size: 10px; }
      .xfe-focus-copy p { font-size: 11px; }
      .xfe-tip-card p { font-size: 12px; }
      .xfe-result p { font-size: 13px; }
      .xfe-mistake h4 { font-size: 14px; }
      .xfe-mistake p { font-size: 11.5px; }
      .xfe-shop-copy b { font-size: 11px; }
      .xfe-outfit b { font-size: 10px; }
      .xfe-stat-card small { font-size: 10px; }
      .xfe-header-title { font-size: 12px; }

      /* Multiple child profiles */
      .xfe-profile-switch {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        min-height: 30px;
        padding: 2px 7px 2px 3px;
        border: 1.5px solid rgba(31, 42, 91, .22);
        border-radius: 999px;
        background: var(--xfe-paper);
        color: var(--xfe-ink);
        font: 900 10px/1 var(--xfe-font-ui);
        cursor: pointer;
        box-shadow: var(--xfe-shadow-hard-xs);
      }
      .xfe-profile-switch:hover { background: var(--xfe-sun-soft); }
      .xfe-profile-avatar { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 50%; background: var(--xfe-sky-soft); font-size: 15px; }
      .xfe-profile-name { max-width: 76px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .xfe-profile-caret { font-size: 8px; color: var(--xfe-ink-faint); }
      .xfe-profile-sheet { width: min(640px, 100%); }
      .xfe-child-list { display: flex; flex-direction: column; gap: 8px; margin: 10px 0; }
      .xfe-child-row {
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 9px 10px;
        border: 1.5px solid var(--xfe-line);
        border-radius: 13px;
        background: #fff;
      }
      .xfe-child-row.is-active { border-color: var(--xfe-mint-ink); background: var(--xfe-mint-soft); box-shadow: var(--xfe-shadow-hard-xs); }
      .xfe-child-avatar { width: 40px; height: 40px; flex: 0 0 auto; display: grid; place-items: center; border: 1.5px solid var(--xfe-ink); border-radius: 13px; background: var(--xfe-sun-soft); font-size: 22px; }
      .xfe-child-copy { flex: 1; min-width: 0; }
      .xfe-child-copy b { display: block; color: var(--xfe-ink); font-size: 13px; }
      .xfe-child-copy small { display: block; margin-top: 2px; color: var(--xfe-ink-soft); font-size: 9px; font-weight: 700; }
      .xfe-child-remove { width: 27px; height: 27px; flex: 0 0 auto; border: 1.5px solid var(--xfe-line-strong); border-radius: 8px; background: #fff; cursor: pointer; font-size: 11px; }
      .xfe-child-remove.is-confirm { width: auto; padding: 0 6px; border-color: var(--xfe-danger-ink); background: var(--xfe-danger-soft); color: var(--xfe-danger-ink); font-size: 8px; font-weight: 900; }
      .xfe-child-add { margin-top: 10px; padding: 10px; border: 1.5px dashed var(--xfe-line-strong); border-radius: 13px; background: var(--xfe-sea); }
      .xfe-child-add h4 { margin: 0 0 7px; color: var(--xfe-ink); font-size: 12px; }
      .xfe-avatar-grid { display: flex; gap: 7px; flex-wrap: wrap; padding: 3px 0; }
      .xfe-avatar-grid button {
        position: relative;
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        border: 2px solid var(--xfe-line-strong);
        border-radius: 12px;
        background: #fff;
        cursor: pointer;
        transition: transform .12s ease, background .12s ease, box-shadow .12s ease;
      }
      .xfe-avatar-grid button:hover { background: var(--xfe-sun-soft); transform: translateY(-1px); }
      .xfe-avatar-grid button.is-on {
        border-color: var(--xfe-ink);
        background: var(--xfe-mint-soft);
        box-shadow: 0 0 0 3px var(--xfe-mint-soft), var(--xfe-shadow-hard-xs);
        transform: translateY(-2px) scale(1.04);
      }
      .xfe-avatar-emoji { font-size: 23px; line-height: 1; }
      .xfe-avatar-check {
        position: absolute;
        top: -6px;
        right: -6px;
        width: 17px;
        height: 17px;
        display: grid;
        place-items: center;
        border: 1.5px solid var(--xfe-ink);
        border-radius: 50%;
        background: var(--xfe-coral);
        color: #fff;
        font-size: 10px;
        font-weight: 900;
        box-shadow: 0 1px 0 rgba(31, 42, 91, .3);
      }
      .xfe-avatar-current {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 7px;
        padding: 5px 8px;
        border: 1.5px solid var(--xfe-mint-ink);
        border-radius: 9px;
        background: var(--xfe-mint-soft);
        font-size: 10px;
        font-weight: 800;
        color: var(--xfe-ink);
      }
      .xfe-avatar-current-emoji { font-size: 16px; }
      .xfe-avatar-current small { margin-left: auto; font-size: 8px; font-weight: 700; color: var(--xfe-ink-soft); }

      /* Real fractions, not LaTeX code */
      .xfe-math-text { white-space: pre-wrap; }
      .xfe-frac {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        vertical-align: -0.42em;
        line-height: 1;
        margin: 0 2px;
        font-size: 0.94em;
        font-weight: 900;
        transform: translateY(-1px);
      }
      .xfe-frac-num { padding: 0 3px 1px; border-bottom: 1.8px solid currentColor; }
      .xfe-frac-den { padding: 2px 3px 0; }
      .xfe-math-preview { margin: 8px 0; padding: 9px 11px; border: 1.5px dashed var(--xfe-line-strong); border-radius: 11px; background: var(--xfe-sun-soft); }
      .xfe-math-preview b { display: block; color: var(--xfe-ink); font-size: 10px; }
      .xfe-math-preview-body { margin: 5px 0 2px; font-size: 18px; line-height: 1.7; color: var(--xfe-ink); }
      .xfe-math-preview small { font-size: 9px; font-weight: 700; color: var(--xfe-ink-soft); }

      /* ===== Library / textbooks ===== */
      .xfe-library-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 12px; }
      .xfe-library-selects { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
      .xfe-term-toggle { display: inline-flex; padding: 3px; border: 2px solid var(--xfe-ink); border-radius: 12px; background: var(--xfe-paper); box-shadow: var(--xfe-shadow-hard-xs); }
      .xfe-term-toggle button { min-height: 28px; padding: 3px 9px; border: 0; border-radius: 8px; background: transparent; color: var(--xfe-ink-soft); font-size: 10px; font-weight: 900; cursor: pointer; }
      .xfe-term-toggle button.is-on { background: var(--xfe-sun); color: var(--xfe-ink); }
      .xfe-library-note { margin: 8px 0; padding: 9px 12px; border: 1.5px dashed var(--xfe-line-strong); border-radius: 11px; background: var(--xfe-sun-soft); color: var(--xfe-ink); font-size: 11px; font-weight: 700; }
      .xfe-library-note.is-error { background: var(--xfe-danger-soft); color: var(--xfe-danger-ink); }
      .xfe-library-book { padding: 18px; border: 2px solid var(--xfe-ink); border-radius: 23px; background: var(--xfe-paper); box-shadow: var(--xfe-shadow-card); }
      .xfe-library-shelf { margin-top: 12px; padding: 12px; border: 1.5px dashed var(--xfe-line-strong); border-radius: 15px; background: #fff; }
      .xfe-library-shelf-head { display: flex; align-items: baseline; gap: 7px; flex-wrap: wrap; margin-bottom: 8px; }
      .xfe-library-shelf-head h4 { margin: 0; color: var(--xfe-ink); font-size: 12px; font-weight: 900; }
      .xfe-library-shelf-head small { color: var(--xfe-ink-faint); font-size: 9px; font-weight: 700; }
      .xfe-library-shelf-list { display: flex; flex-direction: column; gap: 5px; }
      .xfe-library-shelf-row { display: flex; align-items: center; gap: 7px; padding: 6px 8px; border: 1px solid var(--xfe-line); border-radius: 10px; background: var(--xfe-paper); }
      .xfe-library-shelf-row.is-active { border-color: var(--xfe-mint-ink); background: var(--xfe-mint-soft); }
      .xfe-library-shelf-icon { width: 25px; height: 25px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 8px; background: var(--xfe-sun-soft); font-size: 13px; }
      .xfe-library-shelf-copy { flex: 1; min-width: 0; }
      .xfe-library-shelf-copy b { display: block; color: var(--xfe-ink); font-size: 10px; }
      .xfe-library-shelf-copy small { display: block; margin-top: 1px; color: var(--xfe-ink-faint); font-size: 8px; font-weight: 700; }
      .xfe-library-book-head { display: flex; align-items: center; gap: 11px; }
      .xfe-library-book-icon { width: 52px; height: 52px; flex: 0 0 auto; display: grid; place-items: center; border: 2px solid var(--xfe-ink); border-radius: 15px; background: var(--xfe-sun-soft); font-size: 25px; }
      .xfe-library-book-copy { flex: 1; min-width: 0; }
      .xfe-library-book-title { color: var(--xfe-ink); font-size: 18px; font-weight: 900; letter-spacing: -.02em; }
      .xfe-library-book-meta { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 4px; }
      .xfe-library-book-side { flex: 0 0 auto; }
      .xfe-library-units { display: flex; flex-direction: column; gap: 7px; margin-top: 13px; }
      .xfe-library-unit { border: 1.5px solid var(--xfe-line); border-radius: 13px; background: #fff; overflow: hidden; }
      .xfe-library-unit.is-open { border-color: rgba(31,42,91,.35); }
      .xfe-library-unit-head { width: 100%; display: flex; align-items: center; gap: 8px; padding: 9px 10px; border: 0; background: transparent; color: var(--xfe-ink); text-align: left; cursor: pointer; }
      .xfe-library-unit-no { width: 27px; height: 27px; flex: 0 0 auto; display: grid; place-items: center; border: 1.5px solid var(--xfe-ink); border-radius: 9px; background: var(--xfe-sun-soft); font-size: 9px; font-weight: 900; }
      .xfe-library-unit-title { flex: 1; min-width: 0; font-size: 12px; font-weight: 900; }
      .xfe-library-unit-count { font-size: 9px; font-weight: 700; color: var(--xfe-ink-faint); white-space: nowrap; }
      .xfe-library-chevron { width: 22px; height: 22px; display: grid; place-items: center; border-radius: 7px; background: var(--xfe-sun-soft); font-size: 14px; font-weight: 900; }
      .xfe-library-points { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 10px 11px 45px; }
      .xfe-library-point { display: inline-flex; align-items: center; gap: 6px; padding: 5px 9px; border: 1.5px solid var(--xfe-line-strong); border-radius: 999px; background: var(--xfe-paper); color: var(--xfe-ink); font-size: 10px; font-weight: 800; cursor: pointer; }
      .xfe-library-point:hover { background: var(--xfe-sun-soft); }
      .xfe-library-point small { font-size: 8px; color: var(--xfe-ink-faint); }
      .xfe-knowledge-sheet { width: min(600px, 100%); }
      .xfe-knowledge-meta { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 11px; }
      .xfe-knowledge-block { padding: 12px; margin-bottom: 10px; border: 1.5px dashed var(--xfe-line); border-radius: 12px; background: #fff; }
      .xfe-knowledge-block h4 { margin: 0 0 5px; color: var(--xfe-ink); font-size: 12px; font-weight: 900; }
      .xfe-knowledge-block p { margin: 0; font-size: 11px; line-height: 1.65; font-weight: 700; }
      .xfe-knowledge-tip { margin-top: 7px; padding: 8px 9px; border-radius: 9px; background: var(--xfe-sun-soft); font-size: 10px; line-height: 1.55; font-weight: 700; color: var(--xfe-ink-soft); }
      .xfe-knowledge-linked { display: flex; flex-direction: column; gap: 5px; }
      .xfe-knowledge-linked-row { display: flex; justify-content: space-between; gap: 8px; padding: 6px 8px; border-radius: 8px; background: #f7f4e8; font-size: 10px; font-weight: 700; }
      .xfe-knowledge-linked-row b { color: var(--xfe-coral-ink); white-space: nowrap; }

      /* ===== Textbook import / capture / variant ===== */
      .xfe-import-sheet, .xfe-capture-sheet { width: min(700px, 100%); }
      .xfe-import-sheet .xfe-settings-actions { position: sticky; bottom: 0; z-index: 2; margin-top: 8px; padding: 9px 0 2px; border-top: 1px dashed var(--xfe-line); background: var(--xfe-paper); }
      .xfe-import-meta, .xfe-variant-meta { display: flex; gap: 5px; flex-wrap: wrap; margin: 8px 0; }
      .xfe-import-fields { display: grid; grid-template-columns: 1fr 1fr auto; gap: 8px; align-items: end; }
      .xfe-import-fields .xfe-field { margin: 0; }
      .xfe-import-hint { margin: 7px 0 3px; color: var(--xfe-ink-soft); font-size: 9px; font-weight: 700; line-height: 1.45; }
      .xfe-import-empty small { display: block; margin-top: 4px; font-size: 8px; color: var(--xfe-ink-faint); }
      .xfe-import-units { max-height: 220px; overflow-y: auto; display: flex; flex-direction: column; gap: 5px; margin: 9px 0; padding: 8px; border: 1.5px dashed var(--xfe-line); border-radius: 10px; background: #fff; }
      .xfe-import-empty { padding: 14px 8px; text-align: center; color: var(--xfe-ink-faint); font-size: 10px; font-weight: 700; }
      .xfe-ai-toc { margin: 9px 0; padding: 10px; border: 2px solid var(--xfe-ink); border-radius: 13px; background: var(--xfe-sun-soft); box-shadow: var(--xfe-shadow-hard-xs); }
      .xfe-ai-toc-head b { display: block; color: var(--xfe-ink); font-size: 12px; }
      .xfe-ai-toc-head small { display: block; margin-top: 3px; color: var(--xfe-ink-soft); font-size: 9px; font-weight: 700; line-height: 1.5; }
      .xfe-ai-toc-controls { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; margin-top: 8px; }
      .xfe-ai-toc-controls label { font-size: 9px; font-weight: 900; color: var(--xfe-ink); }
      .xfe-ai-toc-controls input { width: 48px; height: 29px; padding: 0 4px; border: 1.5px solid var(--xfe-line-strong); border-radius: 7px; background: #fff; color: var(--xfe-ink); font: 800 11px var(--xfe-font-ui); text-align: center; }
      .xfe-import-unit { padding: 6px 8px; border-radius: 7px; background: #f7f4e8; }
      .xfe-import-unit b { display: block; color: var(--xfe-ink); font-size: 10px; }
      .xfe-import-unit small { display: block; margin-top: 2px; font-size: 9px; font-weight: 700; color: var(--xfe-ink-faint); }
      .xfe-textarea { width: 100%; min-height: 80px; padding: 9px 10px; border: 2px solid rgba(31,42,91,.25); border-radius: 10px; background: #fff; color: var(--xfe-ink); font: 700 12px/1.55 var(--xfe-font-ui); resize: vertical; outline: none; }
      .xfe-textarea:focus { border-color: var(--xfe-coral); box-shadow: var(--xfe-shadow-focus); }
      .xfe-field-error { margin-top: 6px; padding: 7px 9px; border-radius: 8px; background: var(--xfe-danger-soft); color: var(--xfe-danger-ink); font-size: 10px; font-weight: 800; }
      .xfe-capture-photo { display: flex; flex-direction: column; gap: 8px; margin: 9px 0; }
      .xfe-capture-photo img { width: 100%; max-height: 160px; object-fit: contain; border: 2px solid var(--xfe-ink); border-radius: 13px; background: #fff; }
      .xfe-capture-drop { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; min-height: 150px; border: 2px dashed var(--xfe-line-strong); border-radius: 14px; background: var(--xfe-sea); color: var(--xfe-ink); cursor: pointer; }
      .xfe-capture-drop span { font-size: 32px; }
      .xfe-capture-drop b { font-size: 13px; }
      .xfe-capture-drop small { font-size: 9px; font-weight: 700; color: var(--xfe-ink-faint); }
      .xfe-capture-photo-actions { display: flex; gap: 7px; justify-content: flex-end; flex-wrap: wrap; }
      .xfe-capture-note { margin: 4px 0 8px; padding: 8px 9px; border-radius: 9px; background: var(--xfe-sun-soft); font-size: 9px; line-height: 1.5; font-weight: 700; color: var(--xfe-ink-soft); }
      .xfe-capture-sheet .xfe-settings-actions { position: sticky; bottom: 0; margin-top: 10px; padding: 10px 0 2px; border-top: 1px dashed var(--xfe-line); background: var(--xfe-paper); }
      .xfe-capture-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .xfe-variant-sheet { width: min(700px, 100%); }
      .xfe-variant-original { padding: 8px 10px; border-radius: 9px; background: #f7f4e8; }
      .xfe-variant-original small { font-size: 8px; font-weight: 900; color: var(--xfe-ink-faint); letter-spacing: .1em; }
      .xfe-variant-original p { margin: 3px 0 0; font-size: 10px; font-weight: 700; line-height: 1.5; }
      .xfe-variant-mastered { text-align: center; padding: 8px 0; }
      .xfe-variant-mastered h3 { margin: 0; font-size: 22px; color: var(--xfe-ink); }
      .xfe-variant-mastered p { margin: 5px 0 12px; font-size: 11px; font-weight: 700; }
      .xfe-mistake-photo { max-width: 220px; max-height: 150px; display: block; margin: 0 0 8px; border: 1.5px solid var(--xfe-line-strong); border-radius: 10px; object-fit: cover; }
      .xfe-mastery-row { display: flex; align-items: center; gap: 8px; margin-top: 7px; font-size: 9px; font-weight: 800; color: var(--xfe-ink-soft); }
      .xfe-mastery-dots { display: inline-flex; gap: 4px; }
      .xfe-mastery-dots i { width: 13px; height: 13px; border-radius: 50%; border: 1.5px solid var(--xfe-ink); background: #fff; }
      .xfe-mastery-dots i.is-on { background: var(--xfe-mint); }
      .xfe-mistake-actions { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }

      /* ===== Report range / sheet / diary ===== */
      .xfe-report-range { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin: 0 0 12px; }
      .xfe-report-dates { display: flex; align-items: center; gap: 5px; }
      .xfe-report-dates input { height: 30px; padding: 0 7px; border: 1.5px solid var(--xfe-line-strong); border-radius: 8px; background: #fff; color: var(--xfe-ink); font-size: 10px; font-weight: 800; }
      .xfe-report-sheet { width: min(760px, 100%); }
      .xfe-report-sheet .xfe-settings-actions { position: sticky; bottom: 0; padding-top: 9px; border-top: 1px dashed var(--xfe-line); background: var(--xfe-paper); }
      .xfe-report-hero { display: flex; align-items: center; gap: 11px; padding: 10px; border: 1.5px dashed var(--xfe-line); border-radius: 12px; background: var(--xfe-sea); }
      .xfe-report-avatar { width: 54px; height: 54px; flex: 0 0 auto; border: 2px solid var(--xfe-ink); border-radius: 16px; background: var(--xfe-sun-soft); overflow: hidden; }
      .xfe-report-avatar img { width: 100%; height: 100%; object-fit: contain; }
      .xfe-report-hero b { display: block; color: var(--xfe-ink); font-size: 14px; }
      .xfe-report-hero p { margin: 2px 0 5px; font-size: 10px; font-weight: 700; color: var(--xfe-ink-soft); }
      .xfe-report-section { margin-top: 11px; padding: 10px 12px; border: 1.5px solid var(--xfe-line); border-radius: 11px; background: #fff; }
      .xfe-report-section h4 { margin: 0 0 7px; color: var(--xfe-ink); font-size: 12px; }
      .xfe-report-subject { margin-bottom: 7px; }
      .xfe-report-foot { margin-top: 12px; font-size: 9px; font-weight: 700; color: var(--xfe-ink-faint); text-align: right; }
      .xfe-diary-list { display: flex; flex-direction: column; gap: 5px; margin-top: 8px; }
      .xfe-diary-row { display: flex; align-items: center; gap: 7px; padding: 6px 8px; border-radius: 9px; background: #f7f4e8; font-size: 10px; font-weight: 700; }
      .xfe-diary-row span:nth-child(2) { flex: 1; min-width: 0; }
      .xfe-diary-row small { font-size: 8px; color: var(--xfe-ink-faint); white-space: nowrap; }
      .xfe-diary-emoji { width: 22px; height: 22px; display: grid; place-items: center; border-radius: 7px; background: #fff; font-size: 12px; }

      @container xfe-embed (max-width: 1000px) {
        .xfe-app.is-embedded { grid-template-columns: 92px minmax(0,1fr); }
        .xfe-app.is-embedded .xfe-side { display: none; }
        .xfe-app.is-embedded .xfe-bottom-grid { grid-template-columns: 1fr; }
        .xfe-app.is-embedded .xfe-practice-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .xfe-app.is-embedded .xfe-tutor { grid-template-columns: 1fr; }
        .xfe-app.is-embedded .xfe-tutor-side { display: none; }
        .xfe-app.is-embedded .xfe-growth-grid { grid-template-columns: 1fr; }
        .xfe-app.is-embedded .xfe-report-cols { grid-template-columns: 1fr; }
        .xfe-app.is-embedded .xfe-hero { grid-template-columns: minmax(0, 1fr) 170px; }
        .xfe-app.is-embedded .xfe-hero h2 { font-size: 30px; }
      }
      @container xfe-embed (max-width: 700px) {
        .xfe-app.is-embedded .xfe-hero { grid-template-columns: 1fr; }
        .xfe-app.is-embedded .xfe-hero-mascot { display: none; }
        .xfe-app.is-embedded .xfe-hero h2 { font-size: 26px; max-width: none; }
        .xfe-app.is-embedded .xfe-hero p { max-width: none; }
        .xfe-app.is-embedded .xfe-home-grid { grid-template-columns: 1fr; }
        .xfe-app.is-embedded .xfe-subjects { grid-template-columns: 1fr; }
        .xfe-app.is-embedded .xfe-report-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .xfe-app.is-embedded .xfe-header { gap: 5px; flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }
        .xfe-app.is-embedded .xfe-header::-webkit-scrollbar { display: none; }
        .xfe-app.is-embedded .xfe-header-spacer { display: none; }
        .xfe-app.is-embedded .xfe-header .xfe-header-title { display: none; }
        .xfe-app.is-embedded .xfe-header .xfe-chip.is-coral { display: none; }
        .xfe-app.is-embedded .xfe-header .xfe-chip,
        .xfe-app.is-embedded .xfe-header .xfe-icon-btn { flex: 0 0 auto; }
      }

      @media (max-width: 1120px) {
        .xfe-app { grid-template-columns: 92px minmax(0,1fr); }
        .xfe-app.is-overlay { grid-template-columns: 92px minmax(0,1fr); }
        .xfe-side { display: none; }
        .xfe-daily-grid { grid-template-columns: 1fr 1fr; }
        .xfe-bottom-grid-3 { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 920px) {
        .xfe-home-grid { grid-template-columns: 1fr; }
        .xfe-bottom-grid { grid-template-columns: 1fr; }
        .xfe-tutor { grid-template-columns: 1fr; }
        .xfe-tutor-side { display: grid; grid-template-columns: 1fr 1fr; }
        .xfe-report-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
        .xfe-report-cols { grid-template-columns: 1fr; }
        .xfe-growth-grid { grid-template-columns: 1fr; }
      }
      @media (max-width: 760px) {
        .xfe-backdrop { padding: 0; align-items: stretch; }
        .xfe-app { width: 100%; height: 100dvh; border-radius: 0; border: 0; grid-template-columns: 1fr; grid-template-rows: minmax(0,1fr) 70px; }
        .xfe-app.is-overlay { width: 100%; height: 100dvh; border-radius: 0; border: 0; grid-template-columns: 1fr; grid-template-rows: minmax(0,1fr) 70px; }
        .xfe-app.is-overlay .xfe-main { padding: 12px 12px 22px; }
        .xfe-app.is-overlay .xfe-header { gap: 5px; margin-bottom: 12px; }
        .xfe-app.is-overlay .xfe-page-head { gap: 10px; margin-bottom: 14px; }
        .xfe-app.is-overlay .xfe-home-grid,
        .xfe-app.is-overlay .xfe-bottom-grid,
        .xfe-app.is-overlay .xfe-subjects,
        .xfe-app.is-overlay .xfe-mistake-list,
        .xfe-app.is-overlay .xfe-growth-grid,
        .xfe-app.is-overlay .xfe-report-cols { gap: 10px; margin-top: 10px; }
        .xfe-app.is-overlay .xfe-card-pad,
        .xfe-app.is-overlay .xfe-quest-card,
        .xfe-app.is-overlay .xfe-question-card { padding: 14px; }
        .xfe-daily-grid { grid-template-columns: 1fr; }
        .xfe-bottom-grid-3 { grid-template-columns: 1fr; }
        .xfe-embed { padding: 0; min-height: 0; height: 100%; }
        .xfe-app.is-embedded { height: 100%; min-height: 0; max-height: none; border-radius: 0; border: 0; box-shadow: none; }        .xfe-rail { grid-row: 2; grid-column: 1; flex-direction: row; align-items: center; justify-content: space-around; padding: 6px 5px calc(6px + env(safe-area-inset-bottom)); border-right: 0; border-top: 3px solid var(--xfe-ink); gap: 2px; }
        .xfe-brand, .xfe-brand-text, .xfe-rail-bottom { display: none; }
        .xfe-nav { flex-direction: row; gap: 2px; width: 100%; }
        .xfe-nav button { min-height: 54px; flex: 1; border-radius: 12px; }
        .xfe-nav button.is-active:after { display: none; }
        .xfe-nav button .xfe-nav-icon { font-size: 18px; }
        .xfe-nav button { font-size: 8px; }
        .xfe-main { grid-row: 1; grid-column: 1; padding: 12px 12px 22px; }
        .xfe-header { gap: 5px; margin-bottom: 12px; flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }
        .xfe-header::-webkit-scrollbar { display: none; }
        .xfe-header-spacer { display: none; }
        .xfe-header .xfe-chip { flex: 0 0 auto; }
        .xfe-header .xfe-chip.is-coral { display: none; }
        .xfe-header .xfe-icon-btn { flex: 0 0 auto; }
        .xfe-grade-select { width: 92px; max-width: none; font-size: 10px; }
        .xfe-nav button { font-size: 7.5px; }
        .xfe-library-toolbar { align-items: flex-start; }
        .xfe-library-selects { width: 100%; }
        .xfe-library-book-head { flex-wrap: wrap; }
        .xfe-library-book-side { margin-left: 63px; }
        .xfe-library-points { padding-left: 10px; }
        .xfe-capture-fields { grid-template-columns: 1fr; }
        .xfe-import-fields { grid-template-columns: 1fr 1fr; }
        .xfe-report-range { gap: 5px; }
        .xfe-report-dates { width: 100%; }
        .xfe-report-dates input { flex: 1; min-width: 0; }
        .xfe-report-sheet .xfe-report-grid { grid-template-columns: 1fr 1fr; }
        .xfe-knowledge-sheet, .xfe-import-sheet, .xfe-capture-sheet, .xfe-variant-sheet, .xfe-report-sheet { max-height: 92%; }
        .xfe-header-title { display: none; }
        .xfe-profile-name, .xfe-profile-caret { display: none; }
        .xfe-profile-switch { min-width: 31px; padding: 2px; justify-content: center; }
        .xfe-profile-avatar { width: 25px; height: 25px; }
        .xfe-child-row { padding: 8px; gap: 7px; }
        .xfe-child-copy small { font-size: 8px; }
        .xfe-chip { min-height: 29px; padding: 3px 8px; font-size: 10px; }
        .xfe-grade-select { height: 29px; font-size: 10px; }
        .xfe-icon-btn { width: 31px; height: 31px; border-radius: 10px; font-size: 14px; }
        .xfe-hero { grid-template-columns: 1fr; padding: 18px; min-height: 0; }
        .xfe-hero-mascot { width: 160px; justify-self: end; margin-top: -75px; opacity: .95; }
        .xfe-hero-mascot .xfe-speech { display: none; }
        .xfe-hero h2 { font-size: 28px; max-width: 74%; }
        .xfe-hero p { max-width: 72%; font-size: 11px; }
        .xfe-subjects { grid-template-columns: 1fr; }
        .xfe-subject-card { display: grid; grid-template-columns: 48px 1fr; grid-template-rows: auto auto; column-gap: 9px; align-items: center; padding: 12px; }
        .xfe-subject-icon { grid-row: 1 / 3; margin: 0; width: 44px; height: 44px; }
        .xfe-subject-card h4 { font-size: 15px; }
        .xfe-subject-card p { margin: 1px 0 6px; }
        .xfe-subject-meta { grid-column: 2; }
        .xfe-practice-grid { grid-template-columns: 1fr 1fr; }
        .xfe-options { grid-template-columns: 1fr; }
        .xfe-question-card { padding: 17px 14px; }
        .xfe-question-prompt { font-size: 19px; }
        .xfe-bottom-grid { margin-top: 10px; }
        .xfe-chat-card { min-height: 470px; }
        .xfe-tutor-side { grid-template-columns: 1fr; }
        .xfe-shop-grid { grid-template-columns: 1fr; }
        .xfe-achievement-grid { grid-template-columns: repeat(4,minmax(0,1fr)); }
        .xfe-launcher-wrap { right: 12px; bottom: 82px; }
        .xfe-launcher { width: 66px; height: 66px; border-radius: 23px; }
        .xfe-launcher-bubble { display: none; }
        .xfe-launcher-level { min-width: 25px; height: 22px; font-size: 9px; }
        .xfe-result-stat { min-width: 80px; }
      }
      @media (max-width: 470px) {
        .xfe-hero h2 { font-size: 24px; }
        .xfe-practice-grid { grid-template-columns: 1fr; }
        .xfe-report-grid { grid-template-columns: 1fr 1fr; }
        .xfe-outfit-grid { grid-template-columns: 1fr 1fr; }
        .xfe-result-actions .xfe-btn { width: 100%; }
      }
      @media (prefers-reduced-motion: reduce) {
        .xfe-root *, .xfe-root *:before, .xfe-root *:after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; }
      }
    `;

    function FishFallback({ className = '' }) {
      return h(
        'svg',
        {
          viewBox: '0 0 220 220',
          className: `xfe-fallback-fish ${className}`,
          role: 'img',
          'aria-label': '小肥鱼',
        },
        h('path', { d: 'M148 120c23-20 39-21 53-12-5 9-5 18 0 28-15 10-33 8-53-10z', fill: '#4361c9' }),
        h('path', { d: 'M148 120c23-20 39-21 53-12-5 9-5 18 0 28-15 10-33 8-53-10z', fill: 'none', stroke: '#1f2a5b', strokeWidth: 4, strokeLinejoin: 'round' }),
        h('ellipse', { cx: 98, cy: 111, rx: 66, ry: 58, fill: '#5a78df', stroke: '#1f2a5b', strokeWidth: 4 }),
        h('ellipse', { cx: 92, cy: 130, rx: 42, ry: 32, fill: '#eef9ff' }),
        h('path', { d: 'M55 83c8-27 28-43 55-44 6 0 11 1 16 2-3 8-2 14 2 20-21 1-43 9-58 28-5 6-9 3-15-6z', fill: '#354fa9', stroke: '#1f2a5b', strokeWidth: 4, strokeLinejoin: 'round' }),
        h('path', { d: 'M80 47c10-10 25-15 40-12l-5 14c-10-2-21 0-30 7z', fill: '#f3fbff', stroke: '#1f2a5b', strokeWidth: 3 }),
        h('circle', { cx: 142, cy: 45, r: 8, fill: '#fff', stroke: '#1f2a5b', strokeWidth: 3 }),
        h('circle', { cx: 160, cy: 37, r: 5, fill: '#fff', stroke: '#1f2a5b', strokeWidth: 3 }),
        h('circle', { cx: 80, cy: 105, r: 15, fill: '#fff', stroke: '#1f2a5b', strokeWidth: 3 }),
        h('circle', { cx: 115, cy: 103, r: 15, fill: '#fff', stroke: '#1f2a5b', strokeWidth: 3 }),
        h('circle', { cx: 84, cy: 108, r: 7, fill: '#1f2a5b' }),
        h('circle', { cx: 118, cy: 106, r: 7, fill: '#1f2a5b' }),
        h('circle', { cx: 87, cy: 105, r: 2.5, fill: '#fff' }),
        h('circle', { cx: 121, cy: 103, r: 2.5, fill: '#fff' }),
        h('ellipse', { cx: 65, cy: 131, rx: 10, ry: 6, fill: '#ffb7c8', opacity: 0.8 }),
        h('ellipse', { cx: 131, cy: 129, rx: 10, ry: 6, fill: '#ffb7c8', opacity: 0.8 }),
        h('path', { d: 'M91 127c5 7 12 7 17 0', fill: 'none', stroke: '#1f2a5b', strokeWidth: 3.5, strokeLinecap: 'round' }),
        h('path', { d: 'M95 57c3-11 10-17 20-18-3 7-2 12 2 17', fill: '#7bdff2', stroke: '#1f2a5b', strokeWidth: 3, strokeLinejoin: 'round' }),
        h('text', { x: 174, y: 84, fontSize: 24, fill: '#ffd23f', stroke: '#1f2a5b', strokeWidth: 1.5, textAnchor: 'middle' }, '★'),
        h('text', { x: 39, y: 70, fontSize: 17, fill: '#ffd23f', stroke: '#1f2a5b', strokeWidth: 1.3, textAnchor: 'middle' }, '★'),
      );
    }

    function Mascot({ outfit = '', mood = 'cute', className = '', small = false }) {
      const imageByMood = { full: 'happy-t', happy: 'happy-t', panic: 'panic-t', faint: 'panic-t' };
      const source = `${ART}${imageByMood[mood] || 'cute-t'}.png`;
      const [ok, setOk] = useState(true);
      useEffect(() => setOk(true), [source]);
      const worn = OUTFITS.find((o) => o.id === outfit);
      const moodEmoji = mood === 'happy' ? '🎉' : mood === 'panic' ? '💦' : mood === 'hungry' ? '🍚' : mood === 'faint' ? '💫' : '';
      const poseClass = mood === 'faint' ? ' is-faint' : mood === 'hungry' ? ' is-hungry' : '';
      return h(
        'div',
        { className: `xfe-mascot ${className}` },
        h('div', { className: 'xfe-mascot-blob' }),
        ok
          ? h('img', {
              className: `xfe-mascot-img${poseClass}`,
              src: source,
              alt: '小肥鱼',
              draggable: false,
              onError: () => setOk(false),
            })
          : h(FishFallback),
        worn
          ? h('span', { className: 'xfe-accessory', style: { left: worn.x, top: worn.y }, 'aria-hidden': true }, worn.emoji)
          : null,
        moodEmoji
          ? h('span', { className: 'xfe-mascot-mood', 'aria-hidden': true }, moodEmoji)
          : null,
        small
          ? null
          : h('span', { className: 'xfe-mascot-spark', style: { right: '2%', top: '18%' }, 'aria-hidden': true }, '✨'),
      );
    }

    function Progress({ value, max, className = '' }) {
      return h(
        'div',
        { className: `xfe-bar ${className}`, role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': Math.min(value, max) },
        h('span', { style: { width: `${Math.max(0, Math.min(100, pct(value, max)))}%` } }),
      );
    }

    function Launcher({ t, data, onOpen }) {
      const level = levelOf(data.xp);
      const [imgOk, setImgOk] = useState(true);
      const [pos, setPos] = useState(() => {
        try {
          const raw = window.localStorage.getItem('xiaofeiyu-academy:launcher-pos');
          const parsed = raw ? JSON.parse(raw) : null;
          return parsed && Number.isFinite(parsed.x) && Number.isFinite(parsed.y) ? parsed : null;
        } catch {
          return null;
        }
      });
      const dragRef = useRef(null);
      const movedRef = useRef(false);
      const hour = new Date().getHours();
      const hello = hour < 11 ? '早上好呀' : hour < 18 ? '下午好呀' : '晚上好呀';

      useEffect(() => {
        const onResize = () => {
          setPos((current) => (current ? {
            x: clamp(current.x, 8, Math.max(8, window.innerWidth - 108)),
            y: clamp(current.y, 8, Math.max(8, window.innerHeight - 108)),
          } : current));
        };
        window.addEventListener('resize', onResize);
        onResize();
        return () => window.removeEventListener('resize', onResize);
      }, []);

      const onPointerDown = (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        const wrap = e.currentTarget.parentElement;
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        dragRef.current = {
          pointerId: e.pointerId,
          offsetX: e.clientX - rect.left,
          offsetY: e.clientY - rect.top,
          startX: e.clientX,
          startY: e.clientY,
          wrapWidth: rect.width,
          wrapHeight: rect.height,
        };
        movedRef.current = false;
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* ignore */ }
      };
      const onPointerMove = (e) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== e.pointerId) return;
        const dx = e.clientX - drag.startX;
        const dy = e.clientY - drag.startY;
        if (Math.abs(dx) + Math.abs(dy) > 4) movedRef.current = true;
        if (!movedRef.current) return;
        const x = clamp(e.clientX - drag.offsetX, 8, Math.max(8, window.innerWidth - drag.wrapWidth - 8));
        const y = clamp(e.clientY - drag.offsetY, 8, Math.max(8, window.innerHeight - drag.wrapHeight - 8));
        setPos({ x, y });
      };
      const onPointerUp = (e) => {
        const drag = dragRef.current;
        if (drag && drag.pointerId === e.pointerId) {
          try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
        }
        if (movedRef.current) {
          setPos((current) => {
            if (current) {
              try { window.localStorage.setItem('xiaofeiyu-academy:launcher-pos', JSON.stringify(current)); } catch { /* ignore */ }
            }
            return current;
          });
          setTimeout(() => { movedRef.current = false; }, 260);
        }
        dragRef.current = null;
      };
      const onClick = () => {
        if (movedRef.current) {
          movedRef.current = false;
          return;
        }
        onOpen();
      };

      return h(
        'div',
        {
          className: 'xfe-launcher-wrap',
          style: pos ? { left: pos.x, top: pos.y, right: 'auto', bottom: 'auto' } : undefined,
        },
        h('div', { className: 'xfe-launcher-bubble' }, h('b', null, hello), h('br'), t('launcher.bubble')),
        h(
          'button',
          {
            type: 'button',
            className: 'xfe-launcher',
            onClick,
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel: onPointerUp,
            'aria-label': `${t('launcher.cta')}（可拖动）`,
            title: `${t('launcher.cta')} · 可拖动`,
          },
          imgOk
            ? h('img', { src: `${ART}cute-t.png`, alt: '', draggable: false, onError: () => setImgOk(false) })
            : h(FishFallback),
          h('span', { className: 'xfe-launcher-level' }, `Lv.${level}`),
          h('span', { className: 'xfe-launcher-star', 'aria-hidden': true }, '⭐'),
          h('span', { className: 'xfe-launcher-grip', 'aria-hidden': true }, '⠿'),
        ),
      );
    }

    function SectionHead({ title, sub, t }) {
      return h(
        'div',
        { className: 'xfe-section-head' },
        h('h3', null, title),
        sub ? h('p', null, sub) : null,
        h('span', { className: 'xfe-line', 'aria-hidden': true }),
      );
    }

    function subjectStats(data, subject) {
      const x = (data.bySubject && data.bySubject[subject]) || { q: 0, c: 0 };
      return { q: x.q || 0, c: x.c || 0, acc: pct(x.c || 0, x.q || 0) };
    }

    function strongestSubject(data) {
      return SUBJECTS.map((s) => ({ ...s, ...subjectStats(data, s.id) }))
        .filter((s) => s.q >= 2)
        .sort((a, b) => b.acc - a.acc || b.q - a.q)[0] || null;
    }

    function weakestSubject(data) {
      return SUBJECTS.map((s) => ({ ...s, ...subjectStats(data, s.id) }))
        .filter((s) => s.q >= 2)
        .sort((a, b) => a.acc - b.acc || b.q - a.q)[0] || null;
    }

    function lastSeven(data) {
      const out = [];
      for (let i = 6; i >= 0; i -= 1) {
        const d = addDays(new Date(), -i);
        const key = dayKey(d);
        const item = data.daily[key] || emptyDay();
        out.push({ key, label: weekday(d), questions: item.questions || 0, correct: item.correct || 0, minutes: item.minutes || 0, isToday: i === 0 });
      }
      return out;
    }

    function makeConfetti() {
      const colors = ['#ff6f61', '#ffd23f', '#20c8b8', '#6e7bff', '#ffb7d5', '#7bdff2'];
      return Array.from({ length: 34 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        background: colors[i % colors.length],
        dx: `${ri(-90, 90)}px`,
        delay: `${Math.random() * 0.8}s`,
        duration: `${1.9 + Math.random() * 1.6}s`,
        rotate: `${ri(0, 180)}deg`,
      }));
    }

    function AcademyApp({ t, data, setData, onClose, embedded = false }) {
      const [view, setView] = useState('home');
      const [quiz, setQuiz] = useState(null);
      const [curriculum, setCurriculum] = useState(null);
      const [captureOpen, setCaptureOpen] = useState(false);
      const [variantState, setVariantState] = useState(null);
      const [subject, setSubject] = useState(data.lastSubject || 'math');
      const [difficulty, setDifficulty] = useState('normal');
      const [mistakeFilter, setMistakeFilter] = useState('all');
      const [settingsOpen, setSettingsOpen] = useState(false);
      const [profileOpen, setProfileOpen] = useState(false);
      const [updateInfo, setUpdateInfo] = useState(null);
      const [updateChecking, setUpdateChecking] = useState(false);
      const [updateError, setUpdateError] = useState('');
      const [settingsDraft, setSettingsDraft] = useState({ name: data.name, grade: data.grade, sound: data.settings.sound });
      const [resetArmed, setResetArmed] = useState(false);
      const [toast, setToast] = useState('');
      const [focus, setFocus] = useState({ minutes: 10, running: false, endsAt: 0, remaining: 10 * 60000, done: false });
      const [chat, setChat] = useState([
        {
          role: 'assistant',
          text: '咕噜咕噜～我是小肥鱼助教。\n\n我会算数、会讲知识点，也会给你出题。不会的题可以先问我，或者复制去问 DeepSeek 老师。\n\n今天想从哪一科开始？',
          chips: ['给我出一道题', '讲讲分数', '怎么背单词'],
        },
      ]);
      const [chatInput, setChatInput] = useState('');
      const [thinking, setThinking] = useState(false);
      const [confetti, setConfetti] = useState([]);
      const toastTimer = useRef(null);
      const chatTimer = useRef(null);
      const chatScroll = useRef(null);
      const focusDoneRef = useRef(false);
      const audioRef = useRef(null);
      const closeRef = useRef(null);
      const answerLockRef = useRef(false);
      const tutorQuestionRef = useRef(null);

      const today = dayKey();
      const day = data.daily[today] || emptyDay();
      const level = levelOf(data.xp);
      const prevLevelRef = useRef(level);

      useEffect(() => {
        let alive = true;
        loadCurriculum().then((loaded) => { if (alive) setCurriculum(loaded); });
        checkLatestUpdate(false).then((info) => { if (alive && info) setUpdateInfo(info); });
        return () => { alive = false; };
      }, []);

      useEffect(() => {
        const tick = () => {
          const current = getAcademyData();
          if (hungerDecayPoints(current) > 0) {
            setAcademyData((prev) => applyHungerDecay(JSON.parse(JSON.stringify(prev))));
          }
        };
        tick();
        const timer = setInterval(tick, 60000);
        return () => clearInterval(timer);
      }, []);

      const notify = useCallback((msg) => {
        setToast(msg);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(''), 2800);
      }, []);

      const updateAvailable = Boolean(updateInfo && compareVersion(updateInfo.version, APP_VERSION) > 0);
      const checkUpdate = useCallback(async (force = true) => {
        if (updateChecking) return;
        setUpdateChecking(true);
        setUpdateError('');
        const info = await checkLatestUpdate(force);
        setUpdateChecking(false);
        if (!info) {
          setUpdateError(t('settings.updateFailed'));
          if (force) notify(t('settings.updateFailed'));
          return;
        }
        setUpdateInfo(info);
        if (compareVersion(info.version, APP_VERSION) > 0) {
          notify(`${t('settings.updateAvailable')} v${info.version}`);
        } else if (force) {
          notify(t('settings.upToDate'));
        }
      }, [notify, t, updateChecking]);

      const commit = useCallback((fn) => {
        setData((prev) => {
          const next = JSON.parse(JSON.stringify(prev));
          fn(next);
          return normalizeState(next);
        });
      }, [setData]);

      const playSound = useCallback((kind) => {
        if (!data.settings.sound) return;
        try {
          const AC = window.AudioContext || window.webkitAudioContext;
          if (!AC) return;
          if (!audioRef.current) audioRef.current = new AC();
          const ac = audioRef.current;
          if (ac.state === 'suspended') ac.resume();
          const notes = kind === 'correct' ? [660, 880] : kind === 'wrong' ? [240, 180] : kind === 'win' ? [523, 659, 784, 1046] : [880];
          const now = ac.currentTime;
          notes.forEach((freq, i) => {
            const osc = ac.createOscillator();
            const gain = ac.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            const start = now + i * 0.085;
            gain.gain.setValueAtTime(0.0001, start);
            gain.gain.exponentialRampToValueAtTime(0.1, start + 0.015);
            gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.17);
            osc.connect(gain);
            gain.connect(ac.destination);
            osc.start(start);
            osc.stop(start + 0.19);
          });
        } catch {
          /* audio is a garnish, never a blocker */
        }
      }, [data.settings.sound]);

      useEffect(() => () => {
        if (toastTimer.current) clearTimeout(toastTimer.current);
        if (chatTimer.current) clearTimeout(chatTimer.current);
        if (audioRef.current) {
          try { audioRef.current.close(); } catch { /* already closed */ }
        }
      }, []);

      useEffect(() => {
        if (closeRef.current) closeRef.current.focus();
      }, []);

      useEffect(() => {
        const onKey = (e) => {
          if (e.key === 'Escape') {
            if (settingsOpen) {
              setSettingsOpen(false);
              setResetArmed(false);
            } else {
              onClose();
            }
          }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
      }, [settingsOpen, onClose]);

      useEffect(() => {
        if (level > prevLevelRef.current) {
          notify(t('toast.levelup'));
          playSound('win');
        }
        prevLevelRef.current = level;
      }, [level, notify, playSound, t]);

      useEffect(() => {
        if (chatScroll.current) chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
      }, [chat, thinking]);

      useEffect(() => {
        if (!quiz || !quiz.finished) return;
        setConfetti(makeConfetti());
        const id = setTimeout(() => setConfetti([]), 3600);
        return () => clearTimeout(id);
      }, [quiz && quiz.finished]);

      const finishFocus = useCallback((minutes) => {
        if (focusDoneRef.current) return;
        focusDoneRef.current = true;
        commit((d) => {
          const dd = ensureDay(d);
          dd.minutes += minutes;
          d.stats.focusMinutes = (d.stats.focusMinutes || 0) + minutes;
          touchStreak(d);
          grant(d, minutes * 4 + 10, minutes);
        });
        notify(t('toast.focusDone'));
        playSound('win');
      }, [commit, notify, playSound, t]);

      useEffect(() => {
        if (!focus.running || !focus.endsAt) return undefined;
        let cancelled = false;
        const tick = () => {
          if (cancelled) return;
          const remaining = Math.max(0, focus.endsAt - Date.now());
          if (remaining <= 0) {
            setFocus((f) => ({ ...f, running: false, remaining: 0, done: true }));
            finishFocus(focus.minutes);
          } else {
            setFocus((f) => (f.remaining === remaining ? f : { ...f, remaining }));
          }
        };
        tick();
        const id = setInterval(tick, 500);
        return () => {
          cancelled = true;
          clearInterval(id);
        };
      }, [focus.running, focus.endsAt, focus.minutes, finishFocus]);

      const startFocus = () => {
        if (focus.running) {
          setFocus((f) => ({ ...f, running: false, remaining: Math.max(0, f.endsAt - Date.now()) }));
          return;
        }
        focusDoneRef.current = false;
        const remaining = focus.done || focus.remaining <= 0 ? focus.minutes * 60000 : focus.remaining;
        setFocus((f) => ({ ...f, running: true, done: false, endsAt: Date.now() + remaining, remaining }));
      };

      const setFocusMinutes = (minutes) => {
        if (focus.running) return;
        focusDoneRef.current = false;
        setFocus({ minutes, running: false, endsAt: 0, remaining: minutes * 60000, done: false });
      };

      const startQuiz = (subjectId, diff = difficulty, focus = '', gradeOverride) => {
        const quizGrade = clamp(Number(gradeOverride) || data.grade, 1, 6);
        const next = makeQuiz(subjectId, quizGrade, diff, focus);
        answerLockRef.current = false;
        setQuiz(next);
        setSubject(subjectId === 'mixed' ? 'mixed' : subjectId);
        setDifficulty(diff);
        setView('practice');
        if (subjectId !== 'mixed') commit((d) => { d.lastSubject = subjectId; });
      };

      const chooseAnswer = (index) => {
        if (!quiz || quiz.locked || quiz.finished || answerLockRef.current) return;
        answerLockRef.current = true;
        const q = quiz.questions[quiz.index];
        const isCorrect = index === q.correct;
        const nextCombo = isCorrect ? quiz.combo + 1 : 0;
        const rewardXp = isCorrect ? 10 + Math.min(10, nextCombo * 2) : 0;
        const rewardCoins = isCorrect ? 2 : 0;
        const leveled = levelOf(data.xp + rewardXp) > levelOf(data.xp);
        setQuiz((prev) => ({
          ...prev,
          selected: index,
          locked: true,
          correct: isCorrect,
          correctCount: prev.correctCount + (isCorrect ? 1 : 0),
          combo: nextCombo,
          bestCombo: Math.max(prev.bestCombo, nextCombo),
        }));
        commit((d) => {
          const dd = ensureDay(d);
          d.stats.totalQuestions += 1;
          dd.questions += 1;
          dd.subjects[q.subject] = dd.subjects[q.subject] || { q: 0, c: 0 };
          dd.subjects[q.subject].q += 1;
          d.bySubject[q.subject] = d.bySubject[q.subject] || { q: 0, c: 0 };
          d.bySubject[q.subject].q += 1;
          d.stats.bestCombo = Math.max(d.stats.bestCombo || 0, nextCombo);
          if (isCorrect) {
            d.stats.totalCorrect += 1;
            d.bySubject[q.subject].c += 1;
            dd.correct += 1;
            dd.subjects[q.subject].c += 1;
            grant(d, rewardXp, rewardCoins);
          } else {
            const exists = d.mistakes.some((m) => m.prompt === q.prompt && m.subject === q.subject);
            if (!exists) {
              d.mistakes.unshift({
                id: uid('mistake'),
                subject: q.subject,
                grade: q.grade,
                prompt: q.prompt,
                options: q.options,
                selected: q.options[index],
                correctAnswer: q.options[q.correct],
                explanation: q.explanation,
                analysis: q.explanation,
                knowledgePoint: q.knowledgePoint || inferKnowledgePoint(q.subject, q.prompt, q.grade),
                hint: q.hint,
                source: 'practice',
                mastery: 0,
                attempts: 0,
                createdAt: Date.now(),
              });
              if (d.mistakes.length > 80) d.mistakes.length = 80;
            }
          }
          touchStreak(d);
        });
        playSound(isCorrect ? 'correct' : 'wrong');
        if (leveled) setTimeout(() => notify(t('toast.levelup')), 50);
      };

      const nextQuestion = () => {
        if (!quiz) return;
        answerLockRef.current = false;
        if (quiz.index + 1 < quiz.questions.length) {
          setQuiz((prev) => ({ ...prev, index: prev.index + 1, selected: null, locked: false, correct: false }));
          return;
        }
        const perfect = quiz.correctCount === quiz.questions.length;
        commit((d) => {
          const dd = ensureDay(d);
          dd.quizzes += 1;
          if (perfect) d.stats.perfectQuizzes += 1;
          grant(d, 20, d.hunger >= 80 ? 15 : 10);
          touchStreak(d);
        });
        if (data.hunger >= 80) notify('小肥鱼吃饱啦，通关奖励 +15 🪙');
        setQuiz((prev) => ({ ...prev, finished: true }));
        playSound('win');
      };

      const claimQuest = (q) => {
        if (q.claimed || q.value < q.target) return;
        commit((d) => {
          if (!d.claimed[dayKey()]) d.claimed[dayKey()] = [];
          if (!d.claimed[dayKey()].includes(q.id)) {
            d.claimed[dayKey()].push(q.id);
            grant(d, q.xp, q.coins);
            touchStreak(d);
          }
        });
        notify(`${t('toast.claimed')} +${q.xp} XP · +${q.coins} 🪙`);
        playSound('coin');
      };

      const feed = (food) => {
        if (data.coins < food.cost) {
          notify(t('toast.notEnough'));
          return;
        }
        if (data.hunger >= 100) {
          notify(t('toast.hungry'));
          return;
        }
        const leveled = levelOf(data.xp + food.xp) > levelOf(data.xp);
        const firstMealToday = data.lastFed !== dayKey();
        commit((d) => {
          d.coins -= food.cost;
          d.hunger = clamp(d.hunger + food.hunger, 0, 100);
          d.hungerAt = Date.now();
          d.stats.feedCount = (d.stats.feedCount || 0) + 1;
          if (firstMealToday) {
            addDiary(d, food.emoji, `小肥鱼吃到了${food.name}，饱饱度涨到 ${d.hunger}%${d.hunger >= 80 ? '，学起来特别有劲！' : '。'}`);
          }
          d.lastFed = dayKey();
          grant(d, food.xp, 0);
        });
        notify(`${t('toast.fed')} ${food.emoji} +${food.xp} XP`);
        playSound('coin');
        if (leveled) setTimeout(() => notify(t('toast.levelup')), 60);
      };

      const outfitAction = (o) => {
        const owned = data.owned.includes(o.id);
        if (owned) {
          commit((d) => { d.outfit = d.outfit === o.id ? '' : o.id; });
          notify(t('toast.equipped'));
          return;
        }
        if (level < o.level) {
          notify(t('growth.lockedLevel').replace('{n}', String(o.level)));
          return;
        }
        if (o.cost > 0 && data.coins < o.cost) {
          notify(t('toast.notEnough'));
          return;
        }
        commit((d) => {
          d.coins -= o.cost;
          if (!d.owned.includes(o.id)) d.owned.push(o.id);
          d.outfit = o.id;
        });
        notify(t('toast.bought'));
        playSound('coin');
      };

      const reviewMistake = (m) => {
        commit((d) => {
          d.mistakes = d.mistakes.filter((x) => x.id !== m.id);
          d.stats.reviewed = (d.stats.reviewed || 0) + 1;
          d.stats.masteredMistakes = (d.stats.masteredMistakes || 0) + 1;
          d.stats.shells = (d.stats.shells || 0) + 1;
          ensureDay(d).reviewed += 1;
          ensureDay(d).mastered += 1;
          grant(d, 5, 3);
          addDiary(d, '🐚', `把一道${subjectText(t, m.subject) || ''}错题收进贝壳罐，小肥鱼又多了一枚知识贝壳。`);
          touchStreak(d);
        });
        notify('+5 XP · +3 🪙 · +1 🐚');
        playSound('correct');
      };

      const savePhotoMistake = (payload) => {
        commit((d) => {
          d.mistakes.unshift({
            id: uid('mistake'),
            subject: payload.subject,
            grade: payload.grade,
            prompt: payload.question,
            selected: payload.studentAnswer || '（未填写）',
            correctAnswer: payload.correctAnswer,
            explanation: payload.analysis || '先找出错在哪一步，再把正确思路讲一遍。',
            analysis: payload.analysis || '',
            knowledgePoint: payload.knowledgePoint || '',
            textbookId: payload.textbookId || '',
            unitId: payload.unitId || '',
            source: 'photo',
            image: payload.image || '',
            mastery: 0,
            attempts: 0,
            createdAt: Date.now(),
          });
          if (d.mistakes.length > 80) d.mistakes.length = 80;
          grant(d, 5, 2);
          addDiary(d, '📷', `收进一张${subjectText(t, payload.subject) || ''}试卷，错题也有了自己的小档案。`);
          touchStreak(d);
        });
        setCaptureOpen(false);
        notify(t('capture.saved'));
        playSound('coin');
      };

      const openVariant = (mistake) => {
        setVariantState({
          mistake,
          question: makeVariant(mistake),
          round: 1,
          selected: null,
          checked: false,
          correct: false,
          mastered: false,
        });
      };

      const answerVariant = (index) => {
        if (!variantState || variantState.checked) return;
        const current = (data.mistakes || []).find((m) => m.id === variantState.mistake.id) || variantState.mistake;
        const correct = index === variantState.question.correct;
        const nextMastery = correct ? Math.min(2, (current.mastery || 0) + 1) : 0;
        const willMaster = correct && nextMastery >= 2;
        commit((d) => {
          const m = (d.mistakes || []).find((item) => item.id === variantState.mistake.id);
          if (!m) return;
          m.attempts = (m.attempts || 0) + 1;
          m.lastPracticed = Date.now();
          m.mastery = nextMastery;
          if (correct) {
            grant(d, 8, 3);
            if (willMaster) {
              d.mistakes = d.mistakes.filter((item) => item.id !== m.id);
              d.stats.masteredMistakes = (d.stats.masteredMistakes || 0) + 1;
              d.stats.shells = (d.stats.shells || 0) + 1;
              const day = ensureDay(d);
              day.mastered += 1;
              addDiary(d, '🐚', `连续答对 2 道变式，把“${m.knowledgePoint || m.prompt.slice(0, 12)}”收进知识贝壳。`);
            }
          }
          touchStreak(d);
        });
        setVariantState((prev) => (prev ? { ...prev, selected: index, checked: true, correct, mastered: willMaster } : prev));
        playSound(correct ? 'correct' : 'wrong');
        if (willMaster) notify(t('variant.mastered'));
      };

      const nextVariant = () => {
        if (!variantState || variantState.mastered) return;
        setVariantState((prev) => (prev ? {
          ...prev,
          question: makeVariant(prev.mistake),
          round: prev.round + 1,
          selected: null,
          checked: false,
          correct: false,
        } : prev));
      };

      const saveTextbook = (book) => {
        commit((d) => {
          d.textbooks.unshift(book);
          if (d.textbooks.length > 24) d.textbooks.length = 24;
          d.activeTextbooks[bookKey(book.subject, book.grade, book.volume)] = book.id;
          addDiary(d, '📚', `书架上多了一本《${book.title}》，小肥鱼已经记住它的目录。`);
        });
        notify(t('library.saveOk'));
      };

      const useBook = (id, meta) => {
        const target = (data.textbooks || []).find((book) => book.id === id);
        if (!target) return;
        commit((d) => {
          d.activeTextbooks[bookKey(meta.subject, meta.grade, meta.volume)] = id;
        });
        notify(`已切换到《${target.title}》`);
      };

      const practicePoint = (pointSubject, pointName, gradeOverride) => {
        setView('practice');
        startQuiz(pointSubject, 'normal', pointName, gradeOverride);
      };

      const askPoint = (pointName, gradeOverride) => {
        setView('tutor');
        ask(`请用小学${gradeOverride || data.grade}年级能懂的方式，讲讲“${pointName}”这个知识点，并举一个例子。`);
      };

      const openSettings = () => {
        setSettingsDraft({ name: data.name, grade: data.grade, sound: data.settings.sound });
        setResetArmed(false);
        setSettingsOpen(true);
      };

      const saveSettings = () => {
        const clean = settingsDraft.name.trim().slice(0, 12) || '小海星';
        commit((d) => {
          d.name = clean;
          d.grade = clamp(Number(settingsDraft.grade) || 3, 1, 6);
          d.settings.sound = Boolean(settingsDraft.sound);
        });
        setSettingsOpen(false);
        notify(t('toast.saved'));
      };

      const resetAll = () => {
        if (!resetArmed) {
          setResetArmed(true);
          return;
        }
        setData(defaultState());
        setQuiz(null);
        setView('home');
        setSettingsOpen(false);
        setProfileOpen(false);
        setResetArmed(false);
        notify(t('toast.reset'));
      };

      const switchChild = (id) => {
        if (!id || id === data.activeChildId) {
          setProfileOpen(false);
          return;
        }
        const target = data.childSnapshots && data.childSnapshots[id];
        if (!target) return;
        setData((prev) => {
          const snapshots = { ...prev.childSnapshots, [prev.activeChildId]: extractLearning(prev) };
          const next = { ...prev, activeChildId: id, childSnapshots: snapshots };
          applyLearning(next, target);
          return next;
        });
        setQuiz(null);
        setView('home');
        setCaptureOpen(false);
        setVariantState(null);
        setMistakeFilter('all');
        setProfileOpen(false);
        if (chatTimer.current) clearTimeout(chatTimer.current);
        setThinking(false);
        setFocus({ minutes: 10, running: false, endsAt: 0, remaining: 10 * 60000, done: false });
        focusDoneRef.current = false;
        tutorQuestionRef.current = null;
        setChat([{ role: 'assistant', text: `咕噜咕噜～现在是${target.name || '小海星'}的学习舱啦。\n\n每个孩子的错题、贝壳和进度都会分开保存；教材库是共享的。\n\n今天想先学哪一科？`, chips: ['给我出一道题', '讲讲分数', '怎么背单词'] }]);
        notify(`已切换到 ${target.name || '另一个孩子'} 的学习档案`);
      };

      const addChild = ({ name, grade, avatar }) => {
        const clean = String(name || '').trim().slice(0, 12) || '小海星';
        const cleanGrade = clamp(Number(grade) || 3, 1, 6);
        const cleanAvatar = CHILD_AVATARS.includes(avatar) ? avatar : '🐳';
        const id = uid('child');
        setData((prev) => {
          const newSnapshot = blankLearning(clean, cleanGrade);
          const next = {
            ...prev,
            children: [...prev.children, { id, name: clean, grade: cleanGrade, avatar: cleanAvatar, createdAt: Date.now() }],
            activeChildId: id,
            childSnapshots: {
              ...prev.childSnapshots,
              [prev.activeChildId]: extractLearning(prev),
              [id]: newSnapshot,
            },
          };
          applyLearning(next, newSnapshot);
          return next;
        });
        setQuiz(null);
        setView('home');
        setCaptureOpen(false);
        setVariantState(null);
        setProfileOpen(false);
        if (chatTimer.current) clearTimeout(chatTimer.current);
        setThinking(false);
        setFocus({ minutes: 10, running: false, endsAt: 0, remaining: 10 * 60000, done: false });
        focusDoneRef.current = false;
        tutorQuestionRef.current = null;
        setChat([{ role: 'assistant', text: `欢迎 ${clean} 来到小肥鱼学习舱！\n\n你的学习档案已经建好啦，错题、贝壳和日记都是你自己的。先选一科试试？`, chips: ['给我出一道题', '讲讲分数', '怎么背单词'] }]);
        notify(`已添加 ${clean} 的学习档案`);
      };

      const removeChild = (id) => {
        if (!Array.isArray(data.children) || data.children.length <= 1) return;
        const remaining = data.children.filter((child) => child.id !== id);
        if (!remaining.length) return;
        setData((prev) => {
          const left = prev.children.filter((child) => child.id !== id);
          if (!left.length) return prev;
          const snapshots = { ...prev.childSnapshots };
          delete snapshots[id];
          const next = { ...prev, children: left, childSnapshots: snapshots };
          if (prev.activeChildId === id) {
            const target = left[0];
            next.activeChildId = target.id;
            applyLearning(next, snapshots[target.id] || blankLearning(target.name, target.grade));
          }
          return next;
        });
        if (data.activeChildId === id) {
          setQuiz(null);
          setView('home');
          setCaptureOpen(false);
          setVariantState(null);
          setProfileOpen(false);
          if (chatTimer.current) clearTimeout(chatTimer.current);
          setThinking(false);
          setFocus({ minutes: 10, running: false, endsAt: 0, remaining: 10 * 60000, done: false });
          focusDoneRef.current = false;
          tutorQuestionRef.current = null;
          setChat([{ role: 'assistant', text: '新的学习档案已经准备好啦。今天想先学哪一科？', chips: ['给我出一道题', '讲讲分数', '怎么背单词'] }]);
        }
        notify('学习档案已删除');
      };

      const ask = (text) => {
        const clean = String(text || '').trim();
        if (!clean || thinking) return;
        setChat((c) => [...c, { role: 'user', text: clean }]);
        setChatInput('');
        setThinking(true);
        if (chatTimer.current) clearTimeout(chatTimer.current);
        chatTimer.current = setTimeout(() => {
          const reply = tutorReply(clean, data.grade, tutorQuestionRef.current);
          if (reply.question) tutorQuestionRef.current = reply.question;
          setChat((c) => [...c, { role: 'assistant', text: reply.text, chips: reply.chips, canCopy: reply.canCopy }]);
          setThinking(false);
        }, 460);
      };

      const copyForDeepSeek = async (text) => {
        const prompt = `请用小学生能听懂的方式，分步骤讲解这道题：${text}`;
        try {
          await navigator.clipboard.writeText(prompt);
          notify(t('toast.copied'));
        } catch {
          const area = document.createElement('textarea');
          area.value = prompt;
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          try { document.execCommand('copy'); } catch { /* ignore */ }
          document.body.removeChild(area);
          notify(t('toast.copied'));
        }
      };

      const navItems = [
        { id: 'home', icon: '🏠', label: t('nav.home') },
        { id: 'practice', icon: '🏝️', label: t('nav.practice') },
        { id: 'library', icon: '📚', label: t('nav.library') },
        { id: 'tutor', icon: '🐟', label: t('nav.tutor') },
        { id: 'mistakes', icon: '🧹', label: t('nav.mistakes'), badge: data.mistakes.length },
        { id: 'growth', icon: '🐳', label: t('nav.growth') },
        { id: 'report', icon: '📊', label: t('nav.report') },
      ];
      const titleMap = {
        home: t('app.title'),
        practice: t('practice.title'),
        library: t('library.title'),
        tutor: t('tutor.title'),
        mistakes: t('mistakes.title'),
        growth: t('growth.title'),
        report: t('report.title'),
      };
      const quests = questList(t, data);

      let content = null;
      if (view === 'practice') {
        content = quiz
          ? quiz.finished
            ? h(ResultView, { t, quiz, onAgain: () => startQuiz(quiz.subject === 'mixed' ? 'mixed' : quiz.subject, quiz.difficulty), onReview: () => { setQuiz(null); setView('mistakes'); }, onHome: () => { setView('home'); setQuiz(null); } })
            : h(QuizRunner, { t, quiz, onChoose: chooseAnswer, onNext: nextQuestion, onQuit: () => { setQuiz(null); setView('practice'); }, onOpenMistakes: () => setView('mistakes') })
          : h(PracticePicker, {
              t,
              data,
              subject,
              difficulty,
              onSubject: setSubject,
              onDifficulty: setDifficulty,
              onStart: () => startQuiz(subject, difficulty),
            });
      } else if (view === 'library') {
        content = h(LibraryView, {
          t,
          data,
          curriculum,
          onSaveBook: saveTextbook,
          onUseBook: useBook,
          onPracticePoint: practicePoint,
          onAskPoint: askPoint,
        });
      } else if (view === 'tutor') {
        content = h(TutorView, {
          t,
          data,
          chat,
          chatInput,
          setChatInput,
          thinking,
          chatScroll,
          onAsk: ask,
          onCopy: copyForDeepSeek,
        });
      } else if (view === 'mistakes') {
        content = h(MistakesView, {
          t,
          data,
          filter: mistakeFilter,
          setFilter: setMistakeFilter,
          onReview: reviewMistake,
          onVariant: openVariant,
          onCapture: () => setCaptureOpen(true),
          resumeQuiz: quiz && !quiz.finished ? {
            index: quiz.index + 1,
            total: quiz.questions.length,
            onResume: () => setView('practice'),
          } : null,
          onPractice: () => { setView('practice'); setQuiz(null); },
        });
      } else if (view === 'growth') {
        content = h(GrowthView, { t, data, level, onFeed: feed, onOutfit: outfitAction });
      } else if (view === 'report') {
        content = h(ReportView, { t, data, onPractice: () => { setView('practice'); setQuiz(null); }, onNotify: notify });
      } else {
        content = h(HomeView, {
          t,
          data,
          day,
          level,
          quests,
          onClaim: claimQuest,
          onStart: (s) => startQuiz(s || data.lastSubject || 'math', 'normal'),
          onNavigate: setView,
          focus,
          onFocus: startFocus,
          onFocusMinutes: setFocusMinutes,
        });
      }

      const app = h(
        'div',
        {
          className: `xfe-app${embedded ? ' is-embedded' : ' is-overlay'}`,
          role: embedded ? 'region' : 'dialog',
          'aria-modal': embedded ? undefined : 'true',
          'aria-label': t('app.title'),
          onMouseDown: (e) => e.stopPropagation(),
        },
        h(Rail, { t, data, navItems, view, onNavigate: setView, level }),
        h(
          'main',
          { className: 'xfe-main' },
          h(Header, {
            t,
            data,
            title: titleMap[view] || t('app.title'),
            level,
            embedded,
            onGrade: (grade) => {
              commit((d) => { d.grade = grade; });
              notify(`题目难度已切到${gradeText(t, grade)}，出题和讲解都会跟着变`);
            },
            onSettings: openSettings,
            onProfiles: () => setProfileOpen(true),
            updateAvailable,
            onClose,
            onSound: () => commit((d) => { d.settings.sound = !d.settings.sound; }),
            closeRef,
          }),
          content,
        ),
        h(SidePanel, { t, data, day, level, onFeed: () => setView('growth'), onMistakes: () => setView('mistakes') }),
        profileOpen
          ? h(ProfileSheet, {
              t,
              data,
              onClose: () => setProfileOpen(false),
              onSwitch: switchChild,
              onAdd: addChild,
              onRemove: removeChild,
            })
          : null,
        settingsOpen
          ? h(SettingsSheet, {
              t,
              draft: settingsDraft,
              setDraft: setSettingsDraft,
              onSave: saveSettings,
              onClose: () => setSettingsOpen(false),
              onReset: resetAll,
              resetArmed,
              appVersion: APP_VERSION,
              updateInfo,
              updateChecking,
              updateError,
              onCheckUpdate: checkUpdate,
              onOpenUpdate: () => window.open((updateInfo && updateInfo.download) || UPDATE_PAGE, '_blank', 'noopener'),
            })
          : null,
        captureOpen
          ? h(CaptureSheet, {
              t,
              data,
              curriculum,
              onClose: () => setCaptureOpen(false),
              onSave: savePhotoMistake,
            })
          : null,
        variantState
          ? h(VariantSheet, {
              t,
              variant: variantState,
              onAnswer: answerVariant,
              onNext: nextVariant,
              onClose: () => setVariantState(null),
            })
          : null,
        toast ? h('div', { className: 'xfe-toast', role: 'status' }, toast) : null,
        confetti.length
          ? h('div', { className: 'xfe-confetti', 'aria-hidden': true }, confetti.map((c) =>
              h('i', {
                key: c.id,
                style: {
                  left: c.left,
                  background: c.background,
                  '--dx': c.dx,
                  animationDelay: c.delay,
                  animationDuration: c.duration,
                  transform: `rotate(${c.rotate})`,
                },
              }),
            ))
          : null,
      );
      return embedded
        ? h('div', { className: 'xfe-embed' }, app)
        : h(
            'div',
            { className: 'xfe-backdrop', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose(); } },
            app,
          );
    }

    function Rail({ t, data, navItems, view, onNavigate, level }) {
      return h(
        'aside',
        { className: 'xfe-rail' },
        h('div', { className: 'xfe-brand' }, h('img', { src: `${ART}cute-t.png`, alt: '', draggable: false, onError: (e) => { e.currentTarget.style.display = 'none'; } })),
        h('div', { className: 'xfe-brand-text' }, '小肥鱼', h('br'), '学习平台'),
        h(
          'nav',
          { className: 'xfe-nav', 'aria-label': t('app.title') },
          navItems.map((item) =>
            h(
              'button',
              {
                key: item.id,
                type: 'button',
                className: view === item.id ? 'is-active' : '',
                onClick: () => onNavigate(item.id),
                'aria-current': view === item.id ? 'page' : undefined,
                title: item.label,
              },
              h('span', { className: 'xfe-nav-icon', 'aria-hidden': true }, item.icon),
              h('span', null, item.label),
              item.badge ? h('span', { className: 'xfe-nav-dot', 'aria-label': `${item.badge} ${t('mistakes.count')}` }) : null,
            ),
          ),
        ),
        h(
          'div',
          { className: 'xfe-rail-bottom' },
          h('div', { className: 'xfe-mini-avatar' }, h('img', { src: `${ART}cute-t.png`, alt: '', draggable: false })),
          h('div', { className: 'xfe-rail-xp' }, `Lv.${level}`, h('br'), `${data.xp % 120}/120`),
        ),
      );
    }

    function Header({ t, data, title, level, onGrade, onSettings, onClose, onSound, onProfiles, updateAvailable = false, closeRef, embedded = false }) {
      const activeChild = (data.children || []).find((child) => child.id === data.activeChildId) || (data.children || [])[0];
      return h(
        'header',
        { className: 'xfe-header' },
        h('span', { className: 'xfe-header-title' }, title),
        h('button', {
          type: 'button',
          className: 'xfe-profile-switch',
          onClick: onProfiles,
          title: '切换 / 管理学习档案',
          'aria-label': '切换 / 管理学习档案',
        },
          h('span', { className: 'xfe-profile-avatar' }, activeChild && activeChild.avatar ? activeChild.avatar : '🐳'),
          h('span', { className: 'xfe-profile-name' }, data.name),
          h('span', { className: 'xfe-profile-caret' }, '▾'),
        ),
        h(
          'span',
          { className: 'xfe-grade-wrap', title: '题目难度跟年级走：出题、讲解、教材目录都用它。切换学习档案时，难度会跟着档案变。' },
          h('span', { className: 'xfe-grade-label' }, '难度'),
          h(
            'select',
            {
              className: 'xfe-grade-select',
              value: data.grade,
              onChange: (e) => onGrade(clamp(Number(e.target.value) || 1, 1, 6)),
              'aria-label': `${t('settings.grade')}（决定题目难度）`,
            },
            GRADE_IDS.map((g) => h('option', { key: g, value: g }, gradeText(t, g))),
          ),
        ),
        h('span', { className: 'xfe-header-spacer' }),
        h('span', { className: 'xfe-chip is-coral', title: t('header.streak') }, '🔥', `${data.streak}`, t('header.streak')),
        h('span', { className: 'xfe-chip is-sun', title: t('header.coins') }, '🪙', `${data.coins}`),
        h('span', { className: 'xfe-chip is-mint', title: t('header.level') }, '⭐', `Lv.${level}`),
        h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onSound, title: data.settings.sound ? '音效开' : '音效关', 'aria-label': data.settings.sound ? '音效开' : '音效关' }, data.settings.sound ? '🔊' : '🔇'),
        h('button', { type: 'button', className: `xfe-icon-btn ${updateAvailable ? 'has-update' : ''}`, onClick: onSettings, title: t('header.settings'), 'aria-label': t('header.settings') },
          '⚙️',
          updateAvailable ? h('span', { className: 'xfe-update-dot', 'aria-label': t('settings.updateAvailable') }) : null,
        ),
        h('button', { type: 'button', className: 'xfe-icon-btn is-close', onClick: onClose, title: embedded ? t('header.exit') : t('header.close'), 'aria-label': embedded ? t('header.exit') : t('header.close'), ref: closeRef }, embedded ? '↩' : '✕'),
      );
    }

    function SidePanel({ t, data, day, level, onFeed, onMistakes }) {
      const weakest = weakestSubject(data);
      const latest = data.diary && data.diary[0];
      const latestText = latest && latest.text ? (latest.text.length > 42 ? `${latest.text.slice(0, 42)}…` : latest.text) : '';
      const speech = latestText ? latestText : data.hunger < 30 ? '饿晕在海底啦…快用贝壳换点吃的救救小肥鱼！' : data.hunger < 80 ? '有点想吃大米饭了，喂一口吧。' : data.streak >= 3 ? `连续 ${data.streak} 天啦！小肥鱼的鳍都在发光。` : data.mistakes.length ? `错题礁还有 ${data.mistakes.length} 颗贝壳，要一起捡吗？` : t('home.hero.side');
      const mood = hungerMood(data.hunger);
      return h(
        'aside',
        { className: 'xfe-side' },
        h(
          'section',
          { className: 'xfe-side-card' },
          h('div', { className: 'xfe-side-mascot' }, h(Mascot, { outfit: data.outfit, mood })),
          h('div', { className: 'xfe-side-speech' }, speech),
          h('div', { style: { marginTop: '10px' } },
            h('div', { className: 'xfe-level-line' }, h('span', null, `🍙 ${t('growth.hunger')}`), h('span', null, `${data.hunger}%`)),
            h(Progress, { value: data.hunger, max: 100, className: 'is-hunger' }),
            h('small', { className: 'xfe-card-sub', style: { display: 'block', marginTop: '4px' } },
              data.hunger <= 0
                ? '饿扁了！快喂一口，马上复活。'
                : data.hunger < 30
                  ? '饿晕在海底啦，投喂一口就蹦起来。'
                  : `饱食度每 ${HUNGER_DECAY_MINUTES_PER_POINT} 分钟扣 1 点 · 吃饱（80%以上）闯关多拿贝壳`,
            ),
            h('button', { type: 'button', className: 'xfe-btn is-sun is-sm is-full', style: { marginTop: '8px' }, onClick: onFeed }, '🍭 ', t('home.fish.feed')),
          ),
          h('div', { className: 'xfe-level-line', style: { marginTop: '12px' } }, h('span', null, `${data.name} · Lv.${level}`), h('span', { className: 'xfe-level-badge' }, '🐳 小肥鱼')),
          h(Progress, { value: data.xp % 120, max: 120 }),
          h('div', { className: 'xfe-side-mini-stats' },
            h('div', { className: 'xfe-side-mini' }, h('b', null, `${data.stats.totalCorrect}`), h('small', null, '累计答对')),
            h('div', { className: 'xfe-side-mini' }, h('b', null, `${pct(data.stats.totalCorrect, data.stats.totalQuestions)}%`), h('small', null, t('report.accuracy'))),
          ),
          h('div', { className: 'xfe-side-row', style: { marginTop: '7px' } },
            h('i', { className: 'xfe-dot', style: { '--c': 'var(--xfe-lilac)' } }),
            h('span', null, `🐚 ${t('pet.shells')}`),
            h('b', null, `${data.stats.shells || 0}`),
          ),
        ),
        h(
          'section',
          { className: 'xfe-side-card' },
          h('h4', { className: 'xfe-side-title' }, '🐟 小肥鱼日记'),
          data.diary && data.diary.length
            ? h('div', { className: 'xfe-side-list' },
                data.diary.slice(0, 3).map((entry) => h('div', { key: entry.id, className: 'xfe-side-row' },
                  h('span', null, `${entry.emoji || '🐟'} ${entry.text.length > 28 ? `${entry.text.slice(0, 28)}…` : entry.text}`),
                )),
              )
            : h('p', { className: 'xfe-card-sub' }, t('pet.diaryEmpty')),
          h('button', { type: 'button', className: 'xfe-btn is-mint is-sm is-full', style: { marginTop: '9px' }, onClick: onFeed }, '🐳 去成长湾'),
        ),
        h(
          'section',
          { className: 'xfe-side-card' },
          h('h4', { className: 'xfe-side-title' }, '🧭 小肥鱼指路'),
          h('p', { className: 'xfe-card-sub', style: { marginBottom: '8px' } }, weakest ? `${weakest.id === 'math' ? '数学' : weakest.id === 'chinese' ? '语文' : '英语'}最近有点小浪，要不要去补一补？` : '先去闯关岛开一局，小肥鱼帮你看看哪片海最拿手。'),
          h('button', { type: 'button', className: 'xfe-btn is-mint is-sm is-full', onClick: onMistakes }, '🧹 去错题礁捡宝藏'),
        ),
      );
    }

    function HomeView({ t, data, day, level, quests, onClaim, onStart, onNavigate, focus, onFocus, onFocusMinutes }) {
      const hour = new Date().getHours();
      const greeting = hour < 11 ? t('home.morning') : hour < 18 ? t('home.afternoon') : t('home.evening');
      const weak = weakestSubject(data);
      const ctaSubject = weak && weak.q >= 2 ? weak.id : (data.lastSubject || 'math');
      const now = new Date();
      const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
      const tip = TIPS[dayOfYear % TIPS.length];
      const remaining = Math.max(0, focus.remaining || 0);
      const total = Math.max(1, focus.minutes * 60000);
      const focusPct = Math.max(0, Math.min(100, 100 - (remaining / total) * 100));
      const mm = pad(Math.floor(remaining / 60000));
      const ss = pad(Math.floor((remaining % 60000) / 1000));
      const speech = data.streak >= 3 ? `连续 ${data.streak} 天，小肥鱼已经把你写进鱼鳍日记啦！` : weak ? `小肥鱼发现 ${weak.id === 'math' ? '数学' : weak.id === 'chinese' ? '语文' : '英语'} 有点小波浪，要一起冲过去吗？` : '今天的海风刚刚好，适合学一点点新东西。';
      const todayAccuracy = day.questions ? pct(day.correct, day.questions) : 0;
      const doneQuests = quests.filter((q) => q.value >= q.target).length;
      const recentMistakes = data.mistakes.slice(0, 2);

      return h(
        'div',
        { className: 'xfe-home' },
        h(
          'section',
          { className: 'xfe-hero xfe-card' },
          h(
            'div',
            { className: 'xfe-hero-copy' },
            h('span', { className: 'xfe-kicker' }, '🐚 ', t('home.hero.kicker')),
            h('h2', null, `${greeting}，${data.name}！`, h('br'), t('home.hero.title')),
            h('p', null, t('home.hero.subtitle')),
            h('div', { className: 'xfe-hero-stats' },
              h('div', { className: 'xfe-hero-stat' }, h('span', null, '📚'), h('b', null, `${day.questions}`), h('small', null, '今日答题')),
              h('div', { className: 'xfe-hero-stat' }, h('span', null, '✅'), h('b', null, day.questions ? `${todayAccuracy}%` : '—'), h('small', null, '今日正确率')),
              h('div', { className: 'xfe-hero-stat' }, h('span', null, '🐚'), h('b', null, `${data.stats.shells || 0}`), h('small', null, t('pet.shells'))),
            ),
            h(
              'div',
              { className: 'xfe-hero-actions' },
              h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: () => onStart(ctaSubject) }, '🚀 ', t('home.hero.cta')),
              h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: () => onNavigate('tutor') }, '🐟 问问小肥鱼'),
            ),
          ),
          h(
            'div',
            { className: 'xfe-hero-mascot' },
            h('div', { className: 'xfe-speech' }, speech),
            h(Mascot, { outfit: data.outfit, mood: hungerMood(data.hunger) }),
          ),
        ),
        h(
          'section',
          { className: 'xfe-card xfe-daily-card' },
          h('div', { className: 'xfe-daily-head' },
            h('div', null,
              h('h3', null, '🎯 ', t('home.quests')),
              h('p', null, t('home.quests.sub')),
            ),
            h('span', { className: 'xfe-chip is-sun' }, `${doneQuests}/${quests.length} 完成`),
          ),
          h('div', { className: 'xfe-daily-grid' },
            quests.map((q) => {
              const done = q.value >= q.target;
              return h('article', { key: q.id, className: `xfe-daily-quest ${done ? 'is-done' : ''} ${q.claimed ? 'is-claimed' : ''}` },
                h('span', { className: 'xfe-daily-icon' }, q.icon),
                h('div', { className: 'xfe-daily-copy' },
                  h('b', null, q.label),
                  h('small', null, q.hint),
                  h('div', { className: 'xfe-quest-progress' }, h('span', { style: { width: `${Math.min(100, pct(q.value, q.target))}%` } })),
                ),
                h('button', {
                  type: 'button',
                  className: 'xfe-daily-claim',
                  onClick: () => onClaim(q),
                  disabled: q.claimed || !done,
                }, q.claimed ? '✓ 已领' : done ? '领取' : `${Math.floor(q.value)}/${q.target}`),
              );
            }),
          ),
          h('div', { className: 'xfe-daily-foot' },
            h('span', null, '🎁 任务奖励直接进金币罐，攒着去小卖部喂小肥鱼。'),
            h('button', { type: 'button', className: 'xfe-chip-btn', onClick: () => onNavigate('growth') }, '去小卖部 →'),
          ),
        ),
        h(SectionHead, { title: t('home.subjects'), sub: t('home.subjects.sub'), t }),
        h(
          'div',
          { className: 'xfe-subjects' },
          SUBJECTS.map((meta) => {
            const st = subjectStats(data, meta.id);
            return h(
              'button',
              {
                key: meta.id,
                type: 'button',
                className: 'xfe-subject-card',
                style: { '--soft': meta.soft, '--bar': meta.color },
                onClick: () => onStart(meta.id),
              },
              h('span', { className: 'xfe-subject-icon' }, meta.icon),
              h('h4', null, subjectText(t, meta.id)),
              h('p', null, t(`subject.${meta.id}.tag`)),
              h(
                'div',
                { className: 'xfe-subject-meta' },
                h('span', { className: 'xfe-mini-bar' }, h('span', { style: { width: `${st.q ? st.acc : 8}%` } })),
                h('b', null, st.q ? `${st.acc}%` : '新海域'),
              ),
            );
          }),
        ),
        h(
          'div',
          { className: 'xfe-bottom-grid xfe-bottom-grid-3' },
          h(
            'section',
            { className: 'xfe-focus-card xfe-card' },
            h(
              'div',
              { className: 'xfe-focus-top' },
              h('div', { className: 'xfe-focus-ring', style: { '--p': focusPct } }, h('span', { className: 'xfe-focus-time' }, `${mm}:${ss}`)),
              h(
                'div',
                { className: 'xfe-focus-copy' },
                h('h4', null, `🫧 ${t('home.focus')}`),
                h('p', null, focus.done ? '这一轮完成啦，泡泡里装满了专注力。' : t('home.focus.sub')),
                h(
                  'div',
                  { className: 'xfe-focus-modes' },
                  [1, 5, 10, 25].map((m) => h('button', { key: m, type: 'button', className: focus.minutes === m ? 'is-on' : '', onClick: () => onFocusMinutes(m), disabled: focus.running || m === focus.minutes }, `${m} 分钟`)),
                ),
                h('button', { type: 'button', className: 'xfe-btn is-mint is-sm', style: { marginTop: '8px' }, onClick: onFocus }, focus.running ? '⏸ ' + t('home.focus.pause') : focus.done ? '🔁 再来一轮' : '▶ ' + t('home.focus.start')),
              ),
            ),
          ),
          h(
            'section',
            { className: 'xfe-tip-card xfe-card' },
            h('h4', null, `💡 ${t('home.tip')}`),
            h('p', null, tip),
          ),
          h(
            'section',
            { className: 'xfe-recent-card xfe-card' },
            h('div', { className: 'xfe-recent-head' },
              h('h4', null, `🧹 ${t('home.recent')}`),
              h('button', { type: 'button', className: 'xfe-chip-btn', onClick: () => onNavigate('mistakes') }, '全部 →'),
            ),
            recentMistakes.length
              ? h('div', { className: 'xfe-recent-list' },
                  recentMistakes.map((m) => h('button', { key: m.id, type: 'button', className: 'xfe-recent-item', onClick: () => onNavigate('mistakes') },
                    h('span', null, h(MathText, { text: m.prompt.length > 34 ? `${m.prompt.slice(0, 34)}…` : m.prompt })),
                    h('small', null, '去复习'),
                  )),
                )
              : h('p', { className: 'xfe-card-sub' }, t('home.recent.empty')),
          ),
        ),
      );
    }

    function PracticePicker({ t, data, subject, difficulty, onSubject, onDifficulty, onStart }) {
      const options = [
        ...SUBJECTS.map((s) => ({ id: s.id, icon: s.icon, name: subjectText(t, s.id), desc: t(`subject.${s.id}.tag`) })),
        { id: 'mixed', icon: '🌈', name: t('practice.mixed.name'), desc: t('practice.mixed.desc'), mixed: true },
      ];
      const diffMap = [
        { id: 'easy', name: t('practice.easy'), sub: t('practice.easy.sub') },
        { id: 'normal', name: t('practice.normal'), sub: t('practice.normal.sub') },
        { id: 'hard', name: t('practice.hard'), sub: t('practice.hard.sub') },
      ];
      const count = DIFFICULTIES.find((d) => d.id === difficulty)?.n || 5;
      const picked = options.find((o) => o.id === subject) || options[0];
      return h(
        'div',
        { className: 'xfe-practice' },
        h('div', { className: 'xfe-page-head' },
          h('div', null,
            h('span', { className: 'xfe-kicker' }, '🏝️ 3 分钟小冒险'),
            h('h1', null, t('practice.title')),
            h('p', null, t('practice.subtitle')),
          ),
          h('span', { className: 'xfe-chip is-mint' }, `📚 ${gradeText(t, data.grade)}`),
        ),
        h('h3', { className: 'xfe-card-title', style: { marginTop: '4px' } }, t('practice.choose')),
        h('div', { className: 'xfe-practice-grid' },
          options.map((o) => h('button', {
            key: o.id,
            type: 'button',
            className: `xfe-pick-card ${o.mixed ? 'is-mixed' : ''} ${subject === o.id ? 'is-on' : ''}`,
            onClick: () => onSubject(o.id),
          },
            h('span', { className: 'xfe-pick-icon' }, o.icon),
            h('b', null, o.name),
            h('small', null, o.desc),
          )),
        ),
        h('h3', { className: 'xfe-card-title', style: { marginTop: '14px' } }, t('practice.difficulty')),
        h('div', { className: 'xfe-diff-row' },
          diffMap.map((d) => h('button', {
            key: d.id,
            type: 'button',
            className: `xfe-diff ${difficulty === d.id ? 'is-on' : ''}`,
            onClick: () => onDifficulty(d.id),
          }, d.name, h('small', null, d.sub))),
        ),
        h('div', { className: 'xfe-start-banner' },
          h('div', null,
            h('b', null, `${picked.icon} ${picked.name} · ${count} ${t('practice.questions')}`),
            h('small', null, `当前年级：${gradeText(t, data.grade)} · 答错会自动进错题礁`),
          ),
          h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onStart }, '🚀 ', t('practice.start')),
        ),
      );
    }

    function QuizRunner({ t, quiz, onChoose, onNext, onQuit, onOpenMistakes }) {
      const [showHint, setShowHint] = useState(false);
      useEffect(() => setShowHint(false), [quiz.index]);
      const q = quiz.questions[quiz.index];
      const letters = ['A', 'B', 'C', 'D'];
      const current = quiz.index + 1;
      const total = quiz.questions.length;
      const subjectKey = quiz.subject === 'mixed' ? q.subject : quiz.subject;
      return h(
        'div',
        { className: 'xfe-quiz' },
        h(
          'div',
          { className: 'xfe-quiz-top' },
          h('span', { className: 'xfe-quiz-pill' }, `${subjectText(t, subjectKey)} · ${gradeText(t, q.grade)}`),
          quiz.focus ? h('span', { className: 'xfe-quiz-pill', style: { background: 'var(--xfe-lilac-soft)' } }, '🧠 ', quiz.focus) : null,
          h('span', { className: 'xfe-quiz-pill' }, t('practice.progress').replace('{n}', String(current))),
          h('div', { className: 'xfe-quiz-progress', 'aria-hidden': true }, h('span', { style: { width: `${pct(current - 1, total)}%` } })),
          quiz.combo > 1 ? h('span', { className: 'xfe-quiz-pill', style: { background: '#ffe98a' } }, `🔥 ${t('practice.combo')} ${quiz.combo}`) : null,
          h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onQuit, title: '退出关卡', 'aria-label': '退出关卡' }, '↩'),
        ),
        h(
          'section',
          { className: 'xfe-question-card xfe-card' },
          q.passage ? h('div', { className: 'xfe-passage' }, q.passage) : null,
          h('div', { className: 'xfe-question-prompt' }, h(MathText, { text: q.prompt })),
          h(
            'div',
            { className: 'xfe-options' },
            q.options.map((opt, idx) => {
              let cls = 'xfe-option';
              if (quiz.locked) {
                if (idx === q.correct) cls += ' is-correct';
                else if (idx === quiz.selected) cls += ' is-wrong';
                else cls += ' is-dim';
              }
              return h(
                'button',
                {
                  key: `${quiz.index}-${idx}`,
                  type: 'button',
                  className: cls,
                  onClick: () => onChoose(idx),
                  disabled: quiz.locked,
                  'aria-label': `${letters[idx]}. ${normalizeMathText(opt)}`,
                },
                h('span', { className: 'xfe-option-letter' }, letters[idx]),
                h('span', null, h(MathText, { text: opt })),
              );
            }),
          ),
          h(
            'div',
            { style: { display: 'flex', alignItems: 'center', gap: '8px', marginTop: '11px', flexWrap: 'wrap' } },
            h('button', { type: 'button', className: 'xfe-btn is-ghost is-sm', onClick: () => setShowHint((v) => !v) }, showHint ? '🙈 收起提示' : '💡 ' + t('practice.hint')),
            h('span', { className: 'xfe-card-sub' }, quiz.locked ? '' : '选一个答案，小肥鱼不会笑你。'),
          ),
          showHint && q.hint ? h('div', { className: 'xfe-hint-box' }, '💡 ', h(MathText, { text: q.hint })) : null,
          quiz.locked
            ? h(
                'div',
                { className: `xfe-feedback ${quiz.correct ? 'is-good' : 'is-bad'}` },
                h(
                  'div',
                  { className: 'xfe-feedback-title' },
                  h('div', { className: 'xfe-chat-avatar' }, h('img', { src: `${ART}cute-t.png`, alt: '', draggable: false })),
                  h('span', null, quiz.correct ? `✅ ${t('practice.correct')}` : `💧 ${t('practice.wrong')}`),
                  quiz.correct ? h('span', { style: { marginLeft: 'auto', fontSize: '10px', color: '#0b7c70' } }, `+${10 + Math.min(10, quiz.combo * 2)} XP · +2 🪙`) : null,
                ),
                h('p', { style: { marginTop: '8px', color: '#3b405d' } }, h('b', null, `${t('practice.explanation')}：`), h(MathText, { text: q.explanation })),
                !quiz.correct ? h('p', null, `${t('mistakes.right')}：`, h(MathText, { text: q.options[q.correct] })) : null,
                h(
                  'div',
                  { className: 'xfe-feedback-actions' },
                  !quiz.correct ? h('button', { type: 'button', className: 'xfe-btn is-ghost is-sm', onClick: onOpenMistakes }, '🧹 看看错题礁') : null,
                  h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onNext }, quiz.index + 1 >= total ? '🏁 看看成绩' : `➡️ ${t('common.next')}`),
                ),
              )
            : null,
        ),
        h(
          'div',
          { className: 'xfe-quiz-tips' },
          h('span', null, '🐟 不确定也没关系'),
          h('span', null, '💡 点“小提示”看小抄'),
          h('span', null, '🧹 错题会自动进错题礁'),
        ),
      );
    }

    function ResultView({ t, quiz, onAgain, onReview, onHome }) {
      const accuracy = pct(quiz.correctCount, quiz.questions.length);
      const stars = accuracy >= 90 ? 3 : accuracy >= 60 ? 2 : 1;
      return h(
        'div',
        { className: 'xfe-result xfe-card' },
        h('div', { className: 'xfe-result-stars', 'aria-label': `${stars} 颗星` },
          [1, 2, 3].map((n) => h('span', { key: n, style: { animationDelay: `${n * 0.1}s`, opacity: n <= stars ? 1 : 0.22 } }, n <= stars ? '⭐' : '☆')),
        ),
        h('div', { style: { width: '150px', margin: '0 auto 4px' } }, h(Mascot, { outfit: '', mood: accuracy >= 60 ? 'happy' : 'cute' })),
        h('h2', null, t('practice.result.title')),
        h('p', null, t('practice.result.sub')),
        h('div', { className: 'xfe-result-stats' },
          h('div', { className: 'xfe-result-stat' }, h('b', null, `${accuracy}%`), h('small', null, t('practice.result.accuracy'))),
          h('div', { className: 'xfe-result-stat' }, h('b', null, `${quiz.correctCount}/${quiz.questions.length}`), h('small', null, '答对题数')),
          h('div', { className: 'xfe-result-stat' }, h('b', null, `+20`), h('small', null, `${t('practice.result.xp')} · 完成奖励`)),
          h('div', { className: 'xfe-result-stat' }, h('b', null, `+10`), h('small', null, `${t('practice.result.coins')} · 完成奖励`)),
        ),
        h('div', { className: 'xfe-result-actions' },
          h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onAgain }, '🔁 ', t('practice.result.again')),
          h('button', { type: 'button', className: 'xfe-btn is-mint', onClick: onReview }, '🧹 ', t('practice.result.review')),
          h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: onHome }, '🏠 ', t('practice.result.home')),
        ),
      );
    }

    function TutorView({ t, data, chat, chatInput, setChatInput, thinking, chatScroll, onAsk, onCopy }) {
      const lastAssistantIndex = (() => {
        for (let i = chat.length - 1; i >= 0; i -= 1) {
          if (chat[i].role === 'assistant') return i;
        }
        return -1;
      })();
      return h(
        'div',
        null,
        h('div', { className: 'xfe-page-head' },
          h('div', null,
            h('span', { className: 'xfe-kicker' }, '🐟 鱼脑里装着小黑板'),
            h('h1', null, t('tutor.title')),
            h('p', null, t('tutor.subtitle')),
          ),
          h('span', { className: 'xfe-chip is-sun' }, `🎓 ${gradeText(t, data.grade)}`),
        ),
        h(
          'div',
          { className: 'xfe-tutor' },
          h(
            'section',
            { className: 'xfe-chat-card xfe-card' },
            h('div', { className: 'xfe-chat-head' },
              h('div', { className: 'xfe-chat-avatar' }, h('img', { src: `${ART}cute-t.png`, alt: '', draggable: false })),
              h('div', null, h('b', null, '小肥鱼助教'), h('small', null, '本地答疑 · 不联网 · 会陪你想')),
              h('span', { style: { marginLeft: 'auto', fontSize: '17px' } }, '🫧'),
            ),
            h('div', { className: 'xfe-chat-scroll', ref: chatScroll, 'aria-live': 'polite' },
              chat.map((m, i) => {
                const isLastAssistant = i === lastAssistantIndex;
                return h(
                  'div',
                  { key: i, className: `xfe-msg ${m.role === 'user' ? 'is-user' : ''}` },
                  h('div', { className: 'xfe-msg-avatar' }, m.role === 'user' ? '🧒' : h('img', { src: `${ART}cute-t.png`, alt: '', draggable: false })),
                  h(
                    'div',
                    { className: 'xfe-msg-content' },
                    h('div', { className: 'xfe-msg-bubble' }, h(MathText, { text: m.text })),
                    m.role === 'assistant' && isLastAssistant && m.canCopy
                      ? h('button', { type: 'button', className: 'xfe-chip-btn', onClick: () => onCopy(m.canCopy) }, '📋 ', t('tutor.copy'))
                      : null,
                    m.role === 'assistant' && isLastAssistant && m.chips && !thinking
                      ? h('div', { className: 'xfe-chips' }, m.chips.map((c) => h('button', { key: c, type: 'button', className: 'xfe-chip-btn', onClick: () => onAsk(c) }, c)))
                      : null,
                  ),
                );
              }),
              thinking
                ? h('div', { className: 'xfe-msg' },
                    h('div', { className: 'xfe-msg-avatar' }, h('img', { src: `${ART}cute-t.png`, alt: '', draggable: false })),
                    h('div', { className: 'xfe-msg-bubble' }, h('span', { className: 'xfe-typing', 'aria-label': t('tutor.thinking') }, h('i'), h('i'), h('i')), h('span', { style: { marginLeft: '6px', fontSize: '9px' } }, t('tutor.thinking'))),
                  )
                : null,
            ),
            h('div', { className: 'xfe-chat-input' },
              h('input', {
                value: chatInput,
                onChange: (e) => setChatInput(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    onAsk(chatInput);
                  }
                },
                placeholder: t('tutor.placeholder'),
                'aria-label': t('tutor.placeholder'),
                maxLength: 300,
              }),
              h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', disabled: !chatInput.trim() || thinking, onClick: () => onAsk(chatInput) }, '➤ ', t('tutor.send')),
            ),
          ),
          h(
            'aside',
            { className: 'xfe-tutor-side' },
            h('div', { className: 'xfe-side-card' },
              h('h4', null, '🐟 小肥鱼会什么'),
              h('p', null, '算加减乘除、讲知识点、出题、陪你拆错题。'),
              h('ul', null,
                h('li', null, '算术题：直接输入算式'),
                h('li', null, '知识点：输入“分数”“面积”'),
                h('li', null, '想练习：说“给我出一道题”'),
              ),
            ),
            h('div', { className: 'xfe-side-card' },
              h('h4', null, '💡 怎么问更好'),
              h('p', null, '把题目里的数字和关键词一起发来；如果是应用题，先说“谁在做什么”。'),
              h('div', { className: 'xfe-card-soft', style: { marginTop: '8px', padding: '8px' } },
                h('p', { style: { fontSize: '9px' } }, '小肥鱼是本地助教，不联网。遇到超纲题，可以一键复制去问 DeepSeek 老师。'),
              ),
            ),
            h('div', { className: 'xfe-side-card' },
              h('h4', null, '🫧 今日小挑战'),
              h('p', null, '问小肥鱼一道你最近错的题，让它换一种说法讲给你听。'),
              h('button', { type: 'button', className: 'xfe-btn is-sun is-sm is-full', style: { marginTop: '8px' }, onClick: () => onAsk('给我出一道题') }, '🎲 随机来一题'),
            ),
          ),
        ),
      );
    }

    function LibraryView({ t, data, curriculum, onSaveBook, onUseBook, onPracticePoint, onAskPoint }) {
      const [subject, setSubject] = useState(data.lastSubject || 'math');
      const [grade, setGrade] = useState(data.grade);
      const [volume, setVolume] = useState('up');
      const [openUnit, setOpenUnit] = useState(0);
      const [pointSheet, setPointSheet] = useState(null);
      const [importing, setImporting] = useState(null);
      const [parsing, setParsing] = useState(false);
      const [parseError, setParseError] = useState('');
      const fileRef = useRef(null);
      const book = activeTextbook(data, curriculum, subject, grade, volume);
      const key = bookKey(subject, grade, volume);
      const customId = data.activeTextbooks[key];
      const customActive = Boolean(customId && data.textbooks.some((b) => b.id === customId));
      const builtin = builtinBook(curriculum, subject, grade, volume);
      const myBooks = (data.textbooks || []).filter((item) => item.subject === subject && item.grade === grade && item.volume === volume);

      const handleFile = async (file) => {
        if (!file) return;
        setParsing(true);
        setParseError('');
        try {
          const result = await extractPdfOutline(file);
          const units = ensureUnitPoints(result.units || []);
          const nameMeta = detectBookMeta(file.name || '');
          const detectedGrade = clamp(Number(result.detectedGrade || nameMeta.grade) || grade, 1, 6);
          const detectedVolume = result.detectedVolume || nameMeta.volume || volume;
          const detectedSubject = result.detectedSubject || nameMeta.subject || subject;
          setImporting({
            file,
            result,
            units,
            subject: detectedSubject,
            grade: detectedGrade,
            volume: detectedVolume,
            usedFallback: false,
            title: `${gradeText(t, detectedGrade)}${detectedVolume === 'up' ? '上册' : '下册'} · ${subjectText(t, detectedSubject)}`,
          });
        } catch (error) {
          setParseError(error instanceof Error ? error.message : t('library.parseFail'));
        } finally {
          setParsing(false);
          if (fileRef.current) fileRef.current.value = '';
        }
      };

      const saveImported = (payload) => {
        const id = `book-${uid('pdf')}`;
        const bookSubject = payload.subject || subject;
        const bookGrade = clamp(Number(payload.grade) || grade, 1, 6);
        const bookVolume = payload.volume || volume;
        onSaveBook({
          id,
          subject: bookSubject,
          grade: bookGrade,
          volume: bookVolume,
          title: payload.title,
          source: 'pdf',
          fileName: payload.fileName,
          fileSize: payload.fileSize,
          importedAt: Date.now(),
          official: false,
          units: ensureUnitPoints(payload.units),
        });
        setSubject(bookSubject);
        setGrade(bookGrade);
        setVolume(bookVolume);
        setImporting(null);
      };

      const subjectPoints = bookPoints(book);
      return h(
        'div',
        null,
        h('div', { className: 'xfe-page-head' },
          h('div', null,
            h('span', { className: 'xfe-kicker' }, '📚 把课本装进学习舱'),
            h('h1', null, t('library.title')),
            h('p', null, t('library.subtitle')),
          ),
          h('span', { className: 'xfe-chip is-mint' }, book ? `${book.units.length} ${t('library.units')}` : '—'),
        ),
        h('div', { className: 'xfe-library-toolbar' },
          h('div', { className: 'xfe-filter-row', style: { marginBottom: 0 } },
            SUBJECTS.map((s) => h('button', {
              key: s.id,
              type: 'button',
              className: `xfe-filter ${subject === s.id ? 'is-on' : ''}`,
              onClick: () => { setSubject(s.id); setOpenUnit(0); },
            }, s.icon, ' ', subjectText(t, s.id))),
          ),
          h('div', { className: 'xfe-library-selects' },
            h('select', {
              className: 'xfe-grade-select',
              value: grade,
              onChange: (e) => { setGrade(Number(e.target.value)); setOpenUnit(0); },
              'aria-label': t('settings.grade'),
            }, GRADE_IDS.map((g) => h('option', { key: g, value: g }, gradeText(t, g)))),
            h('div', { className: 'xfe-term-toggle' },
              h('button', { type: 'button', className: volume === 'up' ? 'is-on' : '', onClick: () => { setVolume('up'); setOpenUnit(0); } }, t('library.volume.up')),
              h('button', { type: 'button', className: volume === 'down' ? 'is-on' : '', onClick: () => { setVolume('down'); setOpenUnit(0); } }, t('library.volume.down')),
            ),
            h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', onClick: () => fileRef.current && fileRef.current.click(), disabled: parsing }, parsing ? '⏳ ' + t('library.parsing') : '📤 ' + t('library.upload')),
            h('input', { ref: fileRef, type: 'file', accept: 'application/pdf', style: { display: 'none' }, onChange: (e) => handleFile(e.target.files && e.target.files[0]) }),
          ),
        ),
        parsing ? h('div', { className: 'xfe-library-note' }, '⏳ ', t('library.parsing')) : null,
        parseError ? h('div', { className: 'xfe-library-note is-error' }, '⚠️ ', parseError) : null,
        book
          ? h(
              'div',
              { className: 'xfe-library-book' },
              h('div', { className: 'xfe-library-book-head' },
                h('div', { className: 'xfe-library-book-icon' }, subject === 'math' ? '🧮' : subject === 'chinese' ? '📖' : '🔤'),
                h('div', { className: 'xfe-library-book-copy' },
                  h('div', { className: 'xfe-library-book-title' }, book.title),
                  h('div', { className: 'xfe-library-book-meta' },
                    book.source === 'uploaded' ? h('span', { className: 'xfe-tag' }, t('library.uploaded')) : null,
                    h('span', { className: 'xfe-tag' }, `${book.units.length} ${t('library.units')}`),
                    h('span', { className: 'xfe-tag' }, `${subjectPoints.length} ${t('library.points')}`),
                  ),
                ),
                h('div', { className: 'xfe-library-book-side' },
                  customActive
                    ? h('span', { className: 'xfe-chip is-mint' }, t('library.inUse'))
                    : book.official === false
                      ? h('span', { className: 'xfe-chip is-sun' }, t('library.prep'))
                      : null,
                ),
              ),
              h('p', { className: 'xfe-card-sub' }, book.source === 'uploaded' ? `${book.fileName || ''} · ${t('library.sourceNote')}` : t('library.sourceNote')),
              h('div', { className: 'xfe-library-units' },
                book.units.map((unit, ui) => h(
                  'div',
                  { key: `${unit.title}-${ui}`, className: `xfe-library-unit ${openUnit === ui ? 'is-open' : ''}` },
                  h('button', {
                    type: 'button',
                    className: 'xfe-library-unit-head',
                    onClick: () => setOpenUnit(openUnit === ui ? -1 : ui),
                    'aria-expanded': openUnit === ui,
                  },
                    h('span', { className: 'xfe-library-unit-no' }, String(ui + 1).padStart(2, '0')),
                    h('span', { className: 'xfe-library-unit-title' }, unit.title),
                    h('span', { className: 'xfe-library-unit-count' }, `${(unit.points || []).length} ${t('library.points')}`),
                    h('span', { className: 'xfe-library-chevron' }, openUnit === ui ? '−' : '+'),
                  ),
                  openUnit === ui
                    ? h('div', { className: 'xfe-library-points' },
                        (unit.points || []).map((point) => {
                          const linked = data.mistakes.filter((m) => m.knowledgePoint === point || (m.knowledgePoint && (point.includes(m.knowledgePoint) || m.knowledgePoint.includes(point))) || m.unitId === `${book.id}-u${ui}`).length;
                          return h('button', {
                            key: point,
                            type: 'button',
                            className: 'xfe-library-point',
                            onClick: () => setPointSheet({ point, unit, unitId: `${book.id}-u${ui}` }),
                          },
                            h('span', null, h(MathText, { text: point })),
                            linked ? h('small', null, `${linked} ${t('library.linked')}`) : h('small', null, '→'),
                          );
                        }),
                        !(unit.points || []).length ? h('div', { className: 'xfe-card-sub' }, t('library.pointFallback')) : null,
                      )
                    : null,
                )),
              ),
            )
          : h('div', { className: 'xfe-empty xfe-card' },
              h('span', { className: 'xfe-empty-emoji' }, '📚'),
              h('b', null, t('library.noOutline')),
              h('p', null, t('library.uploadHint')),
              h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: () => fileRef.current && fileRef.current.click() }, '📤 ', t('library.upload')),
            ),
        myBooks.length
          ? h('div', { className: 'xfe-library-shelf' },
              h('div', { className: 'xfe-library-shelf-head' },
                h('h4', null, '📚 ', t('library.shelf')),
                h('small', null, t('library.shelfNote')),
              ),
              h('div', { className: 'xfe-library-shelf-list' },
                myBooks.map((item) => {
                  const active = item.id === customId;
                  return h('div', { key: item.id, className: `xfe-library-shelf-row ${active ? 'is-active' : ''}` },
                    h('span', { className: 'xfe-library-shelf-icon' }, '📄'),
                    h('div', { className: 'xfe-library-shelf-copy' },
                      h('b', null, item.title),
                      h('small', null, `${item.fileName || 'PDF'} · ${item.units.length} ${t('library.units')}`),
                    ),
                    active
                      ? h('span', { className: 'xfe-chip is-mint' }, t('library.inUse'))
                      : h('button', { type: 'button', className: 'xfe-btn is-ghost is-sm', onClick: () => onUseBook(item.id, { subject, grade, volume }) }, t('library.useBook')),
                  );
                }),
              ),
            )
          : null,
        pointSheet
          ? h(KnowledgeSheet, {
              t,
              data,
              book,
              subject,
              grade,
              point: pointSheet.point,
              unit: pointSheet.unit,
              unitId: pointSheet.unitId,
              onClose: () => setPointSheet(null),
              onPractice: () => { setPointSheet(null); onPracticePoint(subject, pointSheet.point, grade); },
              onAsk: () => { setPointSheet(null); onAskPoint(pointSheet.point, grade); },
            })
          : null,
        importing
          ? h(TextbookImportSheet, {
              t,
              importing,
              onClose: () => setImporting(null),
              onSave: saveImported,
              parseTocText,
            })
          : null,
      );
    }

    function KnowledgeSheet({ t, data, book, subject, grade, point, unit, unitId, onClose, onPractice, onAsk }) {
      const linked = data.mistakes.filter((m) => m.knowledgePoint === point || (m.knowledgePoint && (point.includes(m.knowledgePoint) || m.knowledgePoint.includes(point))) || m.unitId === unitId);
      return h(
        'div',
        { className: 'xfe-settings-layer', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose(); } },
        h('div', { className: 'xfe-settings xfe-knowledge-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': point, onMouseDown: (e) => e.stopPropagation() },
          h('div', { className: 'xfe-settings-head' },
            h('div', null,
              h('span', { className: 'xfe-kicker' }, book && book.title ? book.title : t('library.title')),
              h('h3', null, h(MathText, { text: point })),
            ),
            h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onClose, 'aria-label': t('common.close') }, '✕'),
          ),
          h('div', { className: 'xfe-knowledge-meta' },
            h('span', { className: 'xfe-tag' }, subjectText(t, subject)),
            h('span', { className: 'xfe-tag' }, gradeText(t, grade)),
            h('span', { className: 'xfe-tag' }, unit ? unit.title : ''),
            h('span', { className: 'xfe-tag' }, `${linked.length} ${t('library.linked')}`),
          ),
          h('div', { className: 'xfe-knowledge-block' },
            h('h4', null, '🐟 小肥鱼划重点'),
            h('p', null, unit && unit.points && unit.points.length ? `本单元还会学到：${unit.points.join('、')}。` : t('library.pointFallback')),
            h('div', { className: 'xfe-knowledge-tip' },
              '先让小朋友用自己的话说一遍这个知识点，再做 1 道例题、2 道变式；能讲清楚，比多刷 10 题更有用。',
            ),
          ),
          linked.length
            ? h('div', { className: 'xfe-knowledge-block' },
                h('h4', null, `🧹 ${t('library.linked')} · ${linked.length}`),
                h('div', { className: 'xfe-knowledge-linked' },
                  linked.slice(0, 3).map((m) => h('div', { key: m.id, className: 'xfe-knowledge-linked-row' },
                    h('span', null, h(MathText, { text: m.prompt.length > 42 ? `${m.prompt.slice(0, 42)}…` : m.prompt })),
                    h('b', null, `${m.mastery || 0}/2`),
                  )),
                ),
              )
            : null,
          h('div', { className: 'xfe-settings-actions' },
            h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: onAsk }, '🐟 ', t('library.ask')),
            h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onPractice }, '🏝️ ', t('library.practice')),
          ),
        ),
      );
    }

    function TextbookImportSheet({ t, importing, onClose, onSave, parseTocText }) {
      const totalPages = Number(importing.result && importing.result.pages) || 0;
      const suggestedPage = (importing.result && importing.result.tocPages && importing.result.tocPages[0]) || 1;
      const [title, setTitle] = useState(importing.title || '');
      const [titleTouched, setTitleTouched] = useState(false);
      const [subject, setSubject] = useState(importing.subject || 'math');
      const [grade, setGrade] = useState(clamp(Number(importing.grade) || 1, 1, 6));
      const [volume, setVolume] = useState(importing.volume || 'up');
      const [units, setUnits] = useState(importing.units || []);
      const [paste, setPaste] = useState('');
      const [pasteError, setPasteError] = useState('');
      const [tocStart, setTocStart] = useState(suggestedPage);
      const [tocEnd, setTocEnd] = useState(Math.min(totalPages || suggestedPage, suggestedPage + (importing.result && importing.result.scanned ? 5 : 1)));
      const [aiBusy, setAiBusy] = useState(false);
      const [aiError, setAiError] = useState('');
      const hasFile = Boolean(importing.file);
      const noUnits = !units.length;
      const reparse = async () => {
        if (!paste.trim()) return;
        const parsed = ensureUnitPoints(await parseTocText(paste));
        if (!parsed.length) {
          setPasteError(t('library.parseFail'));
          return;
        }
        setUnits(parsed);
        setPasteError('');
      };
      const runAiToc = async () => {
        if (!hasFile || aiBusy) return;
        setAiBusy(true);
        setAiError('');
        try {
          const rendered = await renderPdfPages(importing.file, tocStart, tocEnd, 1100);
          if (!rendered.images.length) throw new Error('没有可读取的页面');
          const response = await fetch('/xiaofeiyu-academy/analyze-toc', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ images: rendered.images, grade }),
          });
          const payload = await response.json();
          if (!payload || !payload.ok) {
            setAiError((payload && payload.message) || t('library.aiTocFail'));
            return;
          }
          const next = ensureUnitPoints(payload.data && payload.data.units);
          if (!next.length) {
            setAiError(t('library.aiTocFail'));
            return;
          }
          setUnits(next);
          const data = payload.data || {};
          const nextSubject = SUBJECTS.some((item) => item.id === data.subject) ? data.subject : subject;
          const nextGrade = clamp(Number(data.grade) || grade, 1, 6);
          const nextVolume = data.volume === 'down' ? 'down' : data.volume === 'up' ? 'up' : volume;
          setSubject(nextSubject);
          setGrade(nextGrade);
          setVolume(nextVolume);
          if (!titleTouched) setTitle(metaTitle(nextSubject, nextGrade, nextVolume));
          setPasteError('');
        } catch (error) {
          setAiError(error instanceof Error ? error.message : t('library.aiTocFail'));
        } finally {
          setAiBusy(false);
        }
      };
      const metaTitle = (nextSubject, nextGrade, nextVolume) => `${gradeText(t, nextGrade)}${nextVolume === 'up' ? '上册' : '下册'} · ${subjectText(t, nextSubject)}`;
      const changeSubject = (value) => {
        setSubject(value);
        if (!titleTouched) setTitle(metaTitle(value, grade, volume));
      };
      const changeGrade = (value) => {
        const next = clamp(Number(value) || 1, 1, 6);
        setGrade(next);
        if (!titleTouched) setTitle(metaTitle(subject, next, volume));
      };
      const changeVolume = (value) => {
        setVolume(value);
        if (!titleTouched) setTitle(metaTitle(subject, grade, value));
      };
      return h(
        'div',
        { className: 'xfe-settings-layer', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose(); } },
        h('div', { className: 'xfe-settings xfe-import-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('library.importTitle'), onMouseDown: (e) => e.stopPropagation() },
          h('div', { className: 'xfe-settings-head' },
            h('div', null, h('span', { className: 'xfe-kicker' }, '📚 PDF'), h('h3', null, t('library.importTitle'))),
            h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onClose, 'aria-label': t('common.close') }, '✕'),
          ),
          h('div', { className: 'xfe-field' },
            h('label', { htmlFor: 'xfe-book-title' }, '书名'),
            h('input', { id: 'xfe-book-title', value: title, onChange: (e) => { setTitle(e.target.value); setTitleTouched(true); }, maxLength: 40 }),
          ),
          h('div', { className: 'xfe-import-fields' },
            h('div', { className: 'xfe-field' },
              h('label', { htmlFor: 'xfe-import-subject' }, '学科'),
              h('select', { id: 'xfe-import-subject', value: subject, onChange: (e) => changeSubject(e.target.value) },
                SUBJECTS.map((item) => h('option', { key: item.id, value: item.id }, subjectText(t, item.id))),
              ),
            ),
            h('div', { className: 'xfe-field' },
              h('label', { htmlFor: 'xfe-import-grade' }, t('settings.grade')),
              h('select', { id: 'xfe-import-grade', value: grade, onChange: (e) => changeGrade(e.target.value) },
                GRADE_IDS.map((item) => h('option', { key: item, value: item }, gradeText(t, item))),
              ),
            ),
            h('div', { className: 'xfe-field' },
              h('label', null, t('library.term')),
              h('div', { className: 'xfe-term-toggle' },
                h('button', { type: 'button', className: volume === 'up' ? 'is-on' : '', onClick: () => changeVolume('up') }, t('library.volume.up')),
                h('button', { type: 'button', className: volume === 'down' ? 'is-on' : '', onClick: () => changeVolume('down') }, t('library.volume.down')),
              ),
            ),
          ),
          h('div', { className: 'xfe-import-meta' },
            h('span', { className: 'xfe-tag' }, `${units.length} ${t('library.units')}`),
            h('span', { className: 'xfe-tag' }, importing.file ? `${Math.round(importing.file.size / 1024)} KB` : ''),
            h('span', { className: 'xfe-tag' }, `${totalPages || '—'} 页`),
            importing.result && importing.result.scanned ? h('span', { className: 'xfe-tag' }, t('library.scanned')) : null,
          ),
          h('div', { className: 'xfe-import-hint' }, t('library.uploadHint')),
          noUnits
            ? h('div', { className: 'xfe-library-note is-error' }, '⚠️ ', t('library.parseFail'))
            : null,
          h('div', { className: 'xfe-import-units' },
            units.map((unit, i) => h('div', { key: `${unit.title}-${i}`, className: 'xfe-import-unit' },
              h('b', null, unit.title),
              h('small', null, (unit.points || []).join(' · ') || '—'),
            )),
            !units.length ? h('div', { className: 'xfe-import-empty' }, '还没有目录。可以先让小肥鱼读目录页，或在下面粘贴。', h('br'), h('small', null, t('library.saveEmptyHint'))) : null,
          ),
          hasFile && (noUnits || (importing.result && importing.result.scanned))
            ? h('div', { className: 'xfe-ai-toc' },
                h('div', { className: 'xfe-ai-toc-head' },
                  h('b', null, '📷 ', t('library.aiToc')),
                  h('small', null, t('library.aiTocNote')),
                ),
                h('div', { className: 'xfe-ai-toc-controls' },
                  h('label', { htmlFor: 'xfe-toc-start' }, t('library.tocPages')),
                  h('input', { id: 'xfe-toc-start', type: 'number', min: 1, max: totalPages || 1, value: tocStart, onChange: (e) => setTocStart(Math.max(1, Math.min(totalPages || 1, Number(e.target.value) || 1))) }),
                  h('span', null, '—'),
                  h('input', { type: 'number', min: 1, max: totalPages || 1, value: tocEnd, onChange: (e) => setTocEnd(Math.max(1, Math.min(totalPages || 1, Number(e.target.value) || 1))) }),
                  h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', disabled: aiBusy, onClick: runAiToc }, aiBusy ? '⏳ ' + t('library.aiTocBusy') : '🐟 ' + t('library.aiToc')),
                ),
                aiError ? h('div', { className: 'xfe-field-error' }, '⚠️ ', aiError) : null,
              )
            : null,
          h('div', { className: 'xfe-field' },
            h('label', { htmlFor: 'xfe-toc-paste' }, t('library.pasteToc')),
            h('textarea', {
              id: 'xfe-toc-paste',
              className: 'xfe-textarea',
              value: paste,
              onChange: (e) => setPaste(e.target.value),
              placeholder: '一 走进数学乐园\n1. 立体图形\n2. 平面图形\n二 小动物上学\n11. 比长短、比高低',
              rows: 4,
            }),
            pasteError ? h('div', { className: 'xfe-field-error' }, pasteError) : null,
            h('button', { type: 'button', className: 'xfe-btn is-sm', onClick: reparse }, '🔄 ', t('library.parsePaste')),
          ),
          h('div', { className: 'xfe-settings-actions' },
            h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: onClose }, t('common.cancel')),
            noUnits
              ? h('button', {
                  type: 'button',
                  className: 'xfe-btn is-mint',
                  disabled: !title.trim(),
                  onClick: () => onSave({ title: title.trim(), subject, grade, volume, fileName: importing.file ? importing.file.name : '', fileSize: importing.file ? importing.file.size : 0, units: [] }),
                }, '📚 ', t('library.saveEmpty'))
              : null,
            h('button', {
              type: 'button',
              className: 'xfe-btn is-primary',
              disabled: !title.trim() || !units.length,
              onClick: () => onSave({ title: title.trim(), subject, grade, volume, fileName: importing.file ? importing.file.name : '', fileSize: importing.file ? importing.file.size : 0, units }),
            }, '💾 ', t('library.import')),
          ),
        ),
      );
    }

    function CaptureSheet({ t, data, curriculum, onClose, onSave }) {
      const [subject, setSubject] = useState(data.lastSubject || 'math');
      const [grade, setGrade] = useState(data.grade);
      const [photo, setPhoto] = useState({ full: '', thumb: '' });
      const [question, setQuestion] = useState('');
      const [studentAnswer, setStudentAnswer] = useState('');
      const [correctAnswer, setCorrectAnswer] = useState('');
      const [analysis, setAnalysis] = useState('');
      const [knowledgePoint, setKnowledgePoint] = useState('');
      const [analyzing, setAnalyzing] = useState(false);
      const [error, setError] = useState('');
      const [confidence, setConfidence] = useState('');
      const [reading, setReading] = useState(false);
      const fileRef = useRef(null);
      const book = activeBookAny(data, curriculum, subject, grade);
      const points = bookPoints(book);
      const pointNames = [...new Set(points.map((p) => p.name))];

      const pickFile = async (file) => {
        if (!file) return;
        setError('');
        try {
          const prepared = await preparePhoto(file);
          if (!prepared.full) throw new Error('图片处理失败');
          setPhoto(prepared);
          setReading(false);
        } catch (err) {
          setError(err instanceof Error ? err.message : t('capture.err'));
        } finally {
          if (fileRef.current) fileRef.current.value = '';
        }
      };

      const analyze = async () => {
        if (!photo.full || analyzing) return;
        setAnalyzing(true);
        setError('');
        try {
          const response = await fetch('/xiaofeiyu-academy/analyze-homework', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: photo.full, mediaType: 'image/jpeg', grade }),
          });
          const payload = await response.json();
          if (!payload || !payload.ok) {
            setError((payload && payload.message) || t('capture.err'));
            return;
          }
          const result = payload.data || {};
          const subjectMap = { math: 'math', chinese: 'chinese', english: 'english', 数学: 'math', 语文: 'chinese', 英语: 'english' };
          if (subjectMap[result.subject]) setSubject(subjectMap[result.subject]);
          if (result.question) setQuestion(normalizeMathText(result.question));
          if (result.studentAnswer) setStudentAnswer(normalizeMathText(result.studentAnswer));
          if (result.correctAnswer) setCorrectAnswer(normalizeMathText(result.correctAnswer));
          if (result.analysis) setAnalysis(normalizeMathText(result.analysis));
          if (result.knowledgePoint) setKnowledgePoint(normalizeMathText(result.knowledgePoint));
          setConfidence(result.confidence || 'low');
          setReading(true);
        } catch (err) {
          setError(t('capture.err'));
        } finally {
          setAnalyzing(false);
        }
      };

      const submit = () => {
        if (!question.trim() || !correctAnswer.trim()) {
          setError(t('capture.required'));
          return;
        }
        const context = findPointContext(book, knowledgePoint);
        onSave({
          subject,
          grade,
          question: normalizeMathText(question),
          studentAnswer: normalizeMathText(studentAnswer),
          correctAnswer: normalizeMathText(correctAnswer),
          analysis: normalizeMathText(analysis),
          knowledgePoint: normalizeMathText(context ? context.point : knowledgePoint),
          textbookId: book ? book.id : '',
          unitId: context ? context.unitId : '',
          image: photo.thumb,
        });
      };

      return h(
        'div',
        { className: 'xfe-settings-layer', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose(); } },
        h('div', { className: 'xfe-settings xfe-capture-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('capture.title'), onMouseDown: (e) => e.stopPropagation() },
          h('div', { className: 'xfe-settings-head' },
            h('div', null,
              h('span', { className: 'xfe-kicker' }, '📷 试卷 / 作业'),
              h('h3', null, t('capture.title')),
            ),
            h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onClose, 'aria-label': t('common.close') }, '✕'),
          ),
          h('p', { className: 'xfe-card-sub', style: { marginTop: '-6px' } }, t('capture.subtitle')),
          h('div', { className: 'xfe-capture-photo' },
            photo.full
              ? h('img', { src: photo.full, alt: t('capture.reference') })
              : h('button', { type: 'button', className: 'xfe-capture-drop', onClick: () => fileRef.current && fileRef.current.click() },
                  h('span', null, '📷'),
                  h('b', null, t('capture.pick')),
                  h('small', null, 'PNG / JPG · 支持手机拍照'),
                ),
            photo.full
              ? h('div', { className: 'xfe-capture-photo-actions' },
                  h('button', { type: 'button', className: 'xfe-btn is-ghost is-sm', onClick: () => fileRef.current && fileRef.current.click() }, '🔄 ', t('capture.retake')),
                  h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', disabled: analyzing, onClick: analyze }, analyzing ? '⏳ ' + t('capture.analyzing') : '🐟 ' + t('capture.analyze')),
                )
              : null,
            h('input', { ref: fileRef, type: 'file', accept: 'image/*', capture: 'environment', style: { display: 'none' }, onChange: (e) => pickFile(e.target.files && e.target.files[0]) }),
          ),
          h('div', { className: 'xfe-capture-note' }, '💡 ', t('capture.visionNote')),
          reading && confidence === 'low' ? h('div', { className: 'xfe-library-note is-error' }, '⚠️ ', t('capture.lowConfidence')) : null,
          reading ? h('div', { className: 'xfe-library-note' }, '✅ ', t('capture.autoFilled')) : null,
          error ? h('div', { className: 'xfe-field-error' }, '⚠️ ', error) : null,
          h('div', { className: 'xfe-capture-fields' },
            h('div', { className: 'xfe-field' },
              h('label', { htmlFor: 'xfe-cap-subject' }, '学科'),
              h('select', { id: 'xfe-cap-subject', value: subject, onChange: (e) => setSubject(e.target.value) },
                SUBJECTS.map((s) => h('option', { key: s.id, value: s.id }, subjectText(t, s.id))),
              ),
            ),
            h('div', { className: 'xfe-field' },
              h('label', { htmlFor: 'xfe-cap-grade' }, t('settings.grade')),
              h('select', { id: 'xfe-cap-grade', value: grade, onChange: (e) => setGrade(Number(e.target.value)) },
                GRADE_IDS.map((g) => h('option', { key: g, value: g }, gradeText(t, g))),
              ),
            ),
          ),
          h('div', { className: 'xfe-field' },
            h('label', { htmlFor: 'xfe-cap-question' }, t('capture.question')),
            h('textarea', { id: 'xfe-cap-question', className: 'xfe-textarea', rows: 3, value: question, onChange: (e) => setQuestion(e.target.value), onBlur: (e) => setQuestion(normalizeMathText(e.target.value)), placeholder: '例如：小明有 5 个苹果，又买了 3 个，一共有几个？' }),
          ),
          subject === 'math' && (correctAnswer.trim() || question.trim())
            ? h('div', { className: 'xfe-math-preview' },
                h('b', null, '小肥鱼会这样显示：'),
                h('div', { className: 'xfe-math-preview-body' },
                  h(MathText, { text: correctAnswer.trim() || question }),
                ),
                h('small', null, '分数会排成上下两行，不显示复杂代码。'),
              )
            : null,
          h('div', { className: 'xfe-capture-fields' },
            h('div', { className: 'xfe-field' },
              h('label', { htmlFor: 'xfe-cap-student' }, t('capture.studentAnswer')),
              h('input', { id: 'xfe-cap-student', value: studentAnswer, onChange: (e) => setStudentAnswer(e.target.value), onBlur: (e) => setStudentAnswer(normalizeMathText(e.target.value)), placeholder: '孩子写的答案' }),
            ),
            h('div', { className: 'xfe-field' },
              h('label', { htmlFor: 'xfe-cap-correct' }, t('capture.correctAnswer')),
              h('input', { id: 'xfe-cap-correct', value: correctAnswer, onChange: (e) => setCorrectAnswer(e.target.value), onBlur: (e) => setCorrectAnswer(normalizeMathText(e.target.value)), placeholder: '正确答案' }),
            ),
          ),
          h('div', { className: 'xfe-field' },
            h('label', { htmlFor: 'xfe-cap-analysis' }, t('capture.analysis')),
            h('textarea', { id: 'xfe-cap-analysis', className: 'xfe-textarea', rows: 2, value: analysis, onChange: (e) => setAnalysis(e.target.value), onBlur: (e) => setAnalysis(normalizeMathText(e.target.value)), placeholder: '错在哪一步？正确思路是什么？' }),
          ),
          h('div', { className: 'xfe-field' },
            h('label', { htmlFor: 'xfe-cap-point' }, t('capture.knowledgePoint')),
            h('input', { id: 'xfe-cap-point', value: knowledgePoint, onChange: (e) => setKnowledgePoint(e.target.value), list: 'xfe-point-options', placeholder: pointNames[0] || '例如：20以内进位加法' }),
            h('datalist', { id: 'xfe-point-options' }, pointNames.map((p) => h('option', { key: p, value: p }))),
          ),
          h('div', { className: 'xfe-settings-actions' },
            h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: onClose }, t('common.cancel')),
            h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: submit }, '📥 ', t('capture.save')),
          ),
        ),
      );
    }

    function VariantSheet({ t, variant, onAnswer, onNext, onClose }) {
      const q = variant.question;
      const letters = ['A', 'B', 'C', 'D'];
      const mastery = variant.checked
        ? (variant.correct ? Math.min(2, (variant.mistake.mastery || 0) + 1) : 0)
        : (variant.mistake.mastery || 0);
      return h(
        'div',
        { className: 'xfe-settings-layer', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose(); } },
        h('div', { className: 'xfe-settings xfe-variant-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('variant.title'), onMouseDown: (e) => e.stopPropagation() },
          h('div', { className: 'xfe-settings-head' },
            h('div', null,
              h('span', { className: 'xfe-kicker' }, '🎲 变式练习 · 换个数字或问法'),
              h('h3', null, t('variant.title')),
            ),
            h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onClose, 'aria-label': t('common.close') }, '✕'),
          ),
          variant.mastered
            ? h('div', { className: 'xfe-variant-mastered' },
                h('div', { style: { width: '150px', margin: '0 auto 6px' } }, h(Mascot, { outfit: '', mood: 'happy' })),
                h('h3', null, t('variant.mastered')),
                h('p', null, t('variant.masteredNote')),
                h('div', { className: 'xfe-result-stats' },
                  h('div', { className: 'xfe-result-stat' }, h('b', null, '+1'), h('small', null, '🐚 ' + t('pet.shells'))),
                  h('div', { className: 'xfe-result-stat' }, h('b', null, '2/2'), h('small', null, t('variant.progress'))),
                ),
                h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onClose }, '🐚 ', t('variant.close')),
              )
            : h('div', null,
                h('div', { className: 'xfe-variant-meta' },
                  h('span', { className: 'xfe-chip is-sun' }, `${t('variant.round').replace('{n}', String(variant.round))}`),
                  h('span', { className: 'xfe-chip is-mint' }, `${t('mistakes.mastery')} ${mastery}/2`),
                  h('span', { className: 'xfe-tag' }, q.sameType ? '同题型' : '同年级'),
                  h('span', { className: 'xfe-tag' }, q.knowledgePoint || variant.mistake.knowledgePoint || ''),
                ),
                h('div', { className: 'xfe-variant-original' },
                  h('small', null, t('variant.original')),
                  h('p', null, h(MathText, { text: variant.mistake.prompt })),
                ),
                h('div', { className: 'xfe-question-card xfe-card', style: { marginTop: '10px' } },
                  h('div', { className: 'xfe-question-prompt', style: { fontSize: '20px' } }, h(MathText, { text: q.prompt })),
                  h('div', { className: 'xfe-options' },
                    q.options.map((opt, idx) => {
                      let cls = 'xfe-option';
                      if (variant.checked) {
                        if (idx === q.correct) cls += ' is-correct';
                        else if (idx === variant.selected) cls += ' is-wrong';
                        else cls += ' is-dim';
                      }
                      return h('button', {
                        key: idx,
                        type: 'button',
                        className: cls,
                        disabled: variant.checked,
                        onClick: () => onAnswer(idx),
                      }, h('span', { className: 'xfe-option-letter' }, letters[idx]), h('span', null, h(MathText, { text: opt })));
                    }),
                  ),
                  variant.checked
                    ? h('div', { className: `xfe-feedback ${variant.correct ? 'is-good' : 'is-bad'}` },
                        h('div', { className: 'xfe-feedback-title' }, variant.correct ? `✅ ${t('variant.correct')}` : `💧 ${t('variant.wrong')}`),
                        h('p', null, h(MathText, { text: q.explanation })),
                        !variant.correct ? h('p', null, `${t('mistakes.right')}：`, h(MathText, { text: q.options[q.correct] })) : null,
                        h('div', { className: 'xfe-feedback-actions' },
                          h('button', { type: 'button', className: 'xfe-btn is-ghost is-sm', onClick: onClose }, t('variant.close')),
                          h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onNext }, '🎲 ', t('variant.next')),
                        ),
                      )
                    : null,
                ),
                h('div', { className: 'xfe-capture-note' }, '💡 ', t('variant.note')),
              ),
        ),
      );
    }

    function MistakesView({ t, data, filter, setFilter, onReview, onVariant, onCapture, onPractice, resumeQuiz }) {
      const filters = [{ id: 'all', label: t('mistakes.all') }, ...SUBJECTS.map((s) => ({ id: s.id, label: subjectText(t, s.id) }))];
      const list = data.mistakes.filter((m) => filter === 'all' || m.subject === filter);
      return h(
        'div',
        null,
        h('div', { className: 'xfe-page-head' },
          h('div', null,
            h('span', { className: 'xfe-kicker' }, '🧹 把错题变成宝藏'),
            h('h1', null, t('mistakes.title')),
            h('p', null, t('mistakes.subtitle')),
          ),
          h('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } },
            h('span', { className: 'xfe-chip is-coral' }, `${data.mistakes.length} ${t('mistakes.count')}`),
            h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', onClick: onCapture }, '📷 ', t('capture.title')),
          ),
        ),
        resumeQuiz
          ? h('div', { className: 'xfe-resume-banner' },
              h('div', null,
                h('b', null, '这一关还没做完'),
                h('small', null, `第 ${resumeQuiz.index} / ${resumeQuiz.total} 题，随时可以回来接着答。`),
              ),
              h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', onClick: resumeQuiz.onResume }, '▶ 继续答题'),
            )
          : null,
        h('div', { className: 'xfe-filter-row' },
          filters.map((f) => h('button', { key: f.id, type: 'button', className: `xfe-filter ${filter === f.id ? 'is-on' : ''}`, onClick: () => setFilter(f.id) }, f.label)),
        ),
        list.length
          ? h('div', { className: 'xfe-mistake-list' },
              list.map((m) => {
                const meta = SUBJECTS.find((s) => s.id === m.subject) || SUBJECTS[0];
                const mastery = clamp(Number(m.mastery) || 0, 0, 2);
                return h('article', { key: m.id, className: 'xfe-mistake xfe-card', style: { '--mc': meta.color } },
                  h('div', { className: 'xfe-mistake-top' },
                    h('span', { className: 'xfe-tag', style: { background: meta.soft } }, meta.icon, ' ', subjectText(t, m.subject)),
                    h('span', { className: 'xfe-tag' }, gradeText(t, m.grade || data.grade)),
                    m.source === 'photo' ? h('span', { className: 'xfe-tag' }, '📷 ', t('mistakes.photoTag')) : null,
                    h('span', { className: 'xfe-tag' }, '待复习'),
                    m.knowledgePoint ? h('span', { className: 'xfe-tag', style: { background: 'var(--xfe-lilac-soft)' } }, '🧠 ', h(MathText, { text: m.knowledgePoint })) : null,
                  ),
                  h('h4', null, h(MathText, { text: m.prompt })),
                  m.image ? h('img', { className: 'xfe-mistake-photo', src: m.image, alt: t('capture.reference') }) : null,
                  h('div', { className: 'xfe-answer-row' },
                    h('span', { className: 'xfe-answer is-wrong' }, `${t('mistakes.your')}：`, h(MathText, { text: m.selected || '—' })),
                    h('span', { className: 'xfe-answer is-right' }, `${t('mistakes.right')}：`, h(MathText, { text: m.correctAnswer || '—' })),
                  ),
                  h('p', null, h(MathText, { text: m.analysis || m.explanation })),
                  h('div', { className: 'xfe-mastery-row' },
                    h('span', null, `${t('mistakes.mastery')} ${mastery}/2`),
                    h('span', { className: 'xfe-mastery-dots' }, [0, 1].map((i) => h('i', { key: i, className: i < mastery ? 'is-on' : '' }))),
                  ),
                  h('div', { className: 'xfe-mistake-actions' },
                    h('button', { type: 'button', className: 'xfe-btn is-sun is-sm', onClick: () => onVariant(m) }, '🎲 ', t('mistakes.variant')),
                    h('button', { type: 'button', className: 'xfe-btn is-mint is-sm', onClick: () => onReview(m) }, '✅ ', t('mistakes.understoodShort')),
                  ),
                );
              }),
            )
          : h('div', { className: 'xfe-empty xfe-card' },
              h('span', { className: 'xfe-empty-emoji' }, data.mistakes.length ? '🫧' : '🐣'),
              h('b', null, data.mistakes.length ? '这片珊瑚暂时没有待复习的错题' : t('mistakes.empty')),
              h('p', null, data.mistakes.length ? '换个学科看看，或者去闯关岛再捡几颗贝壳。' : '每道错题都会住进这里，复习完就会变成你的贝壳。'),
              h('div', { style: { display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' } },
                h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onCapture }, '📷 ', t('capture.title')),
                h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: onPractice }, '🏝️ 去闯关'),
              ),
            ),
      );
    }

    function GrowthView({ t, data, level, onFeed, onOutfit }) {
      const xpInLevel = data.xp % 120;
      const unlocked = ACHIEVEMENTS.filter((a) => a.test(data)).length;
      const mood = hungerMood(data.hunger);
      return h(
        'div',
        null,
        h('div', { className: 'xfe-page-head' },
          h('div', null,
            h('span', { className: 'xfe-kicker' }, '🐳 学习变成长大'),
            h('h1', null, t('growth.title')),
            h('p', null, t('growth.subtitle')),
          ),
          h('span', { className: 'xfe-chip is-mint' }, `⭐ Lv.${level} · ${data.coins} 🪙`),
        ),
        h(
          'div',
          { className: 'xfe-growth-grid' },
          h(
            'section',
            { className: 'xfe-pet-card xfe-card' },
            h(Mascot, { outfit: data.outfit, mood }),
            h('h3', null, data.name),
            h('p', null, data.hunger > 80 ? '肚皮圆滚滚，开心到吐泡泡。' : data.hunger < 30 ? '饿晕啦，趴在海底呼呼大睡，喂一口马上蹦起来！' : '有点想吃大米饭了，投喂一口吧。'),
            h('div', { style: { marginTop: '8px', textAlign: 'left' } },
              h('div', { className: 'xfe-level-line' }, h('span', null, '🍙 饱饱度'), h('span', null, `${data.hunger}%`)),
              h(Progress, { value: data.hunger, max: 100, className: 'is-hunger' }),
              h('small', { className: 'xfe-card-sub', style: { display: 'block', marginTop: '4px' } },
                data.hunger >= 100
                  ? '吃得饱饱的，先去学习消耗一下吧。'
                  : data.hunger <= 0
                    ? '饿扁了！喂一口马上复活。'
                    : `饱食度每 ${HUNGER_DECAY_MINUTES_PER_POINT} 分钟扣 1 点`,
              ),
            ),
            h('div', { className: 'xfe-pet-stats' },
              h('div', { className: 'xfe-pet-stat' }, h('b', null, `⭐ ${t('growth.level')} ${level}`), h('small', null, `${data.xp} XP`)),
              h('div', { className: 'xfe-pet-stat' }, h('b', null, `🍙 ${t('growth.hunger')}`), h('small', null, `${data.hunger}%`)),
              h('div', { className: 'xfe-pet-stat' }, h('b', null, `🐚 ${t('pet.shells')}`), h('small', null, `${data.stats.shells || 0} 枚`)),
              h('div', { className: 'xfe-pet-stat' }, h('b', null, `🧠 ${t('pet.mastery')}`), h('small', null, `${data.stats.masteredMistakes || 0} 道`)),
            ),
            h('p', { className: 'xfe-card-sub', style: { marginTop: '8px' } }, t('pet.knowledgeFeed')),
            h('div', { style: { marginTop: '10px', textAlign: 'left' } },
              h('div', { className: 'xfe-level-line' }, h('span', null, t('growth.xp')), h('span', null, `${xpInLevel}/120`)),
              h(Progress, { value: xpInLevel, max: 120 }),
            ),
            h('div', { className: 'xfe-card-soft', style: { marginTop: '11px', padding: '9px', textAlign: 'left' } },
              h('div', { className: 'xfe-card-sub' }, '🏅 已收集成就'),
              h('div', { style: { fontSize: '19px', fontWeight: 900, marginTop: '2px' } }, `${unlocked} / ${ACHIEVEMENTS.length}`),
            ),
          ),
          h(
            'div',
            null,
            h(
              'section',
              { className: 'xfe-card xfe-card-pad', style: { marginBottom: '12px' } },
              h('h3', { className: 'xfe-card-title' }, '🍭 ', t('growth.food')),
              h('p', { className: 'xfe-card-sub' }, `${t('growth.food.sub')} 饱饱度 80% 以上通关，奖励多 5 贝壳。`),
              h('div', { className: 'xfe-shop-grid', style: { marginTop: '10px' } },
                FOODS.map((food) => h('div', { key: food.id, className: 'xfe-shop-item' },
                  h('div', { className: 'xfe-shop-emoji' }, food.emoji),
                  h('div', { className: 'xfe-shop-copy' }, h('b', null, food.name), h('small', null, `+${food.hunger} 饱饱 · +${food.xp} XP`)),
                  h('button', { type: 'button', onClick: () => onFeed(food), disabled: data.coins < food.cost || data.hunger >= 100 }, data.hunger >= 100 ? '吃饱啦' : `${food.cost} 🪙`),
                )),
              ),
            ),
            h(
              'section',
              { className: 'xfe-card xfe-card-pad', style: { marginBottom: '12px' } },
              h('h3', { className: 'xfe-card-title' }, '🎀 ', t('growth.outfit')),
              h('p', { className: 'xfe-card-sub' }, t('growth.outfit.sub')),
              h('div', { className: 'xfe-outfit-grid', style: { marginTop: '10px' } },
                OUTFITS.map((o) => {
                  const owned = data.owned.includes(o.id);
                  const worn = data.outfit === o.id;
                  const locked = !owned && level < o.level;
                  return h('div', { key: o.id, className: `xfe-outfit ${worn ? 'is-on' : ''} ${locked ? 'is-locked' : ''}` },
                    h('span', { className: 'xfe-outfit-emoji' }, o.emoji),
                    h('b', null, o.name),
                    h('small', null, owned ? (worn ? t('common.equipped') : '已拥有') : locked ? t('growth.lockedLevel').replace('{n}', String(o.level)) : o.cost ? `${o.cost} 🪙` : '免费'),
                    h('button', {
                      type: 'button',
                      className: owned ? '' : 'is-buy',
                      onClick: () => onOutfit(o),
                      disabled: locked || (!owned && o.cost > data.coins),
                    }, worn ? t('common.unequip') : owned ? t('common.equip') : o.cost ? t('common.buy') : '领取'),
                  );
                }),
              ),
            ),
            h(
              'section',
              { className: 'xfe-card xfe-card-pad' },
              h('h3', { className: 'xfe-card-title' }, '🐚 ', t('growth.achievements')),
              h('p', { className: 'xfe-card-sub' }, t('growth.achievements.sub')),
              h('div', { className: 'xfe-achievement-grid', style: { marginTop: '10px' } },
                ACHIEVEMENTS.map((a) => h('div', { key: a.id, className: `xfe-achievement ${a.test(data) ? 'is-on' : ''}`, title: `${a.name} · ${a.desc}` },
                  h('span', null, a.icon),
                  h('b', null, a.name),
                )),
              ),
            ),
            h(
              'section',
              { className: 'xfe-card xfe-card-pad', style: { marginTop: '12px' } },
              h('h3', { className: 'xfe-card-title' }, '🐟 ', t('pet.diary')),
              h('p', { className: 'xfe-card-sub' }, t('pet.knowledgeFeed')),
              data.diary && data.diary.length
                ? h('div', { className: 'xfe-diary-list' },
                    data.diary.slice(0, 6).map((entry) => h('div', { key: entry.id, className: 'xfe-diary-row' },
                      h('span', { className: 'xfe-diary-emoji' }, entry.emoji || '🐟'),
                      h('span', null, entry.text),
                      h('small', null, new Date(entry.at).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' })),
                    )),
                  )
                : h('p', { className: 'xfe-card-sub' }, t('pet.diaryEmpty')),
            ),
          ),
        ),
      );
    }

    function ReportView({ t, data, onPractice, onNotify }) {
      const [rangePreset, setRangePreset] = useState('week');
      const [customStart, setCustomStart] = useState(dayKey(addDays(new Date(), -27)));
      const [customEnd, setCustomEnd] = useState(dayKey());
      const [rangeError, setRangeError] = useState('');
      const [report, setReport] = useState(null);
      const [reportOpen, setReportOpen] = useState(false);
      const totalQ = data.stats.totalQuestions || 0;
      const accuracy = pct(data.stats.totalCorrect || 0, totalQ);
      const days = data.stats.studyDays || 0;
      const focusMinutes = data.stats.focusMinutes || 0;
      const week = lastSeven(data);
      const maxQ = Math.max(1, ...week.map((d) => d.questions));
      const weekTotal = week.reduce((sum, d) => sum + d.questions, 0);
      const strong = strongestSubject(data);
      const weak = weakestSubject(data);
      const unlocked = ACHIEVEMENTS.filter((a) => a.test(data)).length;
      const subjectRows = SUBJECTS.map((s) => ({ ...s, ...subjectStats(data, s.id) }));
      let comment = '小肥鱼还没看到你的学习数据。先去闯一关，回来就能看到自己的海底成绩单啦。';
      if (totalQ > 0) {
        if (accuracy >= 85 && data.streak >= 3) comment = `小肥鱼要给你一个大大的鱼鳍拥抱！正确率 ${accuracy}%，还连续学了 ${data.streak} 天。保持这个节奏，你会越来越稳。`;
        else if (accuracy >= 70) comment = `正确率 ${accuracy}%，底子很不错！错题不是坏事，它们刚好告诉你下一步该补哪里。`;
        else if (totalQ < 10) comment = '才刚开始呢，小肥鱼已经看到你在认真思考了。先把错题礁里的小贝壳一个一个捡起来。';
        else comment = `正确率 ${accuracy}%，说明有些知识点还在礁石后面躲着。别急，小肥鱼陪你把它们一条一条找出来。`;
      }
      const tips = [];
      if (weak) tips.push(`每天给${subjectText(t, weak.id)}留 5 分钟：先做 2 道简单题热身，再做 1 道错题。`);
      if (data.mistakes.length) tips.push(`错题礁里还有 ${data.mistakes.length} 道题在等你。复习时先遮住答案，自己讲一遍思路。`);
      if (data.streak < 3) tips.push('试试连续 3 天各学 5 分钟。短而稳定，比周末一次补很久更有用。');
      if (focusMinutes < 10) tips.push('用“专注海域”做一次 5 分钟专注，只做一件事，做完再吐个泡泡休息。');
      if (!tips.length) tips.push('保持现在的节奏，每周挑一个最想变强的知识点，专门练 3 次。');

      const presetRange = () => {
        const today = dayKey();
        if (rangePreset === 'week') return { start: dayKey(addDays(new Date(), -6)), end: today, label: t('report.week') };
        if (rangePreset === 'month') return { start: dayKey(addDays(new Date(), -29)), end: today, label: t('report.month') };
        if (rangePreset === 'term') return { start: termStartKey(), end: today, label: t('report.term') };
        return { start: customStart, end: customEnd, label: t('report.custom') };
      };

      const generateReport = () => {
        const range = presetRange();
        const keys = dateKeysBetween(range.start, range.end);
        if (keys.length < 7) {
          setRangeError(t('report.min7'));
          return;
        }
        setRangeError('');
        const built = buildLearningReport(data, range.start, range.end, range.label);
        setReport(built);
        setReportOpen(true);
      };

      const printReport = () => {
        if (!report) return;
        const win = window.open('', '_blank');
        if (!win) {
          onNotify(t('report.printBlocked'));
          return;
        }
        const subjectName = { math: '数学', chinese: '语文', english: '英语' };
        const html = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>${escapeHtml(t('report.reportTitle'))}</title>
<style>
  body{font-family:"PingFang SC","Microsoft YaHei",sans-serif;color:#1F2A5B;background:#FFF8E6;margin:0;padding:34px;line-height:1.7}
  .wrap{max-width:720px;margin:0 auto;border:2px solid #1F2A5B;border-radius:22px;background:#FFFDF7;padding:28px;box-shadow:0 6px 0 rgba(31,42,91,.18)}
  h1{font-size:28px;margin:0 0 4px} .sub{color:#465184;font-size:13px;margin-bottom:20px}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}
  .stat{border:1.5px solid rgba(31,42,91,.2);border-radius:12px;padding:10px;background:#fff}
  .stat b{display:block;font-size:24px} .stat small{font-size:11px;color:#465184}
  h2{font-size:16px;margin:20px 0 6px} p,li{font-size:13px} li{margin:3px 0}
  .tag{display:inline-block;padding:2px 8px;border-radius:999px;background:#FFF3BF;border:1px solid rgba(31,42,91,.2);font-size:11px;margin-right:6px}
  .bar{height:9px;border-radius:999px;background:#eee;overflow:hidden;margin:3px 0 8px}.bar i{display:block;height:100%;background:#20C8B8}
  .foot{margin-top:22px;border-top:1px dashed rgba(31,42,91,.2);padding-top:10px;font-size:11px;color:#5F688C}
</style></head><body><div class="wrap">
  <h1>🐟 ${escapeHtml(t('report.reportTitle'))}</h1>
  <div class="sub">${escapeHtml(report.childName)} · ${escapeHtml(report.startKey)} 至 ${escapeHtml(report.endKey)} · ${report.days} 天</div>
  <div class="grid">
    <div class="stat"><b>${report.total}</b><small>答题总数</small></div>
    <div class="stat"><b>${report.accuracy}%</b><small>正确率</small></div>
    <div class="stat"><b>${report.activeDays}</b><small>有效学习天</small></div>
    <div class="stat"><b>${report.mastered}</b><small>掌握错题</small></div>
  </div>
  <h2>学科表现</h2>
  ${report.bySubject.map((s) => `<div><span class="tag">${subjectName[s.id] || s.id}</span>${s.q ? `${s.c}/${s.q} · ${s.acc}%` : '本阶段还没有练习'}</div><div class="bar"><i style="width:${s.q ? s.acc : 0}%"></i></div>`).join('')}
  <h2>学习概况</h2>
  <p>专注 ${report.minutes} 分钟，完成闯关 ${report.quizzes} 次，当前待复习 ${report.pending} 道，知识贝壳 ${report.shells} 枚。</p>
  <h2>重点知识点</h2>
  <p>${report.weakPoints.length ? report.weakPoints.map((p) => `<span class="tag">${escapeHtml(p.name)} × ${p.count}</span>`).join('') : '本阶段没有集中错题。'}</p>
  <h2>小肥鱼建议</h2>
  <ul>${report.suggestions.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ul>
  <div class="foot">生成时间：${new Date(report.generatedAt).toLocaleString('zh-CN')} · 小肥鱼学习平台</div>
</div></body></html>`;
        win.document.write(html);
        win.document.close();
        win.focus();
        setTimeout(() => { try { win.print(); } catch { /* user can print manually */ } }, 350);
      };

      const copyReport = async () => {
        if (!report) return;
        try {
          await navigator.clipboard.writeText(reportToText(report));
          onNotify(t('report.copied'));
        } catch {
          onNotify(t('report.copied'));
        }
      };

      return h(
        'div',
        null,
        h('div', { className: 'xfe-page-head' },
          h('div', null,
            h('span', { className: 'xfe-kicker' }, '📊 看见长大的自己'),
            h('h1', null, t('report.title')),
            h('p', null, t('report.subtitle')),
          ),
          h('span', { className: 'xfe-chip is-sun' }, `🐚 ${unlocked}/${ACHIEVEMENTS.length} 成就`),
        ),
        h('div', { className: 'xfe-report-range' },
          h('div', { className: 'xfe-filter-row', style: { marginBottom: 0 } },
            ['week', 'month', 'term', 'custom'].map((preset) => h('button', {
              key: preset,
              type: 'button',
              className: `xfe-filter ${rangePreset === preset ? 'is-on' : ''}`,
              onClick: () => { setRangePreset(preset); setRangeError(''); },
            }, preset === 'week' ? t('report.week') : preset === 'month' ? t('report.month') : preset === 'term' ? t('report.term') : t('report.custom'))),
          ),
          rangePreset === 'custom'
            ? h('div', { className: 'xfe-report-dates' },
                h('input', { type: 'date', value: customStart, max: customEnd, onChange: (e) => setCustomStart(e.target.value), 'aria-label': t('report.start') }),
                h('span', null, '→'),
                h('input', { type: 'date', value: customEnd, min: customStart, max: dayKey(), onChange: (e) => setCustomEnd(e.target.value), 'aria-label': t('report.end') }),
              )
            : null,
          h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', onClick: generateReport }, '📄 ', t('report.generate')),
        ),
        rangeError ? h('div', { className: 'xfe-field-error', style: { marginTop: '-4px' } }, '⚠️ ', rangeError) : null,
        h(
          'div',
          { className: 'xfe-report-grid' },
          h('div', { className: 'xfe-stat-card xfe-card' }, h('b', null, `${totalQ}`), h('small', null, t('report.total'))),
          h('div', { className: 'xfe-stat-card xfe-card' }, h('b', null, `${accuracy}%`), h('small', null, t('report.accuracy'))),
          h('div', { className: 'xfe-stat-card xfe-card' }, h('b', null, `${days}`), h('small', null, t('report.days'))),
          h('div', { className: 'xfe-stat-card xfe-card' }, h('b', null, `${focusMinutes}`), h('small', null, t('report.focus'))),
        ),
        h(
          'div',
          { className: 'xfe-report-cols' },
          h(
            'section',
            { className: 'xfe-chart-card xfe-card' },
            h('h3', { className: 'xfe-card-title' }, '📈 ', t('report.week')),
            h('p', { className: 'xfe-card-sub' }, t('report.week.sub')),
            h('div', { className: 'xfe-bars' },
              week.map((d) => h('div', { key: d.key, className: `xfe-bar-col ${d.isToday ? 'is-today' : ''}`, title: `${d.key}：${d.questions} 题 · ${d.minutes} 分钟` },
                h('div', { className: 'xfe-bar-fill', style: { height: `${Math.max(4, pct(d.questions, maxQ))}%` } }, d.questions ? h('em', null, d.questions) : null),
                h('small', null, d.label),
              )),
            ),
            weekTotal === 0
              ? h('p', { className: 'xfe-card-sub', style: { marginTop: '7px' } }, t('report.noData'))
              : h('p', { className: 'xfe-card-sub', style: { marginTop: '7px' } }, `最近 7 天一共答了 ${weekTotal} 道题。`),
          ),
          h(
            'section',
            { className: 'xfe-chart-card xfe-card' },
            h('h3', { className: 'xfe-card-title' }, '🧭 ', t('report.subject')),
            h('div', { className: 'xfe-subject-bars' },
              subjectRows.map((s) => h('div', { key: s.id },
                h('div', { className: 'xfe-subject-bar-top' }, h('span', null, `${s.icon} ${subjectText(t, s.id)}`), h('span', null, s.q ? `${s.acc}% · ${s.q} 题` : '还没开始')),
                h('div', { className: 'xfe-subject-bar' }, h('span', { style: { width: `${s.q ? s.acc : 2}%`, background: s.color } })),
              )),
            ),
            h('div', { style: { display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap' } },
              h('span', { className: 'xfe-chip is-mint' }, `${t('report.strong')}：${strong ? `${strong.icon} ${subjectText(t, strong.id)}` : '待解锁'}`),
              h('span', { className: 'xfe-chip is-coral' }, `${t('report.weak')}：${weak ? `${weak.icon} ${subjectText(t, weak.id)}` : '待解锁'}`),
            ),
          ),
        ),
        h(
          'section',
          { className: 'xfe-comment' },
          h('b', null, '🐟 ', t('report.comment')),
          h('p', null, comment),
          h('b', { style: { marginTop: '10px' } }, '💡 ', t('report.tips')),
          h('ul', { className: 'xfe-advice' }, tips.slice(0, 3).map((tip, i) => h('li', { key: i }, tip))),
          h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', style: { marginTop: '10px' }, onClick: onPractice }, '🚀 去练一关'),
        ),
        reportOpen && report
          ? h(ReportSheet, {
              t,
              report,
              onClose: () => setReportOpen(false),
              onPrint: printReport,
              onCopy: copyReport,
            })
          : null,
      );
    }

    function ReportSheet({ t, report, onClose, onPrint, onCopy }) {
      const subjectName = { math: '数学', chinese: '语文', english: '英语' };
      return h(
        'div',
        { className: 'xfe-settings-layer', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose(); } },
        h('div', { className: 'xfe-settings xfe-report-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('report.reportTitle'), onMouseDown: (e) => e.stopPropagation() },
          h('div', { className: 'xfe-settings-head' },
            h('div', null,
              h('span', { className: 'xfe-kicker' }, '📄 可打印'),
              h('h3', null, t('report.reportTitle')),
            ),
            h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onClose, 'aria-label': t('common.close') }, '✕'),
          ),
          h('div', { className: 'xfe-report-hero' },
            h('div', { className: 'xfe-report-avatar' }, h('img', { src: `${ART}cute-t.png`, alt: '', draggable: false })),
            h('div', null,
              h('b', null, report.childName),
              h('p', null, t('report.rangeSummary').replace('{start}', report.startKey).replace('{end}', report.endKey).replace('{days}', String(report.days))),
              h('div', { style: { display: 'flex', gap: '5px', flexWrap: 'wrap' } },
                h('span', { className: 'xfe-tag' }, report.label),
                h('span', { className: 'xfe-tag' }, `${report.activeDays} ${t('report.activeDays')}`),
              ),
            ),
          ),
          h('div', { className: 'xfe-report-grid', style: { marginTop: '12px' } },
            h('div', { className: 'xfe-stat-card xfe-card' }, h('b', null, String(report.total)), h('small', null, t('report.total'))),
            h('div', { className: 'xfe-stat-card xfe-card' }, h('b', null, `${report.accuracy}%`), h('small', null, t('report.accuracy'))),
            h('div', { className: 'xfe-stat-card xfe-card' }, h('b', null, String(report.mastered)), h('small', null, t('report.mastered'))),
            h('div', { className: 'xfe-stat-card xfe-card' }, h('b', null, String(report.shells)), h('small', null, `🐚 ${t('pet.shells')}`)),
          ),
          h('div', { className: 'xfe-report-section' },
            h('h4', null, '📚 学科表现'),
            report.bySubject.map((s) => h('div', { key: s.id, className: 'xfe-report-subject' },
              h('div', { className: 'xfe-subject-bar-top' }, h('span', null, subjectName[s.id] || s.id), h('span', null, s.q ? `${s.c}/${s.q} · ${s.acc}%` : '本阶段还没有练习')),
              h('div', { className: 'xfe-subject-bar' }, h('span', { style: { width: `${s.q ? s.acc : 0}%`, background: SUBJECTS.find((x) => x.id === s.id)?.color } })),
            )),
          ),
          h('div', { className: 'xfe-report-section' },
            h('h4', null, '🧠 ', t('report.weakPoints')),
            report.weakPoints.length
              ? h('div', { style: { display: 'flex', gap: '5px', flexWrap: 'wrap' } }, report.weakPoints.map((p) => h('span', { key: p.name, className: 'xfe-tag' }, `${p.name} × ${p.count}`)))
              : h('p', { className: 'xfe-card-sub' }, '本阶段没有集中错题。'),
            report.bestDay ? h('p', { className: 'xfe-card-sub', style: { marginTop: '7px' } }, `${t('report.bestDay')}：${report.bestDay.key} · ${report.bestDay.questions} 题`) : null,
          ),
          h('div', { className: 'xfe-report-section' },
            h('h4', null, '🐟 小肥鱼建议'),
            h('ul', { className: 'xfe-advice' }, report.suggestions.map((s, i) => h('li', { key: i }, s))),
          ),
          h('div', { className: 'xfe-report-foot' }, `生成时间：${new Date(report.generatedAt).toLocaleString('zh-CN')}`),
          h('div', { className: 'xfe-settings-actions' },
            h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: onClose }, t('common.close')),
            h('button', { type: 'button', className: 'xfe-btn is-mint', onClick: onCopy }, '📋 ', t('report.copy')),
            h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onPrint }, '🖨️ ', t('report.print')),
          ),
        ),
      );
    }

    function ProfileSheet({ t, data, onClose, onSwitch, onAdd, onRemove }) {
      const [adding, setAdding] = useState(false);
      const [name, setName] = useState('');
      const [grade, setGrade] = useState(data.grade);
      const [avatar, setAvatar] = useState('🐣');
      const [confirmId, setConfirmId] = useState('');
      const children = Array.isArray(data.children) ? data.children : [];
      const activeId = data.activeChildId;
      const summaryOf = (child) => {
        const snapshot = child.id === activeId ? data : ((data.childSnapshots || {})[child.id] || {});
        const stats = snapshot.stats || {};
        const xp = Number(snapshot.xp) || 0;
        const total = Number(stats.totalQuestions) || 0;
        const correct = Number(stats.totalCorrect) || 0;
        return {
          level: levelOf(xp),
          total,
          accuracy: pct(correct, total),
          shells: Number(stats.shells) || 0,
          mistakes: Array.isArray(snapshot.mistakes) ? snapshot.mistakes.length : 0,
        };
      };
      const submitAdd = () => {
        if (!name.trim()) return;
        onAdd({ name: name.trim(), grade, avatar });
        setName('');
        setAdding(false);
      };
      return h(
        'div',
        { className: 'xfe-settings-layer', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose(); } },
        h('div', { className: 'xfe-settings xfe-profile-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': '个人学习档案', onMouseDown: (e) => e.stopPropagation() },
          h('div', { className: 'xfe-settings-head' },
            h('div', null,
              h('span', { className: 'xfe-kicker' }, '👧 每个孩子一套进度'),
              h('h3', null, '个人学习档案'),
            ),
            h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onClose, 'aria-label': t('common.close') }, '✕'),
          ),
          h('p', { className: 'xfe-card-sub', style: { marginTop: '-6px' } }, '学习进度、错题、知识贝壳和日记各自独立；教材库由全家共享。'),
          h('div', { className: 'xfe-child-list' },
            children.map((child) => {
              const info = summaryOf(child);
              const active = child.id === activeId;
              return h('div', { key: child.id, className: `xfe-child-row ${active ? 'is-active' : ''}` },
                h('span', { className: 'xfe-child-avatar' }, child.avatar || '🐳'),
                h('div', { className: 'xfe-child-copy' },
                  h('b', null, child.name),
                  h('small', null, `${gradeText(t, child.grade)} · Lv.${info.level} · ${info.total} 题 · ${info.accuracy}%`),
                  h('small', null, `🧹 ${info.mistakes} 道待复习 · 🐚 ${info.shells} 枚贝壳`),
                ),
                active
                  ? h('span', { className: 'xfe-chip is-mint' }, '正在学')
                  : h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', onClick: () => onSwitch(child.id) }, '切换'),
                !active && children.length > 1
                  ? h('button', {
                      type: 'button',
                      className: `xfe-child-remove ${confirmId === child.id ? 'is-confirm' : ''}`,
                      onClick: () => {
                        if (confirmId === child.id) {
                          onRemove(child.id);
                          setConfirmId('');
                        } else {
                          setConfirmId(child.id);
                        }
                      },
                    }, confirmId === child.id ? '再点删除' : '🗑')
                  : null,
              );
            }),
          ),
          children.length >= 6
            ? h('div', { className: 'xfe-library-note' }, '最多 6 个学习档案；先删除一个再添加。')
            : adding
              ? h('div', { className: 'xfe-child-add' },
                  h('h4', null, '添加一个孩子'),
                  h('div', { className: 'xfe-field' },
                    h('label', { htmlFor: 'xfe-child-name' }, '昵称'),
                    h('input', { id: 'xfe-child-name', value: name, maxLength: 12, onChange: (e) => setName(e.target.value), placeholder: '例如：小海星' }),
                  ),
                  h('div', { className: 'xfe-field' },
                    h('label', { htmlFor: 'xfe-child-grade' }, t('settings.grade')),
                    h('select', { id: 'xfe-child-grade', value: grade, onChange: (e) => setGrade(Number(e.target.value)) },
                      GRADE_IDS.map((g) => h('option', { key: g, value: g }, gradeText(t, g))),
                    ),
                  ),
                  h('div', { className: 'xfe-field' },
                    h('label', null, '头像'),
                    h('div', { className: 'xfe-avatar-grid' }, CHILD_AVATARS.map((a) => h('button', {
                      key: a,
                      type: 'button',
                      className: avatar === a ? 'is-on' : '',
                      onClick: () => setAvatar(a),
                      'aria-label': `选择头像 ${a}`,
                      'aria-pressed': avatar === a,
                    },
                      h('span', { className: 'xfe-avatar-emoji' }, a),
                      avatar === a ? h('span', { className: 'xfe-avatar-check' }, '✓') : null,
                    ))),
                    h('div', { className: 'xfe-avatar-current' },
                      h('span', { className: 'xfe-avatar-current-emoji' }, avatar),
                      h('b', null, `已选择 ${avatar}`),
                      h('small', null, '再点一个头像可以更换'),
                    ),
                  ),
                  h('div', { className: 'xfe-settings-actions' },
                    h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: () => setAdding(false) }, t('common.cancel')),
                    h('button', { type: 'button', className: 'xfe-btn is-primary', disabled: !name.trim(), onClick: submitAdd }, '＋ 建立档案'),
                  ),
                )
              : h('button', { type: 'button', className: 'xfe-btn is-sun is-full', style: { marginTop: '10px' }, onClick: () => setAdding(true) }, '＋ 添加孩子'),
          h('div', { className: 'xfe-settings-actions' },
            h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: onClose }, t('common.close')),
          ),
        ),
      );
    }

    function SettingsSheet({ t, draft, setDraft, onSave, onClose, onReset, resetArmed, appVersion, updateInfo, updateChecking, updateError, onCheckUpdate, onOpenUpdate }) {
      const hasUpdate = Boolean(updateInfo && compareVersion(updateInfo.version, appVersion) > 0);
      const notes = updateInfo && Array.isArray(updateInfo.notes) ? updateInfo.notes.slice(0, 4) : [];
      return h(
        'div',
        { className: 'xfe-settings-layer', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose(); } },
        h(
          'div',
          { className: 'xfe-settings', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('settings.title'), onMouseDown: (e) => e.stopPropagation() },
          h('div', { className: 'xfe-settings-head' },
            h('h3', null, '⚙️ ', t('settings.title')),
            h('button', { type: 'button', className: 'xfe-icon-btn', onClick: onClose, 'aria-label': t('common.close') }, '✕'),
          ),
          h('div', { className: 'xfe-field' },
            h('label', { htmlFor: 'xfe-name' }, t('settings.name')),
            h('input', { id: 'xfe-name', value: draft.name, maxLength: 12, onChange: (e) => setDraft({ ...draft, name: e.target.value }), placeholder: '小海星' }),
          ),
          h('div', { className: 'xfe-field' },
            h('label', { htmlFor: 'xfe-grade' }, t('settings.grade')),
            h('select', { id: 'xfe-grade', value: draft.grade, onChange: (e) => setDraft({ ...draft, grade: Number(e.target.value) }) },
              GRADE_IDS.map((g) => h('option', { key: g, value: g }, gradeText(t, g))),
            ),
          ),
          h('div', { className: 'xfe-field' },
            h('label', null, t('settings.sound')),
            h('div', { className: 'xfe-switch-row' },
              h('span', { className: 'xfe-card-sub' }, '答对叮咚，答错咕噜。'),
              h('button', { type: 'button', className: `xfe-switch ${draft.sound ? 'is-on' : ''}`, onClick: () => setDraft({ ...draft, sound: !draft.sound }), 'aria-pressed': draft.sound, 'aria-label': t('settings.sound') }),
            ),
          ),
          h('div', { className: 'xfe-field' },
            h('label', null, t('settings.update')),
            h('div', { className: 'xfe-update-box' },
              h('div', { className: 'xfe-update-box-head' },
                h('b', null, `${t('settings.currentVersion')} v${appVersion}`),
                h('span', null, hasUpdate ? `${t('settings.updateAvailable')} v${updateInfo.version}` : updateInfo ? t('settings.upToDate') : ''),
              ),
              hasUpdate && notes.length
                ? h('p', null, h('b', null, t('settings.updateNotes') + '：'), notes.join(' · '))
                : null,
              hasUpdate ? h('p', null, t('settings.updateHint')) : null,
              updateError ? h('p', { style: { color: 'var(--xfe-danger-ink)' } }, updateError) : null,
              h('div', { className: 'xfe-update-actions' },
                h('button', { type: 'button', className: 'xfe-btn is-ghost is-sm', disabled: updateChecking, onClick: () => onCheckUpdate(true) }, updateChecking ? '⏳ ' + t('settings.checking') : '🔄 ' + t('settings.checkUpdate')),
                hasUpdate ? h('button', { type: 'button', className: 'xfe-btn is-primary is-sm', onClick: onOpenUpdate }, '⬇️ ', t('settings.downloadUpdate')) : null,
              ),
            ),
          ),
          h('div', { className: 'xfe-field' },
            h('label', null, t('settings.about')),
            h('div', { className: 'xfe-settings-note' }, t('settings.aboutText'), h('br'), h('br'), t('settings.credit')),
          ),
          h('div', { className: 'xfe-field' },
            h('button', { type: 'button', className: `xfe-btn is-full ${resetArmed ? 'is-primary' : 'xfe-danger'}`, onClick: onReset }, resetArmed ? '⚠️ ' + t('settings.resetConfirm') : '🧹 ' + t('settings.reset')),
          ),
          h('div', { className: 'xfe-settings-actions' },
            h('button', { type: 'button', className: 'xfe-btn is-ghost', onClick: onClose }, t('common.cancel')),
            h('button', { type: 'button', className: 'xfe-btn is-primary', onClick: onSave }, '💾 ', t('common.save')),
          ),
        ),
      );
    }

    function AcademyPanel({ t, onExit }) {
      const [data, setData] = useAcademyData();
      useEffect(() => {
        setMainPanelVisible(true);
        return () => setMainPanelVisible(false);
      }, []);
      return h(
        'div',
        { className: 'xfe-root xfe-embedded-root' },
        h('style', null, CSS),
        h(AcademyApp, { t, data, setData, onClose: onExit, embedded: true }),
      );
    }

    function SidebarFishIcon({ size = 20, active = false, t }) {
      return h(
        'span',
        {
          className: `xfe-sidebar-glyph${active ? ' is-active' : ''}`,
          style: { width: `${size}px`, height: `${size}px` },
          title: t('sidebar.entry'),
          'aria-hidden': true,
        },
        h(
          'svg',
          { viewBox: '0 0 32 32', focusable: 'false' },
          h('path', { d: 'M4.5 16c4.2-6 11.2-8.2 17-5.2 2.1 1.1 3.8 3 4.8 5.2-1 2.2-2.7 4.1-4.8 5.2-5.8 3-12.8.8-17-5.2z', fill: '#5a78df', stroke: 'currentColor', strokeWidth: 2.2, strokeLinejoin: 'round' }),
          h('path', { d: 'M26.3 16c2.1-3.2 3.8-4.2 5.2-3.2-1.2 1.1-1.2 2.2 0 3.2-1.4 1.8-3.1 1.8-5.2 0z', fill: '#20c8b8', stroke: 'currentColor', strokeWidth: 2.2, strokeLinejoin: 'round' }),
          h('circle', { cx: 11.5, cy: 14.8, r: 2.5, fill: '#fff' }),
          h('circle', { cx: 11.5, cy: 14.8, r: 1.25, fill: '#1f2a5b' }),
          h('path', { d: 'M8.2 21.1c2.1 1.1 4.4 1.1 6.5 0', fill: 'none', stroke: '#fff', strokeWidth: 1.6, strokeLinecap: 'round' }),
          h('path', { d: 'M14.5 7.6c1.4-2.2 3.5-3.5 6.2-3.7-1 1.4-.9 2.8.4 4.2', fill: '#7bdff2', stroke: 'currentColor', strokeWidth: 2, strokeLinejoin: 'round' }),
        ),
      );
    }

    function AcademyRoot({ t }) {
      const [open, setOpen] = useState(false);
      const [data, setData] = useAcademyData();
      const mainPanelOpen = useMainPanelVisible();
      useEffect(() => {
        if (mainPanelOpen) setOpen(false);
      }, [mainPanelOpen]);
      useEffect(() => {
        if (!open) return undefined;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
      }, [open]);
      return h(
        'div',
        { className: 'xfe-root' },
        h('style', null, CSS),
        open
          ? h(AcademyApp, { t, data, setData, onClose: () => setOpen(false) })
          : mainPanelOpen
            ? null
            : h(Launcher, { t, data, onOpen: () => setOpen(true) }),
      );
    }

    return {
      name: 'xiaofeiyu-academy',
      inject: ['slots', 'locale', 'layout'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'xiaofeiyu-academy: dictionaries');
        const t = ctx.locale.bind(NS);
        const exitToChat = () => {
          try {
            ctx.layout.selectPanel('conversation');
          } catch (primaryError) {
            try {
              ctx.layout.selectPanel(null);
            } catch (fallbackError) {
              console.warn('[xiaofeiyu-academy] could not return to conversation:', primaryError, fallbackError);
            }
          }
        };

        ctx.slots.inject('shell.overlay', function* () {
          yield ctx.slots.register(
            {
              name: 'shell.overlay',
              id: 'xiaofeiyu-academy',
              order: 900,
              label: () => t('app.title'),
              inject: () => ({ t }),
            },
            AcademyRoot,
          );
        });

        ctx.slots.inject('sidebar.panellist', function* () {
          yield ctx.slots.register(
            {
              name: 'sidebar.panellist',
              id: 'xiaofeiyu-academy',
              order: 5,
              label: () => t('sidebar.entry'),
              inject: () => ({ t }),
            },
            SidebarFishIcon,
          );
        });

        ctx.slots.inject('main', function* () {
          yield ctx.slots.register(
            {
              name: 'main',
              key: 'xiaofeiyu-academy',
              inject: () => ({ t, onExit: exitToChat }),
            },
            AcademyPanel,
          );
        });
      },
    };
  },
});








