export const registry = [
  {
    name: "magic-button",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["registry/magic-button.tsx"],
  },
  {
    name: "dock",
    type: "components:ui",
    dependencies: ["motion", "class-variance-authority", "lucide-react"],
    files: ["registry/dock.tsx"],
  },
  {
    name: "morphing-navbar",
    type: "components:ui",
    dependencies: ["framer-motion", "lucide-react", "clsx", "tailwind-merge"],
    files: ["registry/morphing-navbar.tsx"],
  },
];
