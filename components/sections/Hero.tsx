import Image from 'next/image'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/config/site.config'
import { HeroCTA } from '@/components/sections/HeroCTA'

export function Hero() {
  const { headlinePrefix, headlineSuffix, subtext, imageSrc, imageAlt } = siteConfig.hero
  const { phone, phoneHref } = siteConfig.contact
  const { trade } = siteConfig.company

  return (
    <section className="bg-dark relative min-h-dvh flex flex-col pt-[68px]" aria-label="Hero">

      <div className="w-full max-w-content mx-auto px-5 sm:px-8 flex-1 flex items-center min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-10 pb-20 lg:py-16 lg:pb-16 w-full items-center">

          {/* Text side — centrerat på små skärmar, vänster från lg */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:max-w-none lg:mx-0 w-full">
            <h1 className="font-head text-[clamp(2.8rem,6vw,4.5rem)] font-black text-white leading-[0.95] tracking-tight mb-6 text-balance">
              {headlinePrefix}{' '}
              <span className="text-accent-dark">{trade}</span>
              <br />
              {headlineSuffix}
            </h1>

            <p className="text-[17px] text-white/65 leading-relaxed mb-9 max-w-[500px] mx-auto lg:mx-0">
              {subtext}
            </p>

            <HeroCTA align="centerOnMobile" />

            <div className="flex justify-center lg:justify-start">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80
                  transition-colors no-underline group"
              >
                <span className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center
                  group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-accent-dark" strokeWidth={2} />
                </span>
                <span>Ring direkt: <span className="font-semibold text-white/70">{phone}</span></span>
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[560px] ml-auto
              shadow-[0_32px_64px_rgba(0,0,0,0.35)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
