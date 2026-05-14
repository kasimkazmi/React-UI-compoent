import Link from "next/link";
import { getDocBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components/table-of-contents";

interface PageProps {
  params: {
    slug: string;
  };
}

const TOC_ITEMS = [
  { title: "Preview", id: "preview" },
  { title: "Installation", id: "installation" },
  { title: "Usage", id: "usage" },
  { title: "Props", id: "props" },
];

export default async function DocPage({ params }: PageProps) {
  const doc = await getDocBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex w-full gap-24">
      <main className="flex-1 min-w-0">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-10">
          <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
          <span className="opacity-40">/</span>
          <span>Components</span>
          <span className="opacity-40">/</span>
          <span className="text-foreground font-medium">{doc.frontmatter.title}</span>
        </nav>

        <div className="mb-16">
          <h1 className="heading-landing text-5xl mb-6">
            {doc.frontmatter.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {doc.frontmatter.description}
          </p>
        </div>
        
        <div className="prose prose-neutral max-w-none 
          prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-foreground
          prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-3
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <div id="preview">
            {doc.content}
          </div>
        </div>
      </main>

      <aside className="hidden xl:block w-56 shrink-0">
        <TableOfContents items={TOC_ITEMS} />
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
