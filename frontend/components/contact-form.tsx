"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/app/actions";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto border border-slate-800 bg-[#0A192F]/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl relative overflow-hidden" aria-live="polite">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
              <span className="text-emerald-400 text-2xl">✓</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Transmission Received</h4>
            <p className="text-slate-400">Thank you for reaching out. I will review your message and respond shortly.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-2 border border-slate-700 hover:border-[#D4AF37] text-slate-300 font-mono text-sm rounded-md transition-colors"
            >
              SEND_ANOTHER
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Name</label>
                <input required id="name" name="name" type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-md px-4 py-3 text-slate-200 outline-none focus:border-[#D4AF37]/50 focus:bg-slate-900 transition-all font-sans" placeholder="Jane Doe" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</label>
                <input required id="email" name="email" type="email" className="w-full bg-slate-900/50 border border-slate-800 rounded-md px-4 py-3 text-slate-200 outline-none focus:border-[#D4AF37]/50 focus:bg-slate-900 transition-all font-sans" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="projectType" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Inquiry Type</label>
              <select id="projectType" name="projectType" className="w-full bg-slate-900/50 border border-slate-800 rounded-md px-4 py-3 text-slate-200 outline-none focus:border-[#D4AF37]/50 focus:bg-slate-900 transition-all font-sans appearance-none">
                <option value="fulltime">Full-time Opportunity</option>
                <option value="freelance">Freelance / Contract</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message</label>
              <textarea required id="message" name="message" rows={4} className="w-full bg-slate-900/50 border border-slate-800 rounded-md px-4 py-3 text-slate-200 outline-none focus:border-[#D4AF37]/50 focus:bg-slate-900 transition-all font-sans resize-none" placeholder="How can we collaborate?"></textarea>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-slate-500 font-mono hidden md:block">Protected by Zod & Rate Limiting</p>
              <button type="submit" disabled={status === "loading"} className="w-full md:w-auto px-8 py-3 bg-[#D4AF37] text-[#0A192F] font-semibold rounded-md hover:bg-yellow-500 transition-all active:scale-95 font-mono text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {status === "loading" ? (
                  <><span className="w-4 h-4 border-2 border-[#0A192F]/30 border-t-[#0A192F] rounded-full animate-spin"></span>TRANSMITTING...</>
                ) : status === "error" ? "ERROR - RETRY" : "INITIALIZE_CONTACT"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}