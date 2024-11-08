export default {
  name: 'mission',
  title: 'Our Mission',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Mission Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}