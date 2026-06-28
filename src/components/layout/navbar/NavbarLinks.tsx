import type { MouseEvent } from 'react'
import { navLinks } from '../../../config/navigation'
import { useScroll } from '../../../providers/ScrollProvider'

type NavbarLinksProps = {
  onNavigate?: () => void
  className?: string
}

const linkClass = (isActive: boolean) =>
  `font-roboto text-[11px] font-normal uppercase tracking-[0.12em] transition-colors sm:text-xs ${
    isActive ? 'text-brand' : 'text-ink hover:text-brand'
  }`

export function NavbarLinks({ onNavigate, className = '' }: NavbarLinksProps) {
  const { activeNavId, scrollToSection } = useScroll()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    scrollToSection(sectionId)
    onNavigate?.()
  }

  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6 lg:gap-x-8 ${className}`}
    >
      {navLinks.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={(event) => handleClick(event, id)}
            className={linkClass(activeNavId === id)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
