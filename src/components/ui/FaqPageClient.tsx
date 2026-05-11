'use client'

import { useMemo, useState } from 'react'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import type { SanityFaqItem } from '@/sanity/types'

type Props = {
  items: SanityFaqItem[]
}

export default function FaqPageClient({ items }: Props) {
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return items

    return items.filter((item) => {
      const haystack = `${item.question} ${item.answer}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [items, query])

  return (
    <div>
      <label className="block mb-5">
        <span className="sr-only">Sök frågor</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Sök bland frågor..."
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-dark outline-none focus:border-accent"
        />
      </label>

      {filteredItems.length > 0 ? (
        <FaqAccordion items={filteredItems} />
      ) : (
        <div className="rounded-2xl border border-border bg-white p-6">
          Under uppbyggnad
        </div>
      )}
    </div>
  )
}
