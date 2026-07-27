// ============================================================
// 济州岛旅行计划 — 数据层
// ============================================================

export interface Spot {
  id: string;
  name: string;
  nameKr?: string;
  type: 'scenic' | 'food' | 'shopping' | 'transport' | 'hotel' | 'beach' | 'relax';
  time?: string;
  duration?: string;
  description: string;
  tips?: string;
  photo?: string;
  lat: number;
  lng: number;
  day: number;
  optional?: boolean;
}

export interface DayPlan {
  day: number;
  date: string;
  weekday: string;
  theme: string;
  transport: string;
  spots: Spot[];
}

export interface FlightInfo {
  direction: '去程' | '回程';
  date: string;
  route: string;
  departure: string;
  arrival?: string;
}

export const flights: FlightInfo[] = [
  {
    direction: '去程',
    date: '2026/7/31 周五',
    route: '上海 → 济州',
    departure: '05:05',
    arrival: '07:15',
  },
  {
    direction: '回程',
    date: '2026/8/2 周日',
    route: '济州 → 上海',
    departure: '22:40',
  },
];

// Photo URLs from Pexels
const PHOTOS = {
  hero: 'https://images.pexels.com/photos/34374350/pexels-photo-34374350.jpeg?auto=compress&cs=tinysrgb&w=1260',
  seongsan: 'https://images.pexels.com/photos/33097914/pexels-photo-33097914.jpeg?auto=compress&cs=tinysrgb&w=800',
  udo: 'https://images.pexels.com/photos/34350149/pexels-photo-34350149.jpeg?auto=compress&cs=tinysrgb&w=800',
  seopjikoji: 'https://images.pexels.com/photos/30966644/pexels-photo-30966644.jpeg?auto=compress&cs=tinysrgb&w=800',
  woljeongri: 'https://images.pexels.com/photos/34350263/pexels-photo-34350263.jpeg?auto=compress&cs=tinysrgb&w=800',
  hamdeok: 'https://images.pexels.com/photos/16677692/pexels-photo-16677692.jpeg?auto=compress&cs=tinysrgb&w=800',
  dongmun: 'https://images.pexels.com/photos/19271596/pexels-photo-19271596.jpeg?auto=compress&cs=tinysrgb&w=800',
  yongduam: 'https://images.pexels.com/photos/30966647/pexels-photo-30966647.jpeg?auto=compress&cs=tinysrgb&w=800',
  iho: 'https://images.pexels.com/photos/29134982/pexels-photo-29134982.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const days: DayPlan[] = [
  {
    day: 1,
    date: '7月31日',
    weekday: '周五',
    theme: '抵达 + 恢复体力 + 济州市轻松游',
    transport: '出租车',
    spots: [
      {
        id: 'airport-arrive',
        name: '抵达济州机场',
        type: 'transport',
        time: '07:15',
        description: '入境 → 取行李 → 出租车前往森兰德酒店',
        tips: '机场到莲洞约10分钟，预计 08:00 前可到',
        lat: 33.5104,
        lng: 126.4928,
        day: 1,
      },
      {
        id: 'hotel-rest',
        name: '森兰德酒店',
        nameKr: '선랜드호텔',
        type: 'hotel',
        time: '10:00',
        duration: '3.5h',
        description: '莲洞 · 提前入住、洗澡、补觉',
        tips: '补觉至 13:30，恢复红眼航班的体力',
        lat: 33.4890,
        lng: 126.4930,
        day: 1,
      },
      {
        id: 'hamdeok',
        name: '咸德海水浴场',
        nameKr: '함덕해수욕장',
        type: 'beach',
        time: '14:30',
        duration: '2h',
        description: '沙滩漫步、海景咖啡馆',
        tips: '济州最美海滩之一，翡翠色海水',
        photo: PHOTOS.hamdeok,
        lat: 33.5432,
        lng: 126.6695,
        day: 1,
      },
      {
        id: 'dongmun',
        name: '东门市场',
        nameKr: '제주동문시장',
        type: 'food',
        time: '18:00',
        duration: '1.5h',
        description: '海鲜、黑猪肉、济州特色小吃、橘子制品；晚餐后转去汗蒸放松',
        tips: '19:45 左右打车去 Dream Tower，别吃太撑再进高温房',
        photo: PHOTOS.dongmun,
        lat: 33.5117,
        lng: 126.5263,
        day: 1,
      },
      {
        id: 'dream-tower-spa',
        name: 'Jjimjil Spa（Dream Tower）',
        nameKr: '드림타워 찜질스파',
        type: 'relax',
        time: '20:15',
        duration: '3~4h',
        description: '晚餐后到梦想大厦汗蒸房：先淋浴，再换汗蒸服体验主题汗蒸房和休息区',
        tips: '地址：38 Singwang-ro；森兰德酒店/莲洞打车约10~15分钟，约6,000~10,000韩元；建议23:00前后回酒店',
        lat: 33.4854,
        lng: 126.4880,
        day: 1,
      },
    ],
  },
  {
    day: 2,
    date: '8月1日',
    weekday: '周六',
    theme: '东线核心景观日（8小时包车·酒店往返）',
    transport: '8小时中文包车（酒店出发/返回）',
    spots: [
      {
        id: 'hotel-depart-d2',
        name: '森兰德酒店出发',
        nameKr: '선랜드호텔',
        type: 'transport',
        time: '08:30',
        duration: '约1.5h车程',
        description: '从莲洞酒店上车，先走最远的东线核心点，避免下午高温爬坡',
        tips: '出发前把今天路线发给司机：酒店 → 城山日出峰 → 城山附近午餐 → 涉地可支 → 月汀里 → 酒店',
        lat: 33.4890,
        lng: 126.4930,
        day: 2,
      },
      {
        id: 'seongsan',
        name: '城山日出峰',
        nameKr: '성산일출봉',
        type: 'scenic',
        time: '10:00',
        duration: '1h10m',
        description: '世界自然遗产、火山口、济州代表景观',
        tips: '7月底炎热，建议只把“登顶”作为体力好时的选项；不登顶也可在山脚与海岸拍照',
        photo: PHOTOS.seongsan,
        lat: 33.4581,
        lng: 126.9425,
        day: 2,
      },
      {
        id: 'lunch-seongsan',
        name: '城山附近午餐',
        type: 'food',
        time: '11:20',
        duration: '50m',
        description: '在城山日出峰或城山浦港附近吃简餐/海鲜汤，顺路不绕远',
        tips: '请司机推荐附近好停车、翻台快的店；不要排很久的网红店',
        lat: 33.4581,
        lng: 126.9358,
        day: 2,
      },
      {
        id: 'seopjikoji',
        name: '涉地可支',
        nameKr: '섭지코지',
        type: 'scenic',
        time: '12:30',
        duration: '1h',
        description: '海岸悬崖、草坡、火山地貌、绝佳拍照点',
        tips: '从城山过去约20分钟；这里以散步拍照为主，不建议停太久，否则后面咖啡时间会被压缩',
        photo: PHOTOS.seopjikoji,
        lat: 33.4243,
        lng: 126.9312,
        day: 2,
      },
      {
        id: 'woljeongri',
        name: '月汀里海边',
        nameKr: '월정리해수욕장',
        type: 'beach',
        time: '14:10',
        duration: '1h',
        description: '蓝色海水、咖啡馆街、东线休闲收尾',
        tips: '作为下午休息点：喝咖啡、看海、上洗手间；15:20 左右返程比较稳',
        photo: PHOTOS.woljeongri,
        lat: 33.5559,
        lng: 126.7878,
        day: 2,
      },
      {
        id: 'udo',
        name: '牛岛',
        nameKr: '우도',
        type: 'scenic',
        time: '备选 11:20',
        duration: '至少3h',
        description: '环岛骑行、海岸风光、海鲜、咖啡馆；8小时包车内不建议作为默认主线',
        tips: '如果坚持上岛：建议取消月汀里，并让司机确认船班与等候方式；遇大风或排队就放弃',
        photo: PHOTOS.udo,
        lat: 33.5057,
        lng: 126.9532,
        day: 2,
        optional: true,
      },
      {
        id: 'hotel-return-d2',
        name: '返回森兰德酒店',
        nameKr: '선랜드호텔',
        type: 'transport',
        time: '16:30',
        description: '从月汀里沿北岸返回莲洞，结束8小时包车',
        tips: '若当天路况好、体力足，可请司机在回程顺路短停一个海岸观景点；不要再加远点',
        lat: 33.4890,
        lng: 126.4930,
        day: 2,
      },
    ],
  },
  {
    day: 3,
    date: '8月2日',
    weekday: '周日',
    theme: '西线海岸慢玩 + 免税店返程倒计时',
    transport: '出租车 / 打车软件（最后按机场时间倒推）',
    spots: [
      {
        id: 'checkout',
        name: '森兰德酒店退房',
        nameKr: '선랜드호텔',
        type: 'hotel',
        time: '10:30',
        description: '退房、行李寄存在前台，带小包出门',
        tips: '韩国酒店习惯帮住客免费寄存行李',
        lat: 33.4890,
        lng: 126.4930,
        day: 3,
      },
      {
        id: 'aewol',
        name: '涯月海岸',
        nameKr: '애월',
        type: 'beach',
        time: '11:20',
        duration: '1.5h',
        description: '看海、海景咖啡馆、拍照，作为最后一天海岸线开场',
        tips: '济州市出发约30~40分钟车程；轻装出门，行李留酒店',
        photo: 'https://images.pexels.com/photos/34350262/pexels-photo-34350262.jpeg?auto=compress&cs=tinysrgb&w=800',
        lat: 33.4628,
        lng: 126.3125,
        day: 3,
      },
      {
        id: 'lunch-d3',
        name: '午餐',
        type: 'food',
        time: '13:00',
        duration: '1h',
        description: '涯月附近解决，优先选不用久等、靠近主路的店',
        lat: 33.4628,
        lng: 126.3125,
        day: 3,
      },
      {
        id: 'geumneung',
        name: '金陵/协才海滩',
        nameKr: '금능해수욕장 / 협재해수욕장',
        type: 'beach',
        time: '14:20',
        duration: '1.5h',
        description: '西线最美海滩二选一，透明海水、白沙；把下午重点留给海边',
        tips: '16:00 左右离开海边返城；不要继续往西南跑，否则会压缩免税店和机场缓冲',
        photo: 'https://images.pexels.com/photos/29134982/pexels-photo-29134982.jpeg?auto=compress&cs=tinysrgb&w=800',
        lat: 33.3921,
        lng: 126.2385,
        day: 3,
      },
      {
        id: 'shopping',
        name: '新罗/乐天免税店',
        type: 'shopping',
        time: '17:30',
        duration: '1h40m',
        description: '从西线回到莲洞/新济州商圈后先购物，化妆品、伴手礼、免税品补货',
        tips: '硬截止：19:15 左右结束购物，先回酒店取行李，不要把机场时间押到最后一刻',
        lat: 33.4874,
        lng: 126.4986,
        day: 3,
      },
      {
        id: 'hotel-pickup',
        name: '回森兰德酒店取行李',
        type: 'transport',
        time: '19:30',
        duration: '30m',
        description: '免税店后回酒店前台取行李，整理随身物品、上洗手间、确认护照机票',
        tips: '从免税店到酒店多为市区短途；建议20:10前从酒店打车去机场',
        lat: 33.4890,
        lng: 126.4930,
        day: 3,
      },
      {
        id: 'airport-depart',
        name: '抵达济州机场候机',
        type: 'transport',
        time: '20:25',
        description: '从酒店打车约10~15分钟到机场，为22:40航班预留约2小时15分钟',
        tips: '最晚到机场时间按20:40倒推；建议20:10酒店出发，给路况、排队和退税/提货留余量',
        lat: 33.5104,
        lng: 126.4928,
        day: 3,
      },
    ],
  },
];

