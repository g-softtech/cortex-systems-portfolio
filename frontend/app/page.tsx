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
           </div>
         </div>
         <div className="lg:col-span-4 w-full">
            <GithubActivity />
         </div>
      </section>

      {/* Manifesto Section */}
      <section aria-labelledby="manifesto-heading" className="w-full max-w-6xl px-6 md:px-8 py-16">
        <h3 id="manifesto-heading" className="text-sm font-mono text-[#D4AF37] mb-8 tracking-widest uppercase">01. Engineering Operating System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-white mb-3">Constraint-Driven Design</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Building within strict boundaries (API limits, budgets, deadlines) isn't a limitation; it's a feature. I optimize for maximum business value before the first line of code is written.</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-white mb-3">Architectural Pragmatism</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Choosing boring technology when reliability matters, and bleeding-edge tech only when the UX requires it. Maintenance overhead is always factored into the initial build.</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-white mb-3">Velocity vs. Quality</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Balancing MVP speed with scalable foundations. I prefer building decoupled modules that can be easily refactored later, avoiding the dreaded "full rewrite".</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-white mb-3">Production Reasoning</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Deployments are just the beginning. I employ a "Trace-Log-Isolate" approach to debugging live systems, ensuring high observability and fast time-to-resolution.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" aria-labelledby="projects-heading" className="w-full max-w-6xl px-6 md:px-8 py-16">
        <h3 id="projects-heading" className="text-sm font-mono text-[#D4AF37] mb-8 tracking-widest uppercase">02. Featured Architecture</h3>
        <div className="flex flex-col gap-12">
          <article className="border border-slate-800 bg-[#0A192F]/50 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col md:flex-row group">
            <div className="md:w-1/3 bg-slate-900 border-r border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
                  <span className="text-xs font-mono text-emerald-400">🟢 Maintained</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">School Management System</h4>
                <p className="text-slate-400 text-sm">Next.js • Node.js • PostgreSQL</p>
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
                  <p className="text-slate-400 text-sm leading-relaxed">Administrative bottlenecks were costing educators hours per week. Built a centralized dashboard to automate enrollment and grading workflows.</p>
                </div>
                <div>
                  <h5 className="text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> Architecture Flow & Impact</h5>
                  <div className="mt-2 mb-3 p-3 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 overflow-x-auto">
                    <span className="text-emerald-400 whitespace-nowrap">Client (React)</span><span className="mx-2">→</span><span className="text-blue-400 whitespace-nowrap">Next.js RSC/Actions</span><span className="mx-2">→</span><span className="text-purple-400 whitespace-nowrap">PostgreSQL</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed"><strong className="text-slate-300">Lessons Learned:</strong> Reduced admin processing time by 40%. Initial bottleneck was DB connection pooling during burst traffic, resolved via PgBouncer.</p>
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

      {/* Telemetry & Performance Section */}
      <section aria-labelledby="telemetry-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-800/50">
        <h3 id="telemetry-heading" className="text-sm font-mono text-[#D4AF37] mb-8 tracking-widest uppercase">03. Performance & Telemetry</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
            <h4 className="text-slate-200 font-bold mb-4 flex items-center justify-between">Lighthouse Baseline <span className="text-xs font-mono text-slate-500 group-hover:text-[#D4AF37] transition-colors">LIVE</span></h4>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Perf</span></div>
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">A11y</span></div>
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">SEO</span></div>
            </div>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-slate-200 font-bold mb-4">Production Uptime</h4>
            <div className="text-4xl font-light text-slate-200 mb-2">99.98<span className="text-xl text-[#D4AF37]">%</span></div>
            <p className="text-xs text-slate-500 font-mono">Trailing 90 days. Deployed on managed serverless infrastructure with automated health checks.</p>
          </div>
          <div className="p-6 border border-slate-800 bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h4 className="text-slate-200 font-bold mb-4">Security Posture</h4>
            <ul className="text-sm text-slate-400 space-y-3 font-mono">
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Strict CSP Headers applied</li>
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Zod Edge runtime validation</li>
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Redis-backed rate limiting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Insights (Blog) Section */}
      <section id="insights" aria-labelledby="insights-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-800/50">
        <div className="flex justify-between items-end mb-8">
          <h3 id="insights-heading" className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase">04. Technical Insights</h3>
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
          <h3 className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-4">05. Secure Transmission</h3>
          <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold text-white mb-4">Initiate Contact</h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">Whether you're building a new product or scaling an existing system, I'm available for technical discussions and potential collaborations.</p>
        </div>
        
        <ContactForm />
      </section>
    </main>
  );
}