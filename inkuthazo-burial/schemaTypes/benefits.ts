export default {
  name: 'benefit',
  title: 'Benefits',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Benefit Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Benefit Description',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Benefit Icon',
      type: 'image',
    },
    {
      name: 'svgIcon',
      title: 'SVG Icon',
      type: 'inlineSvg',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
