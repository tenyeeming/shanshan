import type { TagCode } from '../types/menu'
import { tagDict } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'

interface Props {
  code: TagCode
  size?: 'sm' | 'md'
}

export function TagBadge({ code, size = 'sm' }: Props) {
  const { lang } = useLanguage()
  const tag = tagDict[code]
  if (!tag) return null

  const cls =
    code === 'R' ? 'badge recommend'
    : /^[123]$/.test(code) ? 'badge spice'
    : /^[PBL]$/.test(code) ? 'badge meat'
    : 'badge'

  const style = size === 'md' ? { fontSize: '11px', padding: '4px 8px' } : undefined

  return (
    <span className={cls} style={style}>
      <span aria-hidden="true">{tag.icon}</span>
      {tag.name[lang]}
    </span>
  )
}
