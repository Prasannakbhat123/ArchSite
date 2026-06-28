import firstBottom from '../assets/dna/first/bottom.png'
import firstTop from '../assets/dna/first/top.png'
import secondBottom from '../assets/dna/second/bottom.png'
import secondTop from '../assets/dna/second/top.png'
import thirdBottom from '../assets/dna/third/bottom.png'
import thirdTop from '../assets/dna/third/top.png'

export type DnaSetConfig = {
  id: string
  title: string
  description: string
  images: {
    bottom: string
    top: string
    bottomAlt: string
    topAlt: string
  }
  imagePosition: 'left' | 'right'
  overlap: 'top-right' | 'top-left'
}

export const dnaContent = {
  eyebrow: 'Recent Works',
  title: 'Our DNA',
} as const

export const dnaSets: DnaSetConfig[] = [
  {
    id: 'dna-01',
    title: 'Villa Furnishing & Interior',
    description:
      'A luxury villa project where we combined contemporary furnishings with elegant interiors to create a warm, welcoming, and sophisticated living environment.',
    images: {
      bottom: firstBottom,
      top: firstTop,
      bottomAlt: 'Dining room with wooden chairs and natural light',
      topAlt: 'Lounge area with pendant lights and armchairs',
    },
    imagePosition: 'left',
    overlap: 'top-right',
  },
  {
    id: 'dna-02',
    title: 'Apartments & Decor',
    description:
      'A luxury villa project where we combined contemporary furnishings with elegant interiors to create a warm, welcoming, and sophisticated living environment.',
    images: {
      bottom: secondBottom,
      top: secondTop,
      bottomAlt: 'Modern living room with neutral sofa',
      topAlt: 'Minimal interior detail with chair and vase',
    },
    imagePosition: 'right',
    overlap: 'top-right',
  },
  {
    id: 'dna-03',
    title: 'Villa Furnishing & Interior',
    description:
      'A luxury villa project where we combined contemporary furnishings with elegant interiors to create a warm, welcoming, and sophisticated living environment.',
    images: {
      bottom: thirdBottom,
      top: thirdTop,
      bottomAlt: 'Double-height living room with large windows',
      topAlt: 'Kitchen and dining interior detail',
    },
    imagePosition: 'left',
    overlap: 'top-left',
  },
]
