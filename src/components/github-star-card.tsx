"use client";

import React from "react";
import { Github, Star } from "lucide-react";

export function GitHubStarCard() {
  return (
    <div className="rounded-xl border border-[#E0DEDB] bg-[#F7F5F3]/50 p-4 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Category Header */}
      <div className="flex items-center gap-2 mb-2 text-[#605A57]/60">
        <Github className="w-3.5 h-3.5" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Open Source</p>
      </div>

      {/* Title */}
      <h4 className="font-serif text-2xl text-[#37322F] tracking-tight font-normal">Modus UI</h4>
      
      {/* Subtitle */}
      <p className="text-xs text-[#605A57] leading-relaxed mt-1.5 mb-3">
        The premium, editorial-grade React component library, open-source and available on GitHub!
      </p>

      {/* Repo Link */}
      <a 
        href="https://github.com/kasimkazmi/Modus-UI"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-semibold text-[#605A57] hover:text-[#37322F] underline underline-offset-4 decoration-[#E0DEDB] hover:decoration-[#37322F] transition-all block mb-4"
      >
        github.com/kasimkazmi/Modus-UI
      </a>

      {/* CTA Button */}
      <a
        href="https://github.com/kasimkazmi/Modus-UI"
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn flex items-center justify-center gap-2 rounded-lg bg-[#37322F] hover:bg-[#4A4542] px-3 py-2.5 text-xs font-semibold text-[#FAF9F7] transition-all duration-200 active:scale-[0.98] shadow-sm"
      >
        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover/btn:rotate-[15deg] transition-transform duration-300" />
        <span>Star on GitHub</span>
      </a>
    </div>
  );
}
