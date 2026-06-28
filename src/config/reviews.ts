export type ReviewCardLayout = {
  top: string
  left: string
  rotate: number
  zIndex: number
}

export type Review = {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
  layout: ReviewCardLayout
  mobileLayout: ReviewCardLayout
}

export const reviewsContent = {
  eyebrow: 'Reviews',
  title: 'Hear From Our Customers',
} as const

export const reviews: Review[] = [
  {
    id: 'alexa',
    name: 'Alexa Smith',
    role: 'CEO Founder',
    quote:
      'Suspendisse sem est, eleifend id vulputate sit amet, rhoncus mollis justo. Cras iaculis justo ac dictum vestibulum. Cras id arcu turpis. Nulla ligula velit, condimentum ut orci eget, semper efficitur odio.',
    avatar: 'https://i.pravatar.cc/120?img=5',
    layout: { top: '8%', left: '0%', rotate: -5, zIndex: 2 },
    mobileLayout: { top: '2%', left: '0%', rotate: -4, zIndex: 2 },
  },
  {
    id: 'devid-center',
    name: 'Devid Matin',
    role: 'CEO Founder',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=11',
    layout: { top: '2%', left: '28%', rotate: 2, zIndex: 5 },
    mobileLayout: { top: '0%', left: '16%', rotate: 2, zIndex: 5 },
  },
  {
    id: 'olivia',
    name: 'Olivia Grant',
    role: 'Creative Lead',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=32',
    layout: { top: '12%', left: '54%', rotate: -3, zIndex: 3 },
    mobileLayout: { top: '6%', left: '34%', rotate: -2, zIndex: 3 },
  },
  {
    id: 'sarah',
    name: 'Sarah Chen',
    role: 'Design Director',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=9',
    layout: { top: '6%', left: '78%', rotate: 4, zIndex: 4 },
    mobileLayout: { top: '4%', left: '48%', rotate: 3, zIndex: 4 },
  },
  {
    id: 'marcus',
    name: 'Marcus Webb',
    role: 'Project Lead',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=12',
    layout: { top: '34%', left: '8%', rotate: 4, zIndex: 6 },
    mobileLayout: { top: '22%', left: '2%', rotate: 3, zIndex: 6 },
  },
  {
    id: 'priya',
    name: 'Priya Nair',
    role: 'Head of Strategy',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=25',
    layout: { top: '28%', left: '38%', rotate: -2, zIndex: 7 },
    mobileLayout: { top: '18%', left: '22%', rotate: -2, zIndex: 7 },
  },
  {
    id: 'devid-right',
    name: 'Devid Matin',
    role: 'CEO Founder',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=15',
    layout: { top: '30%', left: '68%', rotate: -4, zIndex: 1 },
    mobileLayout: { top: '20%', left: '40%', rotate: -3, zIndex: 1 },
  },
  {
    id: 'james',
    name: 'James Cole',
    role: 'Development Director',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=33',
    layout: { top: '52%', left: '2%', rotate: -1, zIndex: 8 },
    mobileLayout: { top: '38%', left: '0%', rotate: -1, zIndex: 8 },
  },
  {
    id: 'elena',
    name: 'Elena Rossi',
    role: 'Operations Head',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=23',
    layout: { top: '48%', left: '48%', rotate: 1, zIndex: 9 },
    mobileLayout: { top: '36%', left: '26%', rotate: 1, zIndex: 9 },
  },
  {
    id: 'noah',
    name: 'Noah Brooks',
    role: 'Client Partner',
    quote:
      'Sed elit curabitur inove magna. Tincidunt turpis venenatis non venenatis quis tempus. Hendrerit amet elit curabitur inove magna.',
    avatar: 'https://i.pravatar.cc/120?img=52',
    layout: { top: '56%', left: '74%', rotate: 3, zIndex: 10 },
    mobileLayout: { top: '40%', left: '44%', rotate: 2, zIndex: 10 },
  },
]
