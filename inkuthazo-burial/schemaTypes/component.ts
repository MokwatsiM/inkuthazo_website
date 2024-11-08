// schemas/component.js
export default {
  name: 'component',
  title: 'Component',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A descriptive title for the component.',
    },
    {
      name: 'type',
      title: 'Component Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hero', value: 'hero' },
          { title: 'Feature', value: 'feature' },
          { title: 'Call to Action', value: 'cta' },
          { title: 'Testimonial', value: 'testimonial' },
          // Add more component types as needed
        ],
      },
      description: 'Type of component for rendering purposes.',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        {
          type: 'reference',
          to: [{ type: 'component' }],
          description: 'Link to other components, if needed.',
        },
      ],
      description: 'Content for this component, including text, images, or other references.',
    },
    {
      name: 'settings',
      title: 'Settings',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Hex code or color name for component background.',
        },
        {
          name: 'alignment',
          title: 'Text Alignment',
          type: 'string',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Center', value: 'center' },
              { title: 'Right', value: 'right' },
            ],
          },
          description: 'Text alignment for component content.',
        },
        {
          name: 'padding',
          title: 'Padding',
          type: 'string',
          description: 'Custom padding settings for this component (e.g., "20px" or "2rem").',
        },
      ],
      description: 'Style and layout settings for the component.',
    },
  ],
};
