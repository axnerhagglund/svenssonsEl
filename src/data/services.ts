import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'installation',
    name: 'Elinstallation',
    description: 'Nyinstallation och ombyggnad av elcentraler, uttag, belysning och kabeldragning för hem och kontor.',
    icon: 'Zap',
  },
  {
    id: 'renovation',
    name: 'Bostadrenovering',
    description: 'Totalrenovering av el vid badrum, kök och tillbyggnad. Vi hjälper dig från ritning till besiktning.',
    icon: 'Home',
  },
  {
    id: 'lighting',
    name: 'Belysningslösningar',
    description: 'Energieffektiv LED-belysning, utomhusbelysning och smarta hemautomationssystem.',
    icon: 'Sun',
  },
  {
    id: 'ev-charging',
    name: 'Laddbox & Solceller',
    description: 'Installation av laddboxar för elbil (Zaptec, Easee) och anslutning av solcellsanläggningar.',
    icon: 'BatteryCharging',
  },
  {
    id: 'emergency',
    name: 'Jour & Akut',
    description: 'Akut eljour dygnet runt för privatpersoner och bostadsrättsföreningar i Göteborg.',
    icon: 'Phone',
  },
  {
    id: 'commercial',
    name: 'Företag & Fastighet',
    description: 'Serviceavtal, underhåll och nyinstallation för kommersiella fastigheter och industrilokaler.',
    icon: 'Building2',
  },
]
