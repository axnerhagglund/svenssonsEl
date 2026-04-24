import { serviceAreas } from '@/lib/data/areas'
import { siteConfig } from '@/lib/config/site.config'
import { FadeIn } from '@/components/ui/FadeIn'

export function ServiceAreas() {
  const { location } = siteConfig.company

  return (
    <section id="areas" className="bg-dark py-20 lg:py-28" aria-labelledby="areas-heading">
      <div className="max-w-content mx-auto px-5 sm:px-8">

        <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div>
            <h2 id="areas-heading"
              className="font-head text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white
                leading-tight tracking-tight">
              Vi arbetar i hela<br />{location}sregionen
            </h2>
          </div>

          <div>
            <p className="text-[14px] text-white/50 mb-6 leading-relaxed">
              Snabb respons och lokal kännedom — oavsett var i regionen du befinner dig.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {serviceAreas.map(area => (
                <span
                  key={area.name}
                  className={`text-[15px] font-medium ${area.primary ? 'text-white' : 'text-white/40'}`}
                >
                  {area.name}
                </span>
              ))}
            </div>
            <p className="text-[12px] text-white/30 mt-6">
              Syns inte ditt område? <span className="text-white/50">Kontakta oss ändå.</span>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
