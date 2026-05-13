import React from "react";
import Link from "next/link";
import { getAllDocs } from "@/lib/mdx";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = await getAllDocs();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-card/50 backdrop-blur-md sticky top-0 h-screen overflow-y-auto hidden md:block">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Magic UI Clone
          </Link>
          <nav className="mt-10 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-4">
              Components
            </p>
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="block px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
              >
                {doc.frontmatter.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <div className="flex-1">
        <header className="h-16 border-b flex items-center px-8 md:hidden">
           <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Magic UI
          </Link>
        </header>
        {children}
      </div>
    </div>
  );
}