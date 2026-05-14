"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  GraduationCap,
  Moon,
  Sun
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Simplified UI Helpers (Standalone) ---

const NavButton = ({ 
  children, 
  onClick, 
  className,
  variant = "primary" 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
}) => {
  const variants = {
    primary: "bg-[#37322F] text-[#F7F5F3] hover:opacity-90 shadow-sm",
    ghost: "bg-transparent text-[#37322F] hover:bg-[#F0EDEA]",
    outline: "border border-[#E0DEDB] bg-white/60 text-[#37322F] hover:bg-[#F0EDEA]"
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-95 active:scale-90",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

const UserAvatar = ({ src, alt }: { src?: string; alt: string }) => (
  <div className="h-10 w-10 overflow-hidden rounded-full border border-[#E0DEDB] bg-[#F0EDEA] flex items-center justify-center">
    {src ? (
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    ) : (
      <span className="text-xs font-bold text-[#605A57]">{alt.charAt(0)}</span>
    )}
  </div>
);

// --- Main Component ---

/**
 * MorphingNavbar is a premium, scroll-aware header that adjusts its layout density
 * based on the scroll position of the page or a target container.
 */
export function MorphingNavbar({ 
  title = "Morphing Navbar",
  logo: Logo = GraduationCap,
  breadcrumbSteps = [],
  onHomeClick = () => {},
  onProfileClick = () => {},
  onToggleSidebar = () => {},
  sidebarOpen = false,
  scrollThreshold = 36,
  targetId
}: {
  /** The title text displayed next to the logo */
  title?: string;
  /** The icon component to display as the logo */
  logo?: React.ElementType;
  /** Array of breadcrumb steps to display in expanded mode */
  breadcrumbSteps?: { label: string; href?: string }[];
  /** Callback for home button click */
  onHomeClick?: () => void;
  /** Callback for profile/avatar click */
  onProfileClick?: () => void;
  /** Callback for sidebar toggle button */
  onToggleSidebar?: () => void;
  /** Boolean indicating if the sidebar is currently open (for mobile toggle icon) */
  sidebarOpen?: boolean;
  /** Scroll distance in pixels before morphing to collapsed state */
  scrollThreshold?: number;
  /** Optional ID of a scrollable container to track instead of the window */
  targetId?: string;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const scrollTarget = targetId ? document.getElementById(targetId) : window;
    if (!scrollTarget) return;

    const handleScroll = () => {
      const scrollY = targetId 
        ? (scrollTarget as HTMLElement).scrollTop 
        : window.scrollY;
      setCollapsed(scrollY > scrollThreshold);
    };

    // Check initial scroll position
    handleScroll();
    
    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold, targetId]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 border-b",
        collapsed 
          ? "bg-[#F7F5F3]/95 shadow-md backdrop-blur-md border-[#E0DEDB]/80 h-[80px]" 
          : "bg-[#F7F5F3]/80 backdrop-blur-sm border-[#E0DEDB]/40 h-[104px]"
      )}
    >
      <div className={cn(
        "mx-auto h-full w-full px-4 md:px-8 lg:px-10 flex flex-col justify-center transition-all duration-500",
        collapsed ? "max-w-full" : "max-w-[1200px]"
      )}>
        <div className="flex items-center justify-between w-full">
          {/* Left Section: Logo & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 hover:bg-[#F0EDEA] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button
              onClick={onHomeClick}
              className="group flex items-center bg-transparent border-none p-0 transition-opacity hover:opacity-80 outline-none"
              aria-label="Go home"
            >
              <motion.div
                animate={{ scale: collapsed ? 0.9 : 1 }}
                style={{ originX: 0 }}
                className="grid grid-cols-[auto,auto] items-center gap-3"
              >
                <div className="flex items-center justify-center">
                  <Logo className={cn("text-[#37322F] transition-all duration-500", collapsed ? "h-7 w-7" : "h-9 w-9")} />
                </div>
                <h1 className="font-serif font-medium tracking-tight text-[#37322F] whitespace-nowrap leading-none text-3xl">
                  {title}
                </h1>
              </motion.div>
            </button>
          </div>

          {/* Right Section: Actions */}
          <div className="flex items-center gap-2">
            <NavButton 
              variant="ghost" 
              onClick={onProfileClick}
              className="hidden sm:flex p-0 h-10 w-10 overflow-hidden"
              aria-label="View profile"
            >
              <UserAvatar alt="User" />
            </NavButton>

            <NavButton onClick={onHomeClick} className="hidden xs:flex">
              Home
            </NavButton>

            <div className="hidden sm:flex items-center gap-2 border border-[#E0DEDB] bg-white/40 rounded-full p-1 ml-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-1.5 rounded-full hover:bg-[#F0EDEA] transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumbs (Expandable) */}
        <AnimatePresence>
          {!collapsed && breadcrumbSteps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="hidden sm:block overflow-hidden"
            >
              <div className="flex items-center gap-1 text-xs text-[#605A57]">
                <span className="cursor-pointer hover:text-[#37322F]" onClick={onHomeClick}>All Pages</span>
                {breadcrumbSteps.map((step, i) => (
                  <React.Fragment key={i}>
                    <ChevronRight className="w-3 h-3 flex-shrink-0" />
                    <span className={cn(
                      "truncate max-w-[150px]",
                      i === breadcrumbSteps.length - 1 ? "font-medium text-[#37322F]" : "cursor-pointer hover:text-[#37322F]"
                    )}>
                      {step.label}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bottom accent line */}
      <motion.div 
        animate={{ opacity: collapsed ? 1 : 0.6 }}
        className="h-px w-full bg-[#E0DEDB]"
      />
    </header>
  );
}
