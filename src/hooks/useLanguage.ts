import { createContext, useContext } from 'react'
import type { Lang } from '../types/menu'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'zh',
  setLang: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}
