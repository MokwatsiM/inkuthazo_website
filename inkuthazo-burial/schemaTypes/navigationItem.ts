export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The text that will be displayed in the navigation link.',
    },
      {
        
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL slug for this item.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'External URL or internal route.',
    },
    {
      name: 'component',
      title: 'Component',
      type: 'reference',
      to: [{ type: 'component' }], // assumes you have a 'component' schema for reusable components
      description: 'Link this navigation item to a specific component or section of a page.',
    },
    {
      name: 'subItems',
      title: 'Sub Items',
      type: 'array',
      of: [{ type: 'navigationItem' }],
      description: 'Sub-navigation items for dropdowns or nested menus.',
    },
  ],
};