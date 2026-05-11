import { defineField, defineType } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Tjänst',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Rubrik', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'icon', title: 'Ikon', type: 'string' }),
    defineField({ name: 'shortDesc', title: 'Kort beskrivning', type: 'text', rows: 3 }),
    defineField({ name: 'whatItMeans', title: 'Vad det innebär', type: 'text', rows: 4 }),
    defineField({ name: 'whenYouNeedIt', title: 'När du behöver det', type: 'text', rows: 4 }),
    defineField({ name: 'howWeHelp', title: 'Hur vi hjälper', type: 'text', rows: 4 }),
    defineField({ name: 'price', title: 'Pris', type: 'string' }),
    defineField({
      name: 'color',
      title: 'Färg',
      type: 'string',
      options: { list: ['orange', 'yellow'] },
    }),
    defineField({ name: 'order', title: 'Sortering', type: 'number' }),
  ],
})
