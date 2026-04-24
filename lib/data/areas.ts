export interface ServiceArea {
  name: string
  primary?: boolean // Highlighted as main area
}

export const serviceAreas: ServiceArea[] = [
  { name: 'Göteborg',     primary: true },
  { name: 'Mölndal' },
  { name: 'Kungsbacka' },
  { name: 'Partille' },
  { name: 'Härryda' },
  { name: 'Lerum' },
  { name: 'Ale' },
  { name: 'Kungälv' },
  { name: 'Stenungsund' },
  { name: 'Alingsås' },
]
