export const heroContent = {
  headline: 'We Create Your Dreams',
  description:
    'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
  ctaLabel: 'Read More',
  ctaHref: '#about',
} as const

/** Outline canvas is the alignment master (2634×1962). Color is nudged if layers still drift. */
export const heroSpotlight = {
  radius: 80,
  masterWidth: 2634,
  masterHeight: 1962,
  /** Extra nudge on top of auto-alignment (negative x = move left) */
  colorOffset: { x: -15, y: 0 },
} as const
