/**
 * site.config.ts
 * ─────────────────────────────────────────────────
 * PER-KUND KONFIGURATIONSFIL — byt ut värdena här
 * för varje ny kund. Rör inte komponenterna.
 * ─────────────────────────────────────────────────
 */

export const siteConfig = {
  company: {
    name:          'Svensson El',
    nameAccent:    'El',            // Del av namnet som färgas med accent
    tagline:       'Din lokala elektriker du kan lita på',
    trade:         'elektriker',    // Visas i hero h1
    founded:       2008,
    location:      'Göteborg',
    certifications: [
      'Behörig installatör',
      'F-skattsedel',
      'ROT-avdrag',
    ],
  },

  contact: {
    phone:     '031-00 00 00',
    phoneHref: 'tel:031000000',
    email:     'info@svenssonel.se',
    emailHref: 'mailto:info@svenssonel.se',
    address:   'Elvägen 12, Göteborg',
    /** Söksträng till inbäddad Google-karta (default: samma som adress) */
    mapQuery:  'Elvägen 12, Göteborg',
    hours:     'Mån–Fre 07:00–17:00 · Jour dygnet runt',
  },

  hero: {
    headlinePrefix:  'Din lokala',
    headlineSuffix:  'du kan lita på',
    subtext:         'Vi löser el-jobb för hem och företag — snabbt, säkert och till rätt pris.',
    subtextHighlight: 'Verksamma i Göteborg med omnejd sedan 2008.',
    ctaPrimary:      'Boka möte',
    ctaSecondary:    'Om oss',
    imageSrc:        '/images/heroimage.jpg',
    imageAlt:        'Hantverkare på byggarbetsplats, vy uppifrån',
  },

  about: {
    headline:  'Lokalt förankrade sedan 16 år',
    body:      'Svensson El startades av Erik Svensson 2008 med en enkel idé: att leverera elarbeten med hantverksstolthet, transparens och personlig service — och att alltid stå bakom jobbet vi gör.',
    imageSrc:  '/images/aboutusimage.jpg',
    imageAlt:  'Två hantverkare arbetar tillsammans',
    ctaLabel:  'Kontakta oss idag',
  },

  stats: [
    { value: '350+', label: 'Nöjda kunder' },
    { value: '16',   label: 'År i branschen' },
    { value: '4.9',  label: 'Google-betyg' },
  ],

  reviews: {
    rating:   4.9,
    count:    94,
    platform: 'Google',
  },

  meta: {
    title:       'Svensson El – Din lokala elektriker i Göteborg',
    description: 'Behörig elinstallatör i Göteborg. Snabbt, säkert och till rätt pris.',
  },
} as const
