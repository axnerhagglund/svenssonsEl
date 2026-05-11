# STANDARDIZE_TEMPLATE.md
# Instruktioner för AI-agent — Standardisering av Next.js template-struktur

## Syfte
Det här dokumentet används av en AI-agent för att standardisera mappstruktur, filnamn och konfiguration i ett Next.js-projekt så att det matchar byråns standard. Alla templates ska följa exakt samma struktur så att de är utbytbara, lätta att underhålla och fungerar som bas för nya kundprojekt.

Följ instruktionerna i den ordning de är skrivna. Hoppa inte över steg. Om du är osäker på ett steg — fråga innan du gör något.

---

## Teknisk stack (standard)

| Teknik | Version | Anmärkning |
|--------|---------|------------|
| Next.js | 16+ | App Router, Turbopack |
| React | 19+ | Server Components som standard |
| TypeScript | 5 | Strikt läge |
| Tailwind CSS | v4 | `@theme` i globals.css, **ingen** tailwind.config.ts |
| Sanity | next-sanity | CMS för allt redigerbart innehåll |
| Fonter | next/font/google | **Inte** @fontsource |

> **Viktig regel:** Läs `node_modules/next/dist/docs/` innan du skriver någon Next.js-kod. API:er kan avvika från äldre versioner.

---

## Förutsättningar
Innan du börjar, verifiera att följande stämmer:

- [ ] Projektet är ett Next.js-projekt med **App Router** (`src/app`-mapp finns)
- [ ] Projektet använder **Tailwind CSS v4**
- [ ] Du har tillgång till hela projektets filstruktur
- [ ] Du vet vilket kundnamn projektet representerar

---

## Målstruktur
När du är klar ska projektet se ut exakt så här:

