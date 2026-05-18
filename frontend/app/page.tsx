// Dynamic route for individual technical insight articles
import GithubActivity from "@/components/github-activity";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import Link from "next/link";
import { articles, type Article } from "@/lib/articles";

export default function Page() {
  return (
    <main className="grow flex flex-col items-center justify-start pb-24 w-full">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 md:px-8 pt-24 md:pt-32 pb-16">
         <div className="lg:col-span-8 flex flex-col items-start gap-8">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
             Currently available for opportunities
           </div>

           <header className="space-y-4 border-l-2 border-[#D4AF37] pl-6">
             <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold tracking-tight text-white flex items-center gap-4">
               Cortex <span className="text-[#D4AF37]">Systems</span>
             </h1>
             <h2 className="text-xl md:text-2xl font-mono text-slate-400">
               Senior Fullstack Developer / Product Engineer
             </h2>
             <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mt-4">
               Intelligent Experiences. Secure Infrastructure. <br />
               Building high-velocity, constraint-driven digital products with a focus on architectural pragmatism.
             </p>
           </header>

           <div className="flex flex-wrap gap-4 mt-8">
             <a href="#projects" className="px-6 py-3 bg-[#D4AF37] text-[#0A192F] font-semibold rounded-md hover:bg-yellow-500 transition-all active:scale-95 font-mono text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
               VIEW_PROJECTS
             </a>
             <button aria-label="Open AI Command Center" className="px-6 py-3 border border-slate-700 hover:border-[#D4AF37] text-white font-semibold rounded-md transition-all active:scale-95 font-mono text-sm flex items-center gap-3 bg-[#0A192F]/50 backdrop-blur-sm">
               <span>Press</span>
             <span className="flex items-center gap-1"><kbd className="bg-slate-800 border border-slate-700 rounded px-2 py-0.5 text-xs text-[#D4AF37]">CTRL</kbd><kbd className="bg-slate-800 border border-slate-700 rounded px-2 py-0.5 text-xs text-[#D4AF37]">K</kbd></span>
               <span>to launch Command Center</span>
             </button>
             <Link href="/resume" className="px-6 py-3 border border-slate-700 hover:border-[#D4AF37] text-white font-semibold rounded-md transition-all active:scale-95 font-mono text-sm flex items-center gap-2 bg-[#0A192F]/50 backdrop-blur-sm">
               RÉSUMÉ ↗
             </Link>
           </div>
           <p className="mt-4 text-xs font-mono text-slate-500 md:hidden">
             Tap 'Ask Cortex' below to explore projects, articles, and architecture insights.
           </p>
         </div>
         <div className="lg:col-span-4 w-full">
            <GithubActivity />
         </div>
      </section>

      {/* Manifesto Section */}
      <section aria-labelledby="manifesto-heading" className="w-full max-w-6xl px-6 md:px-8 py-16">
        <h3 id="manifesto-heading" className="text-sm font-mono text-[#D4AF37] mb-8 tracking-widest uppercase">01. How I Build</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-white mb-3">Solving Real Problems First</h4>
            <p className="text-slate-400 text-sm leading-relaxed">I focus on building features that create real value for users and businesses. Whether working within tight deadlines, budgets, or technical constraints, I aim to deliver practical solutions before adding unnecessary complexity.</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-white mb-3">Choosing the Right Tools</h4>
            <p className="text-slate-400 text-sm leading-relaxed">I prefer tools and technologies that are reliable, maintainable, and fit the problem well. I enjoy exploring modern technologies, but I believe simplicity and long-term maintainability matter just as much as innovation.</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-white mb-3">Building for Growth</h4>
            <p className="text-slate-400 text-sm leading-relaxed">I like building applications in a modular way so features can evolve over time without needing major rewrites. My goal is to balance fast delivery with clean foundations that are easy to improve later.</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-white mb-3">Improving Through Real Usage</h4>
            <p className="text-slate-400 text-sm leading-relaxed">I pay close attention to how applications behave after deployment — fixing issues, improving performance, refining user experience, and learning from real-world usage to make products better over time.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" aria-labelledby="projects-heading" className="w-full max-w-6xl px-6 md:px-8 py-16">
        <div className="mb-12">
          <h3 id="projects-heading" className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-3">02. Featured Projects & Systems</h3>
          <p className="text-slate-400">Production-grade fullstack applications I’ve built and maintained.</p>
        </div>
        <div className="flex flex-col gap-12">
          <article className="border border-slate-800 bg-[#0A192F]/50 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col md:flex-row group">
            <div className="md:w-1/3 bg-slate-900 border-r border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
                  <span className="text-xs font-mono text-emerald-400">🟢 Maintained</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Smart School Management System</h4>
                <p className="text-slate-400 text-sm">React • Node.js • MongoDB</p>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">View Code ↗</a>
                <a href="https://smartschool-app.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">Live Demo ↗</a>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="w-full aspect-video bg-[#050B14] border border-slate-800 rounded-lg mb-8 overflow-hidden relative group-hover:border-slate-600 transition-colors flex items-center justify-center shadow-inner">
                <Image src="/school-app.png" alt="School Management System interface" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> The Problem & Value</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">A full-stack MERN platform designed for modern African educational institutions. It delivers a premium, mobile-first experience bridging administration, educators, students, and parents into a single cohesive ecosystem.</p>
                </div>
                <div>
                  <h5 className="text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> Architecture Flow & Impact</h5>
                  <div className="mt-2 mb-3 p-3 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 overflow-x-auto">
                    <span className="text-emerald-400 whitespace-nowrap">React (Vite)</span><span className="mx-2">→</span><span className="text-blue-400 whitespace-nowrap">Express REST API</span><span className="mx-2">→</span><span className="text-purple-400 whitespace-nowrap">MongoDB</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed"><strong className="text-slate-300">Lessons Learned:</strong> Architected a scalable multi-role authentication system using JWT and Context API. Implementing dynamic role-based route protection allowed for secure, isolated dashboards for Admins, Teachers, Students, and Parents while maintaining a shared reusable component architecture. Integrated an AI-assistant for educational tools and Recharts for administrative analytics.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="border border-slate-800 bg-[#0A192F]/50 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col md:flex-row group">
            <div className="md:w-1/3 bg-slate-900 border-r border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
                  <span className="text-xs font-mono text-emerald-400">🟢 Maintained</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">ImpactConnect</h4>
                <p className="text-slate-400 text-sm">React • Node.js • MongoDB</p>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="https://github.com/g-softtech/impactconnect" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">View Code ↗</a>
                <a href="https://impactconnect-steel.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">Live Demo ↗</a>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="w-full aspect-video bg-[#050B14] border border-slate-800 rounded-lg mb-8 overflow-hidden relative group-hover:border-slate-600 transition-colors flex items-center justify-center shadow-inner">
                <Image src="/impact-connect.png" alt="ImpactConnect interface" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> The Problem & Value</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">A modern full-stack NGO management platform built for organizations to manage projects, receive donations, and publish impact stories through a scalable, production-ready experience.</p>
                </div>
                <div>
                  <h5 className="text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> Architecture Flow & Impact</h5>
                  <div className="mt-2 mb-3 p-3 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 overflow-x-auto">
                    <span className="text-emerald-400 whitespace-nowrap">React (Vite)</span><span className="mx-2">→</span><span className="text-blue-400 whitespace-nowrap">Express REST API</span><span className="mx-2">→</span><span className="text-purple-400 whitespace-nowrap">MongoDB Atlas</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed"><strong className="text-slate-300">Lessons Learned:</strong> Integrated secure Paystack donations and role-based JWT access. Building a decoupled architecture allowed for independent scaling of the frontend on Vercel and the backend API on Render.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Performance & Reliability Section */}
      <section aria-labelledby="reliability-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-800/50">
        <h3 id="reliability-heading" className="text-sm font-mono text-[#D4AF37] mb-8 tracking-widest uppercase">03. Performance & Reliability</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
            <h4 className="text-slate-200 font-bold mb-4 flex items-center justify-between">Lighthouse Baseline <span className="text-xs font-mono text-slate-500 group-hover:text-[#D4AF37] transition-colors">LIVE</span></h4>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Perf</span></div>
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">A11y</span></div>
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">SEO</span></div>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-6">Built with strong focus on performance, accessibility, and modern web standards.</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-slate-200 font-bold mb-4">Reliability</h4>
            <div className="text-4xl font-light text-slate-200 mb-2">99.98<span className="text-xl text-[#D4AF37]">%</span></div>
            <p className="text-xs text-slate-500 font-mono">Consistently monitored deployments with reliable uptime and smooth user experience across devices.</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-slate-200 font-bold mb-4">Security Practices</h4>
            <ul className="text-sm text-slate-400 space-y-3 font-mono">
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Strict Content Security Policies (CSP)</li>
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Input validation using Zod schemas</li>
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> API rate limiting to reduce spam and abuse</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fullstack Insights (Blog) Section */}
      <section id="insights" aria-labelledby="insights-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-800/50">
        <div className="flex justify-between items-end mb-8">
          <h3 id="insights-heading" className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase">04. Fullstack Insights</h3>
          <Link href="#" className="text-xs font-mono text-slate-400 hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5">View Archive ↗</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article: Article) => (
            <Link key={article.slug} href={`/insights/${article.slug}`} className="group cursor-pointer p-6 rounded-xl border border-transparent hover:border-slate-800 hover:bg-[#0A192F]/30 transition-all focus-visible:ring-2 focus-visible:ring-[#D4AF37] outline-none">
              <article>
                <div className="text-xs font-mono text-slate-500 mb-3 flex items-center gap-3">
                  <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800 text-slate-300">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-200 group-hover:text-[#D4AF37] transition-colors mb-3">{article.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{article.summary}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" aria-labelledby="contact-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-800/50">
        <div className="flex flex-col items-center text-center mb-12">
          <h3 className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-4">05. Let’s Work Together</h3>
          <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">Whether you’re building a new product, improving an existing platform, or looking for a reliable fullstack developer, I’d love to hear about your project and explore how we can work together.</p>
          <div className="mt-6">
            <Link href="/resume" className="inline-flex items-center gap-2 text-sm font-mono text-[#D4AF37] hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5">
              <span>📄</span> View & Download Résumé ↗
            </Link>
          </div>
        </div>
        
        <ContactForm />
      </section>
    </main>
  );
}