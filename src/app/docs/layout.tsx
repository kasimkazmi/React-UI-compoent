import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getAllDocs } from "@/lib/mdx";
import { cn } from "@/lib/utils";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = await getAllDocs();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 border-r border-border bg-white/40 backdrop-blur-xl sticky top-0 h-screen overflow-y-auto hidden md:block">
        <div className="p-8">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-bold text-foreground mb-12"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-serif tracking-tight text-xl">React UI</span>
          </Link>
          <nav className="space-y-10">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-3 mb-5">
                Components
              </h4>
              <div className="space-y-1">
                {docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="flex items-center px-4 py-2.5 text-[15px] font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  >
                    {doc.frontmatter.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-white/80 backdrop-blur-md flex items-center px-6 md:hidden sticky top-0 z-50">
           <Link href="/" className="font-serif text-xl font-bold text-foreground">
            React UI
          </Link>
        </header>
        <div className="flex-1 overflow-x-hidden p-8 md:p-12">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}