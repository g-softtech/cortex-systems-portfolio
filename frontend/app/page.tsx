// Dynamic route for individual technical insight articles
import GithubActivity from "@/components/github-activity";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import Link from "next/link";
import { client } from "../sanity/lib/client";
import { articlesQuery } from "../sanity/lib/queries";

export const revalidate = 60; // Automatically refresh the page every 60 seconds if data changes

export default async function Page() {
  let articles = [];
  try {
    articles = await client.fetch(articlesQuery);
  } catch (error) {
    console.error("Failed to fetch articles for homepage:", error);
  }

  return (
    <main className="grow flex flex-col items-center justify-start pb-24 w-full">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20 -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 md:px-8 pt-24 md:pt-32 pb-16">
         <div className="lg:col-span-8 flex flex-col items-start gap-8">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
             Currently available for opportunities
           </div>

           <header className="space-y-4 border-l-2 border-[#D4AF37] pl-6">
             <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-4">
               Cortex <span className="text-[#D4AF37]">Systems</span>
             </h1>
             <h2 className="text-xl md:text-2xl font-mono text-slate-600 dark:text-slate-400">
               Senior Fullstack Developer / Product Engineer
             </h2>
             <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed mt-4">
               Intelligent Experiences. Secure Infrastructure. <br />
               Building high-velocity, constraint-driven digital products with a focus on architectural pragmatism.
             </p>
           </header>

           <div className="flex flex-wrap gap-4 mt-8">
             <a href="#projects" className="px-6 py-3 bg-[#D4AF37] text-[#0A192F] font-semibold rounded-md hover:bg-yellow-500 transition-all active:scale-95 font-mono text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
               VIEW_PROJECTS
             </a>
             <button aria-label="Open AI Command Center" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] text-slate-900 dark:text-white font-semibold rounded-md transition-all active:scale-95 font-mono text-sm flex items-center gap-3 bg-white/50 dark:bg-[#0A192F]/50 backdrop-blur-sm">
               <span>Press</span>
             <span className="flex items-center gap-1"><kbd className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-0.5 text-xs text-[#D4AF37]">CTRL</kbd><kbd className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-0.5 text-xs text-[#D4AF37]">K</kbd></span>
               <span>to launch Command Center</span>
             </button>
             <a href="/resume.pdf" download="Gbemisola_Awodiya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] text-slate-900 dark:text-white font-semibold rounded-md transition-all active:scale-95 font-mono text-sm flex items-center gap-2 bg-white/50 dark:bg-[#0A192F]/50 backdrop-blur-sm">
               RÉSUMÉ ↗
             </a>
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
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Solving Real Problems First</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">I focus on building features that create real value for users and businesses. Whether working within tight deadlines, budgets, or technical constraints, I aim to deliver practical solutions before adding unnecessary complexity.</p>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Choosing the Right Tools</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">I prefer tools and technologies that are reliable, maintainable, and fit the problem well. I enjoy exploring modern technologies, but I believe simplicity and long-term maintainability matter just as much as innovation.</p>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Building for Growth</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">I like building applications in a modular way so features can evolve over time without needing major rewrites. My goal is to balance fast delivery with clean foundations that are easy to improve later.</p>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-lg backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Improving Through Real Usage</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">I pay close attention to how applications behave after deployment — fixing issues, improving performance, refining user experience, and learning from real-world usage to make products better over time.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" aria-labelledby="tech-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-200 dark:border-slate-800/50">
        <div className="mb-12">
          <h3 id="tech-heading" className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-3">02. Core Competencies</h3>
          <p className="text-slate-600 dark:text-slate-400">The languages, frameworks, and infrastructure I use to build scalable products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2"><span className="text-[#D4AF37] group-hover:scale-110 transition-transform">🖥️</span> Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm">{tech}</span>
              ))}
            </div>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2"><span className="text-[#D4AF37] group-hover:scale-110 transition-transform">⚙️</span> Backend</h4>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'REST APIs', 'Server Actions', 'JWT Auth'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm">{tech}</span>
              ))}
            </div>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2"><span className="text-[#D4AF37] group-hover:scale-110 transition-transform">🗄️</span> Database & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'PostgreSQL', 'Supabase', 'Firebase', 'Git/GitHub', 'Vercel', 'Render'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" aria-labelledby="projects-heading" className="w-full max-w-6xl px-6 md:px-8 py-16">
        <div className="mb-12">
          <h3 id="projects-heading" className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-3">03. Featured Projects & Systems</h3>
          <p className="text-slate-400">Production-grade fullstack applications I’ve built and maintained.</p>
        </div>
        <div className="flex flex-col gap-12">
          <article className="border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col md:flex-row group">
            <div className="md:w-1/3 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
                  <span className="text-xs font-mono text-emerald-400">🟢 Live in Production</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">CortexFit</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Next.js 14 • Supabase • Stripe</p>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="https://fit.thecortexsystems.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-slate-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">Live Application ↗</a>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="w-full aspect-video bg-slate-100 dark:bg-[#050B14] border border-slate-200 dark:border-slate-800 rounded-lg mb-8 overflow-hidden relative group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors flex items-center justify-center shadow-inner">
                <Image src="/cortexfit-app.png" alt="CortexFit Platform interface" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="text-slate-800 dark:text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> The Problem & Value</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">A multi-tenant SaaS platform built specifically for premium gym management. It streamlines member billing, scheduling, and facility access control into one highly performant dashboard for gym owners.</p>
                </div>
                <div>
                  <h5 className="text-slate-800 dark:text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> Architecture Flow & Impact</h5>
                  <div className="mt-4 mb-6 p-4 rounded-lg bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono overflow-hidden relative">
                    <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-300 dark:border-slate-700 -z-10 -translate-y-1/2"></div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">💻</div>
                      <span className="text-slate-700 dark:text-slate-300">Next.js Client</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]">⚙️</div>
                      <span className="text-slate-700 dark:text-slate-300">Server Actions</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.1)]">☁️</div>
                      <span className="text-slate-700 dark:text-slate-300">Supabase Auth & DB</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"><strong className="text-slate-900 dark:text-slate-300">Lessons Learned:</strong> Architected a complex multi-tenant B2B data model utilizing Row Level Security (RLS) in Supabase. Built resilient webhook processing pipelines to handle Stripe subscription events with 100% accuracy, ensuring smooth tenant onboarding and automated access provisioning.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col md:flex-row group">
            <div className="md:w-1/3 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
                  <span className="text-xs font-mono text-emerald-400">🟢 Maintained</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Smart School Management System</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">React • Node.js • MongoDB</p>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-slate-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">View Code ↗</a>
                <a href="https://smartschool-app.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-slate-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">Live Demo ↗</a>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="w-full aspect-video bg-slate-100 dark:bg-[#050B14] border border-slate-200 dark:border-slate-800 rounded-lg mb-8 overflow-hidden relative group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors flex items-center justify-center shadow-inner">
                <Image src="/school-app.png" alt="School Management System interface" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="text-slate-800 dark:text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> The Problem & Value</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">A full-stack MERN platform designed for modern African educational institutions. It delivers a premium, mobile-first experience bridging administration, educators, students, and parents into a single cohesive ecosystem.</p>
                </div>
                <div>
                  <h5 className="text-slate-800 dark:text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> Architecture Flow & Impact</h5>
                  <div className="mt-4 mb-6 p-4 rounded-lg bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono overflow-hidden relative">
                    <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-300 dark:border-slate-700 -z-10 -translate-y-1/2"></div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">💻</div>
                      <span className="text-slate-700 dark:text-slate-300">React Client</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]">⚙️</div>
                      <span className="text-slate-700 dark:text-slate-300">Node.js API</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.1)]">☁️</div>
                      <span className="text-slate-700 dark:text-slate-300">MongoDB Atlas</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"><strong className="text-slate-900 dark:text-slate-300">Lessons Learned:</strong> Architected a scalable multi-role authentication system using JWT and Context API. Implementing dynamic role-based route protection allowed for secure, isolated dashboards for Admins, Teachers, Students, and Parents while maintaining a shared reusable component architecture. Integrated an AI-assistant for educational tools and Recharts for administrative analytics.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col md:flex-row group">
            <div className="md:w-1/3 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
                  <span className="text-xs font-mono text-emerald-400">🟢 Maintained</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">ImpactConnect</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">React • Node.js • MongoDB</p>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="https://github.com/g-softtech/impactconnect" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-slate-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">View Code ↗</a>
                <a href="https://impactconnect-steel.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#D4AF37] hover:text-slate-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">Live Demo ↗</a>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="w-full aspect-video bg-slate-100 dark:bg-[#050B14] border border-slate-200 dark:border-slate-800 rounded-lg mb-8 overflow-hidden relative group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors flex items-center justify-center shadow-inner">
                <Image src="/impact-connect.png" alt="ImpactConnect interface" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="text-slate-800 dark:text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> The Problem & Value</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">A modern full-stack NGO management platform built for organizations to manage projects, receive donations, and publish impact stories through a scalable, production-ready experience.</p>
                </div>
                <div>
                  <h5 className="text-slate-800 dark:text-slate-200 font-semibold mb-1 flex items-center gap-2"><span className="text-[#D4AF37]">❯</span> Architecture Flow & Impact</h5>
                  <div className="mt-4 mb-6 p-4 rounded-lg bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono overflow-hidden relative">
                    <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-300 dark:border-slate-700 -z-10 -translate-y-1/2"></div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">💻</div>
                      <span className="text-slate-700 dark:text-slate-300">React Client</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]">⚙️</div>
                      <span className="text-slate-700 dark:text-slate-300">Express API</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-[#050B14] px-2 z-10">
                      <div className="w-8 h-8 rounded border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.1)]">☁️</div>
                      <span className="text-slate-700 dark:text-slate-300">MongoDB Atlas</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"><strong className="text-slate-900 dark:text-slate-300">Lessons Learned:</strong> Integrated secure Paystack donations and role-based JWT access. Building a decoupled architecture allowed for independent scaling of the frontend on Vercel and the backend API on Render.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Performance & Reliability Section */}
      <section aria-labelledby="reliability-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-200 dark:border-slate-800/50">
        <h3 id="reliability-heading" className="text-sm font-mono text-[#D4AF37] mb-8 tracking-widest uppercase">04. Performance & Reliability</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
            <h4 className="text-slate-800 dark:text-slate-200 font-bold mb-4 flex items-center justify-between">Lighthouse Baseline <span className="text-xs font-mono text-slate-500 group-hover:text-[#D4AF37] transition-colors">LIVE</span></h4>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Perf</span></div>
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">A11y</span></div>
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400">100</div><span className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">SEO</span></div>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-6">Built with strong focus on performance, accessibility, and modern web standards.</p>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <h4 className="text-slate-800 dark:text-slate-200 font-bold mb-4">Reliability</h4>
            <div className="text-4xl font-light text-slate-900 dark:text-slate-200 mb-2">99.98<span className="text-xl text-[#D4AF37]">%</span></div>
            <p className="text-xs text-slate-500 font-mono">Consistently monitored deployments with reliable uptime and smooth user experience across devices.</p>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-xl backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <h4 className="text-slate-800 dark:text-slate-200 font-bold mb-4">Security Practices</h4>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3 font-mono">
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Strict Content Security Policies (CSP)</li>
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Input validation using Zod schemas</li>
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> API rate limiting to reduce spam and abuse</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fullstack Insights (Blog) Section */}
      <section id="insights" aria-labelledby="insights-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-200 dark:border-slate-800/50">
        <div className="flex justify-between items-end mb-8">
          <h3 id="insights-heading" className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase">05. Fullstack Insights</h3>
          <Link href="#" className="text-xs font-mono text-slate-400 hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5">View Archive ↗</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.length === 0 ? (
            <div className="col-span-full p-6 text-center border border-dashed border-slate-700 rounded-xl text-slate-400 font-mono text-sm">
              Insights are currently unavailable. Please try again later.
            </div>
          ) : (
            articles.map((article: any) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="group cursor-pointer p-6 rounded-xl border border-transparent hover:border-slate-300 dark:hover:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-[#0A192F]/30 transition-all focus-visible:ring-2 focus-visible:ring-[#D4AF37] outline-none">
                <article>
                  <div className="text-xs font-mono text-slate-500 mb-3 flex items-center gap-3">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 group-hover:text-[#D4AF37] transition-colors mb-3">{article.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{article.summary}</p>
                </article>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Peer Recommendations Section */}
      <section aria-labelledby="testimonials-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-200 dark:border-slate-800/50">
        <div className="flex flex-col items-center text-center mb-12">
          <h3 className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-4">06. Peer Recommendations</h3>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What It’s Like To Work With Me</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">Feedback from product managers and lead engineers I've collaborated with to build production systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-2xl backdrop-blur-sm relative hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
            <div className="absolute top-6 right-6 text-6xl text-slate-200 dark:text-slate-800/50 font-serif leading-none group-hover:text-[#D4AF37]/20 transition-colors">"</div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-8 relative z-10">"Gbemisola is that rare fullstack developer who actually understands product and user experience. She doesn't just blindly write code; she questions the constraints, optimize the architecture, and always deliver a polished, scalable application."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-mono text-sm shadow-inner">PM</div>
              <div>
                <h5 className="text-slate-900 dark:text-white font-semibold text-sm">Product Manager</h5>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mt-0.5">Former Colleague</p>
              </div>
            </div>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0A192F]/50 rounded-2xl backdrop-blur-sm relative hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
            <div className="absolute top-6 right-6 text-6xl text-slate-200 dark:text-slate-800/50 font-serif leading-none group-hover:text-[#D4AF37]/20 transition-colors">"</div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-8 relative z-10">"Working on the backend while Gbemisola handled the frontend architecture was incredibly smooth. She understands API design, data flow, and how to build resilient UIs that gracefully handle network latency. A massive asset to any engineering team."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-mono text-sm shadow-inner">LE</div>
              <div>
                <h5 className="text-slate-900 dark:text-white font-semibold text-sm">Lead Engineer</h5>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mt-0.5">Co-collaborator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" aria-labelledby="contact-heading" className="w-full max-w-6xl px-6 md:px-8 py-16 border-t border-slate-200 dark:border-slate-800/50">
        <div className="flex flex-col items-center text-center mb-12">
          <h3 className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-4">07. Let’s Work Together</h3>
          <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">Whether you’re building a new product, improving an existing platform, or looking for a reliable fullstack developer, I’d love to hear about your project and explore how we can work together.</p>
          <div className="mt-6">
            <a href="/resume.pdf" download="Gbemisola_Awodiya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-[#D4AF37] hover:text-slate-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5">
              <span>📄</span> View & Download Résumé ↗
            </a>
          </div>
        </div>
        
        <ContactForm />
      </section>
    </main>
  );
}
