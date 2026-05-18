"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, BookOpen, Send, Check } from "lucide-react";

export default function BlogComingSoonPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background text-[#37322F] px-6 py-12 md:px-12 lg:px-24">
      {/* Subtle Editorial Background Elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#E0DEDB] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute bottom-0 -right-4 w-[32rem] h-[32rem] bg-[#F0EDEA] rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <Link 
          href="/" 
          className="flex items-center gap-2 group text-sm font-semibold text-[#605A57] hover:text-[#37322F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Return Home</span>
        </Link>
        
        <Link 
          href="/docs" 
          className="flex items-center gap-2 text-sm font-serif italic text-[#37322F] hover:text-[#37322F]/80 transition-colors"
        >
          <span>Modus Library</span>
        </Link>
      </header>

      {/* Main Editorial Hero */}
      <div className="relative z-10 w-full max-w-[700px] mx-auto my-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-2xl bg-[#F7F5F3] border border-[#E0DEDB] flex items-center justify-center mb-8 shadow-sm"
        >
          <BookOpen className="w-7 h-7 text-[#37322F]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-border bg-white/50 text-muted-foreground text-xs font-semibold mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary/60 animate-pulse" />
          <span className="uppercase tracking-[0.1em]">Modus Journal</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-[#37322F] mb-6 tracking-tight font-normal"
        >
          Writing in <span className="italic font-normal">Restraint</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[#605A57] leading-relaxed max-w-md mx-auto mb-12 font-medium"
        >
          A curated publication on advanced design systems, visual semantics, and typographic precision. Launching shortly.
        </motion.p>

        {/* Premium Subscription Mock */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md p-6 rounded-2xl border border-[#E0DEDB] bg-white/40 backdrop-blur-md shadow-sm"
        >
          <h5 className="font-serif text-lg text-[#37322F] mb-2 font-normal">Subscribe to first release</h5>
          <p className="text-xs text-[#605A57] mb-4">No spam. Only deep technical essays on UI restraint.</p>
          
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50/50 border border-emerald-200/50 rounded-xl p-3 text-sm font-semibold">
              <Check className="w-4 h-4" />
              <span>You are on the list. Thank you.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-[#E0DEDB] rounded-lg px-3 py-2.5 text-xs text-[#37322F] placeholder-[#605A57]/40 focus:outline-none focus:border-[#37322F] transition-all"
              />
              <button
                type="submit"
                className="bg-[#37322F] hover:bg-[#4A4542] text-[#FAF9F7] text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Send className="w-3 h-3" />
                <span>Join</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer Signature */}
      <footer className="relative z-10 w-full max-w-[1200px] mx-auto text-center mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-[#37322F]/40 text-[10px] font-bold uppercase tracking-[0.3em]"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#37322F]/40">
            <path d="M4 20V8a4 4 0 0 1 8 0v12" />
            <path d="M12 20V8a4 4 0 0 1 8 0v12" />
          </svg>
          <span>Modus UI Publishing</span>
        </motion.div>
      </footer>
    </main>
  );
}
