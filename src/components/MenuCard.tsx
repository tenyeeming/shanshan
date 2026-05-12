import type { MenuItem } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { TagBadge } from './TagBadge'
import { ui } from '../data/site-info'

interface Props {
  item: MenuItem
  onClick: () => void
}

export function MenuCard({ item, onClick }: Props) {
  const { lang } = useLanguage()
  const isMulti = item.price.length > 1

  const renderPrice = () => {
    if (isMulti) {
      return item.price.map((p, i) => (
        <div key={i} className="price-option-row">
          <span className="opt-label">{p.label ? p.label[lang] : ''}</span>
          <span className="opt-value">
            {p.value === 'market' ? (
              <span className="price-market">{ui.marketPrice[lang]}</span>
            ) : (
              <><span className="nt">NT$</span>{p.value}</>
            )}
          </span>
        </div>
      ))
    }
    const p = item.price[0]
    if (p.value === 'market') {
      return <span className="price-market">{ui.marketPrice[lang]}</span>
    }
    return (
      <div className={`price-main${p.isAdd ? ' is-add' : ''}`}>
        <span className="nt">NT$</span>{p.value}
      </div>
    )
  }

  return (
    <article className={`card${isMulti ? ' multi' : ''}`} onClick={onClick}>
      <div className={`card-thumb${item.category === 'set' ? ' is-set' : ''}`}>
        {item.image ? (
          <img src={item.image} alt="" loading="lazy" />
        ) : (
          <span aria-hidden="true">{item.emoji || '🍽️'}</span>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-name">{item.names[lang]}</h3>
        {item.tags.length > 0 && (
          <div className="card-tags">
            {item.tags.map(tag => (
              <TagBadge key={tag} code={tag} />
            ))}
          </div>
        )}
      </div>
      <div className="card-price">{renderPrice()}</div>
    </article>
  )
}
