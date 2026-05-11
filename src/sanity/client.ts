import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01'

// Null-guard: sidan bygger och fungerar utan CMS kopplat.
export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null
