import type { Metadata } from 'next'
import { TjansterPageContent } from '@/components/pages/TjansterPageContent'
import { siteConfig } from '@/lib/config/site.config'

export const metadata: Metadata = {
  title: `Tjänster – ${siteConfig.company.name}`,
  description:
    'Elinstallation, renovering, belysning, laddbox, jour och företag. Läs mer om våra tjänster i Göteborg.',
}

export default function TjansterPage() {
  return (
    <div className="pt-[68px]">
      <TjansterPageContent />
    </div>
  )
}
