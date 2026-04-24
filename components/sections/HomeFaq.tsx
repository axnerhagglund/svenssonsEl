import { homePageFaq } from '@/lib/data/faq'
import { routes } from '@/lib/config/routes'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { FadeIn } from '@/components/ui/FadeIn'
import Link from 'next/link'

export function HomeFaq() {
  return (
    <section
      id="faq"
      className="bg-white border-t border-dark/10 py-16 md:py-20 lg:py-24"
      aria-labelledby="home-faq-heading"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <FadeIn className="mb-8 md:mb-10 text-center max-w-2xl mx-auto">
          <h2
            id="home-faq-heading"
            className="font-head text-[clamp(1.8rem,3.5vw,2.5rem)] font-black text-dark
              leading-tight tracking-tight mb-3"
          >
            Vanliga frågor
          </h2>
          <p className="text-[15px] text-muted leading-relaxed">
            Kort svar på det många funderar över innan första samtalet. Fler detaljer om tjänster
            hittar du på{' '}
            <Link
              href={routes.services}
              className="font-medium text-dark underline decoration-dark/20 underline-offset-2 hover:decoration-accent"
            >
              tjänstesidan
            </Link>
            .
          </p>
        </FadeIn>
        <FadeIn delay={80}>
          <FaqAccordion items={homePageFaq} variant="light" className="max-w-2xl mx-auto" />
        </FadeIn>
      </div>
    </section>
  )
}
