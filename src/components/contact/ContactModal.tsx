'use client'

import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import { ContactForm } from '@/components/ui/ContactForm'
import { useContactModal } from './ContactModalProvider'

export function ContactModal() {
  const { isOpen, close } = useContactModal()
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-dark/80 backdrop-blur-sm border-0 cursor-default"
        aria-label="Stäng"
        onClick={close}
      />
      <div
        ref={panelRef}
        className="relative w-full sm:max-w-lg max-h-[min(100dvh,640px)] sm:max-h-[90dvh] overflow-y-auto
          bg-dark border-t sm:border border-white/10 sm:rounded-2xl shadow-2xl
          p-6 sm:p-8 z-10"
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 id={titleId} className="font-head text-2xl font-bold text-white leading-tight">
              Skicka en förfrågan
            </h2>
            <p className="text-[13px] text-white/40 mt-1.5">
              Vi återkommer inom 24 timmar · Kostnadsfri rådgivning
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors -mr-1 -mt-1 shrink-0"
            aria-label="Stäng formulär"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
        <ContactForm idPrefix="modal-" onSuccess={close} />
      </div>
    </div>
  )
}
