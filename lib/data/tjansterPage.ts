import { services } from '@/lib/data/services'

export const tjansterIntro = {
  /** Kort, tydlig rubrik i hero (undvik lång ingress i h1) */
  heroTitle: 'Elen klar. Tryggt. I tid.',
  /** 1–2 meningar under rubriken */
  heroSub:
    'Från köksrenovering till lokal och laddbox — vi tar ansvar från plan till färdig anläggning i Göteborg. Här ser du hur vi jobbar; listan med alla tjänster finns också på startsidan, med mer djup här.',
  /** Tre punkter, visas i egen sektion under hero */
  highlights: [
    {
      title: 'Elsäkerhet först',
      text: 'Rätt dimensionering, tydlig dokumentation och genomförande enligt gällande föreskrifter.',
    },
    {
      title: 'Brett underlag',
      text: 'Bostäder, kontor, butiker och brf — vi vet vilken lösning som bär utan genvägar.',
    },
    {
      title: 'Tydlig affär',
      text: 'Offert du förstår, tidsplan som håller och uppföljning tills allt är klart och anmält.',
    },
  ] as const,
} as const

export const tjansterProcess = [
  {
    step: '01',
    title: 'Kartläggning',
    text: 'Du beskriver plats, problem eller projekt. Vi svarar med frågor som gör att vi får samma bild som du av jobbet.',
  },
  {
    step: '02',
    title: 'Befintlig el & uppläggning',
    text: 'När det behövs bokar vi in kontroll av centraler, zoner och utrustning, så att vi inte får obehagliga överraskningar halvvägs.',
  },
  {
    step: '03',
    title: 'Offert & genomförande',
    text: 'Du får tydligt besked i pris, tidplan och entreprenad. Därefter bokar vi in laget och håller dig uppdaterad tills allt är klart och anmält.',
  },
] as const

/** Utökade rader i listan, kopplas till samma tjänster som på startsidan */
export const tjansterServiceDetail: Record<string, string> = {
  installation:
    'Vi bygger nya förläggningar, uppgraderar huvudsäkringar och ser till att uttag och belysning fördelas logiskt i hela bostaden eller lokalen.',
  renovation:
    'Renoverar du våtrum, kök eller en hel bostad synkar vi el med bygg, VVS och besiktningskrav så att slutintygen blir raka.',
  lighting:
    'Från dimmers och scenbelysning till energisnål belysning ute. Vi tänker både trygg trivsel och låg driftkostnad.',
  'ev-charging':
    'Vi är vana vid marknadens laddboxar, undercentraler och hur man dimensionerar för framtida last i brf och villa.',
  emergency:
    'Jour där det brådskar: ström borta, huvudsäkringen löser, eller fält som känns varma. Ring alltid omgående vid rök eller brand.',
  commercial:
    'För företag erbjuder vi planerat underhåll, belysnings- och föreningsjusteringar, samt avtal där resurs är reserverad när det behövs.',
}

export { services as tjansterKatalog }
