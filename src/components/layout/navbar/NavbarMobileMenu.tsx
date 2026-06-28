import { Mail, Search } from 'lucide-react'
import type { MouseEvent } from 'react'
import { navLinks } from '../../../config/navigation'
import { useScroll } from '../../../providers/ScrollProvider'
import { site } from '../../../config/site'
import { NavbarSocial } from './NavbarSocial'

type NavbarMobileMenuProps = {
  onClose: () => void
}

const linkClass = (isActive: boolean) =>
  `block font-roboto text-sm uppercase tracking-[0.12em] ${
    isActive ? 'text-brand' : 'text-ink hover:text-brand'
  }`

export function NavbarMobileMenu({ onClose }: NavbarMobileMenuProps) {
  const { activeNavId, scrollToSection } = useScroll()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    scrollToSection(sectionId)
    onClose()
  }

  return (
    <div className="border-t border-border bg-navbar lg:hidden">
      <nav className="px-6 py-6" aria-label="Mobile">
        <ul className="flex flex-col gap-4">
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

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <NavbarSocial />
          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Search"
              className="text-ink transition-colors hover:text-brand"
            >
              <Search className="size-4" strokeWidth={1.75} />
            </button>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-ink transition-colors hover:text-brand"
            >
              <Mail className="size-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
