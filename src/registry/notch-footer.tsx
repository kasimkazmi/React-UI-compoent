"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NotchFooterProps {
  /** The main title text rendered inside the banner */
  title?: string;
  /** Text for the outline button at the bottom */
  buttonText?: string;
  /** Action triggered when the outline button is clicked */
  onButtonClick?: () => void;
  /** Optional href for the CTA button */
  buttonHref?: string;
  /** Logo or branding element placed inside the notch pocket */
  logo?: React.ReactNode;
  /** Custom background class for the banner container (e.g., gradients) */
  bgColorClass?: string;
  /** Custom text color class for the title */
  titleColorClass?: string;
  /** Custom color classes for the CTA button */
  buttonColorClass?: string;
  /** Custom background color class for the dots */
  dotColorClass?: string;
  /** Background color for the notch pocket overlay (must match parent page background) */
  notchFillColor?: string;
  /** Custom class name for the wrapper */
  className?: string;
}

export function NotchFooter({
  title = "Stop guessing about your digital experience with Modus",
  buttonText = "Get started for free",
  onButtonClick,
  buttonHref,
  logo,
  bgColorClass = "bg-[#37322F]", // Modus UI's premium warm dark brand color
  titleColorClass = "text-[#FAF9F7]",
  buttonColorClass = "border-white/20 hover:border-white bg-white/10 hover:bg-white text-white hover:text-[#37322F]",
  dotColorClass = "bg-white/30",
  notchFillColor = "#F7F5F3", // Modus UI's premium warm light background
  className,
}: NotchFooterProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.footer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative w-full rounded-3xl overflow-hidden py-16 px-8 md:px-16 flex flex-col items-center justify-center text-center shadow-xl border border-[#E0DEDB]/10",
        bgColorClass,
        className
      )}
    >
      {/* 1. Fluid Liquid Notch Pocket (Mathematically symmetric viewBox 240x48) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[48px] select-none pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <svg
          viewBox="0 0 240 48"
          width="240"
          height="48"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 C 20 0, 20 48, 40 48 L 200 48 C 220 48, 220 0, 240 0 Z"
            fill={notchFillColor}
          />
        </svg>
      </div>

      {/* 2. Logo container floating inside the Notch */}
      <motion.div
        animate={{
          y: isHovered ? 4 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[38px] flex items-center justify-center"
        style={{ zIndex: 20 }}
      >
        {logo || (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/95 rounded-full shadow-sm border border-[#E0DEDB]/40 select-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#37322F] animate-pulse">
              <path d="M4 20V8a4 4 0 0 1 8 0v12" />
              <path d="M12 20V8a4 4 0 0 1 8 0v12" />
            </svg>
            <span className="font-serif text-[10px] font-bold text-[#37322F] tracking-wider uppercase">Modus</span>
          </div>
        )}
      </motion.div>

      {/* 3. Left Dotted Grid Decoration */}
      <div className="absolute bottom-6 left-6 hidden sm:block opacity-75">
        <motion.div
          animate={{
            x: isHovered ? 3 : 0,
            y: isHovered ? -3 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-3 gap-2"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={cn("w-1 h-1 rounded-full", dotColorClass)} />
          ))}
        </motion.div>
      </div>

      {/* 4. Right Dotted Grid Decoration */}
      <div className="absolute top-6 right-6 hidden sm:block opacity-75">
        <motion.div
          animate={{
            x: isHovered ? -3 : 0,
            y: isHovered ? 3 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-3 gap-2"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={cn("w-1 h-1 rounded-full", dotColorClass)} />
          ))}
        </motion.div>
      </div>

      {/* 5. Center Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "font-sans text-xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-[700px] leading-tight mt-6 mb-8 relative z-10",
          titleColorClass
        )}
      >
        {title}
      </motion.h3>

      {/* 6. Outline CTA Button */}
      <div className="relative z-10">
        {buttonHref ? (
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <CTAButton text={buttonText} isHovered={isHovered} buttonColorClass={buttonColorClass} />
          </a>
        ) : (
          <button onClick={onButtonClick} type="button">
            <CTAButton text={buttonText} isHovered={isHovered} buttonColorClass={buttonColorClass} />
          </button>
        )}
      </div>
    </motion.footer>
  );
}

/* Internal CTA Button Component with physics scales */
function CTAButton({ text, isHovered, buttonColorClass }: { text: string; isHovered: boolean; buttonColorClass: string }) {
  return (
    <motion.div
      animate={{
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={cn(
        "px-6 py-2.5 rounded-full border text-xs font-semibold tracking-wider uppercase transition-colors duration-300 shadow-md cursor-pointer select-none",
        buttonColorClass
      )}
    >
      {text}
    </motion.div>
  );
}
