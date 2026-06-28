import type { CSSProperties, ReactNode } from 'react'
import bgPattern from '../../assets/about/bgpattern.png'

type AboutPanelProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const panelPatternStyle: CSSProperties = {
  backgroundImage: `url(${bgPattern})`,
  backgroundRepeat: 'repeat',
}

export function AboutPanel({ children, className = '', style }: AboutPanelProps) {
  return (
    <div className={`bg-about-panel ${className}`} style={{ ...panelPatternStyle, ...style }}>
      {children}
    </div>
  )
}
