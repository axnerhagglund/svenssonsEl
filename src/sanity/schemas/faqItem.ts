import { defineField, defineType } from 'sanity'

export const faqItemSchema = defineType({
  name: 'faqItem',
  title: 'FAQ-fråga',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Fråga', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'answer', title: 'Svar', type: 'text', rows: 5 }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: { list: ['skilsmassa', 'vardnad', 'ekonomi', 'process', 'kostnader'] },
    }),
    defineField({ name: 'order', title: 'Sortering', type: 'number' }),
  ],
})