export const allSpots = days.flatMap((d) => d.spots);

export interface SpotBrief {
  culture: string;
  sauna?: string;
}

export const spotBriefs: Record<string, SpotBrief> = {
  'airport-arrive': {
    culture: '济州机场所在的济州市是岛上现代旅行的入口；从这里往市区走，能看到火山岛从渔村、港口到观光城市的转变。',
  },
  'hotel-rest': {
    culture: '莲洞属于“新济州”核心生活区，免税店、酒店和餐馆集中，是近几十年济州旅游城市化最明显的片区。',
  },
  'hotel-depart-d2': {
    culture: '从新济州一路向东，会穿过济州从市区、村落到火山海岸的横截面，是理解这座岛地貌变化最直观的一段车程。',
  },
  hamdeok: {
    culture: '咸德原是济州北岸村落，浅海、白沙和近岸礁石让这里长期适合渔业与海滨生活，如今是本地人也常来的海水浴场。',
  },
  dongmun: {
    culture: '东门市场开设于1945年前后，是济州最具代表性的传统市场之一，海产、柑橘、黑猪肉小吃都能看到岛民日常。',
    sauna: '今晚主推：东门晚餐后打车去 Dream Tower 的 Jjimjil Spa，位置在新济州商圈，体验完整且回酒店方便。',
  },
  'dream-tower-spa': {
    culture: '韩式汗蒸房是“洗浴 + 热疗 + 休息 + 小吃”的公共放松文化；甜米露和烤鸡蛋是第一次体验时最经典的组合。',
    sauna: '成人 30,000 韩元/人；两人约 60,000 韩元。若支付宝活动仍有效，约 27,000 韩元/人，两人 54,000 韩元。预留 3~4 小时最舒服。',
  },
  seongsan: {
    culture: '城山日出峰是约五千年前海底火山喷发形成的凝灰岩火山口，2007年列入世界自然遗产，是济州火山地貌的标志。',
  },
  'lunch-seongsan': {
    culture: '城山港周边餐馆依托海女、渔港和游客路线，常见海鲜汤、鲍鱼粥、烤鱼等济州东部海边餐食。',
  },
  udo: {
    culture: '牛岛因从城山方向远望像一头卧牛而得名，岛上保留海女、花生、海岸牧场等济州离岛生活气质。',
  },
  seopjikoji: {
    culture: '“涉地可支”来自济州方言地名，指向海中伸出的岬角；草坡、灯塔和黑色火山岩构成典型东岸景观。',
  },
  woljeongri: {
    culture: '月汀里一带曾是安静渔村，名字有“月光停驻的海岸”意象；近年因海色和咖啡馆街成为东线收尾点。',
  },
  checkout: {
    culture: '退房后的莲洞仍是旅行中转点：酒店、免税店和机场之间距离短，适合把最后一天做成轻装移动。',
  },
  aewol: {
    culture: '涯月海岸以玄武岩海岸线、海边村落和落日闻名，是西线从生活海岸转向咖啡馆文化的代表区域。',
  },
  'lunch-d3': {
    culture: '西线午餐可优先找海鲜汤、黑猪肉或本地小店，体验济州“海产 + 火山岛农产”的日常餐桌。',
  },
  geumneung: {
    culture: '金陵/协才面向飞扬岛，白沙来自贝壳碎屑与浅海沉积，透明浅水和远处火山岛是西线经典画面。',
  },
  'hotel-pickup': {
    culture: '把行李留在森兰德酒店，最后先逛免税店再回酒店取行李，能把“购物”和“机场缓冲”分清楚。',
  },
  'hotel-return-d2': {
    culture: '从东线回到莲洞，等于把火山海岸、海边村落和新济州城区串成一条完整的东西向截面。',
  },
  shopping: {
    culture: '新济州免税店集中在莲洞商圈，与机场、酒店距离很短；最后一天把购物放在取行李前，路线更顺也更不焦虑。',
  },
  'airport-depart': {
    culture: '夜航从济州离岛返程，机场附近仍能看到岛屿旅行“短距离、多节点”的特点：海岸、市区、机场几乎连成一线。',
  },
};

