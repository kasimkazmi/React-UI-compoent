import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background">
      {/* Subtle Warm Background Elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#E0DEDB] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute bottom-0 -right-4 w-[32rem] h-[32rem] bg-[#F0EDEA] rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />

      {/* Minimal Top Header */}
      <header className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg font-bold text-[#37322F]">
          <div className="w-7 h-7 rounded-full bg-[#37322F] flex items-center justify-center shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F7F5F3] translate-y-[0.5px]">
              <path d="M4 20V8a4 4 0 0 1 8 0v12" />
              <path d="M12 20V8a4 4 0 0 1 8 0v12" />
            </svg>
          </div>
          <span className="font-serif tracking-tight">Modus UI</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-semibold text-[#605A57]">
          <Link href="/docs" className="hover:text-[#37322F] transition-colors">Components</Link>
          <Link href="/blog" className="hover:text-[#37322F] transition-colors flex items-center gap-1.5">
            <span>Journal</span>
            <span className="text-[9px] uppercase tracking-widest bg-[#E0DEDB]/40 text-[#605A57]/80 rounded px-1.5 py-0.5 scale-[0.9]">New</span>
          </Link>
        </nav>
      </header>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 text-center my-auto flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-border bg-white/50 text-muted-foreground text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary/60" />
          <span>Now with precision editorial design</span>
        </div>

        <h1 className="heading-landing text-6xl md:text-8xl mb-8">
          Build with <span className="italic">precision</span>.
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          A premium collection of React components designed for clarity, 
          accuracy, and effortless trust. Built for teams who process the future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/docs"
            className="btn-landing group h-14 px-10 text-lg"
          >
            Explore Components
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://github.com/kasimkazmi/Modus-UI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full border border-border bg-white text-foreground font-semibold transition-all hover:bg-secondary"
          >
            Github Reference
          </a>
        </div>
      </div>

      {/* Decorative Diagonal Stripes (Editorial Style) */}
      <div className="absolute top-12 right-12 opacity-10 pointer-events-none">
        <div className="stripe-landing w-40 bg-primary mb-4" />
        <div className="stripe-landing w-24 bg-primary" />
      </div>

      {/* Bottom Footer block */}
      <footer className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-6 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#605A57]/40 mt-12">
        <span>© 2026 Modus UI. Built with typographic precision.</span>
      </footer>
    </main>
  );
}