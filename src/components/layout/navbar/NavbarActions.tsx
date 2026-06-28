import { Mail, Search } from 'lucide-react'
import { site } from '../../../config/site'

type NavbarActionsProps = {
  className?: string
}

export function NavbarActions({ className = '' }: NavbarActionsProps) {
  return (
    <div className={`flex items-center gap-4 sm:gap-5 ${className}`}>
      <button
        type="button"
        aria-label="Search"
        className="text-ink transition-colors hover:text-brand"
      >
        <Search className="size-3.5 sm:size-4" strokeWidth={1.75} />
      </button>
      <a
        href={`mailto:${site.email}`}
        aria-label="Email"
        className="text-ink transition-colors hover:text-brand"
      >
        <Mail className="size-3.5 sm:size-4" strokeWidth={1.75} />
      </a>
    </div>
  )
}