export interface CheckItem {
  id: string;
  group: string;
  text: string;
}

export const checklistItems: CheckItem[] = [
  { id: 'c1', group: '酒店', text: '联系森兰德酒店确认是否可提前入住（7/31 早上）' },
  { id: 'c2', group: '酒店', text: '确认森兰德酒店 8/2 退房后行李寄存服务' },
  { id: 'c3', group: '包车', text: '携程/飞猪/Klook 预订 8/1 东线8小时中文包车' },
  { id: 'c4', group: '包车', text: '确认酒店接送（提供森兰德酒店地址给司机）' },
  { id: 'c5', group: '包车', text: '确认包含油费、停车费、司机餐费' },
  { id: 'c6', group: '包车', text: '确认超时价格（通常 ¥80~120/h）' },
  { id: 'c7', group: '牛岛（可选）', text: '出发前一天查天气和风浪' },
  { id: 'c8', group: '牛岛（可选）', text: '确认船班时间（城山浦港出发）' },
  { id: 'c9', group: 'App', text: '下载 Naver Map' },
  { id: 'c10', group: 'App', text: '下载 Google Maps 并收藏景点' },
  { id: 'c11', group: 'App', text: '下载 Uber 或 Kakao T' },
  { id: 'c12', group: 'App', text: '下载 Papago 翻译' },
  { id: 'c13', group: '出行', text: '护照有效期检查' },
  { id: 'c14', group: '出行', text: '换韩元现金' },
  { id: 'c15', group: '出行', text: '开通国际漫游 / 租 WiFi' },
  { id: 'c16', group: '出行', text: '准备防晒霜和遮阳帽' },
  { id: 'c17', group: '汗蒸', text: '确认 Dream Tower Jjimjil Spa 营业时间与支付宝活动是否仍有效' },
];