```
root/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── om-oss/page.tsx
│   │   ├── tjanster/page.tsx
│   │   ├── kontakt/page.tsx
│   │   ├── priser/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── blogg/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── medarbetare/page.tsx
│   │   └── integritetspolicy/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── CookieBanner.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx          ← platshållare, extraheras från page.tsx senare
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx        ← eller projektnamngivet, t.ex. BrutalistButton.tsx
│   │       ├── Card.tsx          ← eller BrutalistCard.tsx
│   │       ├── FaqAccordion.tsx
│   │       ├── FaqPageClient.tsx ← "use client" wrapper för FAQ-sidan
│   │       ├── ScrollReveal.tsx
│   │       └── SectionHeader.tsx
│   │
│   ├── config/
│   │   └── client.ts             ← ALL statisk kundkonfiguration
│   │
│   ├── data/                     ← tunna re-exportfiler som pekar på sanity/queries
│   │   ├── blogg.ts
│   │   ├── medarbetare.ts
│   │   ├── tjanster.ts
│   │   ├── faq.ts
│   │   └── priser.ts
│   │
│   ├── sanity/
│   │   ├── client.ts             ← createClient med null-guard
│   │   ├── queries.ts            ← alla GROQ-queries med React cache()
│   │   ├── types.ts              ← TypeScript-interfaces för Sanity-dokument
│   │   └── schemas/
│   │       ├── index.ts
│   │       ├── post.ts
│   │       ├── teamMember.ts
│   │       ├── service.ts
│   │       ├── faqItem.ts
│   │       └── pricingPackage.ts
│   │
│   └── styles/
│       └── globals.css           ← @import "tailwindcss" + @theme { ... }
│
├── public/
│   └── assets/
│       ├── logo.svg
│       └── favicon.ico
│
├── .env.example
├── .env.local                    ← gitignorerad, aldrig committad
├── .gitignore
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Steg 1 — Kartlägg nuvarande struktur

Läs av projektets nuvarande mappstruktur i sin helhet. Gör ingenting ännu.

Svara på följande frågor:

1. Finns `src/app`-mappen? Om inte — projektet använder Pages Router, dessa instruktioner gäller inte. Avbryt.
2. Finns `src/components`-mapp? Vad innehåller den?
3. Finns `src/config/client.ts`?
4. Finns `src/sanity/`-mappen?
5. Finns `src/data/`-mappen?
6. Finns `src/styles/globals.css`?
7. Vilka sidor finns redan under `src/app`?
8. Används Tailwind v4 (`@import "tailwindcss"` i globals.css, ingen tailwind.config.ts)?

Sammanfatta fynden och lista exakt vilka ändringar som behöver göras innan du börjar.

---

## Steg 2 — Skapa mappstruktur

Skapa följande mappar om de inte finns. Skapa aldrig om en mapp som redan existerar.

```bash
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/config
mkdir -p src/data
mkdir -p src/sanity/schemas
mkdir -p src/styles
mkdir -p public/assets
mkdir -p src/app/om-oss
mkdir -p src/app/tjanster
mkdir -p src/app/kontakt
mkdir -p src/app/priser
mkdir -p src/app/faq
mkdir -p src/app/blogg/\[slug\]
mkdir -p src/app/medarbetare
mkdir -p src/app/integritetspolicy
```

---

## Steg 3 — Flytta och namnge komponenter

### 3.1 Layout-komponenter → `src/components/layout/`

- `Header`, `Navbar`, `Nav`, `Navigation` → `Header.tsx`
- `Footer` → `Footer.tsx`
- `CookieBanner`, `CookieConsent` → `CookieBanner.tsx`

Om `CookieBanner.tsx` saknas, skapa platshållare:

```tsx
// TODO: Implementera cookie-banner (t.ex. CookieYes eller Cookiebot)
export default function CookieBanner() {
  return null;
}
```

### 3.2 Sektionskomponenter → `src/components/sections/`

- `Hero*` → `Hero.tsx`
- `Services*`, `Tjanster*` → `Services.tsx`
- `About*`, `OmOss*` → `About.tsx`
- `Contact*`, `Kontakt*` → `Contact.tsx`

Dessa är initialt platshållare. Faktiskt innehåll bor i `src/app/page.tsx` tills man väljer att extrahera det.

### 3.3 UI-komponenter → `src/components/ui/`

Behåll projektspecifika namn (t.ex. `BrutalistButton.tsx`, `BrutalistCard.tsx`). Döp aldrig om dem om de redan fungerar. Flytta bara om de ligger fel.

### 3.4 Uppdatera imports

Använd alltid `@/` som alias:

```tsx
import Header from '@/components/layout/Header'
import { getAllPosts } from '@/sanity/queries'
```

Verifiera att `tsconfig.json` har:
```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}
```

---

## Steg 4 — Konfigurera `src/config/client.ts`

All **statisk** kundkonfiguration samlas här. Det som kunderna kan redigera i CMS ska **inte** ligga här — se Steg 5 (Sanity).

```typescript
// src/config/client.ts
// -----------------------------------------------
// Alla kundspecifika STATISKA värden samlas här.
// Ändra endast den här filen när du sätter upp en ny kund.
// -----------------------------------------------
//
// OBS — Tailwind v4:
// Det här projektet använder Tailwind v4 (ingen tailwind.config.ts).
// Färgerna nedan speglas i src/styles/globals.css under @theme {}.
// Håll dem synkroniserade manuellt om du byter färger.
// -----------------------------------------------

