import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { Testimonials } from '@/components/sections/Testimonials'
import { HomeFaq } from '@/components/sections/HomeFaq'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <Testimonials />
      <HomeFaq />
      <ContactCTA />
    </>
  )
}
