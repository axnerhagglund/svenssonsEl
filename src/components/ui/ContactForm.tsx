'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { Button } from './Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FieldErrors {
  name?: string
  phone?: string
}

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.get('name')?.toString().trim()) {
    errors.name = 'Namn är obligatoriskt.'
  }
  const phone = data.get('phone')?.toString().trim() ?? ''
  if (!phone) {
    errors.phone = 'Telefonnummer är obligatoriskt.'
  } else if (!/^[\d\s()+\-]{6,}$/.test(phone)) {
    errors.phone = 'Ange ett giltigt telefonnummer.'
  }
  return errors
}

interface ContactFormProps {
  /** Unika id i modal m.m. */
  idPrefix?: string
  /** T.ex. stäng modal efter skickat */
  onSuccess?: () => void
}

export function ContactForm({ idPrefix = '', onSuccess }: ContactFormProps) {
  const [state, setState]   = useState<FormState>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  const p = (s: string) => `${idPrefix}${s}`

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const fieldErrors = validate(data)

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      const first = Object.keys(fieldErrors)[0] as keyof FieldErrors
      ;(e.currentTarget.elements.namedItem(String(first)) as HTMLElement | null)?.focus()
      return
    }

    setErrors({})
    setState('loading')

    // TODO: koppla till din e-posttjänst eller Sanity-integration
    await new Promise(r => setTimeout(r, 800))

    setState('success')
    const el = e.target as HTMLFormElement
    if (onSuccess) {
      setTimeout(() => {
        onSuccess()
        setState('idle')
        el.reset()
      }, 1600)
    } else {
      setTimeout(() => {
        setState('idle')
        el.reset()
      }, 3500)
    }
  }

  const inputBase = `
    w-full bg-white/7 border rounded-lg px-3.5 py-3
    text-white text-[15px] font-body placeholder:text-white/25
    transition-colors duration-200
    focus:outline-none focus:bg-white/10
    focus:ring-2 focus:ring-accent/30
  `

  const inputClass = (field: keyof FieldErrors) =>
    `${inputBase} ${errors[field]
      ? 'border-red-400 focus:border-red-400'
      : 'border-white/12 focus:border-accent'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-4">
        <label htmlFor={p('name')} className="block text-[13px] font-semibold text-white/60 mb-1.5 tracking-wide">
          Namn <span className="text-accent-dark" aria-hidden>*</span>
        </label>
        <input
          id={p('name')} name="name" type="text"
          className={inputClass('name')}
          placeholder="Ditt namn"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? p('name-error') : undefined}
        />
        {errors.name && (
          <p id={p('name-error')} role="alert" className="mt-1.5 text-[12px] text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor={p('phone')} className="block text-[13px] font-semibold text-white/60 mb-1.5 tracking-wide">
          Telefon <span className="text-accent-dark" aria-hidden>*</span>
        </label>
        <input
          id={p('phone')} name="phone" type="tel"
          className={inputClass('phone')}
          placeholder="070-000 00 00"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? p('phone-error') : undefined}
        />
        {errors.phone && (
          <p id={p('phone-error')} role="alert" className="mt-1.5 text-[12px] text-red-400">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor={p('message')} className="block text-[13px] font-semibold text-white/60 mb-1.5 tracking-wide">
          Meddelande
        </label>
        <textarea
          id={p('message')} name="message" rows={3}
          className={`${inputBase} border-white/12 focus:border-accent resize-y min-h-[88px]`}
          placeholder="Berätta kort vad det gäller..."
        />
      </div>

      <div aria-live="polite" aria-atomic="true">
        <Button
          type="submit"
          disabled={state === 'loading'}
          className={`w-full justify-center mt-2 ${state === 'success' ? '!bg-emerald-600 !border-emerald-600' : ''}`}
        >
          {state === 'loading' && 'Skickar...'}
          {state === 'success' && (
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="w-4 h-4" aria-hidden />
              Meddelande skickat!
            </span>
          )}
          {(state === 'idle' || state === 'error') && 'Skicka meddelande'}
        </Button>
      </div>

      <p className="text-[12px] text-white/50 text-center mt-2.5" aria-hidden>
        Vi svarar inom 24 timmar · Kostnadsfri rådgivning
      </p>
    </form>
  )
}