export const client = {

  // ── GRUNDINFO ──────────────────────────────────────
  name: "Företagsnamn AB",
  tagline: "En kort beskrivande tagline",
  logo: "/assets/logo.svg",
  favicon: "/assets/favicon.ico",

  // ── FÄRGER ─────────────────────────────────────────
  // Speglas i src/styles/globals.css @theme {}
  colors: {
    primary: "#c9521a",    // accent, CTA-knappar
    secondary: "#ffeb3b",  // highlight, mark-element
    background: "#fafaf8", // sidans bakgrund
    text: "#0a0a0a",       // brödtext och rubriker
  },

  // ── KONTAKT ────────────────────────────────────────
  contact: {
    phone: "070-000 00 00",
    email: "info@företag.se",
    address: "Gatan 1, 123 45 Stad",
    orgNumber: "556000-0000",
  },

  // ── ÖPPETTIDER ─────────────────────────────────────
  hours: [
    { day: "Måndag–Fredag", time: "09:00–17:00" },
    { day: "Lördag", time: "Stängt" },
    { day: "Söndag", time: "Stängt" },
  ],

  // ── SOCIALA MEDIER ─────────────────────────────────
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // ── SEO ────────────────────────────────────────────
  seo: {
    title: "Företagsnamn — Tagline",
    description: "Kort beskrivning för sökmotorer, max 160 tecken.",
    keywords: ["nyckelord1", "nyckelord2", "stad"] as string[],
  },

  // ── CMS (SANITY) ───────────────────────────────────
  // Läses primärt från miljövariabler i .env.local.
  // Dessa värden dokumenterar vilka schema-typer som används.
  // CMS-innehåll som hanteras via Sanity:
  //   - Blogginlägg (post)
  //   - Medarbetare (teamMember)
  //   - Tjänster (service)
  //   - FAQ-frågor (faqItem)
  //   - Prispaket (pricingPackage)
  sanity: {
    projectId: "", // Fyll i eller sätt NEXT_PUBLIC_SANITY_PROJECT_ID i .env.local
    dataset: "production",
  },

  // ── ADDONS ─────────────────────────────────────────
  addons: {
    chatbot: {
      enabled: false,
      provider: "tidio" as "tidio" | "intercom" | "claude",
      snippetId: "",
    },
    ecommerce: {
      enabled: false,
      stripePublicKey: "",
    },
  },

} as const;

export type ClientConfig = typeof client;
```

### 4.1 Koppla färger till Tailwind v4

Tailwind v4 använder **ingen** `tailwind.config.ts`. Färger definieras med `@theme` i `globals.css`:

```css
/* src/styles/globals.css */
@import "tailwindcss";

@theme {
  --color-primary: #c9521a;   /* byt till client.colors.primary */
  --color-secondary: #ffeb3b;
  --color-ink: #0a0a0a;
  --color-cream: #fafaf8;
  --color-muted: #6b6b6b;

  --font-display: var(--font-dm-serif-display);
  --font-body: var(--font-fira-sans);
}
```

Håll `@theme`-värden synkroniserade med `client.colors` manuellt.

---

## Steg 5 — Konfigurera Sanity CMS

Sanity hanterar allt **redigerbart** innehåll som kunden ska kunna ändra utan att kontakta en utvecklare.

### 5.1 Installera paket

```bash
npm install next-sanity @sanity/image-url
```

### 5.2 Skapa `src/sanity/client.ts`

```typescript
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

// Null-guard: sidan bygger och fungerar utan CMS kopplat.
// Alla query-funktioner returnerar [] eller null om sanityClient är null.
export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: process.env.NODE_ENV === "production" })
  : null;
```

### 5.3 Skapa `src/sanity/types.ts`

```typescript
export interface SanityPost {
  _id: string;
  _type: "post";
  title: string;
  slug: { current: string };
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  readTime: string;
  author: { name: string; title: string };
}

export interface SanityTeamMember {
  _id: string;
  _type: "teamMember";
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  personal: string;
  email: string;
  phone: string;
  initials: string;
  accentColor: string;
  order: number;
}

export interface SanityService {
  _id: string;
  _type: "service";
  title: string;
  icon: string;
  shortDesc: string;
  whatItMeans: string;
  whenYouNeedIt: string;
  howWeHelp: string;
  price: string;
  color: "orange" | "yellow";
  order: number;
}

export interface SanityFaqItem {
  _id: string;
  _type: "faqItem";
  question: string;
  answer: string;
  category: "skilsmassa" | "vardnad" | "ekonomi" | "process" | "kostnader";
  order: number;
}

export interface SanityPricingPackage {
  _id: string;
  _type: "pricingPackage";
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  included: string[];
  highlight: boolean;
  order: number;
}
```

### 5.4 Skapa `src/sanity/queries.ts`

```typescript
import { cache } from "react";
import { sanityClient } from "./client";
import type { SanityPost, SanityTeamMember, SanityService, SanityFaqItem, SanityPricingPackage } from "./types";

