import React from "react";
import { getRegistryComponent } from "@/lib/registry";
import { MagicButton } from "@/registry/magic-button";
import { DockDemo } from "@/registry/dock-demo";
import { ComponentPreviewClient } from "./component-preview-client";
import { CodeBlock } from "./code-block";

// Map of components for the preview sandbox
const COMPONENT_MAP: Record<string, React.ComponentType> = {
  "magic-button": MagicButton,
  dock: DockDemo,
};

interface ComponentPreviewProps {
  name: string;
}

export const ComponentPreview = async ({ name }: ComponentPreviewProps) => {
  const component = getRegistryComponent(name);
  const Preview = COMPONENT_MAP[name];

  if (!component || !Preview) {
    return <div className="text-red-500 p-4 border rounded-lg">Component "{name}" not found.</div>;
  }

  const filePath = component.files[0] || `components/ui/${name}.tsx`;

  return (
    <ComponentPreviewClient
      preview={<Preview />}
      code={component.content}
      filePath={filePath}
      highlightedCode={<CodeBlock code={component.content} lang="tsx" />}
    />
  );
};