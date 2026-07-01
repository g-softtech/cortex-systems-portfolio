"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after the component mounts
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-[#0A192F]/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] text-slate-600 dark:text-slate-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] shadow-xl transition-all active:scale-95"
      aria-label="Toggle Theme"
    >
      {/* You can replace these emojis with actual SVG icons later if you prefer */}
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}