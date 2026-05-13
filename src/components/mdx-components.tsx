import React from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import { CodeBlock } from "./code-block";

export const MDXComponents = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-white",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b border-slate-800 pb-2 text-3xl font-semibold tracking-tight text-white first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-white",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={cn(
        "leading-7 text-slate-400 [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul
      className={cn("my-6 ml-6 list-disc text-slate-400 [&>li]:mt-2", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        "relative rounded bg-slate-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-white",
        className
      )}
      {...props}
    />
  ),
  pre: async ({ className, children, ...props }: any) => {
    const code = children?.props?.children || "";
    const lang = children?.props?.className?.replace("language-", "") || "tsx";

    return (
      <div className="relative mb-6 mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
        <div className="absolute right-4 top-4 z-20">
          <CopyButton
            value={code}
            className="h-8 w-8 bg-slate-900 border-slate-800 hover:bg-slate-800"
          />
        </div>
        <CodeBlock code={code} lang={lang} />
      </div>
    );
  },
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [border-image:linear-gradient(to_bottom,var(--tw-gradient-stops))_1_100%] from-slate-800 to-transparent [counter-reset:step]"
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "mt-8 scroll-m-32 text-xl font-medium tracking-tight text-white",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg border border-slate-800">
      <table className={cn("w-full text-sm", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t border-slate-800 p-0 even:bg-slate-900/50", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border-slate-800 px-4 py-2 text-left font-bold text-white [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border-slate-800 px-4 py-2 text-left text-slate-400 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
};
