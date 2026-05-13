import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDir = path.join(process.cwd(), "src/content/docs");

export async function getDocBySlug(slug: string) {
  const fileName = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;
  const filePath = path.join(contentDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    content,
    frontmatter,
    slug: fileName.replace(".mdx", ""),
  };
}

export async function getAllDocs() {
  const files = fs.readdirSync(contentDir);
  const docs = [];

  for (const file of files) {
    const doc = await getDocBySlug(file);
    if (doc) {
      docs.push(doc);
    }
  }

  return docs;
}
