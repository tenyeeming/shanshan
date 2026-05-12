import { useLanguage } from '../hooks/useLanguage'
import type { Lang } from '../types/menu'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'zh', label: '繁中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-bar" role="tablist" aria-label="Language">
      {LANGS.map(l => (
        <button
          key={l.code}
          className="lang-btn"
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
