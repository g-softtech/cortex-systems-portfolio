"use client";

import { motion } from "framer-motion";

export default function SystemStatus() {
  return (
    <div className="flex items-center gap-3 rounded-full border border-cortex-gold/20 bg-slate-900/50 px-4 py-2 shadow-lg backdrop-blur-sm">
      <div className="relative flex h-3 w-3">
        <motion.span
          animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
        />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </div>
      <span className="text-xs font-mono text-slate-300 tracking-wider">
        SYSTEM: <span className="text-green-400 font-semibold">ONLINE</span>
      </span>
      <span className="text-xs font-mono text-slate-500 border-l border-slate-700 pl-3">
        RSC / EDGE
      </span>
    </div>
  );
}