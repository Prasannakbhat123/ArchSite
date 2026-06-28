export const searchContent = {
  title: 'Spaces That Inspire Living',
  serviceLabel: 'Architecture & Design',
  modes: ['Buy', 'Rent'] as const,
  placeholder: 'Search by location, postcode or development name...',
  regionLabel: 'Select Region',
  searchCta: 'Search',
  filters: [
    { id: 'price', label: 'All prices' },
    { id: 'type', label: 'All property types' },
    { id: 'beds', label: 'All bedrooms' },
  ],
} as const
