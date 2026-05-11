// -----------------------------------------------
// Alla kundspecifika STATISKA värden samlas här.
// Ändra endast den här filen när du sätter upp en ny kund.
// -----------------------------------------------
// OBS - Tailwind v4:
// Färgerna nedan speglas i src/styles/globals.css under @theme {}.
// Håll dem synkroniserade manuellt om du byter färger.
// -----------------------------------------------

export const client = {
  name: 'Svensson El',
  tagline: 'Din lokala elektriker du kan lita på',
  logo: '/assets/logo.svg',
  favicon: '/assets/favicon.ico',

  colors: {
    primary: '#C9941A',
    secondary: '#E0A820',
    background: '#F5F2EC',
    text: '#1B2A3B',
  },

  contact: {
    phone: '031-00 00 00',
    email: 'info@svenssonel.se',
    address: 'Elvägen 12, Göteborg',
    orgNumber: '556000-0000',
  },

  hours: [
    { day: 'Måndag-Fredag', time: '07:00-17:00' },
    { day: 'Jour', time: 'Dygnet runt' },
    { day: 'Lördag-Söndag', time: 'Efter överenskommelse' },
  ],

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  seo: {
    title: 'Svensson El - Din lokala elektriker i Göteborg',
    description: 'Behörig elinstallatör i Göteborg. Snabbt, säkert och till rätt pris.',
    keywords: ['elektriker', 'elinstallation', 'Göteborg'] as string[],
  },

  sanity: {
    projectId: '',
    dataset: 'production',
  },

  addons: {
    chatbot: {
      enabled: false,
      provider: 'tidio' as 'tidio' | 'intercom' | 'claude',
      snippetId: '',
    },
    ecommerce: {
      enabled: false,
      stripePublicKey: '',
    },
  },
} as const

export type ClientConfig = typeof client

export const siteConfig = {
  company: {
    name: client.name,
    nameAccent: 'El',
    tagline: client.tagline,
    trade: 'elektriker',
    founded: 2008,
    location: 'Göteborg',
    certifications: ['Behörig installatör', 'F-skattsedel', 'ROT-avdrag'],
  },
  contact: {
    phone: client.contact.phone,
    phoneHref: 'tel:031000000',
    email: client.contact.email,
    emailHref: `mailto:${client.contact.email}`,
    address: client.contact.address,
    mapQuery: client.contact.address,
    hours: 'Mån-Fre 07:00-17:00 · Jour dygnet runt',
  },
  hero: {
    headlinePrefix: 'Din lokala',
    headlineSuffix: 'du kan lita på',
    subtext: 'Vi löser el-jobb för hem och företag - snabbt, säkert och till rätt pris.',
    subtextHighlight: 'Verksamma i Göteborg med omnejd sedan 2008.',
    ctaPrimary: 'Boka möte',
    ctaSecondary: 'Om oss',
    imageSrc: '/images/heroimage.jpg',
    imageAlt: 'Hantverkare på byggarbetsplats, vy uppifrån',
  },
  about: {
    headline: 'Lokalt förankrade sedan 16 år',
    body: 'Svensson El startades av Erik Svensson 2008 med en enkel idé: att leverera elarbeten med hantverksstolthet, transparens och personlig service - och att alltid stå bakom jobbet vi gör.',
    imageSrc: '/images/aboutusimage.jpg',
    imageAlt: 'Två hantverkare arbetar tillsammans',
    ctaLabel: 'Kontakta oss idag',
  },
  stats: [
    { value: '350+', label: 'Nöjda kunder' },
    { value: '16', label: 'År i branschen' },
    { value: '4.9', label: 'Google-betyg' },
  ],
  reviews: {
    rating: 4.9,
    count: 94,
    platform: 'Google',
  },
  meta: {
    title: client.seo.title,
    description: client.seo.description,
  },
} as const
