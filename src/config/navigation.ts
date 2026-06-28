export type NavLink = {
  id: string
  label: string
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'team', label: 'Team' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact Us' },
]

export const defaultActiveNavId = 'home'

export const socialLinks = [
  { id: 'facebook', label: 'Facebook', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'twitter', label: 'Twitter', href: '#' },
] as const

export const NAVBAR_OFFSET = 72
