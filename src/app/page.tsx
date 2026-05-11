import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { Testimonials } from '@/components/sections/Testimonials'
import { HomeFaq } from '@/components/sections/HomeFaq'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <Testimonials />
      <HomeFaq />
      <Contact />
    </>
  )
}
