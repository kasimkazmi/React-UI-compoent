import React from "react";
import { getRegistryComponent } from "@/lib/registry";
import { CopyButton } from "./copy-button";
import { MagicButton } from "@/registry/magic-button"; // Temporary direct import for the example

// Map of components for the preview sandbox
const COMPONENT_MAP: Record<string, React.ComponentType> = {
  "magic-button": MagicButton,
};

interface ComponentPreviewProps {
  name: string;
}

export const ComponentPreview = ({ name }: ComponentPreviewProps) => {
  const component = getRegistryComponent(name);
  const Preview = COMPONENT_MAP[name];

  if (!component || !Preview) {
    return <div className="text-red-500">Component "{name}" not found.</div>;
  }

  return (
    <div className="group relative my-4 flex flex-col space-y-2">
      <div className="relative rounded-lg border bg-slate-950/50 p-10 flex items-center justify-center min-h-[200px] overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_85%)]" />
        <Preview />
      </div>
      
      <div className="relative rounded-lg border bg-slate-900 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b">
          <span className="text-xs font-mono text-slate-400">{component.files[0]}</span>
          <CopyButton value={component.content} />
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300">
          <code>{component.content}</code>
        </pre>
      </div>
    </div>
  );
};