export interface AppItem {
  name: string;
  purpose: string;
  initial: string;
}

export const apps: AppItem[] = [
  { name: 'Naver Map', purpose: '路线规划', initial: 'N' },
  { name: 'Google Maps', purpose: '收藏地点', initial: 'G' },
  { name: 'Uber', purpose: '打车', initial: 'U' },
  { name: 'Kakao T', purpose: '打车（本地）', initial: 'K' },
  { name: 'Papago', purpose: '翻译', initial: 'P' },
];

// ── Budget / Cost Reference ──

export interface BudgetItem {
  category: string;
  items: { label: string; range: string; note?: string }[];
}

export const budgetGuide: BudgetItem[] = [
  {
    category: '韩元现金',
    items: [
      { label: '建议携带现金', range: '30~50 万韩元', note: '约 ¥1,600~2,700（2人）' },
      { label: '用途', range: '打车、市场小吃、小店', note: '大店和免税店刷卡即可' },
      { label: '换汇方式', range: '国内银行预约', note: '或到济州机场ATM取（汇率稍差）' },
    ],
  },
  {
    category: '交通卡 T-money',
    items: [
      { label: '卡片购买', range: '2,500 韩元/张', note: '约 ¥13，便利店有售' },
      { label: '充值', range: '按需充值', note: '打车也可刷 T-money，比现金方便' },
      { label: 'WOWPASS 卡', range: '5,000 韩元/张', note: '约 ¥27，集换汇 + 交通 + 支付于一体' },
    ],
  },
  {
    category: '打车费参考',
    items: [
      { label: '机场 → 森兰德酒店（莲洞）', range: '6,000~10,000 韩元', note: '约 ¥32~54，车程约10分钟' },
      { label: '莲洞 → 咸德海滩', range: '15,000~20,000 韩元', note: '约 ¥80~108' },
      { label: '莲洞 → 涯月', range: '12,000~18,000 韩元', note: '约 ¥65~97' },
      { label: '市区内短途', range: '4,000~8,000 韩元', note: '约 ¥22~43' },
    ],
  },
  {
    category: '汗蒸 & 放松',
    items: [
      { label: 'Dream Tower Jjimjil Spa 成人', range: '30,000 韩元/人', note: '约 ¥155；建议第一晚晚餐后安排' },
      { label: '两人合计', range: '60,000 韩元', note: '约 ¥310；支付宝活动如仍有效约 54,000 韩元/2人' },
      { label: '森兰德酒店 ↔ Dream Tower', range: '6,000~10,000 韩元/程', note: '约 ¥32~54，车程10~15分钟' },
    ],
  },
  {
    category: '餐饮 & 会友',
    items: [
      { label: '普通韩餐（人均）', range: '8,000~15,000 韩元', note: '约 ¥43~81' },
      { label: '黑猪肉烤肉（人均）', range: '15,000~25,000 韩元', note: '约 ¥81~135' },
      { label: '海鲜（人均）', range: '20,000~40,000 韩元', note: '约 ¥108~216' },
      { label: '咖啡馆', range: '5,000~8,000 韩元', note: '约 ¥27~43' },
      { label: '聚餐请客（4人桌）', range: '10~20 万韩元', note: '约 ¥540~1,080' },
    ],
  },
  {
    category: '包车（国内平台预订）',
    items: [
      { label: '东线8小时中文包车', range: '¥800~1,500', note: '携程/飞猪/Klook 提前预订，人民币支付；建议约 08:30–16:30' },
      { label: '通常包含', range: '油费 + 停车费 + 司机餐', note: '下单时确认是否含超时费（通常 ¥80~120/h）' },
      { label: '平台推荐', range: '携程 / 飞猪 / Klook', note: '选"中文司机"标签，看评分和接单量' },
    ],
  },
];

