import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'wqz7p0wf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source).url()
}
