import Image from 'next/image'
import { siteConfig } from '@/config/client'
import { AboutSectionActions } from '@/components/sections/AboutSectionActions'
import { FadeIn } from '@/components/ui/FadeIn'

export function About() {
  const { headline, body, imageSrc, imageAlt } = siteConfig.about
  const { stats } = siteConfig

  return (
    <section
      id="about"
      className="bg-white py-20 lg:py-28 border-t border-dark/10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:items-stretch">

          {/* Image — följer textkolumnens höjd på stora skärmar */}
          <FadeIn className="min-h-0 h-full order-1 lg:order-1">
            <div
              className="relative w-full h-[min(100%,_420px)] min-h-[280px] lg:min-h-0 lg:h-full
                rounded-2xl overflow-hidden
                ring-1 ring-inset ring-dark/12
                shadow-[0_20px_50px_rgba(27,42,59,0.12)]"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={100} className="order-2 lg:order-2 flex flex-col min-h-0 h-full">
            <h2
              id="about-heading"
              className="font-head text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-dark
                leading-tight tracking-tight mb-5"
            >
              {headline}
            </h2>

            <p className="text-[16px] text-muted leading-relaxed mb-8 lg:mb-9">
              {body}
            </p>

            <div
              className="mb-8 lg:mb-9 flex-1 flex flex-col justify-center
                border-y border-dark/25 divide-y divide-dark/20"
              role="list"
            >
              {stats.map(stat => (
                <div
                  key={stat.label}
                  role="listitem"
                  className="flex items-baseline gap-4 sm:gap-5 py-4 sm:py-4.5 first:pt-0 last:pb-0"
                >
                  <span
                    className="font-head text-[3rem] sm:text-[3.5rem] font-black text-dark
                      leading-[0.95] w-[4.2rem] sm:w-32 shrink-0 tabular-nums"
                  >
                    {stat.value}
                  </span>
                  <span className="text-[13px] sm:text-sm text-dark/60 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <AboutSectionActions />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