// ── Rainy Day Backup ──

export interface RainyOption {
  name: string;
  nameKr?: string;
  category: 'indoor' | 'food' | 'relax' | 'shopping';
  description: string;
  location: string;
  tip?: string;
}

export const rainyDayOptions: RainyOption[] = [
  {
    name: '济州民俗自然史博物馆',
    nameKr: '제주도민속자연사박물관',
    category: 'indoor',
    description: '了解济州火山地质、海女文化和民俗历史',
    location: '济州市中心，步行可达',
    tip: '门票 2,000 韩元，性价比很高',
  },
  {
    name: '泰迪熊博物馆',
    nameKr: '테디베어뮤지엄',
    category: 'indoor',
    description: '适合情侣拍照打卡，展馆丰富',
    location: '中文旅游区',
    tip: '可与附近的信不信由你博物馆联票',
  },
  {
    name: '济州ARTE Museum',
    nameKr: '아르떼뮤지엄',
    category: 'indoor',
    description: '沉浸式数字艺术展，光影空间非常出片',
    location: '西归浦方向，车程约40分钟',
    tip: '建议提前网上购票，现场可能排队',
  },
  {
    name: '黑猪肉一条街',
    nameKr: '흑돼지거리',
    category: 'food',
    description: '济州特色黑猪肉烤肉街，多家店可选',
    location: '济州市区',
    tip: '人均 15,000~25,000 韩元',
  },
  {
    name: '东门市场室内区',
    nameKr: '제주동문시장',
    category: 'food',
    description: '大部分区域有顶棚，下雨也能逛吃',
    location: '济州市中心',
  },
  {
    name: 'Jjimjil Spa（Dream Tower）',
    nameKr: '드림타워 찜질스파',
    category: 'relax',
    description: '环境、交通和初次体验都比较稳的韩式汗蒸选择，适合晚餐后或雨天放松',
    location: 'Dream Tower Jeju，38 Singwang-ro，新济州莲洞商圈',
    tip: '成人 30,000 韩元/人；森兰德酒店打车约10~15分钟',
  },
  {
    name: '酒店咖啡馆放松',
    category: 'relax',
    description: '济州有大量设计感海景咖啡馆，雨天别有意境',
    location: '莲洞 / 涯月 / 月汀里',
    tip: '推荐搜索 Naver Map "카페" 看评分',
  },
  {
    name: '新罗/乐天免税店',
    category: 'shopping',
    description: '提前购物，雨天正好不浪费晴天时间',
    location: '济州市区',
    tip: '化妆品、伴手礼，线上下单机场提货更方便',
  },
];

