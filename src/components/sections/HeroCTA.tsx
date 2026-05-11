'use client'

import { siteConfig } from '@/config/client'
import { routes } from '@/config/routes'
import { OpenContactButton } from '@/components/contact/OpenContactButton'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils'

type HeroCTAProps = {
  /** Centrera knappraden på mobil (t.ex. startsidans hero) */
  align?: 'default' | 'centerOnMobile'
}

export function HeroCTA({ align = 'default' }: HeroCTAProps) {
  const { ctaPrimary, ctaSecondary } = siteConfig.hero
  return (
    <div
      className={cn(
        'flex flex-wrap gap-3 mb-10',
        align === 'centerOnMobile' && 'justify-center lg:justify-start',
      )}
    >
      <OpenContactButton size="lg">{ctaPrimary}</OpenContactButton>
      <Button href={routes.about} variant="secondary" size="lg">
        {ctaSecondary}
      </Button>
    </div>
  )
}
