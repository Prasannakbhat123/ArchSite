import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  muted?: boolean
}

export function Section({ id, children, className = '', muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${muted ? 'bg-surface-elevated' : ''} ${className}`}
    >
      {children}
    </section>
  )
}
