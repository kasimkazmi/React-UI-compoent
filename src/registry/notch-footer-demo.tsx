"use client";

import React from "react";
import { NotchFooter } from "./notch-footer";

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 2 1 4 2 5.5l1.5-1.5C5 15 4 13.5 4 12c0-4.5 3.5-8 8-8s8 3.5 8 8c0 1.5-1 3-1.5 4l-1.5-1.5c1-1.5 2-3.5 2-5.5 0-5.5-4.5-10-10-10z" />
      <path d="M9 15l-3 3" />
      <path d="M15 9l3-3" />
      <path d="M9.5 9.5L12 12m2.5-2.5L12 12" />
      <circle cx="12" cy="12" r="3" fill="none" />
      <path d="M11.5 8.5C10 7 7.5 7.5 7.5 7.5s.5 2.5 2 4c1.5 1.5 4 1 4 1s-.5-2.5-2-4z" />
      <path d="M12.5 15.5c1.5 1.5 4 1 4 1s-.5-2.5-2-4-3.5.5-3.5.5s1 2.5 1.5 2.5z" />
    </svg>
  );
}

export function NotchFooterDemo() {
  const handleAction = () => {
    alert("Get started for free button clicked!");
  };

  // Custom LogRocket-style notch logo component
  const customLogo = (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-md border border-slate-100/50 select-none">
      <RocketIcon className="w-3.5 h-3.5 text-indigo-600 animate-bounce" />
      <span className="font-sans text-[11px] font-bold text-slate-800 tracking-tight flex items-center gap-0.5">
        <span>Log</span>
        <span className="text-indigo-600 font-extrabold">Rocket</span>
      </span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl p-6 bg-[#FAF9F7] rounded-3xl border border-[#E0DEDB]/40 flex items-center justify-center">
      <NotchFooter
        title="Stop guessing about your digital experience with LogRocket"
        buttonText="Get started for free"
        onButtonClick={handleAction}
        logo={customLogo}
        bgColorClass="bg-gradient-to-br from-[#7B1FA2] via-[#8E24AA] to-[#512DA8]"
        notchFillColor="#FAF9F7" // Match the demo parent bg perfectly for seamless notched hollow effect
        className="w-full"
      />
    </div>
  );
}
