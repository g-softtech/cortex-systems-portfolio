import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grow flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-8 w-full text-center">
      <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mb-6 border border-rose-500/20">
        <span className="text-rose-400 text-2xl font-mono">404</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Signal Lost</h1>
      <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
        The requested telemetry or page could not be located in the system architecture.
      </p>
      <Link href="/" className="px-6 py-3 border border-slate-700 hover:border-[#D4AF37] text-white font-semibold rounded-md transition-all active:scale-95 font-mono text-sm flex items-center gap-3 bg-[#0A192F]/50 backdrop-blur-sm">
        <span>&larr;</span> RETURN_TO_DASHBOARD
      </Link>
    </main>
  );
}