'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { sanity } from '@/lib/sanity'
import { getAllDocsQuery } from '@/lib/sanityQueries'

export default function Sidebar() {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const fetchDocs = async () => {
      const res = await sanity.fetch(getAllDocsQuery)
      setDocs(res)
    }
    fetchDocs()
  }, [])

  const grouped = docs.reduce((acc: any, doc: any) => {
    acc[doc.category] = acc[doc.category] || []
    acc[doc.category].push(doc)
    return acc
  }, {})

  return (
    <div>
      {Object.entries(grouped).map(([category, pages]: any) => (
        <div key={category} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{category}</h3>
          <ul className="space-y-1">
            {pages.map((page: any) => (
              <li key={page._id}>
                <Link
                  href={`/docs/${page.slug.current}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