export const getAllPosts = cache(async (): Promise<SanityPost[]> => {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, _type, title, slug, excerpt, content,
      publishedAt, category, readTime,
      "author": author->{ name, title }
    }`,
    {}, { next: { tags: ["posts"] } }
  );
});

export const getPostBySlug = cache(async (slug: string): Promise<SanityPost | null> => {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, _type, title, slug, excerpt, content,
      publishedAt, category, readTime,
      "author": author->{ name, title }
    }`,
    { slug }, { next: { tags: [`post:${slug}`] } }
  );
});

export const getPostSlugs = cache(async (): Promise<{ slug: string }[]> => {
  if (!sanityClient) return [];
  return sanityClient.fetch(`*[_type == "post"]{ "slug": slug.current }`, {}, { next: { tags: ["posts"] } });
});

export const getAllTeamMembers = cache(async (): Promise<SanityTeamMember[]> => {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, _type, name, title, specialties, bio, personal, email, phone, initials, accentColor, order
    }`,
    {}, { next: { tags: ["team"] } }
  );
});

export const getAllServices = cache(async (): Promise<SanityService[]> => {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, _type, title, icon, shortDesc, whatItMeans, whenYouNeedIt, howWeHelp, price, color, order
    }`,
    {}, { next: { tags: ["services"] } }
  );
});

export const getAllFaqItems = cache(async (): Promise<SanityFaqItem[]> => {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "faqItem"] | order(order asc) { _id, _type, question, answer, category, order }`,
    {}, { next: { tags: ["faq"] } }
  );
});

export const getAllPricingPackages = cache(async (): Promise<SanityPricingPackage[]> => {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "pricingPackage"] | order(order asc) {
      _id, _type, title, subtitle, price, priceNote, included, highlight, order
    }`,
    {}, { next: { tags: ["pricing"] } }
  );
});
```

### 5.5 Skapa schemas under `src/sanity/schemas/`

Skapa en fil per innehållstyp. Exempel för blogginlägg (`post.ts`):

```typescript
import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Blogginlägg",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Rubrik", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Ingress", type: "text", rows: 3 }),
    defineField({ name: "content", title: "Innehåll (Markdown)", type: "text", rows: 20 }),
    defineField({ name: "publishedAt", title: "Publiceringsdatum", type: "datetime" }),
    defineField({ name: "category", title: "Kategori", type: "string" }),
    defineField({ name: "readTime", title: "Lästid", type: "string" }),
    defineField({ name: "author", title: "Författare", type: "reference", to: [{ type: "teamMember" }] }),
  ],
});
```

Skapa `schemas/index.ts` som re-exporterar alla schemas.

### 5.6 Skapa tunna data-lager i `src/data/`

Dessa filer är tunna wrappers — de re-exporterar från `sanity/queries` och ger bakåtkompatibilitet:

```typescript
// src/data/blogg.ts
export type { SanityPost as BloggPost } from "@/sanity/types";
export { getAllPosts, getPostBySlug, getPostSlugs } from "@/sanity/queries";
```

```typescript
// src/data/faq.ts
export type { SanityFaqItem as FaqItem } from "@/sanity/types";
export { getAllFaqItems } from "@/sanity/queries";

export type FaqCategory = "skilsmassa" | "vardnad" | "ekonomi" | "process" | "kostnader";

export const faqCategories: { id: FaqCategory | "alla"; label: string }[] = [
  { id: "alla", label: "Alla frågor" },
  { id: "skilsmassa", label: "Skilsmässa" },
  { id: "vardnad", label: "Vårdnad" },
  { id: "ekonomi", label: "Ekonomi & arv" },
  { id: "kostnader", label: "Kostnader" },
  { id: "process", label: "Processen" },
];
```

---

## Steg 6 — Sidmönster för async Server Components

### 6.1 Standardmönster för sidor med CMS-data

Alla sidor som hämtar från Sanity ska vara `async` Server Components med `revalidate`:

```tsx
// src/app/tjanster/page.tsx
import { getAllServices } from "@/sanity/queries";

