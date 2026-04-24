import Image from 'next/image'
import { siteConfig } from '@/lib/config/site.config'
import { servicesPageFaq } from '@/lib/data/faq'
import { tjansterIntro, tjansterProcess, tjansterServiceDetail, tjansterKatalog } from '@/lib/data/tjansterPage'
import { SubpageContactCta } from '@/components/pages/SubpageContactCta'
import { TjansterHero } from '@/components/pages/TjansterHero'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { FadeIn } from '@/components/ui/FadeIn'

export function TjansterPageContent() {
  const { imageSrc: aboutSrc, imageAlt: aboutAlt } = siteConfig.about

  return (
    <>
      <TjansterHero />

      <div className="bg-bg border-b border-border">
        <div className="max-w-content mx-auto px-5 sm:px-8 py-10 lg:py-14">
          <FadeIn>
            <h2 className="font-head text-xl sm:text-2xl font-bold text-dark mb-6 sm:mb-8 max-w-2xl">
              Hur vi tänker
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 list-none p-0 m-0">
              {tjansterIntro.highlights.map((h, i) => (
                <li
                  key={h.title}
                  className="bg-white border border-border rounded-2xl p-6 sm:p-7"
                >
                  <p className="font-head text-xs font-bold text-dark/30 tracking-widest mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-head text-lg font-bold text-dark mb-2">{h.title}</h3>
                  <p className="text-[15px] text-muted leading-relaxed">{h.text}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <div id="tjanster-innehall" className="max-w-content mx-auto px-5 sm:px-8 py-12 lg:py-16 scroll-mt-[88px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <FadeIn>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_24px_48px_rgba(0,0,0,0.12)]">
              <Image
                src={aboutSrc}
                alt={aboutAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <h2 className="font-head text-[clamp(1.5rem,2.5vw,2rem)] font-black text-dark leading-tight mb-6">
              Så går vanliga jobb till
            </h2>
            <ul className="space-y-6 list-none">
              {tjansterProcess.map(s => (
                <li key={s.step} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-head text-xs font-bold text-dark/30 tracking-widest pt-1">{s.step}</span>
                  <div>
                    <h3 className="font-head text-lg font-bold text-dark mb-1.5">{s.title}</h3>
                    <p className="text-[15px] text-muted leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <div className="bg-white border-y border-border">
        <div className="max-w-content mx-auto px-5 sm:px-8 py-12 lg:py-20">
          <FadeIn>
            <h2 className="font-head text-[clamp(1.5rem,2.5vw,2.2rem)] font-black text-dark mb-2">
              Allt vi kan hjälpa dig med
            </h2>
            <p className="text-[15px] text-muted max-w-2xl mb-10">
              Samma tjänster som på startsidan — här med lite mer detalj om hur vi tänker kring
              respektive område.
            </p>
            <ul className="space-y-0 border-t border-border list-none">
              {tjansterKatalog.map((s, i) => (
                <li key={s.id} className="border-b border-border py-6 lg:py-7">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-4">
                    <div className="flex gap-4">
                      <span className="font-head text-[12px] font-bold text-dark/25 tracking-widest pt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-head text-[20px] font-bold text-dark leading-tight">{s.name}</h3>
                    </div>
                    <p className="text-[15px] text-muted leading-relaxed pl-0 md:pl-4">
                      <span className="block text-dark/80 mb-2">{s.description}</span>
                      <span className="text-muted">{tjansterServiceDetail[s.id]}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <h2 className="font-head text-[clamp(1.4rem,2.2vw,1.9rem)] font-black text-dark mb-3">
              Tryggt innanför dörren
            </h2>
            <p className="text-[15px] text-muted leading-relaxed">
              Vi dokumenterar alltid innan vi lämnar plats, och vi ser helst att du får samma
              projektansvarig genom hela kedjan. Har du särskilda önskemål kring tider eller störning
              — säg bara till i första samtalet.
            </p>
          </FadeIn>
          <FadeIn delay={60}>
            <div className="relative rounded-2xl overflow-hidden aspect-[5/4] shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <Image
                src={aboutSrc}
                alt={aboutAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="bg-bg border-t border-border">
        <div className="max-w-content mx-auto px-5 sm:px-8 py-12 lg:py-20">
          <FadeIn>
            <h2 className="font-head text-2xl font-black text-dark mb-2">Vanliga frågor</h2>
            <p className="text-[15px] text-muted mb-8 max-w-xl">
              Hittar du inte svar? Ring eller öppna formuläret så reder vi ut det tillsammans.
            </p>
            <FaqAccordion items={servicesPageFaq} variant="light" className="max-w-2xl" />
          </FadeIn>
        </div>
      </div>

      <SubpageContactCta
        title="Vill du veta exakt hur vi arbetar hos dig?"
        lead="Beskriv kort uppdraget, så ser vi om vi kan komma samma vecka eller boka in en
          genomgång på plats."
      />
    </>
  )
}
