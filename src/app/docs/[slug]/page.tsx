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
    <main className="container max-w-4xl py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">{doc.frontmatter.title}</h1>
        <p className="text-xl text-muted-foreground">{doc.frontmatter.description}</p>
      </div>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {doc.content}
      </div>
    </main>
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
