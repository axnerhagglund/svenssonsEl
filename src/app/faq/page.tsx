import FaqPageClient from '@/components/ui/FaqPageClient'
import { getAllFaqItems } from '@/sanity/queries'

export const revalidate = 3600

export default async function FaqPage() {
  const items = await getAllFaqItems()

  return (
    <div className="bg-bg min-h-dvh pt-[68px]">
      <section className="max-w-content mx-auto px-5 sm:px-8 py-12 md:py-16">
        <h1 className="font-head text-4xl font-black text-dark mb-4">Vanliga frågor</h1>
        <p className="text-muted max-w-2xl mb-8">
          Sök bland de vanligaste frågorna eller kontakta oss om du inte hittar svaret.
        </p>
        <FaqPageClient items={items} />
      </section>
    </div>
  )
}
