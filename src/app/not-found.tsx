"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF9F7] text-[#37322F] px-4">
      {/* Decorative Diagonal Stripes (Editorial Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#F0EDEA] opacity-50 blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#E0DEDB] opacity-30 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E0DEDB] bg-white/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] text-[#605A57] mb-8"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#37322F]">
            <path d="M4 20V8a4 4 0 0 1 8 0v12" />
            <path d="M12 20V8a4 4 0 0 1 8 0v12" />
          </svg>
          <span>Modus UI Component Library</span>
        </motion.div>

        <h1 className="text-[120px] md:text-[180px] font-serif leading-none tracking-tighter mb-4 text-[#37322F]">
          Lost.
        </h1>
        
        <p className="text-lg md:text-xl text-[#605A57] font-medium leading-relaxed mb-12 max-w-md mx-auto">
          The page you are looking for has drifted into the void. It either never existed or has moved to a new destination.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#37322F] text-[#F7F5F3] font-semibold text-sm transition-all hover:opacity-90 shadow-lg shadow-[#37322F]/10"
            >
              <MoveLeft className="w-4 h-4" />
              Return Home
            </motion.button>
          </Link>
          
          <Link href="/docs">
            <button className="px-8 py-4 rounded-full border border-[#E0DEDB] bg-white text-[#37322F] font-semibold text-sm transition-all hover:bg-[#F0EDEA]">
              View Documentation
            </button>
          </Link>
        </div>
      </motion.div>

      <footer className="absolute bottom-12 text-[10px] font-bold uppercase tracking-[0.3em] text-[#605A57]/40">
        Modus UI Documentation
      </footer>
    </div>
  );
}
