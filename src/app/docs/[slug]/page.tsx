import Link from "next/link";
import { getDocBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function DocPage({ params }: PageProps) {
  const doc = await getDocBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex w-full gap-10">
      <main className="flex-1 py-16 px-8 md:px-16">
        <nav className="flex items-center space-x-1 text-sm text-slate-500 mb-8">
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-700">Components</span>
          <span className="text-slate-700">/</span>
          <span className="text-white font-medium">{doc.frontmatter.title}</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter text-white">
            {doc.frontmatter.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {doc.frontmatter.description}
          </p>
        </div>
        
        <div className="prose prose-slate prose-invert max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-800/50 prose-h2:pb-2
          prose-a:text-indigo-400">
          {doc.content}
        </div>
      </main>

      <aside className="hidden xl:block w-64 shrink-0 py-16 pr-8">
        <div className="sticky top-16">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">On This Page</p>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Preview</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Installation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Usage</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Props</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export async function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");
  const files = fs.readdirSync(path.join(process.cwd(), "src/content/docs"));
  
  return files.map((file: string) => ({
    slug: file.replace(".mdx", ""),
  }));
}
