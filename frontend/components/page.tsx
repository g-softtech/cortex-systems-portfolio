import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé | Cortex Systems",
  description: "Professional Résumé of Awodiya, Gbemisola - Senior Fullstack Developer",
};

export default function ResumePage() {
  return (
    <main className="grow flex flex-col items-center justify-start pt-32 pb-24 px-6 md:px-8 w-full max-w-4xl mx-auto">
      {/* Page Controls - Hidden on Print */}
      <div className="w-full flex justify-between items-center mb-8 print:hidden">
        <Link href="/" className="text-[#D4AF37] font-mono text-sm hover:text-white transition-colors">
          &larr; Return to Dashboard
        </Link>
        <span className="text-slate-500 font-mono text-xs">Print to PDF (CTRL+P)</span>
      </div>

      {/* Résumé Document */}
      <article className="w-full bg-[#0A192F] md:bg-slate-900/50 md:border border-slate-800 md:p-12 md:rounded-xl shadow-2xl print:bg-transparent print:border-none print:shadow-none print:p-0">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 mb-8 print:border-slate-300">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 print:text-black">Awodiya, Gbemisola</h1>
          <h2 className="text-xl font-mono text-[#D4AF37] mb-4 print:text-slate-800">Senior Fullstack Developer / Product-Focused Web Developer</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 font-mono print:text-slate-600">
            <span className="flex items-center gap-2">📍 Abuja, Nigeria</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">GitHub ↗</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Portfolio ↗</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">LinkedIn ↗</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Email ↗</a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <h3 className="text-sm font-mono text-[#D4AF37] uppercase tracking-widest mb-4 print:text-slate-800 font-bold">Professional Summary</h3>
          <p className="text-slate-300 leading-relaxed print:text-black">
            Senior Fullstack Developer with experience building modern, production-ready web applications using React, Next.js, Node.js, MongoDB, and PostgreSQL technologies. Skilled in developing responsive frontend systems, secure backend APIs, and scalable user-focused products with strong emphasis on performance, maintainability, accessibility, and clean user experience.
            <br /><br />
            Passionate about solving real-world problems through thoughtful product development, modern UI systems, and practical fullstack architecture.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-10">
          <h3 className="text-sm font-mono text-[#D4AF37] uppercase tracking-widest mb-4 print:text-slate-800 font-bold">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2 print:text-black">Frontend</h4>
              <ul className="text-slate-400 text-sm space-y-1 print:text-slate-700">
                <li>React.js / Next.js</li>
                <li>JavaScript / TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 print:text-black">Backend & DB</h4>
              <ul className="text-slate-400 text-sm space-y-1 print:text-slate-700">
                <li>Node.js / Express.js</li>
                <li>REST APIs</li>
                <li>Authentication</li>
                <li>Server Actions</li>
                <li>MongoDB / PostgreSQL</li>
                <li>Supabase / Firebase</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 print:text-black">CMS & Tools</h4>
              <ul className="text-slate-400 text-sm space-y-1 print:text-slate-700">
                <li>WordPress</li>
                <li>Git / GitHub</li>
                <li>Vercel / Render</li>
                <li>Responsive Design</li>
                <li>Performance Optimization</li>
                <li>Accessible UI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-10">
          <h3 className="text-sm font-mono text-[#D4AF37] uppercase tracking-widest mb-6 print:text-slate-800 font-bold">Featured Projects</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-white print:text-black">Cortex Systems Portfolio</h4>
              <p className="text-slate-400 text-sm mb-3 print:text-slate-700">Premium interactive fullstack portfolio platform showcasing modern product-focused development.</p>
              <ul className="list-disc list-outside ml-4 text-slate-300 text-sm space-y-1 mb-3 print:text-black marker:text-[#D4AF37] print:marker:text-slate-600">
                <li>Built AI-powered command center with fuzzy search and architectural summaries.</li>
                <li>Implemented accessibility-first UI, SEO optimization, telemetry dashboard, and secure contact workflows.</li>
                <li>Developed responsive dashboard-style interface using Next.js, Tailwind CSS, and Framer Motion.</li>
              </ul>
              <p className="text-xs font-mono text-slate-500 print:text-slate-500">Tech Stack: Next.js, TypeScript, Node.js, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white print:text-black">School Management System</h4>
              <p className="text-slate-400 text-sm mb-3 print:text-slate-700">Fullstack platform designed to streamline school administration and student management workflows.</p>
              <ul className="list-disc list-outside ml-4 text-slate-300 text-sm space-y-1 mb-3 print:text-black marker:text-[#D4AF37] print:marker:text-slate-600">
                <li>Developed responsive dashboards for enrollment, grading, and administrative operations.</li>
                <li>Built secure backend APIs and scalable frontend architecture.</li>
                <li>Optimized application structure for maintainability and real-world usage.</li>
              </ul>
              <p className="text-xs font-mono text-slate-500 print:text-slate-500">Tech Stack: Next.js, Node.js, PostgreSQL</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white print:text-black">ImpactConnect Platform</h4>
              <p className="text-slate-400 text-sm mb-3 print:text-slate-700">Community-focused NGO platform built to improve engagement and communication.</p>
              <ul className="list-disc list-outside ml-4 text-slate-300 text-sm space-y-1 mb-3 print:text-black marker:text-[#D4AF37] print:marker:text-slate-600">
                <li>Designed responsive frontend interfaces and dynamic content workflows.</li>
                <li>Developed backend integrations and structured navigation systems.</li>
                <li>Focused on usability, accessibility, and mobile responsiveness.</li>
              </ul>
              <p className="text-xs font-mono text-slate-500 print:text-slate-500">Tech Stack: React.js, Node.js, MongoDB</p>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="mb-10">
          <h3 className="text-sm font-mono text-[#D4AF37] uppercase tracking-widest mb-6 print:text-slate-800 font-bold">Professional Experience</h3>
          <div>
            <h4 className="text-lg font-bold text-white print:text-black">Fullstack Developer <span className="text-[#D4AF37] font-normal mx-2 print:text-slate-400">|</span> I4 Technologies</h4>
            <ul className="list-disc list-outside ml-4 text-slate-300 text-sm space-y-1 mt-3 print:text-black marker:text-[#D4AF37] print:marker:text-slate-600">
              <li>Developed modern business and web applications for clients across different industries.</li>
              <li>Built responsive frontend interfaces and backend integrations.</li>
              <li>Improved usability, maintainability, and performance of deployed applications.</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-mono text-[#D4AF37] uppercase tracking-widest mb-4 print:text-slate-800 font-bold">Education</h3>
            <div className="text-slate-300 text-sm space-y-2 print:text-black">
              <p><strong className="text-white print:text-black font-semibold">M.Sc. Information Technology</strong></p>
              <p><strong className="text-white print:text-black font-semibold">B.Tech. Computer Science</strong></p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-mono text-[#D4AF37] uppercase tracking-widest mb-4 print:text-slate-800 font-bold">Technical Interests</h3>
            <div className="flex flex-wrap gap-2">
              {["Fullstack Product Development", "Modern React Ecosystem", "Performance Optimization", "Secure Web Applications", "AI-Assisted User Experiences"].map((interest) => (
                <span key={interest} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs text-slate-400 font-mono print:border-slate-300 print:text-slate-700 print:bg-transparent">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}