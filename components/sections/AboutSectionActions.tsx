'use client'

import { siteConfig } from '@/lib/config/site.config'
import { routes } from '@/lib/config/routes'
import { OpenContactButton } from '@/components/contact/OpenContactButton'
import { Button } from '@/components/ui/Button'

export function AboutSectionActions() {
  const { ctaLabel } = siteConfig.about
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:items-center">
      <OpenContactButton size="md" className="w-full sm:w-auto justify-center min-w-[200px]">
        {ctaLabel}
      </OpenContactButton>
      <Button
        href={routes.about}
        variant="ghost"
        className="w-full sm:w-auto justify-center min-w-[200px] !bg-transparent
          !text-dark !border-dark/45
          hover:!border-dark hover:!bg-dark/[0.04] hover:!text-dark"
      >
        Läs mer om oss
      </Button>
    </div>
  )
}
