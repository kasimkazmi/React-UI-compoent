# MorphingNavbar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a standalone, scroll-aware "MorphingNavbar" component that changes its height and density based on scroll position, integrated into the React-UI-compoent library.

**Architecture:** Use `framer-motion` for layout transitions, `useEffect` for scroll tracking, and internalize UI helpers to ensure the component is standalone and CLI-ready.

**Tech Stack:** Next.js, Tailwind CSS, Framer Motion, Lucide React.

---

### Task 1: Create the MorphingNavbar Registry Component

**Files:**
- Create: `src/registry/morphing-navbar.tsx`

- [ ] **Step 1: Implement the MorphingNavbar component**
Create the file with the scroll logic, Framer Motion animations, and internal sub-components.

```tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  GraduationCap,
  Moon,
  Sun,
  Home
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

export function MorphingNavbar({ 
  title = "Morphing Navbar",
  logo: Logo = GraduationCap,
  breadcrumbSteps = [],
  onHomeClick = () => {},
  onProfileClick = () => {},
  onToggleSidebar = () => {},
  sidebarOpen = false
}: {
  title?: string;
  logo?: React.ElementType;
  breadcrumbSteps?: { label: string; href?: string }[];
  onHomeClick?: () => void;
  onProfileClick?: () => void;
  onToggleSidebar?: () => void;
  sidebarOpen?: boolean;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Look for a specific scroll container or fallback to window
      const scrollY = window.scrollY;
      setCollapsed(scrollY > 36);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button
              onClick={onHomeClick}
              className="group flex items-center gap-2 bg-transparent border-none p-0 transition-opacity hover:opacity-80"
            >
              <motion.div
                animate={{ scale: collapsed ? 0.9 : 1 }}
                className="text-[#37322F]"
              >
                <Logo className={cn("transition-all duration-500", collapsed ? "h-8 w-8" : "h-9 w-9")} />
              </motion.div>
              <motion.h1
                animate={{ fontSize: collapsed ? "1.25rem" : "1.75rem" }}
                className="font-serif font-normal tracking-tight text-[#37322F]"
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
              className="hidden sm:flex p-0 h-10 w-10"
            >
              <UserAvatar alt="User" />
            </NavButton>

            <NavButton onClick={onHomeClick}>
              Home
            </NavButton>

            <div className="hidden sm:flex items-center gap-2 border border-[#E0DEDB] bg-white/40 rounded-full p-1 ml-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-1.5 rounded-full hover:bg-[#F0EDEA] transition-colors"
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 hidden sm:block"
            >
              <div className="flex items-center gap-1 text-xs text-[#605A57]">
                <span>All Pages</span>
                {breadcrumbSteps.map((step, i) => (
                  <React.Fragment key={i}>
                    <ChevronRight className="w-3 h-3" />
                    <span className={cn(
                      "truncate max-w-[150px]",
                      i === breadcrumbSteps.length - 1 ? "font-medium text-[#37322F]" : ""
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
```

### Task 2: Register in Registry

**Files:**
- Modify: `src/registry/index.ts`

- [ ] **Step 2: Add MorphingNavbar to registry**
Add the entry to the exported `registry` array.

```typescript
// ... existing imports
{
  name: "morphing-navbar",
  type: "components:ui",
  files: ["registry/morphing-navbar.tsx"],
},
```

### Task 3: Create Documentation Page

**Files:**
- Create: `src/app/docs/components/morphing-navbar/page.tsx`

- [ ] **Step 3: Implement the documentation page**
Create the page with Tabs for Preview and Code.

```tsx
import { MorphingNavbar } from "@/registry/morphing-navbar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CopyButton } from "@/components/copy-button"

export default function MorphingNavbarPage() {
  const componentCode = `"use client";
// ... (Insert content of Task 1 here)
`;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="heading-landing text-4xl mb-4">Morphing Navbar</h1>
      <p className="text-[#605A57] mb-8">
        A premium, scroll-aware navigation header that dynamically adjusts its height, logo scale, and background density.
      </p>

      <Tabs defaultValue="preview" className="mb-8">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="relative border rounded-xl overflow-hidden bg-[#FAF9F7] h-[500px]">
             {/* Simulated scroll container */}
             <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                <MorphingNavbar 
                  title="Premium UI Path" 
                  breadcrumbSteps={[{ label: "Components" }, { label: "Morphing Navbar" }]}
                />
                <div className="p-10 space-y-8">
                  <h2 className="text-2xl font-serif">Scroll down to see the effect</h2>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <p key={i} className="text-[#605A57] leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  ))}
                </div>
             </div>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="relative">
            <CopyButton value={componentCode} />
            <pre className="bg-[#37322F] text-[#F7F5F3] p-4 rounded-lg text-sm overflow-x-auto mt-2">
              <code>{componentCode}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>

      {/* Installation and Props section... */}
    </div>
  )
}
```
