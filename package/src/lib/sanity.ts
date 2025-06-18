import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

export async function getAllDocs() {
  return await client.fetch(`*[_type == "docPage"]{title, slug}`)
}

export async function getDocBySlug(slug:any) {
  return await client.fetch(
    `*[_type == "docPage" && slug.current == $slug][0]`,
    { slug }
  )
}
