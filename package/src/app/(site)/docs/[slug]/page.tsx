import { urlFor } from '@/lib/imageUrl'
import { sanity } from '@/lib/sanity'
import { getDocBySlugQuery } from '@/lib/sanityQueries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default async function DocPage({ params }: any) {
  const doc = await sanity.fetch(getDocBySlugQuery(params?.slug))

  if (!doc) return <div>Not found</div>

  const headings = doc.content
    .filter((block: any) => block._type === 'block' && [ 'h5', 'h4'].includes(block.style))
    .map((block: any) => ({
      text: block.children.map((c: any) => c.text).join(''),
      id: block._key,
      level: block.style,
    }))

  console.log("HEadinggnggng", headings);


  const components = {
    types: {
      cardGrid: ({ value }: any) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6 my-6 border-b border-smokyBlack/10">
          {value.cards.map((card: any, index: number) => (
            <div
              key={index}
              className="border border-smokyBlack/10 rounded-xl p-5"
            >
              {card.icon?.asset && (
                <Image
                  src={urlFor(card.icon)}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="mb-4"
                />
              )}
              <p className="text-smokyBlack font-bold">{card.title}</p>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      ),
      code: ({ value }: any) => (
        <div className="my-6">
          {value?.filename && (
            <div className="bg-[#282C34] text-sm px-4 py-3.5 rounded-t-md font-mono text-white border border-b-0 border-gray-300">
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language || 'javascript'}
            style={oneDark}
            customStyle={{
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              margin: 0,
              padding: '1rem',
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      ),
    },

    block: ({ children, value }: any) => {
      const style = value.style || 'normal'
      const id = value._key
      if (['h4', 'h5'].includes(style)) {
        const Tag = style
        return (
          <Tag
            id={id}
            className={`pt-4 scroll-mt-24 ${style === 'h2' ? 'text-2xl font-bold mt-10' : 'text-xl font-semibold mt-6'}`}
          >
            {children}
          </Tag>
        )
      }
      return <p className="mt-4">{children}</p>
    },

    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-5 pt-4 space-y-2 text-smokyBlack">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal pl-5 space-y-2 text-smokyBlack">{children}</ol>
      ),
    },

    listItem: {
      bullet: ({ children }: any) => <li>{children}</li>,
      number: ({ children }: any) => <li>{children}</li>,
    },
  }


  return (
    <div className="flex items-start ">
      <div className="max-w-3xl mx-auto px-4">
        <div className="docs-content">
          <h1 className="text-4xl text-smokyBlack mb-6">{doc.title}</h1>
          <PortableText value={doc.content} components={components} />
        </div>

        <div className="flex flex-col gap-3 py-6 mt-6 border-t border-smokyBlack/10">
          <p className="text-smokyBlack font-semibold">
            What did you think of this content?
          </p>
          <div className="flex gap-8">
            {[
              { icon: 'like-icon', label: 'It was helpful' },
              { icon: 'dislike-icon', label: 'It was not helpful' },
              { icon: 'feedback-icon', label: 'I have a feedback' },
            ].map(({ icon, label }) => (
              <div className="flex items-center gap-2" key={icon}>
                <Image
                  src={`/images/doc-intro/${icon}.svg`}
                  alt={icon}
                  width={20}
                  height={20}
                />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="w-64 sticky top-24 h-fit hidden md:block text-sm">
        <p className="uppercase font-semibold mb-4 text-sm text-secondary">On this page</p>
        <ul className="border-l border-smokyBlack/10">
          {headings.map(({ id, text, level }: any) => {
            console.log(text);
            
            return (
              <li key={id} className="py-1 px-3">
                <a
                  href={`#${id}`}
                  className="block hover:text-black text-sm font-normal text-secondary"
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}
