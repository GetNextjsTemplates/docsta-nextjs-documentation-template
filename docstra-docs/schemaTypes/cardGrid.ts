export default {
  name: 'cardGrid',
  title: 'Card Grid',
  type: 'object',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'icon', type: 'image', title: 'Icon' },
          ]
        }
      ]
    }
  ]
}
