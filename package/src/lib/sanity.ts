import { createClient } from 'next-sanity'

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: false,
})


