import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/client'
import { ContactForm } from '@/components/ui/ContactForm'
import { FadeIn } from '@/components/ui/FadeIn'

function mapEmbedSrc(): string {
  const { address, mapQuery } = siteConfig.contact
  const q = mapQuery ?? address
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&hl=sv&z=15&output=embed`
}

export const metadata: Metadata = {
  title: `Kontakt – ${siteConfig.company.name}`,
  description: `Kontakta ${siteConfig.company.name} i ${siteConfig.company.location}. Formulär, karta och öppettider.`,
}

export default function KontaktPage() {
  const { phone, phoneHref, email, emailHref, address, hours } = siteConfig.contact
  const src = mapEmbedSrc()

  return (
    <div className="bg-bg min-h-dvh pt-[68px]">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 md:py-16 lg:py-20">

        <FadeIn className="mb-10 md:mb-12 text-center max-w-2xl mx-auto">
          <h1 className="font-head text-[clamp(2rem,4.5vw,2.8rem)] font-black text-dark leading-tight tracking-tight mb-3">
            Kontakta oss
          </h1>
          <p className="text-[16px] text-muted leading-relaxed">
            Skicka en förfrågan, slå en signal eller titta in på kartan – vi svarar så
            snart vi kan. Akut? Ring gärna direkt.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">

          <FadeIn className="order-1">
            <div className="bg-dark border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_24px_48px_rgba(0,0,0,0.12)]">
              <h2 className="font-head text-xl font-bold text-white mb-1">Skicka en förfrågan</h2>
              <p className="text-[13px] text-white/40 mb-6">
                Fyll i fälten så hör vi av oss samma dag så ofta det går, annars inom 24
                timmar.
              </p>
              <ContactForm idPrefix="kontakt-" />
            </div>
          </FadeIn>

          <FadeIn className="order-2" delay={80}>
            <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 h-full">
              <h2 className="font-head text-lg font-bold text-dark mb-6">Öppettider & uppgifter</h2>

              <div className="flex gap-3 mb-5 pb-5 border-b border-border">
                <Clock className="w-5 h-5 text-accent-light shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <p className="text-[11px] font-bold text-muted uppercase tracking-widest mb-0.5">
                    Öppettider
                  </p>
                  <p className="text-[15px] text-dark leading-relaxed font-medium whitespace-pre-line">
                    {hours}
                  </p>
                </div>
              </div>

              <ul className="space-y-4 list-none">
                <li>
                  <a
                    href={phoneHref}
                    className="flex items-start gap-3 text-dark hover:text-accent transition-colors no-underline group"
                  >
                    <Phone
                      className="w-5 h-5 text-accent-light shrink-0 mt-0.5"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="text-[11px] font-bold text-muted uppercase tracking-widest mb-0.5">
                        Telefon
                      </p>
                      <p className="text-[15px] font-medium group-hover:underline decoration-accent underline-offset-2">
                        {phone}
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={emailHref}
                    className="flex items-start gap-3 text-dark hover:text-accent transition-colors no-underline group"
                  >
                    <Mail
                      className="w-5 h-5 text-accent-light shrink-0 mt-0.5"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="text-[11px] font-bold text-muted uppercase tracking-widest mb-0.5">
                        E-post
                      </p>
                      <p className="text-[15px] font-medium break-all group-hover:underline decoration-accent underline-offset-2">
                        {email}
                      </p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-accent-light shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-[11px] font-bold text-muted uppercase tracking-widest mb-0.5">
                      Adress
                    </p>
                    <p className="text-[15px] text-dark leading-relaxed">{address}</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="section-map">
          <h2 className="font-head text-xl sm:text-2xl font-bold text-dark mb-4 sm:mb-5">
            Hitta hit
          </h2>
          <div
            className="relative w-full aspect-[16/10] min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden
              border border-border shadow-[0_16px_40px_rgba(0,0,0,0.08)] bg-white"
          >
            <iframe
              title={`Karta: ${address}`}
              src={src}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
