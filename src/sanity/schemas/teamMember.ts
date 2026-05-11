import { defineField, defineType } from 'sanity'

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Medarbetare',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Namn', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'title', title: 'Titel', type: 'string' }),
    defineField({ name: 'specialties', title: 'Specialiteter', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'bio', title: 'Biografi', type: 'text', rows: 4 }),
    defineField({ name: 'personal', title: 'Personligt', type: 'text', rows: 3 }),
    defineField({ name: 'email', title: 'E-post', type: 'string' }),
    defineField({ name: 'phone', title: 'Telefon', type: 'string' }),
    defineField({ name: 'initials', title: 'Initialer', type: 'string' }),
    defineField({ name: 'accentColor', title: 'Accentfärg', type: 'string' }),
    defineField({ name: 'order', title: 'Sortering', type: 'number' }),
  ],
})
