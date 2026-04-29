# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
npm start        # Serve production build locally
```

No test suite is configured.

## Architecture

This is a **Next.js 14 App Router** marketing site template for a Swedish trades/craftsman business ("hantverkare"). It is fully statically generated — no server-only secrets, no API routes.

### The single source of truth for customisation

**`lib/config/site.config.ts`** — every customer-facing string (company name, phone, hero copy, stats, meta tags) lives here. Components consume `siteConfig` directly; never hardcode these values in components.

**`lib/config/routes.ts`** — all internal paths in one place (`routes.home`, `routes.services`, etc.).

**`lib/data/`** — static data arrays: `services.ts`, `areas.ts`, `testimonials.ts`, `faq.ts`, `omOssPage.ts`, `tjansterPage.ts`. These are the files to edit when updating content.

### Routing — route group `(site)`

All user-facing pages live under `app/(site)/` which applies a shared layout wrapping every page in `ContactModalProvider → Navbar → main → Footer`. Pages outside this group (e.g. `app/cookies/`, `app/integritetspolicy/`) render without Navbar/Footer.

| Route | File |
|---|---|
| `/` | `app/(site)/page.tsx` |
| `/tjanster` | `app/(site)/tjanster/page.tsx` |
| `/om-oss` | `app/(site)/om-oss/page.tsx` |
| `/kontakt` | `app/(site)/kontakt/page.tsx` |

### Contact modal system

A global contact modal is managed via React Context in `components/contact/ContactModalProvider.tsx`. Any component that needs to open it calls `useContactModal().open()`. The modal renders `ContactForm` (`components/ui/ContactForm.tsx`) and is mounted once at the `(site)` layout level. The `/#contact` hash on the home page scrolls to an anchor rather than opening the modal — both behaviours are handled inside the provider.

### Component layers

- `components/layout/` — `Navbar`, `Footer` (used once per page)
- `components/sections/` — full-width homepage sections (`Hero`, `About`, `Services`, `Testimonials`, `ServiceAreas`, `HomeFaq`, `ContactCTA`)
- `components/pages/` — content blocks for inner pages (`TjansterHero`, `OmOssHero`, etc.)
- `components/ui/` — reusable primitives (`Button`, `FadeIn`, `FaqAccordion`, `ContactForm`)
- `components/contact/` — modal system (`ContactModal`, `ContactModalProvider`, `OpenContactButton`)

### Styling

Tailwind with custom design tokens defined in `tailwind.config.ts`:

- **Colors:** `dark` (#1B2A3B), `accent` (#E8620A), `bg` (#F5F2EC), `muted`, `border`, plus variants `dark-2`, `accent-h`, `accent-dark`, `accent-light`
- **Fonts:** `font-head` (Fraunces serif), `font-body` (Outfit sans-serif) — set as CSS variables in the root layout
- **Max-width:** `max-w-content` = 1200px
- Utility: `cn()` in `lib/utils.ts` for conditional class merging

### Environment variables

Only one optional env var:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL for `metadataBase`. Vercel preview builds fall back to `VERCEL_URL` automatically. |
