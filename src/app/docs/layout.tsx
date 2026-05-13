import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getAllDocs } from "@/lib/mdx";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = await getAllDocs();

  return (
    <div className="flex min-h-screen bg-black">
      <aside className="w-64 border-r border-slate-900 bg-black sticky top-0 h-screen overflow-y-auto hidden md:block">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white mb-8">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)]">
               <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span>Magic UI</span>
          </Link>
          <nav className="space-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 px-2 mb-4">
                Components
              </h4>
              <div className="space-y-1">
                {docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
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
        <header className="h-14 border-b border-slate-900 bg-black/80 backdrop-blur-md flex items-center px-6 md:hidden sticky top-0 z-50">
           <Link href="/" className="text-lg font-bold text-white">
            Magic UI
          </Link>
        </header>
        <div className="flex-1 overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}