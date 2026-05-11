'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils'
import type { FaqItem } from '@/data/faq'

type Props = {
  items: FaqItem[]
  /** mörk bakgrund = ljus text */
  variant?: 'light' | 'dark'
  className?: string
}

export function FaqAccordion({ items, variant = 'light', className }: Props) {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className={cn('list-none space-y-2', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-p-${i}`
        return (
          <li
            key={item.question}
            className={cn(
              'border border-border rounded-xl overflow-hidden',
              variant === 'light' ? 'bg-white' : 'bg-white/5',
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  'w-full flex items-center justify-between gap-3 text-left px-4 py-3.5 sm:px-5 sm:py-4',
                  'font-head text-[15px] sm:text-base font-bold tracking-tight',
                  variant === 'light' ? 'text-dark' : 'text-white',
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={`${baseId}-h-${i}`}
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    'w-5 h-5 shrink-0 transition-transform',
                    isOpen && '-rotate-180',
                    variant === 'light' ? 'text-muted' : 'text-white/50',
                  )}
                  strokeWidth={2}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={`${baseId}-h-${i}`}
              className={cn(
                'grid transition-[grid-template-rows] duration-200 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className={cn(
                    'px-4 sm:px-5 pb-4 sm:pb-5 text-[14px] sm:text-[15px] leading-relaxed pl-[calc(1rem+0.1em)]',
                    variant === 'light' ? 'text-muted' : 'text-white/60',
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
