import Image from 'next/image'
import { siteConfig } from '@/lib/config/site.config'
import { aboutPageFaq } from '@/lib/data/faq'
import { omOssStory, omOssValues } from '@/lib/data/omOssPage'
import { OmOssHero } from '@/components/pages/OmOssHero'
import { SubpageContactCta } from '@/components/pages/SubpageContactCta'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { FadeIn } from '@/components/ui/FadeIn'

export function OmOssPageContent() {
  const { imageSrc: heroSrc, imageAlt: heroAlt } = siteConfig.hero

  return (
    <>
      <OmOssHero />

      <div
        id="om-oss-berattelse"
        className="bg-bg border-b border-border scroll-mt-[88px]"
      >
        <div className="max-w-content mx-auto px-5 sm:px-8 py-10 lg:py-14">
          <FadeIn>
            <h2 className="font-head text-xl sm:text-2xl font-bold text-dark mb-6 sm:mb-8 max-w-2xl">
              Så började det
            </h2>
            {omOssStory.map((p, i) => (
              <p
                key={i}
                className="text-[16px] text-muted leading-relaxed max-w-2xl mb-5 last:mb-0"
              >
                {p}
              </p>
            ))}
          </FadeIn>
        </div>
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8 py-10 lg:py-14">
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[2/1] max-w-4xl mx-auto shadow-[0_20px_48px_rgba(0,0,0,0.1)]">
            <Image
              src={heroSrc}
              alt={heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </FadeIn>
      </div>

      <div id="om-oss-varden" className="bg-bg border-y border-border">
        <div className="max-w-content mx-auto px-5 sm:px-8 py-10 lg:py-16">
          <FadeIn>
            <h2 className="font-head text-xl sm:text-2xl font-bold text-dark mb-6 sm:mb-8 max-w-2xl">
              Det här får du när du anlitar oss
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 list-none p-0 m-0">
              {omOssValues.map((v, i) => (
                <li
                  key={v.title}
                  className="bg-white border border-border rounded-2xl p-6 sm:p-7"
                >
                  <p className="font-head text-xs font-bold text-dark/30 tracking-widest mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-head text-lg font-bold text-dark mb-2">{v.title}</h3>
                  <p className="text-[15px] text-muted leading-relaxed">{v.text}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 lg:py-20">
        <FadeIn>
          <h2 className="font-head text-2xl font-black text-dark mb-2">Vanliga frågor</h2>
          <p className="text-[15px] text-muted mb-8 max-w-xl">
            Säg till om något känns oklart — vi svarar gärna innan vi bokar in ett möte.
          </p>
          <FaqAccordion items={aboutPageFaq} variant="light" className="max-w-2xl" />
        </FadeIn>
      </div>

      <SubpageContactCta
        title="Nyfiken om vi skulle passa ert jobb?"
        lead="Beskriv projektet i korthet — vi återkommer inom 24 timmar med nästa steg."
      />
    </>
  )
}
