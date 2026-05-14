"use client";

import React from "react";
import { MagicButton } from "./magic-button";

export function MagicButtonDemo() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center gap-6 p-12">
      <MagicButton />
      <p className="text-xs text-[#605A57] uppercase tracking-widest font-medium opacity-50">
        Hover and Click for Interaction
      </p>
    </div>
  );
}
