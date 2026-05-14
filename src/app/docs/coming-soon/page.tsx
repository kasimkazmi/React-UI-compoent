"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Sparkles } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-20 h-20 rounded-3xl bg-[#F7F5F3] border border-[#E0DEDB] flex items-center justify-center mb-8 shadow-sm"
      >
        <Layout className="w-10 h-10 text-[#37322F]" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-6xl font-serif text-[#37322F] mb-6 tracking-tight"
      >
        Coming Soon
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[#605A57] text-lg max-w-md mx-auto mb-10 leading-relaxed"
      >
        We&apos;re currently perfecting a new set of premium layout components. 
        Check back soon to see the latest additions to our library.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center gap-2 text-[#37322F]/40 text-xs font-bold uppercase tracking-[0.3em]"
      >
        <Sparkles className="w-3 h-3" />
        <span>React UI Component Library</span>
      </motion.div>
    </div>
  );
}
