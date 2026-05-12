import type { TagCode, TagDefinition } from '../types/menu'

export const tagDict: Record<TagCode, TagDefinition> = {
  R:   { icon: '⭐',     name: { zh: '本店推薦', en: 'Recommended',      ja: 'おすすめ',      ko: '추천' } },
  '1': { icon: '🌶️',    name: { zh: '小辣',     en: 'Mild',             ja: '少し辛い',      ko: '약간 매운' } },
  '2': { icon: '🌶️🌶️',  name: { zh: '中辣',     en: 'Medium',           ja: '中辛',          ko: '보통 매운' } },
  '3': { icon: '🔥',     name: { zh: '大辣',     en: 'Very Spicy',       ja: '激辛',          ko: '매우 매운' } },
  P:   { icon: '🐷',     name: { zh: '含豬肉',   en: 'Contains Pork',    ja: '豚肉入り',      ko: '돼지고기' } },
  B:   { icon: '🐂',     name: { zh: '含牛肉',   en: 'Contains Beef',    ja: '牛肉入り',      ko: '소고기' } },
  L:   { icon: '🐑',     name: { zh: '含羊肉',   en: 'Contains Lamb',    ja: 'ラム入り',      ko: '양고기' } },
  V:   { icon: '🥬',     name: { zh: '素食',     en: 'Vegetarian',       ja: 'ベジタリアン',  ko: '채식' } },
  V5:  { icon: '🧄',     name: { zh: '五辛素',   en: 'Plant + Allium',   ja: '五葷あり精進',  ko: '오신채 채식' } },
  H:   { icon: '☪️',     name: { zh: '清真認證', en: 'Halal',            ja: 'ハラール',      ko: '할랄' } },
}
