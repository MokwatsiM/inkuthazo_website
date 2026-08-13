import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Singleton: the About section's story and highlight cards.
 * Held at the fixed id `aboutSection`.
 */
export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About section',
  type: 'document',
  groups: [
    {name: 'story', title: 'Story', default: true},
    {name: 'highlights', title: 'Highlights'},
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Small label',
      type: 'string',
      group: 'story',
      initialValue: 'About Inkuthazo',
      description: 'The short line above the heading.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'story',
      initialValue: 'Our story, reimagined.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'story',
      title: 'Story',
      type: 'array',
      group: 'story',
      description: 'Each entry is a paragraph. Keep it plain and in the club’s own voice.',
      of: [defineArrayMember({type: 'text', rows: 4})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      group: 'highlights',
      description: 'The cards beside the story. Four reads best; more will wrap.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'highlight',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Heritage (clock)', value: 'History'},
                  {title: 'Community (people)', value: 'Users'},
                  {title: 'Development (graduation cap)', value: 'GraduationCap'},
                  {title: 'Financial growth (upward trend)', value: 'TrendingUp'},
                  {title: 'Support (clasped hands)', value: 'HeartHandshake'},
                  {title: 'Accountability (shield)', value: 'ShieldCheck'},
                ],
              },
              initialValue: 'History',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: 'About section', subtitle: title}),
  },
})
