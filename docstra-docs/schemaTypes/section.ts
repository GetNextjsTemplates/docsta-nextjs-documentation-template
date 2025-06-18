export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'docPage' }] }],
    },
  ],
};
