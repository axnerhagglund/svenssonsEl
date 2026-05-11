import { cache } from 'react'
import { sanityClient } from './client'
import type {
  SanityFaqItem,
  SanityPost,
  SanityPricingPackage,
  SanityService,
  SanityTeamMember,
} from './types'

export const getAllPosts = cache(async (): Promise<SanityPost[]> => {
  if (!sanityClient) return []
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, _type, title, slug, excerpt, content,
      publishedAt, category, readTime,
      "author": author->{ name, title }
    }`,
    {},
    { next: { tags: ['posts'] } },
  )
})

export const getPostBySlug = cache(async (slug: string): Promise<SanityPost | null> => {
  if (!sanityClient) return null
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, _type, title, slug, excerpt, content,
      publishedAt, category, readTime,
      "author": author->{ name, title }
    }`,
    { slug },
    { next: { tags: [`post:${slug}`] } },
  )
})

export const getPostSlugs = cache(async (): Promise<{ slug: string }[]> => {
  if (!sanityClient) return []
  return sanityClient.fetch(
    `*[_type == "post"]{ "slug": slug.current }`,
    {},
    { next: { tags: ['posts'] } },
  )
})

export const getAllTeamMembers = cache(async (): Promise<SanityTeamMember[]> => {
  if (!sanityClient) return []
  return sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, _type, name, title, specialties, bio, personal,
      email, phone, initials, accentColor, order
    }`,
    {},
    { next: { tags: ['team'] } },
  )
})

export const getAllServices = cache(async (): Promise<SanityService[]> => {
  if (!sanityClient) return []
  return sanityClient.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, _type, title, icon, shortDesc, whatItMeans,
      whenYouNeedIt, howWeHelp, price, color, order
    }`,
    {},
    { next: { tags: ['services'] } },
  )
})

export const getAllFaqItems = cache(async (): Promise<SanityFaqItem[]> => {
  if (!sanityClient) return []
  return sanityClient.fetch(
    `*[_type == "faqItem"] | order(order asc) {
      _id, _type, question, answer, category, order
    }`,
    {},
    { next: { tags: ['faq'] } },
  )
})

export const getAllPricingPackages = cache(async (): Promise<SanityPricingPackage[]> => {
  if (!sanityClient) return []
  return sanityClient.fetch(
    `*[_type == "pricingPackage"] | order(order asc) {
      _id, _type, title, subtitle, price, priceNote, included, highlight, order
    }`,
    {},
    { next: { tags: ['pricing'] } },
  )
})
