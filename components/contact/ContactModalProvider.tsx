'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ContactModal } from './ContactModal'

type Ctx = { open: () => void; close: () => void; isOpen: boolean }

const ContactModalContext = createContext<Ctx | null>(null)

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider')
  return ctx
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => {
    setIsOpen(false)
    if (typeof window !== 'undefined' && window.location.hash === '#contact') {
      const p = window.location.pathname + (window.location.search || '')
      window.history.replaceState(null, '', p)
    }
  }, [])

  // /#contact scrollar till kontakten på startsidan (öppnar inte modal automatiskt)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const scrollToContact = () => {
      if (window.location.hash !== '#contact' || pathname !== '/') return
      requestAnimationFrame(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      })
    }
    scrollToContact()
    window.addEventListener('hashchange', scrollToContact)
    return () => window.removeEventListener('hashchange', scrollToContact)
  }, [pathname])

  const value: Ctx = { open, close, isOpen }

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal />
    </ContactModalContext.Provider>
  )
}
