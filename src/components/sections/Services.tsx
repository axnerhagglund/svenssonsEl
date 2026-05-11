import Link from 'next/link'
import { services } from '@/data/services'
import { routes } from '@/config/routes'
import { FadeIn } from '@/components/ui/FadeIn'

export function Services() {
  return (
    <section id="services" className="bg-bg py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="max-w-content mx-auto px-5 sm:px-8">

        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <h2 id="services-heading"
            className="font-head text-[clamp(2rem,4vw,3rem)] font-black text-dark leading-tight tracking-tight">
            Vi hjälper dig med<br className="hidden sm:block" /> allt inom el
          </h2>
          <p className="text-[14px] text-muted max-w-[300px] sm:text-right leading-relaxed">
            Från enklare installationer till komplexa projekt — kompetens och behörighet för alla typer av elarbeten.
          </p>
        </FadeIn>

        <div className="divide-y divide-border">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 40}>
              <div className="grid grid-cols-[2.5rem_1fr] lg:grid-cols-[2.5rem_1fr_1fr] gap-x-6 py-6 lg:py-7 items-baseline">
                <span className="font-head text-[12px] font-bold text-dark/25 tracking-widest pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-head text-[21px] font-bold text-dark leading-tight">
                  {service.name}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mt-2 col-start-2 col-span-1 lg:col-start-3 lg:col-span-1 lg:mt-0">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center sm:text-left">
          <Link
            href={routes.services}
            className="inline-flex font-head text-[15px] font-bold text-accent-light hover:text-accent
              border-b-2 border-accent/40 hover:border-accent transition-colors no-underline"
          >
            Läs mer om våra tjänster
          </Link>
        </FadeIn>

      </div>
    </section>
  )
}
