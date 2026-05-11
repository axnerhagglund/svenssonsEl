export interface SanityPost {
  _id: string
  _type: 'post'
  title: string
  slug: { current: string }
  excerpt: string
  content: string
  publishedAt: string
  category: string
  readTime: string
  author: { name: string; title: string }
}

export interface SanityTeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  title: string
  specialties: string[]
  bio: string
  personal: string
  email: string
  phone: string
  initials: string
  accentColor: string
  order: number
}

export interface SanityService {
  _id: string
  _type: 'service'
  title: string
  icon: string
  shortDesc: string
  whatItMeans: string
  whenYouNeedIt: string
  howWeHelp: string
  price: string
  color: 'orange' | 'yellow'
  order: number
}

export interface SanityFaqItem {
  _id: string
  _type: 'faqItem'
  question: string
  answer: string
  category: 'skilsmassa' | 'vardnad' | 'ekonomi' | 'process' | 'kostnader'
  order: number
}

export interface SanityPricingPackage {
  _id: string
  _type: 'pricingPackage'
  title: string
  subtitle: string
  price: string
  priceNote: string
  included: string[]
  highlight: boolean
  order: number
}
