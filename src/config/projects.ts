export type Project = {
  id: string
  title: string
  category: string
  year: string
  description: string
}

export const featuredProjects: Project[] = [
  {
    id: 'meridian-house',
    title: 'Meridian House',
    category: 'Residential',
    year: '2025',
    description:
      'A courtyard home shaped by light wells and raw concrete, opening to a private garden terrace.',
  },
  {
    id: 'north-pavilion',
    title: 'North Pavilion',
    category: 'Cultural',
    year: '2024',
    description:
      'A gallery pavilion with layered timber screens that filter daylight across exhibition halls.',
  },
  {
    id: 'harbor-loft',
    title: 'Harbor Loft',
    category: 'Interior',
    year: '2024',
    description:
      'Adaptive reuse of a waterfront warehouse into open-plan living with preserved steel structure.',
  },
]
