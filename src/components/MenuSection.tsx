import type { Category, MenuItem } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { MenuCard } from './MenuCard'

interface Props {
  category: Category
  items: MenuItem[]
  onItemClick: (id: string) => void
}

export function MenuSection({ category, items, onItemClick }: Props) {
  const { lang } = useLanguage()

  return (
    <section className="section" id={`sec-${category.id}`}>
      <header className="section-head">
        <h2>{category.name[lang]}</h2>
        <span className="count">{items.length}</span>
      </header>
      {items.map(item => (
        <MenuCard key={item.id} item={item} onClick={() => onItemClick(item.id)} />
      ))}
    </section>
  )
}
