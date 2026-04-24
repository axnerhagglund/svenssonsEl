import type { Metadata } from 'next'
import { OmOssPageContent } from '@/components/pages/OmOssPageContent'
import { siteConfig } from '@/lib/config/site.config'

export const metadata: Metadata = {
  title: `Om oss – ${siteConfig.company.name}`,
  description: siteConfig.about.body.slice(0, 160),
}

export default function OmOssPage() {
  return (
    <div className="pt-[68px]">
      <OmOssPageContent />
    </div>
  )
}
