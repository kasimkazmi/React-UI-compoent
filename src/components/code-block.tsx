import { createHighlighter } from "shiki";

let highlighter: any = null;

async function getHighlighterInstance() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: ["tsx", "bash", "typescript"],
    });
  }
  return highlighter;
}

export async function CodeBlock({ code, lang = "tsx" }: { code: string; lang?: string }) {
  const instance = await getHighlighterInstance();

  const html = instance.codeToHtml(code, {
    lang,
    theme: "github-dark",
  });

  return (
    <div className="relative group">
      <div 
        className="[&>pre]:!bg-transparent [&>pre]:!p-0 [&>pre]:!m-0 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }} 
      />
    </div>
  );
}
