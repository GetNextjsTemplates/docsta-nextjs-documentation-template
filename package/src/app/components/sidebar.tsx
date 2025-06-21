'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { sanity } from '@/lib/sanity'
import { getAllDocsQuery } from '@/lib/sanityQueries'
import { usePathname } from 'next/navigation'

export default function Sidebar({ onLinkClick }: any) {
  const pathname = usePathname()
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
    <div className='flex flex-col gap-4'>
      {Object.entries(grouped).map(([category, pages]: any) => (
        <div key={category} className="pb-4 border-b border-smokyBlack/10 dark:border-white/10 last:border-b-0">
          <p className="text-sm font-medium uppercase text-secondary dark:text-white mb-3">{category}</p>
          <ul className="border-l border-smokyBlack/10 dark:border-white/10">
            {pages.map((page: any) => (
              <li key={page._id} className={`py-1 px-4 ${pathname === `/docs/${page.slug.current}` ? 'border-l border-smokyBlack dark:border-white' : ''}`}>
                <Link
                  onClick={onLinkClick}
                  href={`/docs/${page.slug.current}`}
                  className={`text-base hover:text-smokyBlack dark:hover:text-white ${pathname === `/docs/${page.slug.current}` ? 'text-smokyBlack dark:text-white font-bold' : 'text-secondary font-normal'
                    }`}
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
