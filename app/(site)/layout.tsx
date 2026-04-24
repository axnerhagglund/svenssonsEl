import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactModalProvider } from '@/components/contact/ContactModalProvider'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ContactModalProvider>
  )
}
