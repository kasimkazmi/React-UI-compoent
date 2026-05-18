# GitHub Star Component & Editorial Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a premium GitHub Star card below the table of contents and a brand-neutral, editorial-grade Blog "Coming Soon" page with multiple entrance paths.

**Architecture:** 
- The `GitHubStarCard` will be a standalone React component, integrated directly into the `TableOfContents` component to stack in its sticky bottom section.
- The Blog route `/blog` will render a beautiful fullscreen editorial layout utilizing `framer-motion` for fluid micro-interactions and animations.
- The sidebar layout and home landing page will be updated with high-end editorial navigation links leading to the new Blog page.

**Tech Stack:** Next.js (App Router), React 18, Tailwind CSS, Framer Motion, Lucide React icons.

---

### Task 1: Create GitHub Star Card Component

**Files:**
- Create: `src/components/github-star-card.tsx`

- [ ] **Step 1: Write the component code**
Create the file [github-star-card.tsx](file:///D:/Kasim/KasimDev%20-%20Work-Space/Development%20-%20WorkSpace/NextJS-%20Projects/Modus-UI/src/components/github-star-card.tsx) with the following content:
```tsx
"use client";

import React from "react";
import { Github, Star } from "lucide-react";

export function GitHubStarCard() {
  return (
    <div className="rounded-xl border border-[#E0DEDB] bg-[#F7F5F3]/50 p-4 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Category Header */}
      <div className="flex items-center gap-2 mb-2 text-[#605A57]/60">
        <Github className="w-3.5 h-3.5" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Open Source</p>
      </div>

      {/* Title */}
      <h4 className="font-serif text-2xl text-[#37322F] tracking-tight font-normal">Modus UI</h4>
      
      {/* Subtitle */}
      <p className="text-xs text-[#605A57] leading-relaxed mt-1.5 mb-3">
        The premium, editorial-grade React component library, open-source and available on GitHub!
      </p>

      {/* Repo Link */}
      <a 
        href="https://github.com/kasimkazmi/Modus-UI"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-semibold text-[#605A57] hover:text-[#37322F] underline underline-offset-4 decoration-[#E0DEDB] hover:decoration-[#37322F] transition-all block mb-4"
      >
        github.com/kasimkazmi/Modus-UI
      </a>

      {/* CTA Button */}
      <a
        href="https://github.com/kasimkazmi/Modus-UI"
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn flex items-center justify-center gap-2 rounded-lg bg-[#37322F] hover:bg-[#4A4542] px-3 py-2.5 text-xs font-semibold text-[#FAF9F7] transition-all duration-200 active:scale-[0.98] shadow-sm"
      >
        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover/btn:rotate-[15deg] transition-transform duration-300" />
        <span>Star on GitHub</span>
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Commit Task 1**
Run:
```powershell
git add src/components/github-star-card.tsx
git commit -m "feat: add GitHubStarCard component with premium editorial style"
```

---

### Task 2: Integrate GitHub Star Card in TableOfContents

**Files:**
- Modify: `src/components/table-of-contents.tsx`

- [ ] **Step 1: Update TableOfContents imports and layout**
Modify [table-of-contents.tsx](file:///D:/Kasim/KasimDev%20-%20Work-Space/Development%20-%20WorkSpace/NextJS-%20Projects/Modus-UI/src/components/table-of-contents.tsx) to import `GitHubStarCard` and render it above `DeveloperCard`.

```tsx
// Around line 5, import GitHubStarCard
import { DeveloperCard } from "./developer-card";
import { GitHubStarCard } from "./github-star-card";
```

And update lines 101-103:
```tsx
      <div className="mt-4 pt-4 border-t border-[#E0DEDB]/60 flex flex-col gap-4">
        <GitHubStarCard />
        <DeveloperCard />
      </div>
```

- [ ] **Step 2: Commit Task 2**
Run:
```powershell
git add src/components/table-of-contents.tsx
git commit -m "feat: integrate GitHubStarCard in TableOfContents component"
```

---

### Task 3: Create Blog Coming Soon Page

**Files:**
- Create: `src/app/blog/page.tsx`

- [ ] **Step 1: Write the blog page code**
Create the file [page.tsx](file:///D:/Kasim/KasimDev%20-%20Work-Space/Development%20-%20WorkSpace/NextJS-%20Projects/Modus-UI/src/app/blog/page.tsx) with the following content:
```tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, BookOpen, Send, Check } from "lucide-react";

