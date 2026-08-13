import {defineField, defineType} from 'sanity'

/**
 * Singleton: imagery and copy that belongs to the site rather than to a
 * particular section. Held at the fixed id `siteSettings`.
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero photograph',
      type: 'image',
      options: {
        hotspot: true,
      },
      description:
        'The main photograph at the top of the site. Use the hotspot to choose which part stays in frame when the image is cropped on smaller screens.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description:
            'Describes the photograph for screen readers and search engines. For example: "Inkuthazo Social Club members gathered together".',
          validation: (rule) =>
            rule.required().warning('Alt text is important for accessibility and SEO'),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {media: 'heroImage'},
    prepare: ({media}) => ({title: 'Site settings', media}),
  },
})
