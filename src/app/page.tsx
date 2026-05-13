import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-indigo-500/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white" />
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700" />

      <div className="relative z-10 container flex flex-col items-center text-center px-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Your Personal Component Registry</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent leading-[1.1]">
          Build your UI <br className="hidden md:block" /> with magic.
        </h1>
        
        <p className="max-w-[600px] text-lg text-muted-foreground mb-10 leading-relaxed">
          A high-end component library template for your custom creations. 
          Fully automated registry, CLI ready, and open-source.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/docs/magic-button"
            className="group inline-flex items-center justify-center h-12 px-8 rounded-full bg-indigo-600 text-white font-semibold transition-all hover:bg-indigo-700 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95"
          >
            Explore Components
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="https://github.com"
            target="_blank"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-slate-800 bg-slate-900/50 text-white font-semibold transition-all hover:bg-slate-800 backdrop-blur-xl"
          >
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}