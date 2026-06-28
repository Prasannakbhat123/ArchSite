import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavbarActions } from './NavbarActions'
import { NavbarLinks } from './NavbarLinks'
import { NavbarMobileMenu } from './NavbarMobileMenu'
import { NavbarSocial } from './NavbarSocial'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-navbar">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10 xl:px-14">
        <div className="flex items-center justify-start">
          <button
            type="button"
            className="inline-flex text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-5" strokeWidth={1.75} />
            ) : (
              <Menu className="size-5" strokeWidth={1.75} />
            )}
          </button>
          <div className="hidden lg:block">
            <NavbarSocial />
          </div>
        </div>

        <nav className="hidden lg:flex lg:justify-center" aria-label="Main">
          <NavbarLinks />
        </nav>

        <NavbarActions className="justify-end" />
      </div>

      {open && <NavbarMobileMenu onClose={closeMenu} />}
    </header>
  )
}
