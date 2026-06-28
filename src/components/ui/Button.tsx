import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'ghost' | 'muted'
  icon?: LucideIcon
  className?: string
}

const variants = {
  primary:
    'bg-gold-500 text-ink hover:bg-gold-400 border border-gold-600/20',
  outline:
    'border border-sand-600 text-ink hover:bg-sand-200 bg-transparent',
  ghost: 'text-ink-muted hover:text-ink hover:bg-sand-200/60',
  muted:
    'border-0 bg-[#D6D6D6] text-ink hover:bg-[#c8c8c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/30',
}

export function Button({
  children,
  href,
  variant = 'primary',
  icon: Icon,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon className="size-4" strokeWidth={1.5} />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  )
}
