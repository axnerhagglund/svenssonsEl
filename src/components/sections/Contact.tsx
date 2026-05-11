import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/client'
import { OpenContactActions } from '@/components/sections/OpenContactActions'
import { FadeIn } from '@/components/ui/FadeIn'

export function Contact() {
  const { phone, phoneHref, email, emailHref, address, hours } = siteConfig.contact

  const contactItems = [
    { icon: Phone,  label: 'Telefon',    value: phone,   href: phoneHref  },
    { icon: Mail,   label: 'E-post',     value: email,   href: emailHref  },
    { icon: MapPin, label: 'Adress',     value: address, href: undefined  },
    { icon: Clock,  label: 'Öppettider', value: hours,   href: undefined  },
  ]

  return (
    <section id="contact" className="bg-dark py-20 lg:py-28" aria-labelledby="contact-heading">
      <div className="max-w-content mx-auto px-5 sm:px-8">

        <FadeIn className="mb-12">
          <h2 id="contact-heading"
            className="font-head text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white
              leading-tight tracking-tight">
            Redo att komma igång?
          </h2>
          <p className="text-[15px] text-white/50 mt-3 max-w-[480px]">
            Hör av dig via telefon eller e-post, eller öppna formuläret i ett separat fönster när du
            är redo.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <FadeIn>
            <div className="divide-y divide-white/8">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 py-4">
                  <Icon className="w-4 h-4 text-accent-dark shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-0.5" aria-hidden>
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-[14px] text-white/75 hover:text-white transition-colors no-underline break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[14px] text-white/75 break-words">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/8">
              <p className="text-[13px] font-semibold text-accent-dark mb-1">Akut eljour?</p>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Vi har jour dygnet runt. Ring{' '}
                <a href={phoneHref} className="font-bold text-white/70 hover:text-white transition-colors no-underline">
                  {phone}
                </a>{' '}
                direkt.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="font-head text-xl font-bold text-white mb-1">Skicka en förfrågan</h3>
              <p className="text-[14px] text-white/40 mb-2 leading-relaxed">
                Klicka nedan: formuläret öppnas i en dialog ovanför sidan, så du behåller
                överblicken.
              </p>
              <p className="text-[12px] text-white/30 mb-6">Vi svarar inom 24 timmar · kostnadsfri rådgivning</p>
              <OpenContactActions />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
