import { sanity } from '@/lib/sanity'
import { getDocBySlugQuery } from '@/lib/sanityQueries'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import DocumentationPage from '@/app/components/documentation'

export const metadata: Metadata = {
  title: 'Documentation | Docstra',
}

export default async function DocPage({ params }: any) {
  const doc = await sanity.fetch(getDocBySlugQuery(params?.slug))

  if (!doc) return notFound()

  return <DocumentationPage doc={doc} />
}
