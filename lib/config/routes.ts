/**
 * Central paths for navigation and internal links (multipage + home anchors).
 */
export const routes = {
  home: '/',
  services: '/tjanster',
  about: '/om-oss',
  /** Kontaktsida */
  contactPage: '/kontakt',
  /** Gammal ankare – scroll till kontaktsektionen på startsidan */
  contact: '/#contact',
} as const
