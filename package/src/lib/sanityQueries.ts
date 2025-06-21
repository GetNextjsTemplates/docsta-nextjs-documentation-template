export const getAllDocsQuery = `
  *[_type == "doc"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    order,
    content
  }
`

export const getDocBySlugQuery = (slug: string) => `
  *[_type == "doc" && slug.current == "${slug}"][0] {
    title,
    content
  }
`