export const revalidate = 3600; // 1 timme ISR-cache

export default async function TjansterPage() {
  const tjanster = await getAllServices();

  return (
    <>
      {tjanster.map((t) => (
        <div key={t._id}>{t.title}</div>
      ))}
    </>
  );
}
```

**Viktiga regler:**
- Använd alltid `_id` som `key`-prop (inte `id`)
- Datumfält heter `publishedAt` (ISO-sträng), formatera med `toLocaleDateString("sv-SE", ...)`
- `author` är ett objekt `{ name, title }` — kom ihåg `post.author.name`, inte `post.author`
- Skydda alltid direkt indexåtkomst: `array[0]?.field`, eller wrappa i `{array.length > 0 && ...}`

### 6.2 Mönster för interaktiva sidor (search/filter)

Sidor med tillstånd (t.ex. FAQ med sökfält) delas upp i Server + Client:

```
src/app/faq/page.tsx          ← Server Component, fetchar data
src/components/ui/FaqPageClient.tsx  ← "use client", tar emot data som props
```

```tsx
// src/app/faq/page.tsx
import FaqPageClient from "@/components/ui/FaqPageClient";
import { getAllFaqItems } from "@/sanity/queries";

export const revalidate = 3600;

export default async function FaqPage() {
  const items = await getAllFaqItems();
  return (
    <>
      {/* Statisk hero ... */}
      <FaqPageClient items={items} />
    </>
  );
}
```

### 6.3 Dynamiska routes med `generateStaticParams`

```tsx
// src/app/blogg/[slug]/page.tsx
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/sanity/queries";
import { notFound } from "next/navigation";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>; // Next.js 16: params är ett Promise
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function BloggPostPage({ params }: Props) {
  const { slug } = await params; // Next.js 16: await params
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  // ...
}
```

---

## Steg 7 — Konfigurera `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { DM_Serif_Display, Fira_Sans } from "next/font/google";
import "@/styles/globals.css";
import { client } from "@/config/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const firaSans = Fira_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: client.seo.title,
  description: client.seo.description,
  keywords: [...client.seo.keywords], // spread för att konvertera readonly tuple till mutable array
  icons: { icon: client.favicon },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`h-full ${dmSerifDisplay.variable} ${firaSans.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-[#0a0a0a]">
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
```

---

## Steg 8 — Obligatoriska sidor

Skapa platshållare för alla sidor som saknas:

```tsx
// Standardplatshållare
export default function SidaPage() {
  return <div>Under uppbyggnad</div>;
}
```

### Sidor som alltid ska finnas

| Rutt | Fil | CMS-data |
|------|-----|----------|
| `/` | `src/app/page.tsx` | Tjänster, medarbetare, FAQ, blogg |
| `/om-oss` | `src/app/om-oss/page.tsx` | Frivilligt |
| `/tjanster` | `src/app/tjanster/page.tsx` | `getAllServices()` |
| `/medarbetare` | `src/app/medarbetare/page.tsx` | `getAllTeamMembers()` |
| `/faq` | `src/app/faq/page.tsx` | `getAllFaqItems()` |
| `/priser` | `src/app/priser/page.tsx` | `getAllPricingPackages()` |
| `/blogg` | `src/app/blogg/page.tsx` | `getAllPosts()` |
| `/blogg/[slug]` | `src/app/blogg/[slug]/page.tsx` | `getPostBySlug()` |
| `/kontakt` | `src/app/kontakt/page.tsx` | Statisk |
| `/integritetspolicy` | `src/app/integritetspolicy/page.tsx` | Statisk |

---

## Steg 9 — Konfigurera miljövariabler

### 9.1 `.env.example` (committad till git)

```bash
# .env.example
# Kopiera den här filen till .env.local och fyll i dina värden

# ─── Sanity CMS ──────────────────────────────────────────────────────────────
# Hämta värden från sanity.io/manage
# Settings → API → Tokens → Lägg till "Viewer"-token för produktion
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
# SANITY_API_READ_TOKEN=   (valfri, för draftläge)

# ─── Kontaktformulär ─────────────────────────────────────────────────────────
RESEND_API_KEY=

# ─── E-handel (om aktiverat) ─────────────────────────────────────────────────
# NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
# STRIPE_SECRET_KEY=
```

