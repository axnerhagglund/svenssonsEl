import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/client'
import { routes } from '@/config/routes'

const footerLinks = [
  { label: 'Tjänster', href: routes.services },
  { label: 'Om oss',   href: routes.about },
  { label: 'Kontakt',  href: routes.contactPage },
]

export function Footer() {
  const { name, nameAccent, founded, certifications } = siteConfig.company
  const { phone, phoneHref, email, emailHref, address, hours } = siteConfig.contact
  const displayName = name.replace(nameAccent, '')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111d2b] text-white/75">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center no-underline mb-4" aria-label="Startsida">
              <span className="font-head text-xl font-bold text-white tracking-wide leading-none">
                {displayName}<span className="text-accent-dark">{nameAccent}</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/55 mb-5 max-w-[240px]">
              Behörig elinstallatör verksam i Göteborg med omnejd sedan {founded}.
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map(cert => (
                <span key={cert}
                  className="text-[11px] font-semibold text-white/50 bg-white/7
                    border border-white/12 rounded px-2 py-1 tracking-wide">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-white/55 uppercase tracking-[0.12em] mb-4">
              Snabblänkar
            </h3>
            <ul className="space-y-2.5 list-none">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white/55 uppercase tracking-[0.12em] mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 list-none">
              <li>
                <a href={phoneHref}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors no-underline group">
                  <Phone className="w-4 h-4 text-accent-dark shrink-0" strokeWidth={1.75} />
                  {phone}
                </a>
              </li>
              <li>
                <a href={emailHref}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors no-underline">
                  <Mail className="w-4 h-4 text-accent-dark shrink-0" strokeWidth={1.75} />
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-accent-dark shrink-0 mt-0.5" strokeWidth={1.75} />
                {address}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock className="w-4 h-4 text-accent-dark shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>{hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {currentYear} {name}. Alla rättigheter förbehållna.
          </p>
          <p className="text-xs text-white/20">
            Webbplats av{' '}
            <span className="text-white/35">Webbleasing</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
