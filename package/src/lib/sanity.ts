import { createClient } from 'next-sanity'

export const sanity = createClient({
  projectId: 'wqz7p0wf',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: false,
})


