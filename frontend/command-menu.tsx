"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open: boolean) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-cortex-navy/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl overflow-hidden rounded-xl border border-cortex-gold/30 bg-cortex-navy shadow-2xl"
          >
          <div className="flex items-center border-b border-cortex-gold/20 px-4 py-3">
            <span className="mr-3 text-cortex-gold">❯</span>
              <input
                type="text"
                placeholder="Ask AI or search portfolio..."
              className="flex-1 border-none bg-transparent font-mono text-slate-200 placeholder-slate-500 outline-none"
                autoFocus
              />
              <div className="text-xs text-slate-500 font-mono flex gap-1">
                <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">ESC</kbd>
              </div>
            </div>
            <div className="p-4 h-64 overflow-y-auto font-mono text-sm text-slate-400">
              <p className="mb-2 text-cortex-gold/80">SYSTEM: AI Command Center initialized.</p>
              <p>Awaiting query...</p>
              {/* Search results and AI summaries will be injected here */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}