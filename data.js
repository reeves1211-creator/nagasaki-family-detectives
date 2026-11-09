// data.js - Game data, assets, and stage definitions for Nagasaki Family Detectives
// Preserve all original Traditional Chinese story content and pixel assets.

const ASSETS = {
  girls: [
    ["assets/girl_0_0.png", "assets/girl_0_1.png", "assets/girl_0_2.png"],
    ["assets/girl_1_0.png", "assets/girl_1_1.png", "assets/girl_1_2.png"],
    ["assets/girl_2_0.png", "assets/girl_2_1.png", "assets/girl_2_2.png"]
  ],
  pets: [
    ["assets/pet_0_0.png", "assets/pet_0_1.png", "assets/pet_0_2.png", "assets/pet_0_3.png"],
    ["assets/pet_1_0.png", "assets/pet_1_1.png", "assets/pet_1_2.png", "assets/pet_1_3.png"],
    ["assets/pet_2_0.png", "assets/pet_2_1.png", "assets/pet_2_2.png", "assets/pet_2_3.png"]
  ]
};

const NAMES = ['品蔡', '芋寐', '汛霖'];
const PET_NAMES = ['MOMO', 'PON', 'FUFU'];
const HAIR_STYLES = ['長直髮', '中長捲髮', '淺棕長髮'];
const PET_TYPES = ['陸 · 小恐龍', '海 · 小海獸', '空 · 小飛獸'];
const STYLE_NAMES = ['珊瑚粉探險裝', '天空藍觀察裝', '薄荷綠發現裝'];

const JOURNAL = [
  `我離開河邊，穿過人來人往的街道。
商店與食物的香氣，讓我忍不住放慢腳步。
最後，我來到一個名字讓人想停下來思考的地方。`,
  `我開始懷疑，寶藏真的存在嗎？
正想著，我的肚子咕嚀咕嚀叫了。
無論多重要的調查，都要先補充體力。`,
  `在餐廳裡，我聽見其他旅人聊起，如今能安心地和家人一起生活在這個世界上，是多麼珍貴的事。
這讓我想起，這座城市有一段需要停下來了解的歷史。
在那裡，我決定安靜地用心感受這份平和。`,
  `我繼續向城市南方前進。
先看見一座特別的教堂，後方的山坡上有古老洋館。
從那裡，可以望見港口與船。`,
  `我曾在旅途中，遇見一件想留下的東西。
現在，換你們做一次選擇。
找到一件對你而言，值得當作寶藏的東西。
選好後，找到關主，登記並封存你的備選寶藏，再帶到港口的寶藏認證所鑑定。`
];

const ROLES = [[0,1,2],[1,2,0],[2,0,1],[1,0,2],[0,2,1],[2,1,0]];

// Explicit Game State Machine stages (indexed by original stage number for save compatibility)
const STAGES = [
  { id: 'intro', name: '神秘卷宗', type: 'story' },
  { id: 'setup', name: '建立偵探', type: 'setup' },
  { id: 'choosePet', name: '選擇旅伴', type: 'setup' },
  { id: 'case1', name: 'CASE ①｜步數預言家', type: 'case' },
  { id: 'route1', name: '前往大浦天主堂電車站', type: 'route', dest: '大浦天主堂電車站' },
  { id: 'case2', name: 'CASE ②｜電車調查局', type: 'case' },
  { id: 'route2', name: '前往眼鏡橋', type: 'route', dest: '眼鏡橋' },
  { id: 'case3', name: 'CASE ③｜愛心獵人', type: 'case' },
  { id: 'riddle1', name: '謎語 1', type: 'riddle', riddleId: 1 },
  { id: 'diary0', name: '日記第1頁', type: 'diary', page: 0, nextDest: '觀光通 → 濱町商店街 → 思案橋' },
  { id: 'diary1', name: '日記第2頁', type: 'diary', page: 1, nextDest: '鶴茶庵' },
  { id: 'lunch', name: '午餐基地', type: 'rest' },
  { id: 'diary2', name: '日記第3頁', type: 'diary', page: 2, nextDest: '和平公園' },
  { id: 'peace', name: 'CASE ④｜和平使者', type: 'peace' },
  { id: 'star', name: 'Adventure Star', type: 'reward' },
  { id: 'case5', name: 'CASE ⑤｜城市偵查隊', type: 'case' },
  { id: 'riddle2', name: '謎語 2', type: 'riddle', riddleId: 2 },
  { id: 'treasure', name: '備選寶藏登記', type: 'treasure' },
  { id: 'lastRoute', name: '前往港口認證所', type: 'route', dest: '港口寶藏認證所' },
  { id: 'certify', name: '寶藏認證', type: 'certify' },
  { id: 'cover', name: '卷宗封面', type: 'cover' },
  { id: 'ending', name: '調查完成', type: 'ending' }
];

const BASE_STATE = {
  stage: 0,
  players: [],
  pet: 0,
  petname: 'MOMO',
  pages: [],
  star: false,
  starUsed: false,
  treasures: [],
  peace: '',
  pred: 0,
  parentPred: 0,
  start: 0,
  end: 0,
  styles: [0, 1, 2],
  feed: 0,
  petLook: 0,
  coverPhoto: null, // dataURL for cover photo
  coverTitle: '我們的長崎秘密寶藏',
  coverMode: 'all'
};

const KEY = 'nagasaki-formal-1';
const DB_NAME = 'nagasaki-db';
const DB_VERSION = 1;
window.GameData = { ASSETS, NAMES, PET_NAMES, HAIR_STYLES, PET_TYPES, STYLE_NAMES, JOURNAL, ROLES, STAGES, BASE_STATE, KEY, DB_NAME, DB_VERSION };
