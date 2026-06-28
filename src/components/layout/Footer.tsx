import { Globe, Mail, Share2 } from 'lucide-react'
import type { MouseEvent } from 'react'
import { navLinks } from '../../config/navigation'
import { site } from '../../config/site'
import { useScroll } from '../../providers/ScrollProvider'
import { Container } from '../ui'

const social = [
  { label: 'Email', href: `mailto:${site.email}`, icon: Mail },
  { label: 'Website', href: '#', icon: Globe },
  { label: 'Social', href: '#', icon: Share2 },
] as const

export function Footer() {
  const { scrollToSection } = useScroll()

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <footer className="border-t border-border bg-sand-200/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-playfair text-2xl text-ink">{site.name}</p>
            <p className="mt-3 max-w-xs font-cormorant text-lg text-ink-muted">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="mb-4 font-roboto text-xs uppercase tracking-[0.2em] text-gold-700">
              Explore
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => handleNavClick(event, link.id)}
                    className="font-roboto text-sm text-ink-muted hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-roboto text-xs uppercase tracking-[0.2em] text-gold-700">
              Studio
            </p>
            <p className="font-roboto text-sm leading-relaxed text-ink-muted">
              {site.address}
              <br />
              {site.phone}
              <br />
              {site.email}
            </p>
            <div className="mt-5 flex gap-4">
              {social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-ink-muted transition-colors hover:text-gold-700"
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 font-roboto text-xs text-ink-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
