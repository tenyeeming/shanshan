import { useLanguage } from '../hooks/useLanguage'
import { store, ui } from '../data/site-info'

export function Header() {
  const { lang } = useLanguage()

  return (
    <header className="hero">
      <div className="hero-inner">
        <svg className="hero-logo" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="56" fill="none" stroke="#1E1A17" strokeWidth="2" />
          <circle cx="60" cy="60" r="52" fill="none" stroke="#1E1A17" strokeWidth="0.6" strokeDasharray="2 3" />
          <path d="M 16 84 L 44 42 L 64 70 L 80 50 L 104 84 Z" fill="#1E1A17" />
          <path d="M 28 88 L 56 50 L 76 78 L 92 60 L 108 88 Z" fill="#C8362A" opacity="0.92" />
          <path d="M 50 58 L 56 50 L 62 58 L 58 60 L 56 56 L 54 60 Z" fill="#F5EBD6" />
          <circle cx="86" cy="36" r="6" fill="#F5EBD6" stroke="#1E1A17" strokeWidth="1.2" />
          <line x1="16" y1="88" x2="104" y2="88" stroke="#1E1A17" strokeWidth="1.5" />
        </svg>

        <h1 className="hero-title">{store.names[lang]}</h1>
        <p className="hero-tagline">{store.taglines[lang]}</p>

        <dl className="hero-meta">
          <dt>{ui.addressLabel[lang]}</dt>
          <dd>{store.address[lang]}</dd>
          <dt>{ui.phoneLabel[lang]}</dt>
          <dd>
            <a href="tel:+886223633535">{store.phone}</a>
          </dd>
        </dl>

        <div className="hero-dining">
          <div className="hero-dining-title">{ui.diningLabel[lang]}</div>
          <ul>
            {store.diningInfo[lang].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="hero-brandnote">{ui.brandNote[lang]}</p>
      </div>
    </header>
  )
}
