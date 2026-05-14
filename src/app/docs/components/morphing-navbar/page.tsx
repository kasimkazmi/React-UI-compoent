import { MorphingNavbar } from "@/registry/morphing-navbar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CopyButton } from "@/components/copy-button"
import { CodeBlock } from "@/components/code-block"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function MorphingNavbarPage() {
  const componentCode = `"use client";

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
              className="group flex items-center gap-2 bg-transparent border-none p-0 transition-opacity hover:opacity-80"
              aria-label="Go home"
            >
              <motion.div
                animate={{ scale: collapsed ? 0.9 : 1 }}
                className="text-[#37322F]"
              >
                <Logo className={cn("transition-all duration-500", collapsed ? "h-8 w-8" : "h-9 w-9")} />
              </motion.div>
              <motion.h1
                animate={{ fontSize: collapsed ? "1.25rem" : "1.75rem" }}
                className="font-serif font-normal tracking-tight text-[#37322F] whitespace-nowrap"
              >
                {title}
              </motion.h1>
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
}`;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <Link 
        href="/docs" 
        className="inline-flex items-center text-sm text-[#605A57] hover:text-[#37322F] mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Components
      </Link>

      <h1 className="heading-landing text-4xl mb-4">Morphing Navbar</h1>
      <p className="text-[#605A57] text-lg mb-8 leading-relaxed">
        A premium, scroll-aware navigation header that dynamically adjusts its layout, logo scale, 
        and background density as the user scrolls. Part of the Ingexta design series.
      </p>

      <Tabs defaultValue="preview" className="mb-12">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="relative border border-[#E0DEDB] rounded-2xl overflow-hidden bg-[#FAF9F7] h-[600px] shadow-sm">
             {/* Simulated scroll container */}
             <div id="preview-scroll-container" className="absolute inset-0 overflow-y-auto custom-scrollbar">
                <div className="sticky top-0 z-50">
                  <MorphingNavbar 
                    title="Morphing Navbar" 
                    targetId="preview-scroll-container"
                    breadcrumbSteps={[{ label: "Components" }, { label: "Navigation" }]}
                  />
                </div>
                <div className="p-10 space-y-12 max-w-2xl mx-auto">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-serif text-[#37322F]">Live in Action</h2>
                    <p className="text-[#605A57] leading-relaxed text-lg">
                      Scroll down inside this preview box to see the Navbar "morph." Watch how the height shrinks, the logo scales down, and the breadcrumbs gracefully exit to prioritize content space.
                    </p>
                  </div>
                  
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="space-y-4 p-8 border border-[#E0DEDB] rounded-xl bg-white/50">
                      <div className="h-4 w-1/4 bg-[#E0DEDB] rounded" />
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-[#F0EDEA] rounded" />
                        <div className="h-3 w-5/6 bg-[#F0EDEA] rounded" />
                        <div className="h-3 w-4/6 bg-[#F0EDEA] rounded" />
                      </div>
                    </div>
                  ))}
                  
                  <div className="h-20" /> {/* Spacer */}
                </div>
             </div>
          </div>
          <p className="mt-4 text-sm text-[#605A57] italic">
            Note: The preview above uses a targeted scroll container to demonstrate the effect within this page.
          </p>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={componentCode} lang="tsx" />
        </TabsContent>
      </Tabs>

      <section className="mb-12">
        <h2 className="text-2xl font-serif text-[#37322F] mb-4">Installation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-[#37322F] mb-2">CLI</h3>
            <CodeBlock code="npx react-ui-component add morphing-navbar" lang="bash" />
          </div>
          <div>
            <h3 className="font-medium text-[#37322F] mb-2">Manual</h3>
            <p className="text-[#605A57] mb-4">
              Copy the code from the "Code" tab and save it as <code>src/components/ui/morphing-navbar.tsx</code>.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-serif text-[#37322F] mb-4">Props</h2>
        <div className="overflow-hidden border border-[#E0DEDB] rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F0EDEA]">
              <tr>
                <th className="p-4 font-semibold text-[#37322F] border-b border-[#E0DEDB]">Prop</th>
                <th className="p-4 font-semibold text-[#37322F] border-b border-[#E0DEDB]">Type</th>
                <th className="p-4 font-semibold text-[#37322F] border-b border-[#E0DEDB]">Default</th>
                <th className="p-4 font-semibold text-[#37322F] border-b border-[#E0DEDB]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0DEDB]">
              <tr>
                <td className="p-4 font-mono text-sm">title</td>
                <td className="p-4 text-sm">string</td>
                <td className="p-4 text-sm">"Morphing Navbar"</td>
                <td className="p-4 text-sm">The title displayed next to the logo.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-sm">logo</td>
                <td className="p-4 text-sm">ElementType</td>
                <td className="p-4 text-sm">GraduationCap</td>
                <td className="p-4 text-sm">React icon component to use as the logo.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-sm">breadcrumbSteps</td>
                <td className="p-4 text-sm">Step[]</td>
                <td className="p-4 text-sm">[]</td>
                <td className="p-4 text-sm">Array of steps for the breadcrumb navigation.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-sm">scrollThreshold</td>
                <td className="p-4 text-sm">number</td>
                <td className="p-4 text-sm">36</td>
                <td className="p-4 text-sm">Scroll distance before collapsing.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-sm">targetId</td>
                <td className="p-4 text-sm">string</td>
                <td className="p-4 text-sm">-</td>
                <td className="p-4 text-sm">ID of a scrollable container to track.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
