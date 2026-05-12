// ═══════════════════════════════════════════════════════════════════════════
//  山上山下 — 菜單原始資料(餐廳業者在此編輯)
//
//  欄位說明:
//    category  分類代碼:set / extra / side / solo / drink
//    name      品項中文名稱
//    options   價格選項(字串陣列)
//                不分規格 → ['270']
//                分規格   → ['烤雞腿 270', '牛肉 340']
//                加料     → ['+45']  ← 以 + 號開頭表示為加價
//                時價     → ['時價']
//    tags      標記代碼陣列(R/1/2/3/P/B/L/V/V5/H),無則 []
//    image     圖片檔名,尚無圖片填 null
//    emoji     無圖片時的替代圖示
//    note      中文備註(空字串 = 不顯示)
//
//  ★ 新增品項時,複製一個 { } 區塊改內容即可
// ═══════════════════════════════════════════════════════════════════════════

export const menuRaw = [
  // ── 套餐類 ───────────────────────────────────────────────────────────────
  { category: 'set',   name: '山上祕滷牛腱套餐',     options: ['295'],  tags: ['R', 'B'], image: null, emoji: '🥩', note: '胡麻雞絲、滷牛腱心、紫蘿毛豆、鮮炸南瓜、佐洋蔥圈、黃金鮮蝦、山上甜點' },
  { category: 'set',   name: '黃金炸豬排咖哩定食',   options: ['325'],  tags: ['P'],      image: null, emoji: '🍛', note: '原始咖哩配菜 + 整片黃金鮮炸豬排' },
  { category: 'set',   name: '招牌唐揚雞咖哩定食',   options: ['345'],  tags: ['R'],      image: null, emoji: '🍗', note: '原始咖哩配菜 + 秘製鮮嫩雞腿丁' },
  { category: 'set',   name: '極★厚切豬排咖哩定食', options: ['360'],  tags: ['R', 'P'], image: null, emoji: '🥩', note: '原始咖哩配菜 + 整片厚切外脊里肌' },
  { category: 'set',   name: '豬雞雙拼咖哩定食',     options: ['375'],  tags: ['P'],      image: null, emoji: '🍱', note: '原始咖哩配菜 + 唐揚雞 + 黃金炸豬排' },
  { category: 'set',   name: '炸蝦天婦羅咖哩定食',   options: ['390'],  tags: [],         image: null, emoji: '🍤', note: '原始咖哩配菜 + 兩條黃金粉黃金炸白蝦' },

  // ── 加料(限定咖哩定食) ──────────────────────────────────────────────────
  { category: 'extra', name: '北海道豬油漬鮭魚卵',   options: ['+45'], tags: [], image: null, emoji: '🍣', note: '咖哩定食限定加價' },
  { category: 'extra', name: '炙燒起司',             options: ['+15'], tags: [], image: null, emoji: '🧀', note: '咖哩定食限定加價' },

  // ── 配菜加購 ────────────────────────────────────────────────────────────
  { category: 'side',  name: '胡麻雞',   options: ['50'], tags: [], image: null, emoji: '🍗', note: '' },
  { category: 'side',  name: '黃金鮮蝦', options: ['35'], tags: [], image: null, emoji: '🦐', note: '' },
  { category: 'side',  name: '多力多滋', options: ['40'], tags: [], image: null, emoji: '🌽', note: '' },
  { category: 'side',  name: '半熟蛋',   options: ['40'], tags: [], image: null, emoji: '🥚', note: '' },
  { category: 'side',  name: '鮮炸南瓜', options: ['30'], tags: [], image: null, emoji: '🎃', note: '' },
  { category: 'side',  name: '紫蘿毛豆', options: ['20'], tags: [], image: null, emoji: '🫛', note: '' },

  // ── 單點小食 ────────────────────────────────────────────────────────────
  { category: 'solo',  name: '胡麻雞絲', options: ['80'], tags: [], image: null, emoji: '🥗', note: '' },
  { category: 'solo',  name: '黃金鮮蝦', options: ['60'], tags: [], image: null, emoji: '🦐', note: '' },
  { category: 'solo',  name: '韓式包飯', options: ['60'], tags: [], image: null, emoji: '🍙', note: '' },
  { category: 'solo',  name: '紫蘿毛豆', options: ['30'], tags: [], image: null, emoji: '🫛', note: '' },

  // ── 茶飲類 ──────────────────────────────────────────────────────────────
  { category: 'drink', name: '紅玉紅茶', options: ['120'], tags: [], image: null, emoji: '🫖', note: '在地茶葉,主餐加點折減 NT$30' },
  { category: 'drink', name: '黃金蜜茶', options: ['110'], tags: [], image: null, emoji: '🍯', note: '甘草梅子泡,主餐加點折減 NT$30' },
]