// ── Korean Phrases ──

export interface KoreanPhrase {
  cn: string;
  kr: string;
  pronunciation: string;
}

export interface PhraseGroup {
  scene: string;
  phrases: KoreanPhrase[];
}

export const koreanPhrases: PhraseGroup[] = [
  {
    scene: '打车',
    phrases: [
      { cn: '请去这个地方', kr: '여기로 가 주세요', pronunciation: 'yeo-gi-ro ga ju-se-yo' },
      { cn: '多少钱？', kr: '얼마예요?', pronunciation: 'eol-ma-ye-yo?' },
      { cn: '请停在这里', kr: '여기서 세워 주세요', pronunciation: 'yeo-gi-seo se-wo ju-se-yo' },
      { cn: '可以刷卡吗？', kr: '카드 되나요?', pronunciation: 'ka-deu doe-na-yo?' },
    ],
  },
  {
    scene: '点餐',
    phrases: [
      { cn: '请给我菜单', kr: '메뉴판 주세요', pronunciation: 'me-nyu-pan ju-se-yo' },
      { cn: '请给我这个', kr: '이거 주세요', pronunciation: 'i-geo ju-se-yo' },
      { cn: '两位', kr: '두 명이요', pronunciation: 'du myeong-i-yo' },
      { cn: '不要辣', kr: '안 맵게 해 주세요', pronunciation: 'an maep-ge hae ju-se-yo' },
      { cn: '买单', kr: '계산이요', pronunciation: 'gye-san-i-yo' },
    ],
  },
  {
    scene: '问路 / 基本',
    phrases: [
      { cn: '请问，XX在哪里？', kr: 'XX 어디에 있어요?', pronunciation: 'XX eo-di-e iss-eo-yo?' },
      { cn: '洗手间在哪？', kr: '화장실 어디예요?', pronunciation: 'hwa-jang-sil eo-di-ye-yo?' },
      { cn: '谢谢', kr: '감사합니다', pronunciation: 'gam-sa-ham-ni-da' },
      { cn: '对不起 / 不好意思', kr: '저기요 / 죄송합니다', pronunciation: 'jeo-gi-yo / joe-song-ham-ni-da' },
      { cn: '不用了，谢谢', kr: '괜찮아요', pronunciation: 'gwaen-chan-a-yo' },
    ],
  },
  {
    scene: '购物',
    phrases: [
      { cn: '可以便宜一点吗？', kr: '좀 깎아 주세요', pronunciation: 'jom kkakk-a ju-se-yo' },
      { cn: '有别的颜色吗？', kr: '다른 색 있어요?', pronunciation: 'da-reun saek iss-eo-yo?' },
      { cn: '我只是看看', kr: '구경만 할게요', pronunciation: 'gu-gyeong-man hal-ge-yo' },
    ],
  },
];

