import { groq } from 'next-sanity'

export const articlesQuery = groq`
  *[_type == "post" && defined(slug.current) && date <= now()] | order(date desc) {
    "slug": slug.current,
    title,
    mainImage,
    category,
    readTime,
    summary,
    content,
    date
  }
`

export const articleBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && date <= now()][0] {
    "slug": slug.current,
    title,
    mainImage,
    category,
    readTime,
    summary,
    content,
    date
  }
`

export const articleSlugsQuery = groq`
  *[_type == "post" && defined(slug.current) && date <= now()] {
    "slug": slug.current
  }
`
