import type { StoreInfo, UiStrings } from '../types/menu'

export const store: StoreInfo = {
  names: {
    zh: '山上山下',
    en: 'Shan Shang Shan Xia',
    ja: '山上山下',
    ko: '산상산하',
  },
  taglines: {
    zh: '濃濃咖哩飯',
    en: 'Rich Curry Rice',
    ja: '濃厚カレーライス',
    ko: '진한 카레라이스',
  },
  address: {
    zh: '台北市大安區師大路 99 巷 3 號',
    en: "No. 3, Lane 99, Shida Rd., Da'an Dist., Taipei City",
    ja: '台北市大安区師大路99巷3号',
    ko: '타이베이시 다안구 스다로 99항 3호',
  },
  phone: '(02) 2363-3535',
  ig: '3S3S.TW',
  diningInfo: {
    zh: ['不限時', '不接受訂位', '每人基本消費一份主餐', '全店消費滿 NT$150'],
    en: ['No time limit', 'No reservations', 'Min. one main per person', 'Min. order NT$150'],
    ja: ['時間制限なし', '予約不可', 'お一人様メイン一品以上', '最低注文 NT$150'],
    ko: ['시간 제한 없음', '예약 불가', '1인 메인 1개 이상', '최소 주문 NT$150'],
  },
}

export const ui: UiStrings = {
  marketPrice:  { zh: '時價',     en: 'Market Price', ja: '時価',       ko: '시가' },
  langLabel:    { zh: '繁中',     en: 'EN',           ja: '日本語',     ko: '한국어' },
  addressLabel: { zh: '地址',     en: 'Address',      ja: '住所',       ko: '주소' },
  phoneLabel:   { zh: '電話',     en: 'Tel',          ja: '電話',       ko: '전화' },
  diningLabel:  { zh: '用餐須知', en: 'Dining Info',  ja: 'ご利用案内', ko: '이용 안내' },
  closeLabel:   { zh: '關閉',     en: 'Close',        ja: '閉じる',     ko: '닫기' },
  noteLabel:    { zh: '備註',     en: 'Note',         ja: '備考',       ko: '비고' },
  descLabel:    { zh: '說明',     en: 'Description',  ja: '説明',       ko: '설명' },
  brandNote: {
    zh: '嚴選辛香料・無大火快炒・在憤火嬡鬆腦',
    en: 'Hand-picked spices · No high-heat stir-fry · Slow-cooked with love',
    ja: '厳選スパイス・強火炒めなし・じっくり煮込み',
    ko: '엄선한 향신료 · 강불 볶음 없음 · 정성껏 끓인 맛',
  },
}
