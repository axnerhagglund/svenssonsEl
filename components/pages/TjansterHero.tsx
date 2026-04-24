'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/config/site.config'
import { routes } from '@/lib/config/routes'
import { tjansterIntro } from '@/lib/data/tjansterPage'
import { OpenContactButton } from '@/components/contact/OpenContactButton'
import { Button } from '@/components/ui/Button'

export function TjansterHero() {
  const { imageSrc, imageAlt, ctaPrimary } = siteConfig.hero
  const { phone, phoneHref } = siteConfig.contact

  return (
    <section className="bg-dark border-b border-border/30" aria-label="Tjänster, introduktion">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 md:py-16 lg:py-[4.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="font-head text-[clamp(2.1rem,4vw,2.85rem)] font-black text-white leading-[1.12] tracking-tight mb-5">
              {tjansterIntro.heroTitle}
            </h1>
            <p className="text-[16px] text-white/65 leading-relaxed max-w-[32rem] mb-8">
              {tjansterIntro.heroSub}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <OpenContactButton size="lg">{ctaPrimary}</OpenContactButton>
              <Button href="#tjanster-innehall" variant="secondary" size="lg">
                Så går jobben till
              </Button>
            </div>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors no-underline group"
            >
              <span className="w-8 h-8 rounded-full bg-white/[0.07] flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent-dark" strokeWidth={2} />
              </span>
              <span>
                Ring: <span className="font-semibold text-white/75">{phone}</span>
              </span>
            </a>
            <p className="text-[13px] text-white/40 mt-8">
              <Link
                href={routes.home}
                className="hover:text-white/70 underline decoration-white/20 underline-offset-[5px] hover:decoration-white/40 transition-colors"
              >
                Tillbaka till start
              </Link>
            </p>
          </div>

          <div className="lg:pl-2">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
