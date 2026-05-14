"use client";

import React from "react";
import { MorphingNavbar } from "./morphing-navbar";
import { GraduationCap } from "lucide-react";

export function MorphingNavbarDemo() {
  return (
    <div className="w-full h-[500px] border border-[#E0DEDB] rounded-xl overflow-hidden bg-[#FAF9F7] relative">
      <div id="demo-scroll-container" className="absolute inset-0 overflow-y-auto custom-scrollbar">
        <div className="sticky top-0 z-50">
          <MorphingNavbar 
            title="Morphing Navbar" 
            logo={GraduationCap}
            targetId="demo-scroll-container"
            breadcrumbSteps={[{ label: "Docs" }, { label: "Components" }, { label: "Navbar" }]}
          />
        </div>
        
        <div className="p-8 space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-[#37322F]">Scroll to Morph</h2>
            <p className="text-[#605A57] leading-relaxed">
              This preview container simulates a real page. Scroll down to see the Navbar transition into its collapsed state, scaling the logo and hiding breadcrumbs to maximize your reading area.
            </p>
          </div>
          
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="p-8 border border-[#E0DEDB] rounded-xl bg-white/50 space-y-4">
              <div className="h-4 w-1/3 bg-[#E0DEDB] rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-[#F0EDEA] rounded" />
                <div className="h-3 w-5/6 bg-[#F0EDEA] rounded" />
              </div>
            </div>
          ))}
          
          <div className="h-20" />
        </div>
      </div>
    </div>
  );
}
