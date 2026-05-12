import { useEffect, useRef } from 'react'
import type { Category } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'

interface Props {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (id: string) => void
}

export function CategoryNav({ categories, activeCategory, onCategoryChange }: Props) {
  const { lang } = useLanguage()
  const activeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [activeCategory])

  const handleClick = (id: string) => {
    onCategoryChange(id)
    document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="cat-tabs" aria-label="Category">
      {categories.map(cat => (
        <button
          key={cat.id}
          ref={cat.id === activeCategory ? activeRef : null}
          className="cat-tab"
          aria-current={cat.id === activeCategory ? 'true' : 'false'}
          onClick={() => handleClick(cat.id)}
        >
          {cat.name[lang]}
        </button>
      ))}
    </nav>
  )
}
