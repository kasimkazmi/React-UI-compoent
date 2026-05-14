"use client";

import React from "react";
import { FloatingText } from "./floating-text";

export function FloatingTextDemo() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 p-12">
      <FloatingText className="text-6xl font-serif text-[#37322F] tracking-tight">
        Editorial
      </FloatingText>
      <FloatingText className="text-xl font-medium text-[#605A57] italic">
        Atmosphere
      </FloatingText>
      <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#37322F]/20">
        Floating Elements
      </p>
    </div>
  );
}
