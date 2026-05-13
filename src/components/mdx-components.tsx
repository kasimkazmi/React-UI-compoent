import React from "react";
import { CopyButton } from "./copy-button";
import { CodeBlock } from "./code-block";

export const MDXComponents = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={"mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-white"}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={"mt-10 scroll-m-20 border-b border-slate-800 pb-2 text-3xl font-semibold tracking-tight text-white first:mt-0"}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={"mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-white"}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={"leading-7 text-slate-400 [&:not(:first-child)]:mt-6"}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={"my-6 ml-6 list-disc text-slate-400 [&>li]:mt-2"} {...props} />
  ),
  code: ({ className, ...props }: any) => (
    <code
      className={"relative rounded bg-slate-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-white"}
      {...props}
    />
  ),
  pre: async ({ className, children, ...props }: any) => {
    const code = children?.props?.children || "";
    const lang = children?.props?.className?.replace("language-", "") || "tsx";
    
    return (
      <div className="relative mb-6 mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
        <div className="absolute right-4 top-4 z-20">
          <CopyButton value={code} className="h-8 w-8 bg-slate-900 border-slate-800 hover:bg-slate-800" />
        </div>
        <CodeBlock code={code} lang={lang} />
      </div>
    );
  },
};
