import {defineField, defineType} from 'sanity'

export const gathering = defineType({
  name: 'gathering',
  title: 'Gathering',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateLabel',
      title: 'Date',
      type: 'string',
      description:
        'Shown exactly as written, so recurring dates work: "2nd Sunday of every month", or "Date set at the November meeting".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'For example "13:00", or "Confirmed to members".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'audience',
      title: 'Who it is for',
      type: 'string',
      initialValue: 'All members',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first. Recurring gatherings usually sit above one-off ones.',
      initialValue: 0,
      validation: (rule) => rule.required().integer(),
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'displayOrder',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'dateLabel'},
  },
})
