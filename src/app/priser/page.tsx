import { getAllPricingPackages } from '@/sanity/queries'

export const revalidate = 3600

export default async function PriserPage() {
  const packages = await getAllPricingPackages()

  return (
    <div className="bg-bg min-h-dvh pt-[68px]">
      <section className="max-w-content mx-auto px-5 sm:px-8 py-12 md:py-16">
        <h1 className="font-head text-4xl font-black text-dark mb-4">Priser</h1>
        <p className="text-muted max-w-2xl mb-8">
          Här samlar vi prispaket och exempelpriser när de finns publicerade.
        </p>
        {packages.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((item) => (
              <article key={item._id} className="rounded-2xl border border-border bg-white p-6">
                <h2 className="font-head text-2xl font-bold text-dark">{item.title}</h2>
                <p className="text-muted mt-2">{item.subtitle}</p>
                <p className="text-3xl font-bold text-dark mt-5">{item.price}</p>
                <p className="text-sm text-muted mt-1">{item.priceNote}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-white p-6">
            Under uppbyggnad
          </div>
        )}
      </section>
    </div>
  )
}
