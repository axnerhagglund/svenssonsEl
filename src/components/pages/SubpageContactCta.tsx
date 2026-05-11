'use client'

import { OpenContactButton } from '@/components/contact/OpenContactButton'

type Props = {
  title: string
  lead: string
}

export function SubpageContactCta({ title, lead }: Props) {
  return (
    <section
      className="bg-dark py-16 lg:py-24 border-t border-white/8 cta-bg"
      aria-label="Kontakt"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-head text-[clamp(1.5rem,3vw,2.25rem)] font-black text-white tracking-tight mb-3">
          {title}
        </h2>
        <p className="text-[15px] text-white/50 max-w-lg mx-auto mb-8 leading-relaxed">{lead}</p>
        <OpenContactButton size="lg">Boka möte</OpenContactButton>
      </div>
    </section>
  )
}