### 9.2 `.gitignore`

Verifiera att dessa rader finns:

```
.env.local
.env*.local
.next/
out/
node_modules/
.DS_Store
```

---

## Steg 10 — `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" }, // För Sanity-bilder
    ],
  },
};

export default nextConfig;
```

---

## Steg 11 — Slutverifiering

### Struktur
- [ ] `src/app` innehåller `layout.tsx` och `page.tsx`
- [ ] Alla obligatoriska sidor finns (se tabell i Steg 8)
- [ ] `src/components/layout/` innehåller `Header.tsx`, `Footer.tsx`, `CookieBanner.tsx`
- [ ] `src/components/sections/` innehåller minst `Hero.tsx`
- [ ] `src/components/ui/` innehåller `Button.tsx` (eller projektspecifikt namn)
- [ ] `src/config/client.ts` finns med alla obligatoriska fält
- [ ] `src/sanity/client.ts`, `queries.ts`, `types.ts` finns
- [ ] `src/sanity/schemas/` innehåller schemas för alla typer
- [ ] `src/data/` innehåller tunna re-exportfiler
- [ ] `src/styles/globals.css` använder `@import "tailwindcss"` och `@theme {}`
- [ ] `public/assets/` finns

### Konfiguration
- [ ] `src/app/layout.tsx` importerar från `client.ts`, inkluderar Header/Footer/CookieBanner
- [ ] Fonter laddas med `next/font/google` (inte `@fontsource`)
- [ ] Alla sidor med CMS-data har `export const revalidate = 3600`
- [ ] Alla `params` i dynamiska routes awaitas: `const { slug } = await params`
- [ ] Alla Sanity-fält använder `_id` (inte `id`) som React `key`
- [ ] `author` används som `post.author.name` / `post.author.title` (inte platt sträng)
- [ ] Alla direkta `array[0]`-åtkomster skyddas med null-check
- [ ] Alla imports använder `@/`-alias
- [ ] `.env.example` finns och är komplett
- [ ] `.gitignore` inkluderar `.env.local`

### Bygg-test
```bash
npx tsc --noEmit    # Inga TypeScript-fel
npm run build       # Produktionsbygge utan fel
```

---

## Steg 12 — Aktivera Sanity (görs manuellt av utvecklaren)

När kunden är redo att börja använda CMS:

1. Skapa Sanity-projekt på [sanity.io](https://sanity.io)
2. Kopiera `.env.example` → `.env.local` och fyll i `NEXT_PUBLIC_SANITY_PROJECT_ID`
3. Sätt upp Sanity Studio (separat repo eller `/studio` i samma repo)
4. Importera schemas från `src/sanity/schemas/` till Sanity Studio
5. Mata in innehåll (eller migrera från statiska datafiler)
6. Sätt upp webhook: Sanity → `/api/revalidate` med `revalidateTag()` för on-demand ISR

---

## Viktiga regler för agenten

- **Fråga alltid innan du tar bort filer.** Flytta hellre till rätt plats än att radera.
- **Ändra aldrig logik eller design** — du standardiserar struktur, inte funktionalitet.
- **Om en fil redan är på rätt plats med rätt namn** — rör den inte, även om innehållet verkar annorlunda.
- **Om du hittar en fil du inte vet var den ska** — fråga användaren innan du bestämmer.
- **Döp aldrig om projektspecifika UI-komponenter** (t.ex. `BrutalistButton.tsx`) om de fungerar.
- **Kör alltid `npx tsc --noEmit` och `npm run build` sist** för att verifiera att ingenting gick sönder.
- **Committa aldrig själv** — låt användaren göra git-commits efter att de granskat ändringarna.
- **Läs Next.js docs** i `node_modules/next/dist/docs/` innan du skriver kod — API:er ändras mellan versioner.
