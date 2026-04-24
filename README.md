# Svensson El (template)

Next.js 14-app (App Router) för en hantverkar-webbplats.

## Utveckling

```bash
npm install
npm run dev
```

## Deploy på Vercel

1. Pusha repot till GitHub (eller GitLab/Bitbucket).
2. I [Vercel](https://vercel.com): **Add New Project** → importera repot.
3. Vercel känner igen **Next.js** automatiskt; byggkommando är `next build` och output **default** (ingen extra `vercel.json` behövs).
4. **Miljövariabler (valfritt):** Under *Settings → Environment Variables*, lägg till `NEXT_PUBLIC_SITE_URL` för produktionsdomänen (t.ex. `https://din-domän.se`) så metadata (`metadataBase`) och länkar får rätt kanonisk URL. Preview-miljöer använder `VERCEL_URL` automatiskt.
5. Deploy: varje push till standardbranch bygger och publicerar.

Lokal preview av produktionsbygge: `npm run build && npm start`.

## Teknik

- Node **>= 18.18** (matchar Vercels LTS-stöd).
- Statisk generering där sidor tillåter det; inga server-only hemligheter krävs för denna mall.
