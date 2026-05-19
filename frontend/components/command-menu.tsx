"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { getProjectAISummary } from "@/app/actions";
// Database of searchable portfolio items and actions
const COMMANDS = [
  { id: "p1", title: "Smart School Management System", category: "Projects", description: "React • Node.js • MongoDB", link: "#projects" },
  { id: "p2", title: "Secure Authentication Service", category: "Projects", description: "Node.js • Redis • JWT", link: "#projects" },
  { id: "p3", title: "ImpactConnect", category: "Projects", description: "React • Node.js • MongoDB", link: "#projects" },
  { id: "b1", title: "Building Better Fullstack Applications", category: "Insights", description: "Read practical insights on fullstack architecture", link: "/insights/building-better-fullstack-applications" },
  { id: "b2", title: "Choosing the Right Authentication Approach", category: "Insights", description: "Read practical insights on pragmatic auth", link: "/insights/choosing-the-right-authentication-approach" },
  { id: "b3", title: "Improving React Performance in Real Projects", category: "Insights", description: "Read practical insights on frontend speed", link: "/insights/improving-react-performance-in-real-projects" },
  { id: "s1", title: "Engineering Operating System", category: "Navigation", description: "Read my constraint-driven design manifesto", link: "#" },
  { id: "a1", title: "View Résumé", category: "Actions", description: "Professional history and skills", link: "/resume.pdf" },
  { id: "a2", title: "Copy Email Address", category: "Actions", description: "hello@cortexsystems.io", link: "#" },
  { id: "c1", title: "Initialize Contact", category: "Navigation", description: "Send a secure message", link: "#contact" },
];

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Clear the search query when the menu closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setAiSummary(null); // Clear summary when menu closes
    }
  }, [isOpen]);

  // Filter the commands based on user input
  const filteredCommands = COMMANDS.filter((cmd) =>
    (cmd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
    cmd.id !== "a1" && cmd.id !== "a2" // Hide actions unless directly searched for
  );

  // Prioritize exact matches for "actions" if search is specific
  const actionCommands = COMMANDS.filter(cmd => (cmd.id === "a1" || cmd.id === "a2") && searchQuery.toLowerCase().includes(cmd.title.toLowerCase()));


  const handleSelect = (cmd: typeof COMMANDS[0]) => {
    if (cmd.id === "a2") {
      navigator.clipboard.writeText("hello@cortexsystems.io");
      setToast("SYSTEM: Email copied to clipboard.");
      setTimeout(() => {
        setToast(null);
        setIsOpen(false);
      }, 2000);
    } else if (cmd.id === "a1") {
      const link = document.createElement("a");
      link.href = cmd.link;
      link.download = "Gbemisola_Awodiya_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsOpen(false);
    } else if (cmd.link !== "#") {
      // For project links, fetch AI summary first
      if (cmd.category === "Projects") {
        setAiSummary("AI Summary: Generating architectural overview...");
        getProjectAISummary(cmd.id).then(setAiSummary);
        // Don't close the menu, show the summary instead
      } else {
        // Use window.location.href so it handles both #hash links and real /paths seamlessly
        window.location.href = cmd.link;
        setIsOpen(false);
      }
    } else {
      setIsOpen(false); // Close for non-link commands (like Manifesto)
    }
  };

  return (
    <>
      {/* Mobile Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="md:hidden fixed bottom-20 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A192F]/90 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-sm shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all active:scale-95"
            aria-label="Open Ask Cortex Command Center"
          >
            <span className="text-xs">✦</span> Ask Cortex
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-start justify-center pt-[5vh] md:pt-[20vh] px-4 bg-[#0A192F]/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="AI Command Center"
          >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-2xl overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0A192F] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-slate-800 px-4 py-3">
              <span className="mr-3 text-[#D4AF37]">❯</span>
              <input
                type="text"
                id="command-menu-search"
                aria-label="Search portfolio or ask AI"
                placeholder="Ask AI or navigate (e.g. 'show projects with secure auth')..."
                /* text-base prevents iOS Safari from automatically zooming in on the input */
                className="flex-1 border-none bg-transparent font-mono text-base text-slate-200 placeholder-slate-500 outline-none focus:ring-0"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <kbd className="hidden sm:inline-block bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-xs text-[#D4AF37] font-mono">ESC</kbd>
            </div>
            <div className="p-4 max-h-[60vh] md:max-h-100 overflow-y-auto font-mono text-sm text-slate-400" aria-live="polite">
              {searchQuery === "" && (
                <p className="mb-4 text-[#D4AF37]/80">SYSTEM: AI Command Center initialized. Awaiting query...</p>
              )}
              
              {filteredCommands.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {filteredCommands.map((cmd) => (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd)}
                      className="w-full text-left flex flex-col items-start gap-1 p-3 rounded-lg hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-colors group"
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-slate-200 font-semibold group-hover:text-[#D4AF37] transition-colors">{cmd.title}</span>
                        <span className="text-xs text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{cmd.category}</span>
                      </div>
                      <span className="text-xs text-slate-500">{cmd.description}</span>
                    </button>
                  ))}
                </div>
              ) : actionCommands.length > 0 ? ( // Display actions if specifically searched
                <div className="flex flex-col gap-2">
                  {actionCommands.map((cmd) => (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd)}
                      className="w-full text-left flex flex-col items-start gap-1 p-3 rounded-lg hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-colors group"
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-slate-200 font-semibold group-hover:text-[#D4AF37] transition-colors">{cmd.title}</span>
                        <span className="text-xs text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{cmd.category}</span>
                      </div>
                      <span className="text-xs text-slate-500">{cmd.description}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 text-center py-8">No matching records found in database.</p>
              )}

              {/* AI Summary Section */}
              {aiSummary && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 pt-6 border-t border-slate-800 text-slate-300">
                  <p className="text-[#D4AF37] mb-2">AI_OVERVIEW:</p>
                  <p className="leading-relaxed whitespace-pre-wrap">{aiSummary}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-12 bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-full border border-emerald-500/20 text-sm font-mono shadow-2xl backdrop-blur-md"
              >
                {toast}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
        </AnimatePresence>
    </>
  );
}