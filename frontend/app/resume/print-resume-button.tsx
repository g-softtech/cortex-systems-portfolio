"use client";

export default function PrintResumeButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-4 py-2 border border-slate-700 hover:border-[#D4AF37] text-white font-semibold rounded-md transition-all active:scale-95 font-mono text-xs flex items-center gap-2 bg-[#0A192F]/50 backdrop-blur-sm"
      aria-label="Download Résumé as PDF"
    >
      Download PDF
    </button>
  );
}