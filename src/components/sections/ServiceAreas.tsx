import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { serviceAreas } from '@/data/areas'
import { siteConfig } from '@/config/client'
import { FadeIn } from '@/components/ui/FadeIn'

export function ServiceAreas() {
  const { location } = siteConfig.company

  return (
    <section id="areas" className="bg-dark overflow-hidden" aria-labelledby="areas-heading">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 lg:gap-16 items-center py-20 lg:py-28">

          {/* Left — content */}
          <FadeIn>
            {/* Label */}
            <div className="flex items-center gap-2 mb-8">
              <MapPin className="w-3.5 h-3.5 text-accent-dark shrink-0" strokeWidth={2.5} />
              <span className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold">
                Tjänsteområde
              </span>
            </div>

            <h2
              id="areas-heading"
              className="font-head text-[clamp(2.2rem,4vw,3.4rem)] font-black text-white
                leading-[1.0] tracking-tight mb-6"
            >
              Vi arbetar i hela<br />
              <span className="text-accent-dark">{location}</span>sregionen
            </h2>

            <p className="text-[15px] text-white/50 mb-10 leading-relaxed max-w-[420px]">
              Snabb respons och lokal kännedom — oavsett var i regionen du befinner dig.
            </p>

            {/* Area chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceAreas.map(area => (
                area.primary ? (
                  <span
                    key={area.name}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                      bg-accent text-white text-[13px] font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                    {area.name}
                  </span>
                ) : (
                  <span
                    key={area.name}
                    className="inline-flex items-center px-4 py-2 rounded-full
                      border border-white/10 text-white/55 text-[13px] font-medium
                      hover:border-white/25 hover:text-white/80 transition-colors cursor-default"
                  >
                    {area.name}
                  </span>
                )
              ))}
            </div>

            <p className="text-[12px] text-white/30">
              Syns inte ditt område?{' '}
              <span className="text-accent-dark/80 font-medium">Kontakta oss ändå.</span>
            </p>
          </FadeIn>

          {/* Right — image with decorative rings */}
          <FadeIn delay={150} className="hidden lg:block">
            <div className="relative">

              {/* Concentric rings — coverage area motif */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-white/[0.06]"
                    style={{
                      width:  `${100 + i * 90}px`,
                      height: `${100 + i * 90}px`,
                    }}
                  />
                ))}
              </div>

              {/* Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[3/4]
                shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/goteborg.jpg"
                  alt="Utsikt över Göteborgs innerstad med kanaler och historiska byggnader"
                  fill
                  className="object-cover"
                  sizes="420px"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />

                {/* Bottom badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="bg-dark/80 backdrop-blur-sm border border-white/10 rounded-xl
                    px-4 py-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
                    <div>
                      <p className="text-white text-[13px] font-semibold leading-none mb-0.5">
                        {serviceAreas.length} kommuner
                      </p>
                      <p className="text-white/45 text-[11px] leading-none">
                        i Västsverige
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
