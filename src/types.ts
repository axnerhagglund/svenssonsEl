export interface Service {
  id: string
  name: string
  description: string
  icon: string // Lucide icon name
}

export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  text: string
  initials: string
}

export interface Stat {
  value: string
  label: string
}

export interface NavLink {
  label: string
  href: string
}
