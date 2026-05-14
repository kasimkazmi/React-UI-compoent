"use client";

import React from "react";
import { PulseButton } from "./pulse-button";

export function PulseButtonDemo() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center gap-6 p-12">
      <PulseButton className="px-8 py-4 text-lg bg-[#37322F] text-[#F7F5F3]">
        Live Action
      </PulseButton>
      <p className="text-xs text-[#605A57] uppercase tracking-widest font-medium opacity-50">
        Organic Pulse Effect
      </p>
    </div>
  );
}
