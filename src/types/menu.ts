export type Lang = 'zh' | 'en' | 'ja' | 'ko'

export type I18nString = Record<Lang, string>

export type TagCode = 'R' | '1' | '2' | '3' | 'P' | 'B' | 'L' | 'V' | 'V5' | 'H'

export interface PriceOption {
  label: I18nString | null
  value: number | 'market'
  isAdd: boolean
}

export interface MenuItem {
  id: string
  category: string
  names: I18nString
  price: PriceOption[]
  image: string | null
  emoji: string
  tags: TagCode[]
  desc: I18nString
  note: I18nString
}

export interface Category {
  id: string
  name: I18nString
}

export interface TagDefinition {
  icon: string
  name: I18nString
}

export interface StoreInfo {
  names: I18nString
  taglines: I18nString
  address: I18nString
  phone: string
  ig: string
  diningInfo: Record<Lang, string[]>
}

export interface UiStrings {
  marketPrice: I18nString
  langLabel: I18nString
  addressLabel: I18nString
  phoneLabel: I18nString
  diningLabel: I18nString
  closeLabel: I18nString
  noteLabel: I18nString
  descLabel: I18nString
  brandNote: I18nString
}
