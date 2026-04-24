'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/config/site.config'
import { routes } from '@/lib/config/routes'
import { OpenContactButton } from '@/components/contact/OpenContactButton'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Tjänster', href: routes.services },
  { label: 'Om oss',   href: routes.about },
  { label: 'Kontakt',  href: routes.contactPage },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(() => !isHome)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef   = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Sync before paint so restored scroll / hash links never show a transparent bar over light sections
  useLayoutEffect(() => {
    setScrolled(!isHome || window.scrollY > 60)
  }, [isHome])

  useEffect(() => {
    const onScroll = () => setScrolled(!isHome || window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!menuOpen) return

    const menu = menuRef.current
    if (!menu) return

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]

    first?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeMenu()
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first?.focus() }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const { name, nameAccent } = siteConfig.company
  const displayName = name.replace(nameAccent, '')

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-gradient-to-b from-dark/92 via-dark/35 to-transparent border-b border-white/5',
      )}>
        <div className="max-w-content mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center no-underline" aria-label="Startsida">
            <span className="font-head text-xl font-bold text-white tracking-wide leading-none">
              {displayName}<span className="text-accent">{nameAccent}</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href}
                  className="text-sm font-medium text-white/75 hover:text-white transition-colors no-underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <OpenContactButton className="text-sm px-5 py-2 rounded-md" size="md">
                Boka möte
              </OpenContactButton>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            ref={toggleRef}
            className="md:hidden p-2 rounded-md text-white/85 hover:bg-white/8 transition-colors"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        ref={menuRef}
        id="mobile-nav"
        aria-label="Mobilmeny"
        className={cn(
          'fixed top-[68px] left-0 right-0 z-40 md:hidden',
          'bg-[rgba(21,33,47,0.99)] backdrop-blur-xl border-b border-white/8',
          'transition-all duration-200',
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
        )}
      >
        <ul className="list-none px-6 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/75
                  hover:bg-white/7 hover:text-white transition-colors no-underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-6">
          <OpenContactButton
            onBeforeOpen={closeMenu}
            className="w-full justify-center text-base px-4 py-3.5 rounded-lg"
            size="md"
          >
            Boka möte
          </OpenContactButton>
        </div>
      </div>
    </>
  )
}
