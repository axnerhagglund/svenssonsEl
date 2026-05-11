import { getAllTeamMembers } from '@/sanity/queries'

export const revalidate = 3600

export default async function MedarbetarePage() {
  const members = await getAllTeamMembers()

  return (
    <div className="bg-bg min-h-dvh pt-[68px]">
      <section className="max-w-content mx-auto px-5 sm:px-8 py-12 md:py-16">
        <h1 className="font-head text-4xl font-black text-dark mb-4">Medarbetare</h1>
        <p className="text-muted max-w-2xl mb-8">
          Möt personerna bakom företaget.
        </p>
        {members.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {members.map((member) => (
              <article key={member._id} className="rounded-2xl border border-border bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-dark font-bold">
                  {member.initials}
                </div>
                <h2 className="font-head text-2xl font-bold text-dark">{member.name}</h2>
                <p className="text-accent-light font-bold">{member.title}</p>
                <p className="text-muted mt-3">{member.bio}</p>
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
