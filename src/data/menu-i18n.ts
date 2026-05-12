import type { Category, MenuItem } from '../types/menu'

export const categories: Category[] = [
  { id: 'set',   name: { zh: '套餐類',   en: 'Set Meals',    ja: 'セットメニュー', ko: '세트 메뉴' } },
  { id: 'extra', name: { zh: '加料',     en: 'Toppings',     ja: 'トッピング',     ko: '추가 토핑' } },
  { id: 'side',  name: { zh: '配菜加購', en: 'Side Add-ons', ja: 'サイド追加',     ko: '사이드 추가' } },
  { id: 'solo',  name: { zh: '單點小食', en: 'À la carte',   ja: '単品料理',       ko: '단품 요리' } },
  { id: 'drink', name: { zh: '茶飲類',   en: 'Tea',          ja: 'お茶',           ko: '차' } },
]

export const menuItems: MenuItem[] = [
  // ── set ──────────────────────────────────────────────────────────────────
  {
    id: 'set-001', category: 'set',
    names: { zh: '山上祕滷牛腱套餐', en: 'Mountain Braised Beef Shank Set', ja: '山上特製煮込み牛すねセット', ko: '산상 특제 소힘줄 세트' },
    price: [{ label: null, value: 295, isAdd: false }],
    image: null, emoji: '🥩', tags: ['R', 'B'],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '胡麻雞絲、滷牛腱心、紫蘿毛豆、鮮炸南瓜、佐洋蔥圈、黃金鮮蝦、山上甜點',
      en: 'Sesame chicken, braised beef shank, edamame, fried pumpkin, onion rings, golden shrimp, dessert',
      ja: '胡麻チキン・煮込み牛すね・枝豆・かぼちゃ揚げ・オニオンリング・海老・デザート',
      ko: '참깨 치킨, 소힘줄 조림, 에다마메, 호박 튀김, 양파링, 새우, 디저트',
    },
  },
  {
    id: 'set-002', category: 'set',
    names: { zh: '黃金炸豬排咖哩定食', en: 'Golden Tonkatsu Curry Set', ja: '黄金トンカツカレーセット', ko: '황금 돈가스 카레 세트' },
    price: [{ label: null, value: 325, isAdd: false }],
    image: null, emoji: '🍛', tags: ['P'],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '原始咖哩配菜 + 整片黃金鮮炸豬排',
      en: 'Classic curry sides + whole golden pork cutlet',
      ja: 'オリジナルカレー副菜 + 黄金トンカツ一枚',
      ko: '클래식 카레 사이드 + 황금 돈가스 한 장',
    },
  },
  {
    id: 'set-003', category: 'set',
    names: { zh: '招牌唐揚雞咖哩定食', en: 'Signature Karaage Curry Set', ja: '看板唐揚げカレーセット', ko: '대표 가라아게 카레 세트' },
    price: [{ label: null, value: 345, isAdd: false }],
    image: null, emoji: '🍗', tags: ['R'],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '原始咖哩配菜 + 秘製鮮嫩雞腿丁',
      en: 'Classic curry sides + signature juicy karaage',
      ja: 'オリジナルカレー副菜 + 秘伝ジューシー唐揚げ',
      ko: '클래식 카레 사이드 + 비법 부드러운 가라아게',
    },
  },
  {
    id: 'set-004', category: 'set',
    names: { zh: '極★厚切豬排咖哩定食', en: 'Premium Thick-cut Pork Curry', ja: '極★厚切りポークカレー', ko: '프리미엄 두꺼운 돈가스 카레' },
    price: [{ label: null, value: 360, isAdd: false }],
    image: null, emoji: '🥩', tags: ['R', 'P'],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '原始咖哩配菜 + 整片厚切外脊里肌',
      en: 'Classic curry sides + whole thick-cut pork loin',
      ja: 'オリジナルカレー副菜 + 厚切りポークロイン一枚',
      ko: '클래식 카레 사이드 + 두꺼운 등심 한 장',
    },
  },
  {
    id: 'set-005', category: 'set',
    names: { zh: '豬雞雙拼咖哩定食', en: 'Pork & Chicken Duo Curry Set', ja: 'ポーク&チキンWカレーセット', ko: '돼지&치킨 듀오 카레 세트' },
    price: [{ label: null, value: 375, isAdd: false }],
    image: null, emoji: '🍱', tags: ['P'],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '原始咖哩配菜 + 唐揚雞 + 黃金炸豬排',
      en: 'Classic sides + karaage chicken + golden pork cutlet',
      ja: 'オリジナル副菜 + 唐揚げ + 黄金トンカツ',
      ko: '클래식 사이드 + 가라아게 + 황금 돈가스',
    },
  },
  {
    id: 'set-006', category: 'set',
    names: { zh: '炸蝦天婦羅咖哩定食', en: 'Shrimp Tempura Curry Set', ja: '海老天ぷらカレーセット', ko: '새우 튀김 카레 세트' },
    price: [{ label: null, value: 390, isAdd: false }],
    image: null, emoji: '🍤', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '原始咖哩配菜 + 兩條黃金粉黃金炸白蝦',
      en: 'Classic sides + two golden-battered tempura shrimp',
      ja: 'オリジナル副菜 + 黄金衣の海老天 2 本',
      ko: '클래식 사이드 + 황금 튀김옷 새우 2마리',
    },
  },

  // ── extra ─────────────────────────────────────────────────────────────────
  {
    id: 'extra-001', category: 'extra',
    names: { zh: '北海道豬油漬鮭魚卵', en: 'Hokkaido Marinated Salmon Roe', ja: '北海道いくら醤油漬け', ko: '홋카이도 절임 연어알' },
    price: [{ label: null, value: 45, isAdd: true }],
    image: null, emoji: '🍣', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '咖哩定食限定加價',
      en: 'Available only with curry set',
      ja: 'カレーセット限定追加',
      ko: '카레 세트 한정 추가',
    },
  },
  {
    id: 'extra-002', category: 'extra',
    names: { zh: '炙燒起司', en: 'Torched Cheese', ja: '炙りチーズ', ko: '토치 치즈' },
    price: [{ label: null, value: 15, isAdd: true }],
    image: null, emoji: '🧀', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '咖哩定食限定加價',
      en: 'Available only with curry set',
      ja: 'カレーセット限定追加',
      ko: '카레 세트 한정 추가',
    },
  },

  // ── side ──────────────────────────────────────────────────────────────────
  {
    id: 'side-001', category: 'side',
    names: { zh: '胡麻雞', en: 'Sesame Chicken', ja: '胡麻チキン', ko: '참깨 치킨' },
    price: [{ label: null, value: 50, isAdd: false }],
    image: null, emoji: '🍗', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'side-002', category: 'side',
    names: { zh: '黃金鮮蝦', en: 'Golden Shrimp', ja: 'ゴールデン海老', ko: '황금 새우' },
    price: [{ label: null, value: 35, isAdd: false }],
    image: null, emoji: '🦐', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'side-003', category: 'side',
    names: { zh: '多力多滋', en: 'Doritos', ja: 'ドリトス', ko: '도리토스' },
    price: [{ label: null, value: 40, isAdd: false }],
    image: null, emoji: '🌽', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'side-004', category: 'side',
    names: { zh: '半熟蛋', en: 'Soft-boiled Egg', ja: '半熟卵', ko: '반숙 계란' },
    price: [{ label: null, value: 40, isAdd: false }],
    image: null, emoji: '🥚', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'side-005', category: 'side',
    names: { zh: '鮮炸南瓜', en: 'Fried Pumpkin', ja: '揚げかぼちゃ', ko: '호박 튀김' },
    price: [{ label: null, value: 30, isAdd: false }],
    image: null, emoji: '🎃', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'side-006', category: 'side',
    names: { zh: '紫蘿毛豆', en: 'Edamame', ja: '枝豆', ko: '에다마메' },
    price: [{ label: null, value: 20, isAdd: false }],
    image: null, emoji: '🫛', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },

  // ── solo ──────────────────────────────────────────────────────────────────
  {
    id: 'solo-001', category: 'solo',
    names: { zh: '胡麻雞絲', en: 'Shredded Sesame Chicken', ja: '胡麻チキンほぐし', ko: '참깨 치킨채' },
    price: [{ label: null, value: 80, isAdd: false }],
    image: null, emoji: '🥗', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'solo-002', category: 'solo',
    names: { zh: '黃金鮮蝦', en: 'Golden Shrimp', ja: 'ゴールデン海老', ko: '황금 새우' },
    price: [{ label: null, value: 60, isAdd: false }],
    image: null, emoji: '🦐', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'solo-003', category: 'solo',
    names: { zh: '韓式包飯', en: 'Korean Rice Wrap', ja: '韓国風包みご飯', ko: '한국식 쌈밥' },
    price: [{ label: null, value: 60, isAdd: false }],
    image: null, emoji: '🍙', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'solo-004', category: 'solo',
    names: { zh: '紫蘿毛豆', en: 'Edamame', ja: '枝豆', ko: '에다마메' },
    price: [{ label: null, value: 30, isAdd: false }],
    image: null, emoji: '🫛', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },

  // ── drink ─────────────────────────────────────────────────────────────────
  {
    id: 'drink-001', category: 'drink',
    names: { zh: '紅玉紅茶', en: 'Ruby Black Tea', ja: 'ルビー紅茶', ko: '루비 홍차' },
    price: [{ label: null, value: 120, isAdd: false }],
    image: null, emoji: '🫖', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '在地茶葉,主餐加點折減 NT$30',
      en: 'Local tea · NT$30 off when added to a main',
      ja: '地元産茶葉・メイン追加時 NT$30 引き',
      ko: '현지 찻잎 · 메인 추가 시 NT$30 할인',
    },
  },
  {
    id: 'drink-002', category: 'drink',
    names: { zh: '黃金蜜茶', en: 'Golden Honey Tea', ja: 'ゴールデン蜂蜜茶', ko: '황금 꿀차' },
    price: [{ label: null, value: 110, isAdd: false }],
    image: null, emoji: '🍯', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: {
      zh: '甘草梅子泡,主餐加點折減 NT$30',
      en: 'Licorice plum infusion · NT$30 off when added to a main',
      ja: '甘草梅子漬け・メイン追加時 NT$30 引き',
      ko: '감초 매실 우림 · 메인 추가 시 NT$30 할인',
    },
  },
]