export default function BlogComingSoonPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background text-[#37322F] px-6 py-12 md:px-12 lg:px-24">
      {/* Subtle Editorial Background Elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#E0DEDB] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute bottom-0 -right-4 w-[32rem] h-[32rem] bg-[#F0EDEA] rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <Link 
          href="/" 
          className="flex items-center gap-2 group text-sm font-semibold text-[#605A57] hover:text-[#37322F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Return Home</span>
        </Link>
        
        <Link 
          href="/docs" 
          className="flex items-center gap-2 text-sm font-serif italic text-[#37322F] hover:text-[#37322F]/80 transition-colors"
        >
          <span>Modus Library</span>
        </Link>
      </header>

      {/* Main Editorial Hero */}
      <div className="relative z-10 w-full max-w-[700px] mx-auto my-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-2xl bg-[#F7F5F3] border border-[#E0DEDB] flex items-center justify-center mb-8 shadow-sm"
        >
          <BookOpen className="w-7 h-7 text-[#37322F]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-border bg-white/50 text-muted-foreground text-xs font-semibold mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary/60 animate-pulse" />
          <span className="uppercase tracking-[0.1em]">Modus Journal</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-[#37322F] mb-6 tracking-tight font-normal"
        >
          Writing in <span className="italic font-normal">Restraint</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[#605A57] leading-relaxed max-w-md mx-auto mb-12 font-medium"
        >
          A curated publication on advanced design systems, visual semantics, and typographic precision. Launching shortly.
        </motion.p>

        {/* Premium Subscription Mock */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md p-6 rounded-2xl border border-[#E0DEDB] bg-white/40 backdrop-blur-md shadow-sm"
        >
          <h5 className="font-serif text-lg text-[#37322F] mb-2 font-normal">Subscribe to first release</h5>
          <p className="text-xs text-[#605A57] mb-4">No spam. Only deep technical essays on UI restraint.</p>
          
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50/50 border border-emerald-200/50 rounded-xl p-3 text-sm font-semibold">
              <Check className="w-4 h-4" />
              <span>You are on the list. Thank you.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-[#E0DEDB] rounded-lg px-3 py-2.5 text-xs text-[#37322F] placeholder-[#605A57]/40 focus:outline-none focus:border-[#37322F] transition-all"
              />
              <button
                type="submit"
                className="bg-[#37322F] hover:bg-[#4A4542] text-[#FAF9F7] text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Send className="w-3 h-3" />
                <span>Join</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer Signature */}
      <footer className="relative z-10 w-full max-w-[1200px] mx-auto text-center mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-[#37322F]/40 text-[10px] font-bold uppercase tracking-[0.3em]"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#37322F]/40">
            <path d="M4 20V8a4 4 0 0 1 8 0v12" />
            <path d="M12 20V8a4 4 0 0 1 8 0v12" />
          </svg>
          <span>Modus UI Publishing</span>
        </motion.div>
      </footer>
    </main>
  );
}
```

- [ ] **Step 2: Commit Task 3**
Run:
```powershell
git add src/app/blog/page.tsx
git commit -m "feat: add Blog coming-soon page with premium editorial newsletter sign up"
```

---

### Task 4: Integrate Blog Navigation in Sidebar and Homepage

**Files:**
- Modify: `src/app/docs/layout.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add Resources / Blog Category to Docs Layout**
Modify [layout.tsx](file:///D:/Kasim/KasimDev%20-%20Work-Space/Development%20-%20WorkSpace/NextJS-%20Projects/Modus-UI/src/app/docs/layout.tsx).
First, import `BookOpen` at the top:
```tsx
import { 
  Layout, 
  MousePointer2, 
  Type, 
  CreditCard, 
  PanelTop,
  Sparkles,
  LayoutTemplate,
  BookOpen
} from "lucide-react";
```
Then append the new category to `DOC_CATEGORIES`:
```tsx
const DOC_CATEGORIES = [
  ...
  {
    title: "Text",
    icon: Type,
    items: [
      { title: "Floating Text", href: "/docs/floating-text" },
    ]
  },
  {
    title: "Resources",
    icon: BookOpen,
    items: [
      { title: "Blog (Coming Soon)", href: "/blog" },
    ]
  }
];
```

- [ ] **Step 2: Add Blog Link to Homepage Navigation**
Modify [page.tsx](file:///D:/Kasim/KasimDev%20-%20Work-Space/Development%20-%20WorkSpace/NextJS-%20Projects/Modus-UI/src/app/page.tsx) to add the Blog navigation:
- Create a header container at the top of the main home page (above the hero container) featuring a sleek logo and a link to `/blog`.
Replace lines 5-11:
```tsx
export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background">
      {/* Subtle Warm Background Elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#E0DEDB] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute bottom-0 -right-4 w-[32rem] h-[32rem] bg-[#F0EDEA] rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />

      {/* Minimal Top Header */}
      <header className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg font-bold text-[#37322F]">
          <div className="w-7 h-7 rounded-full bg-[#37322F] flex items-center justify-center shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F7F5F3] translate-y-[0.5px]">
              <path d="M4 20V8a4 4 0 0 1 8 0v12" />
              <path d="M12 20V8a4 4 0 0 1 8 0v12" />
            </svg>
          </div>
          <span>Modus UI</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-semibold text-[#605A57]">
          <Link href="/docs" className="hover:text-[#37322F] transition-colors">Components</Link>
          <Link href="/blog" className="hover:text-[#37322F] transition-colors flex items-center gap-1.5">
            <span>Journal</span>
            <span className="text-[9px] uppercase tracking-widest bg-[#E0DEDB]/40 text-[#605A57]/80 rounded px-1 py-0.2 scale-[0.9]">New</span>
          </Link>
        </nav>
      </header>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 text-center my-auto">
```
And replace the trailing lines:
```tsx
      {/* Decorative Diagonal Stripes (Editorial Style) */}
      <div className="absolute top-12 right-12 opacity-10 pointer-events-none">
        <div className="stripe-landing w-40 bg-primary mb-4" />
        <div className="stripe-landing w-24 bg-primary" />
      </div>

      {/* Bottom Footer block */}
      <footer className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-6 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#605A57]/40">
        <span>© 2026 Modus UI. Built with typographic precision.</span>
      </footer>
    </main>
  );
}
```

- [ ] **Step 3: Commit Task 4**
Run:
```powershell
git add src/app/docs/layout.tsx src/app/page.tsx
git commit -m "feat: add Blog navigation entry points to Docs sidebar and Homepage header"
```

---

### Task 5: Verification & Production Build Validation

**Files:**
- Run commands only.

- [ ] **Step 1: Run dev and validation tests**
Propose to run next dev and compile the build:
Run:
```powershell
pnpm run build
```
Expected: Zero typescript or compile errors. Successfully generates a production bundle.
