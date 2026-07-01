import { getArticleBySlug, articles } from "@/lib/articles";
import Link from "next/link";
import type { Metadata } from "next";

// Statically generate all routes at build time for maximum performance
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.summary };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return (
      <main className="grow flex flex-col items-center justify-center pt-32 pb-24 text-center px-6">
        <div className="text-rose-400 font-mono text-xl mb-4">SYSTEM ERROR: Article not found!</div>
        <div className="text-slate-300 font-mono">Searched for slug: <span className="text-[#D4AF37]">"{params.slug}"</span></div>
        <div className="text-slate-500 font-mono mt-4 text-xs max-w-lg">Available slugs in database: {articles.map(a => a.slug).join(", ")}</div>
      </main>
    );
  }

  return (
    <main className="grow flex flex-col items-center justify-start pt-32 pb-24 px-6 md:px-8 w-full max-w-3xl mx-auto">
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

        <div className="text-slate-300 text-lg leading-relaxed space-y-6">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph.trim()}</p>
          ))}
        </div>
      </article>
    </main>
  );
}