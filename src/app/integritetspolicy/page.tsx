import { client } from '@/config/client'

export default function IntegritetspolicyPage() {
  return (
    <div className="bg-bg min-h-dvh pt-[68px]">
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-12 md:py-16">
        <h1 className="font-head text-4xl font-black text-dark mb-5">Integritetspolicy</h1>
        <div className="rounded-2xl border border-border bg-white p-6 space-y-4 text-muted leading-relaxed">
          <p>
            {client.name} hanterar personuppgifter varsamt och endast för att kunna svara på
            förfrågningar, leverera tjänster och följa lagkrav.
          </p>
          <p>
            Kontakta oss på {client.contact.email} om du vill veta vilka uppgifter vi har sparade
            eller begära rättelse eller radering.
          </p>
        </div>
      </section>
    </div>
  )
}
