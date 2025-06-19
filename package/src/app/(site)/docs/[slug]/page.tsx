import { sanity } from '@/lib/sanity'
import { getDocBySlugQuery } from '@/lib/sanityQueries'
import { PortableText } from '@portabletext/react'

export default async function DocPage({ params }: { params: { slug: string } }) {
  const doc = await sanity.fetch(getDocBySlugQuery(params.slug))

  console.log("doc",doc);
  

  if (!doc) return <div>Not found</div>

  return (
    <div className="prose max-w-4xl px-6 py-10">
      <h1>{doc.title}</h1>
      <PortableText value={doc.content} />
    </div>
  )
}

export async function generateStaticParams() {
  const docs = await sanity.fetch(`*[_type == "doc"]{ "slug": slug.current }`)
  return docs.map((doc: any) => ({ slug: doc.slug }))
}