// ── Weather Info ──

export interface WeatherInfo {
  label: string;
  value: string;
}

export const jejuWeather: WeatherInfo[] = [
  { label: '气温范围', value: '25°C ~ 33°C' },
  { label: '体感温度', value: '高湿闷热，体感可达 36°C+' },
  { label: '降雨概率', value: '约 40~60%（梅雨季尾声）' },
  { label: '紫外线', value: '极强，SPF50+ 必备' },
  { label: '日落时间', value: '约 19:30' },
];

export const weatherTips: string[] = [
  '轻薄透气短袖 + 短裤为主，备一件薄外套（室内冷气强）',
  '必带遮阳帽 + 墨镜 + 防晒霜（SPF50/PA++++）',
  '随身带折叠伞或一次性雨衣，济州阵雨来得快',
  '穿方便脱穿的凉鞋或运动鞋（城山日出峰需要走路）',
  '海滩备好速干毛巾和替换衣物',
];

// ── Packing Checklist ──

export interface PackingItem {
  id: string;
  group: string;
  text: string;
}

export const packingItems: PackingItem[] = [
  // 证件
  { id: 'p1', group: '证件', text: '护照（有效期6个月以上）' },
  { id: 'p2', group: '证件', text: '身份证' },
  { id: 'p3', group: '证件', text: '机票行程单（电子版即可）' },
  { id: 'p4', group: '证件', text: '酒店预订确认单' },
  { id: 'p5', group: '证件', text: '包车预订确认单' },
  // 电子设备
  { id: 'p6', group: '电子设备', text: '手机 + 充电器' },
  { id: 'p7', group: '电子设备', text: '充电宝' },
  { id: 'p8', group: '电子设备', text: '转换插头（韩国圆孔双脚）' },
  { id: 'p9', group: '电子设备', text: '相机 / GoPro（可选）' },
  { id: 'p10', group: '电子设备', text: '随身WiFi / 开通国际漫游' },
  // 衣物
  { id: 'p11', group: '衣物', text: '短袖 × 3~4 件' },
  { id: 'p12', group: '衣物', text: '短裤 / 裙子 × 2~3' },
  { id: 'p13', group: '衣物', text: '薄外套 / 防晒衫 × 1' },
  { id: 'p14', group: '衣物', text: '泳衣（海滩用）' },
  { id: 'p15', group: '衣物', text: '运动鞋 / 舒适凉鞋' },
  { id: 'p16', group: '衣物', text: '拖鞋（海滩 + 酒店）' },
  { id: 'p17', group: '衣物', text: '内衣裤 × 3~4 套' },
  { id: 'p18', group: '衣物', text: '睡衣' },
  // 洗护防晒
  { id: 'p19', group: '洗护防晒', text: '防晒霜 SPF50+ / PA++++' },
  { id: 'p20', group: '洗护防晒', text: '晒后修复（芦荟胶等）' },
  { id: 'p21', group: '洗护防晒', text: '遮阳帽 + 墨镜' },
  { id: 'p22', group: '洗护防晒', text: '牙刷牙膏（韩国酒店常不提供）' },
  { id: 'p23', group: '洗护防晒', text: '驱蚊液 / 止痒膏' },
  // 其他
  { id: 'p24', group: '其他', text: '折叠伞 / 一次性雨衣' },
  { id: 'p25', group: '其他', text: '速干毛巾' },
  { id: 'p26', group: '其他', text: '韩元现金 + 银行卡' },
  { id: 'p27', group: '其他', text: '小挎包 / 腰包（日常出门）' },
  { id: 'p28', group: '其他', text: '塑料袋若干（湿衣物/垃圾）' },
  { id: 'p29', group: '其他', text: '常用药品（肠胃药、创可贴、晕车药）' },
];

export const heroPhoto = PHOTOS.hero;
