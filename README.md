# React UI Component Library

A collection of custom UI components with animations and effects, inspired by Magic UI. Free, open source, and copy-paste ready.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Utilities:** clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kasimkazmi/React-UI-compoent.git
   cd React-UI-compoent
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Documentation

Visit `/docs` to explore detailed documentation for each component, including:

- Live previews
- Code examples with copy-to-clipboard functionality
- Installation instructions
- Props documentation

## Components

### Animated Components
- **AnimatedButton** - Button with hover and tap scale animations
- **RotatingCard** - Card that rotates on hover with spring physics
- **FloatingText** - Text with continuous floating animation
- **PulseButton** - Button with pulsing scale effect

## Usage

Each component is showcased on the main page with live previews and code snippets. Simply copy the code and paste into your project.

### Example

```tsx
import { AnimatedButton } from "@/components/ui/animated-button"

export default function MyComponent() {
  return <AnimatedButton>Click Me</AnimatedButton>
}
```

## Project Structure

```
src/
├── app/
│   ├── docs/                 # Documentation pages
│   │   ├── components/       # Individual component docs
│   │   └── page.tsx          # Docs index
│   ├── layout.tsx
│   ├── page.tsx              # Homepage with component previews
│   └── globals.css
├── components/
│   ├── ui/                   # UI components
│   ├── component-preview.tsx # Preview component with code toggle
│   └── copy-button.tsx       # Copy-to-clipboard functionality
└── lib/
    └── utils.ts              # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your component in `src/components/ui/`
4. Create documentation in `src/app/docs/components/`
5. Update the sidebar navigation in `src/app/docs/layout.tsx`
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).