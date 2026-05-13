import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Subtle Warm Background Elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#E0DEDB] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute bottom-0 -right-4 w-[32rem] h-[32rem] bg-[#F0EDEA] rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />

      <div className="relative z-10 w-full max-w-[1400px] px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-border bg-white/50 text-muted-foreground text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary/60" />
          <span>Now with Ingexta precision design</span>
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
          <Link
            href="https://github.com"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full border border-border bg-white text-foreground font-semibold transition-all hover:bg-secondary"
          >
            Github Reference
          </Link>
        </div>
      </div>

      {/* Decorative Diagonal Stripes (Ingexta Style) */}
      <div className="absolute top-12 right-12 opacity-10 pointer-events-none">
        <div className="stripe-landing w-40 bg-primary mb-4" />
        <div className="stripe-landing w-24 bg-primary" />
      </div>
    </main>
  );
}