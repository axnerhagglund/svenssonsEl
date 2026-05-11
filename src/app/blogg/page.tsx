import Link from 'next/link'
import { getAllPosts } from '@/sanity/queries'

export const revalidate = 3600

export default async function BloggPage() {
  const posts = await getAllPosts()

  return (
    <div className="bg-bg min-h-dvh pt-[68px]">
      <section className="max-w-content mx-auto px-5 sm:px-8 py-12 md:py-16">
        <h1 className="font-head text-4xl font-black text-dark mb-4">Blogg</h1>
        <p className="text-muted max-w-2xl mb-8">
          Artiklar, råd och uppdateringar från vårt team.
        </p>
        {posts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post._id} className="rounded-2xl border border-border bg-white p-6">
                <p className="text-sm text-muted mb-2">
                  {new Date(post.publishedAt).toLocaleDateString('sv-SE')}
                </p>
                <h2 className="font-head text-2xl font-bold text-dark">{post.title}</h2>
                <p className="text-muted mt-3">{post.excerpt}</p>
                <Link href={`/blogg/${post.slug.current}`} className="inline-block mt-5 font-bold text-accent-light">
                  Läs mer
                </Link>
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
