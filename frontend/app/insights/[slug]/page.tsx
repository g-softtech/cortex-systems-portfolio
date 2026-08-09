import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import { client } from '../../../sanity/lib/client'
import { articleBySlugQuery, articleSlugsQuery } from '../../../sanity/lib/queries'

// Statically generate routes at build time
export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(articleSlugsQuery)
    return slugs.map((article) => ({
      slug: article.slug,
    }))
  } catch (error) {
    console.error("Failed to generate static params from Sanity:", error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const article = await client.fetch(articleBySlugQuery, { slug: params.slug })
    if (!article) return { title: 'Article Not Found' }
    return { title: article.title, description: article.summary }
  } catch (error) {
    console.error("Sanity fetch error in generateMetadata:", error)
    // CMS outage fallback
    return { title: 'Insights | Cortex Systems' }
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  let article;
  try {
    article = await client.fetch(articleBySlugQuery, { slug: params.slug })
  } catch (error) {
    console.error("Sanity fetch error in ArticlePage:", error)
    // Throw to bubble up to error boundary (500) rather than 404ing on a network failure
    throw new Error('Service Unavailable: Could not fetch article data')
  }

  // If the fetch succeeded but returned null, the article truly doesn't exist (or isn't published)
  if (!article) {
    notFound()
  }

  // Safe JSON-LD Serialization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Cortex Systems',
    },
    url: `https://www.thecortexsystems.com/insights/${article.slug}`,
  }

  return (
    <main className="grow flex flex-col items-center justify-start pt-32 pb-24 px-6 md:px-8 w-full max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/#insights" className="self-start mb-12 text-[#D4AF37] font-mono text-sm hover:text-white transition-colors">
        &larr; Return to Dashboard
      </Link>
      
      <article className="w-full">
        <header className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-4 mb-6 font-mono text-xs text-slate-500">
            <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800 text-slate-300">{article.category}</span>
            <span>{article.readTime}</span>
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">{article.title}</h1>
          <p className="text-xl text-slate-400 leading-relaxed">{article.summary}</p>
        </header>

        <div className="text-slate-300 text-lg leading-relaxed space-y-6 prose prose-invert prose-slate max-w-none prose-p:leading-relaxed prose-a:text-[#D4AF37]">
          {Array.isArray(article.content) ? (
            <PortableText value={article.content} />
          ) : (
            <p>{typeof article.content === 'string' ? article.content : ''}</p>
          )}
        </div>
      </article>
    </main>
  )
}