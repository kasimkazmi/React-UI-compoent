"use client";

import React from "react";
import { RotatingCard } from "./rotating-card";
import { Sparkles } from "lucide-react";

export function RotatingCardDemo() {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-12 perspective-1000">
      <RotatingCard className="w-72 h-96 bg-white border border-[#E0DEDB] rounded-2xl shadow-xl overflow-hidden group">
        <div className="h-full w-full flex flex-col p-8 bg-gradient-to-br from-white to-[#F7F5F3]">
          <div className="w-12 h-12 rounded-xl bg-[#37322F] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            <Sparkles className="w-6 h-6 text-[#F7F5F3]" />
          </div>
          <h3 className="text-2xl font-serif text-[#37322F] mb-4">Perspective</h3>
          <p className="text-[#605A57] text-sm leading-relaxed">
            Hover over this card to see the 3D rotation effect. The card follows your mouse movement with smooth, physics-based rotation.
          </p>
          <div className="mt-auto pt-6 border-t border-[#E0DEDB]/50">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#37322F]/40">Interactive Element</span>
          </div>
        </div>
      </RotatingCard>
    </div>
  );
}
