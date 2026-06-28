import portfolioImage from '../assets/portfolio/bottom.png'
import valuationImage from '../assets/portfolio/top.png'

export const valuationContent = {
  title: 'Wondering what your property is worth ?',
  description:
    'Amet eu facilisi risus nec penatibus purus ornare habitasse ipsum. Elit venenatis mi ornare lectus porttitor sed vulputate tortor.',
  primaryCta: 'Book a Valuation',
  secondaryCta: 'Learn More',
  image: valuationImage,
  imageAlt: 'Modern curved building overlooking the ocean at dusk',
} as const

export const portfolioIntroContent = {
  title: 'Portfolio by Arch',
  description:
    'Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus',
  ctaLabel: 'Explore Portfolio by Arch',
  ctaHref: '#projects',
  image: portfolioImage,
  imageAlt: 'Minimalist interior with wooden chair and sheer curtains',
} as const
