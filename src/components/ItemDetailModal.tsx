import { useEffect } from 'react'
import type { MenuItem } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { TagBadge } from './TagBadge'
import { ui } from '../data/site-info'

interface Props {
  item: MenuItem | null
  onClose: () => void
}

export function ItemDetailModal({ item, onClose }: Props) {
  const { lang } = useLanguage()
  const isOpen = !!item

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <>
      <div
        className={`modal-backdrop${isOpen ? ' open' : ''}`}
        onClick={onClose}
      />
      <aside
        className={`modal${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="modal-handle" />
        <button className="modal-close" onClick={onClose} aria-label={ui.closeLabel[lang]}>
          ✕
        </button>
        {item && (
          <div className="modal-body">
            <div className="modal-image" style={{ touchAction: 'pinch-zoom' }}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.names[lang]}
                  style={{ touchAction: 'pinch-zoom' }}
                />
              ) : (
                <span aria-hidden="true">{item.emoji || '🍽️'}</span>
              )}
            </div>

            <h2 className="modal-name">{item.names[lang]}</h2>

            {item.tags.length > 0 && (
              <div className="modal-tags">
                {item.tags.map(tag => (
                  <TagBadge key={tag} code={tag} size="md" />
                ))}
              </div>
            )}

            <div className="modal-prices">
              {item.price.map((p, i) => {
                const label = p.label ? p.label[lang] : item.names[lang]
                return (
                  <div key={i} className="price-row">
                    <span className="opt-label">{label}</span>
                    {p.value === 'market' ? (
                      <span className="price-market">{ui.marketPrice[lang]}</span>
                    ) : (
                      <span className={`opt-value${p.isAdd ? ' is-add' : ''}`}>
                        <span className="nt">NT$</span>{p.value}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>

            {item.desc[lang] && (
              <div className="modal-field">
                <div className="modal-field-label">{ui.descLabel[lang]}</div>
                <div className="modal-field-text">{item.desc[lang]}</div>
              </div>
            )}

            {item.note[lang] && (
              <div className="modal-field">
                <div className="modal-field-label">{ui.noteLabel[lang]}</div>
                <div className="modal-field-text">{item.note[lang]}</div>
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  )
}
