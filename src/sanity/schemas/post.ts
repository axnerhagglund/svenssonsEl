import { defineField, defineType } from 'sanity'

export const postSchema = defineType({
  name: 'post',
  title: 'Blogginlägg',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Rubrik', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({ name: 'excerpt', title: 'Ingress', type: 'text', rows: 3 }),
    defineField({ name: 'content', title: 'Innehåll (Markdown)', type: 'text', rows: 20 }),
    defineField({ name: 'publishedAt', title: 'Publiceringsdatum', type: 'datetime' }),
    defineField({ name: 'category', title: 'Kategori', type: 'string' }),
    defineField({ name: 'readTime', title: 'Lästid', type: 'string' }),
    defineField({ name: 'author', title: 'Författare', type: 'reference', to: [{ type: 'teamMember' }] }),
  ],
})
