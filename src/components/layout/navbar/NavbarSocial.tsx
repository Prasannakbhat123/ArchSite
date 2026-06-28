import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../icons/social'
import { socialLinks } from '../../../config/navigation'

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
} as const

export function NavbarSocial() {
  return (
    <ul className="flex items-center gap-4 sm:gap-5">
      {socialLinks.map(({ id, label, href }) => {
        const Icon = iconMap[id]
        return (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              className="text-ink transition-colors hover:text-brand"
            >
              <Icon className="size-3.5 sm:size-4" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
