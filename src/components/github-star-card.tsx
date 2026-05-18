"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function GitHubStarCard() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/kasimkazmi/Modus-UI")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="rounded-xl border border-[#E0DEDB] bg-[#F7F5F3]/50 p-4 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Category Header */}
      <div className="flex items-center gap-2 mb-2 text-[#605A57]/60">
        <GithubIcon className="w-3.5 h-3.5" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Open Source</p>
      </div>

      {/* Title */}
      <h4 className="font-serif text-2xl text-[#37322F] tracking-tight font-normal">Modus UI</h4>
      
      {/* Subtitle */}
      <p className="text-xs text-[#605A57] leading-relaxed mt-1.5 mb-4">
        Premium React components designed with restraint and typographic precision.
      </p>

      {/* CTA Button */}
      <a
        href="https://github.com/kasimkazmi/Modus-UI"
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn flex items-center justify-center gap-2 rounded-lg bg-[#37322F] hover:bg-[#4A4542] px-3 py-2.5 text-xs font-semibold text-[#FAF9F7] transition-all duration-200 active:scale-[0.98] shadow-sm"
      >
        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover/btn:rotate-[15deg] transition-transform duration-300" />
        <span>Star on GitHub</span>
        {stars !== null && (
          <>
            <span className="w-1 h-1 rounded-full bg-[#FAF9F7]/30" />
            <span className="font-mono text-[10px] tracking-wider bg-white/10 px-1.5 py-0.5 rounded">{stars}</span>
          </>
        )}
      </a>
    </div>
  );
}
