import Image from 'next/image'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/config/client'
import { HeroCTA } from '@/components/sections/HeroCTA'

export function Hero() {
  const { headlinePrefix, headlineSuffix, subtext, imageSrc, imageAlt } = siteConfig.hero
  const { phone, phoneHref } = siteConfig.contact
  const { trade } = siteConfig.company
  const { stats } = siteConfig

  return (
    <>
      <style>{`
        @keyframes blob-drift-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(35px, -25px) scale(1.08); }
          66%       { transform: translate(-20px, 18px) scale(0.96); }
        }
        @keyframes blob-drift-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40%       { transform: translate(-28px, 22px) scale(1.05); }
          70%       { transform: translate(18px, -15px) scale(0.94); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes stat-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-blob-1 { animation: blob-drift-1 9s ease-in-out infinite; }
        .hero-blob-2 { animation: blob-drift-2 13s ease-in-out infinite; }
        .anim-1 { animation: fade-up 0.65s 0.05s ease-out both; }
        .anim-2 { animation: fade-up 0.65s 0.18s ease-out both; }
        .anim-3 { animation: fade-up 0.65s 0.30s ease-out both; }
        .anim-4 { animation: fade-up 0.65s 0.42s ease-out both; }
        .stat-1 { animation: stat-in 0.55s 0.55s ease-out both; }
        .stat-2 { animation: stat-in 0.55s 0.68s ease-out both; }
        .stat-3 { animation: stat-in 0.55s 0.81s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .hero-blob-1, .hero-blob-2 { animation: none; }
          .anim-1, .anim-2, .anim-3, .anim-4,
          .stat-1, .stat-2, .stat-3 { animation: none; opacity: 1; }
        }
      `}</style>

      <section
        className="bg-dark relative h-dvh flex flex-col pt-[68px] overflow-hidden"
        aria-label="Hero"
      >
        {/* Animated ambient blobs */}
        <div
          className="hero-blob-1 absolute pointer-events-none"
          style={{
            top: '-5%', right: '5%',
            width: '700px', height: '700px',
            background: 'radial-gradient(circle, #C9941A 0%, transparent 68%)',
            filter: 'blur(90px)', opacity: 0.13,
          }}
        />
        <div
          className="hero-blob-2 absolute pointer-events-none"
          style={{
            bottom: '10%', left: '-8%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, #C9941A 0%, transparent 68%)',
            filter: 'blur(110px)', opacity: 0.07,
          }}
        />

        {/* Main content — flex-1 so it fills the space above stats bar */}
        <div className="w-full max-w-content mx-auto px-5 sm:px-8 flex-1 flex items-center min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-6 sm:py-10 lg:py-14 w-full items-center">

            {/* Text side */}
            <div className="text-center lg:text-left w-full">

              <h1
                className="anim-1 font-head font-black text-white tracking-tight text-balance
                  leading-[0.95] mb-4 sm:mb-5 lg:mb-6
                  text-[clamp(2.1rem,7vw,4.5rem)]"
                style={{ opacity: 0 }}
              >
                {headlinePrefix}{' '}
                <span className="text-accent-dark">{trade}</span>
                <br />
                {headlineSuffix}
              </h1>

              <p
                className="anim-2 text-[15px] sm:text-[16px] lg:text-[17px] text-white/65
                  leading-relaxed mb-6 sm:mb-7 lg:mb-9
                  max-w-[440px] mx-auto lg:mx-0"
                style={{ opacity: 0 }}
              >
                {subtext}
              </p>

              <div className="anim-3 mb-5 sm:mb-6" style={{ opacity: 0 }}>
                <HeroCTA align="centerOnMobile" />
              </div>

              <div className="anim-4 flex justify-center lg:justify-start" style={{ opacity: 0 }}>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2.5 text-sm text-white/60
                    hover:text-white/80 transition-colors no-underline group"
                >
                  <span className="w-11 h-11 rounded-full bg-white/8 flex items-center
                    justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5 text-accent-dark" strokeWidth={2} />
                  </span>
                  <span>
                    Ring direkt:{' '}
                    <span className="font-semibold text-white/70">{phone}</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Image — desktop only */}
            <div className="relative hidden lg:block">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[460px]
                  ml-auto shadow-[0_32px_64px_rgba(0,0,0,0.45)]"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 0px, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — always pinned at the bottom within 100dvh */}
        <div className="relative z-10 border-t border-white/[0.08] bg-white/[0.03] backdrop-blur-sm shrink-0">
          <div className="w-full max-w-content mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`stat-${i + 1} flex items-center gap-2 sm:gap-4 lg:gap-5
                    px-3 sm:px-6 lg:px-8 py-4 sm:py-5`}
                  style={{ opacity: 0 }}
                >
                  <span className="font-head font-black text-white leading-none tabular-nums
                    text-[1.6rem] sm:text-[2.25rem] lg:text-[3rem]">
                    {stat.value}
                  </span>
                  <span
                    className="text-[10px] sm:text-[11px] lg:text-[13px] leading-snug
                      uppercase tracking-wider"
                    style={{ color: 'rgba(201,148,26,0.75)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
