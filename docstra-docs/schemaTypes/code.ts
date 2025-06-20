// /schemas/codeBlock.ts

export default {
  name: 'code',
  title: 'Code Block',
  type: 'object',
  fields: [
    {
      name: 'filename',
      type: 'string',
      title: 'Filename',
    },
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'Bash', value: 'bash' },
          { title: 'JSON', value: 'json' },
          { title: 'Markdown', value: 'markdown' },
        ],
      },
    },
    {
      name: 'code',
      type: 'text',
      title: 'Code',
    },
  ],
}
