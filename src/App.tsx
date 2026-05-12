import { useState, useEffect, useCallback } from 'react'
import { LanguageContext } from './hooks/useLanguage'
import type { Lang } from './types/menu'
import { Header } from './components/Header'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { CategoryNav } from './components/CategoryNav'
import { MenuSection } from './components/MenuSection'
import { ItemDetailModal } from './components/ItemDetailModal'
import { menuItems, categories } from './data/menu-i18n'
import { store, ui } from './data/site-info'

const DOC_LANG_MAP: Record<Lang, string> = {
  zh: 'zh-Hant',
  en: 'en',
  ja: 'ja',
  ko: 'ko',
}

export default function App() {
  const [lang, setLangState] = useState<Lang>('zh')
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '')
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    document.documentElement.lang = DOC_LANG_MAP[newLang]
    document.body.dataset.lang = newLang
  }, [])

  useEffect(() => {
    document.documentElement.lang = DOC_LANG_MAP[lang]
    document.body.dataset.lang = lang
  }, [lang])

  // Scroll spy: highlight the category tab for the section in view
  useEffect(() => {
    const usedCats = new Set(menuItems.map(i => i.category))
    const visibleCats = categories.filter(c => usedCats.has(c.id))
    const sections = visibleCats
      .map(c => document.getElementById(`sec-${c.id}`))
      .filter((el): el is HTMLElement => el !== null)

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.intersectionRatio > 0.2) {
            setActiveCategory(e.target.id.replace('sec-', ''))
          }
        })
      },
      { rootMargin: '-120px 0px -50% 0px', threshold: [0, 0.3, 0.6] },
    )

    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const usedCats = new Set(menuItems.map(i => i.category))
  const visibleCategories = categories.filter(c => usedCats.has(c.id))
  const selectedItem = selectedItemId
    ? (menuItems.find(i => i.id === selectedItemId) ?? null)
    : null

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="app">
        <Header />

        <div className="sticky">
          <LanguageSwitcher />
          <CategoryNav
            categories={visibleCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <main id="menu">
          {visibleCategories.map(cat => (
            <MenuSection
              key={cat.id}
              category={cat}
              items={menuItems.filter(i => i.category === cat.id)}
              onItemClick={setSelectedItemId}
            />
          ))}
        </main>

        <footer className="footer">
          <div>{ui.brandNote[lang]}</div>
          <div className="ig">IG · {store.ig}</div>
        </footer>
      </div>

      <ItemDetailModal item={selectedItem} onClose={() => setSelectedItemId(null)} />
    </LanguageContext.Provider>
  )
}
