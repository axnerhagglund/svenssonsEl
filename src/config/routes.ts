/**
 * Central paths for navigation and internal links (multipage + home anchors).
 */
export const routes = {
  home: '/',
  services: '/tjanster',
  about: '/om-oss',
  contactPage: '/kontakt',
  pricing: '/priser',
  faq: '/faq',
  blog: '/blogg',
  team: '/medarbetare',
  privacy: '/integritetspolicy',
  /** Gammal ankare - scroll till kontaktsektionen på startsidan */
  contact: '/#contact',
} as const
