import { notFound } from 'next/navigation'
import { getPostBySlug, getPostSlugs } from '@/sanity/queries'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((item) => ({ slug: item.slug }))
}

export default async function BloggPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <article className="bg-bg min-h-dvh pt-[68px]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 md:py-16">
        <p className="text-sm text-muted mb-3">
          {new Date(post.publishedAt).toLocaleDateString('sv-SE')} · {post.readTime}
        </p>
        <h1 className="font-head text-4xl font-black text-dark mb-5">{post.title}</h1>
        <p className="text-lg text-muted leading-relaxed mb-8">{post.excerpt}</p>
        <div className="rounded-2xl border border-border bg-white p-6 whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </article>
  )
}
