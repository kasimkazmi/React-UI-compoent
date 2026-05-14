import React from "react";
import { getRegistryComponent } from "@/lib/registry";
import { MagicButtonDemo } from "@/registry/magic-button-demo";
import { DockDemo } from "@/registry/dock-demo";
import { MorphingNavbarDemo } from "@/registry/morphing-navbar-demo";
import { AnimatedButtonDemo } from "@/registry/animated-button-demo";
import { PulseButtonDemo } from "@/registry/pulse-button-demo";
import { RotatingCardDemo } from "@/registry/rotating-card-demo";
import { FloatingTextDemo } from "@/registry/floating-text-demo";
import { ComponentPreviewClient } from "./component-preview-client";
import { CodeBlock } from "./code-block";

// Map of components for the preview sandbox
const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  "magic-button": MagicButtonDemo,
  "dock": DockDemo,
  "morphing-navbar": MorphingNavbarDemo,
  "animated-button": AnimatedButtonDemo,
  "pulse-button": PulseButtonDemo,
  "rotating-card": RotatingCardDemo,
  "floating-text": FloatingTextDemo,
};

interface ComponentPreviewProps {
  name: string;
}

export const ComponentPreview = async ({ name }: ComponentPreviewProps) => {
  const component = getRegistryComponent(name);
  const Preview = COMPONENT_MAP[name];

  if (!component || !Preview) {
    return (
      <div className="text-red-500 p-8 border border-red-200 rounded-2xl bg-red-50/50 font-medium text-sm">
        Component &quot;{name}&quot; not found in the registry map.
      </div>
    );
  }

  const filePath = component.files[0] || `components/ui/${name}.tsx`;

  return (
    <ComponentPreviewClient
      preview={<Preview />}
      code={component.content}
      filePath={filePath}
      highlightedCode={<CodeBlock code={component.content} lang="tsx" minimal={true} />}
    />
  );
};