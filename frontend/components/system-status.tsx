"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SystemStatus() {
  const [status, setStatus] = useState<"checking" | "online" | "offline">("checking");

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch("/api/status", { cache: "no-store" });
        const data = await res.json();
        setStatus(data.status || "offline");
      } catch (error) {
        console.error("Backend connection error:", error);
        setStatus("offline");
      }
    };

    checkStatus();
    // Poll the backend every 10 seconds to keep the status live
    const interval = setInterval(checkStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  const isOnline = status === "online";
  const isChecking = status === "checking";

  return (
    <div role="status" aria-live="polite" className="flex items-center gap-3 rounded-full border border-slate-800 bg-[#0A192F]/80 px-4 py-2 shadow-2xl backdrop-blur-md cursor-default select-none">
      <div className="relative flex h-3 w-3" aria-hidden="true">
        {isOnline && (
          <motion.span
            animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          />
        )}
        <span 
          className={`relative inline-flex h-3 w-3 rounded-full ${
            isOnline ? "bg-emerald-500" : isChecking ? "bg-yellow-500" : "bg-rose-500"
          }`} 
        />
      </div>
      <span className="text-xs font-mono text-slate-300 tracking-wider">
        SYSTEM: <span className={`font-semibold ${isOnline ? "text-emerald-400" : isChecking ? "text-yellow-400" : "text-rose-400"}`}>{(status || "offline").toUpperCase()}</span>
      </span>
    </div>
  );
}