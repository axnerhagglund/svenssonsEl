import { defineField, defineType } from 'sanity'

export const pricingPackageSchema = defineType({
  name: 'pricingPackage',
  title: 'Prispaket',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Rubrik', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'subtitle', title: 'Underrubrik', type: 'string' }),
    defineField({ name: 'price', title: 'Pris', type: 'string' }),
    defineField({ name: 'priceNote', title: 'Prisnotering', type: 'string' }),
    defineField({ name: 'included', title: 'Ingår', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'highlight', title: 'Framhävd', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sortering', type: 'number' }),
  ],
})
