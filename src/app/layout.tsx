import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import '@/styles/globals.css'
import { siteConfig } from '@/config/client'
import { ContactModalProvider } from '@/components/contact/ContactModalProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

/** Absoluta URL:er för metadata (Vercel sätter VERCEL_URL, prod kan använda NEXT_PUBLIC_SITE_URL) */
function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="min-h-full bg-bg text-dark antialiased">
        <ContactModalProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ContactModalProvider>
      </body>
    </html>
  )
}
