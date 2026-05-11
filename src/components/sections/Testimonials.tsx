import { testimonials } from '@/data/testimonials'
import { FadeIn } from '@/components/ui/FadeIn'
import { siteConfig } from '@/config/client'
import { TestimonialsCta } from '@/components/sections/TestimonialsCta'

export function Testimonials() {
  const { rating, count, platform } = siteConfig.reviews

  return (
    <section id="reviews" className="bg-bg py-16 md:py-20 lg:py-24 border-t border-border" aria-labelledby="reviews-heading">
      <div className="max-w-content mx-auto px-5 sm:px-8">

        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 md:mb-14">
          <h2 id="reviews-heading"
            className="font-head text-[clamp(2rem,4vw,3rem)] font-black text-dark leading-tight tracking-tight">
            Över {count} nöjda kunder
          </h2>
          <p className="text-[13px] text-muted">
            {rating} / 5 · {count} recensioner på {platform}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 80}>
              <article>
                <p className="text-[22px] text-accent-light font-head font-black leading-none mb-4" aria-hidden>
                  {'\u201C'}
                </p>
                <p className="text-[15px] text-dark leading-relaxed mb-5">
                  {t.text}
                </p>
                <div>
                  <p className="text-[13px] font-semibold text-dark">{t.name}</p>
                  <p className="text-[12px] text-muted mt-1">{t.role} · {t.location}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={160} className="text-center mt-12 md:mt-16">
          <p className="text-[14px] text-muted mb-7">Redo att bli nästa nöjda kund?</p>
          <TestimonialsCta />
        </FadeIn>

      </div>
    </section>
  )
}
