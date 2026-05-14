import { createHighlighter } from "shiki";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

let highlighter: any = null;

async function getHighlighterInstance() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: ["tsx", "bash", "typescript", "javascript", "jsx"],
    });
  }
  return highlighter;
}

export async function CodeBlock({ 
  code, 
  lang = "tsx",
  minimal = false
}: { 
  code: string; 
  lang?: string;
  minimal?: boolean;
}) {
  const instance = await getHighlighterInstance();
  let html = "";
  
  try {
    html = instance.codeToHtml(code, {
      lang,
      theme: "github-dark",
    });
  } catch (error) {
    console.error("Shiki highlighting failed:", error);
    // Fallback to raw code if highlighting fails
    html = `<pre><code>${code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;
  }

  const content = (
    <div 
      className={cn(
        "text-[13px] font-mono leading-relaxed [&>pre]:!bg-transparent [&>pre]:!p-0 [&>pre]:!m-0 overflow-x-auto custom-scrollbar",
        !minimal && "p-6"
      )}
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );

  if (minimal) return content;

  return (
    <div className="relative group rounded-xl overflow-hidden bg-[#1A1A16] border border-[#37322F]/20 shadow-2xl">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#242421] border-b border-[#37322F]/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0DEDB]/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0DEDB]/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0DEDB]/20" />
        </div>
        <div className="flex items-center gap-4">
          <div className="text-[10px] font-mono text-[#E0DEDB]/40 uppercase tracking-widest">
            {lang}
          </div>
          <CopyButton
            value={code}
            className="h-7 w-7 bg-transparent border-none text-[#E0DEDB]/40 hover:text-[#E0DEDB] transition-all"
          />
        </div>
      </div>
      
      {/* Code Content */}
      {content}
    </div>
  );
}
