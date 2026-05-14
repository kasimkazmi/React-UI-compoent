"use client";

import React from "react";
import { AnimatedButton } from "./animated-button";

export function AnimatedButtonDemo() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center gap-6 p-12">
      <AnimatedButton className="px-8 py-4 text-lg">
        Magic Button
      </AnimatedButton>
      <p className="text-xs text-[#605A57] uppercase tracking-widest font-medium opacity-50">
        Hover or Tap to Interact
      </p>
    </div>
  );
}
