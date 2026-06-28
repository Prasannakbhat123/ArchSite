import img1a from '../assets/projects/1a.png'
import img1b from '../assets/projects/1b.png'
import img2a from '../assets/projects/2a.png'
import img2b from '../assets/projects/2b.png'
import img3a from '../assets/projects/3a.png'
import img3b from '../assets/projects/3b.png'

export type ShowcaseProject = {
  id: string
  number: string
  title: string
  description: string
  images: {
    front: string
    back: string
  }
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'A Residence',
    description:
      'A calm domestic interior shaped by natural light, muted palettes, and carefully composed furniture. The project balances openness with intimate gathering spaces across the main living level.',
    images: { front: img1a, back: img1b },
  },
  {
    id: 'project-02',
    number: '02',
    title: 'Gallery Pavilion',
    description:
      'A cultural pavilion with layered screens and generous circulation, designed to frame art and movement. Timber and stone establish a quiet material rhythm throughout the public rooms.',
    images: { front: img2a, back: img2b },
  },
  {
    id: 'project-03',
    number: '03',
    title: 'Harbor Loft',
    description:
      'Adaptive reuse of a waterfront structure into open-plan living, preserving industrial character while introducing warm, residential finishes and carefully placed openings to the harbor view.',
    images: { front: img3a, back: img3b },
  },
]

export const projectsIntro =
  'Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus eleifend ultricies lorem quisque eget sed lectus'
