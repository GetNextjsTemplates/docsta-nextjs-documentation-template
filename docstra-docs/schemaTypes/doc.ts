export default {
  name: 'doc',
  type: 'document',
  title: 'Documentation Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    },
  ],
}
