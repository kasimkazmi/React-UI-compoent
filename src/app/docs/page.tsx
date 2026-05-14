import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Documentation</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore our collection of animated UI components.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/docs/components/morphing-navbar"
          className="block p-6 border border-[#E0DEDB] rounded-xl hover:shadow-lg transition-all bg-white/50 hover:-translate-y-1 group"
        >
          <h2 className="text-xl font-semibold mb-2 text-[#37322F]">Morphing Navbar</h2>
          <p className="text-[#605A57]">
            A premium, scroll-aware header with fluid morphing animations.
          </p>
        </Link>

        <Link
          href="/docs/components/animated-button"
          className="block p-6 border border-[#E0DEDB] rounded-xl hover:shadow-lg transition-all bg-white/50 hover:-translate-y-1 group"
        >
          <h2 className="text-xl font-semibold mb-2 text-[#37322F]">Animated Button</h2>
          <p className="text-[#605A57]">
            A button with hover and tap animations.
          </p>
        </Link>

        <Link
          href="/docs/components/rotating-card"
          className="block p-6 border border-[#E0DEDB] rounded-xl hover:shadow-lg transition-all bg-white/50 hover:-translate-y-1 group"
        >
          <h2 className="text-xl font-semibold mb-2 text-[#37322F]">Rotating Card</h2>
          <p className="text-[#605A57]">
            A card that rotates on hover.
          </p>
        </Link>

        <Link
          href="/docs/components/floating-text"
          className="block p-6 border border-[#E0DEDB] rounded-xl hover:shadow-lg transition-all bg-white/50 hover:-translate-y-1 group"
        >
          <h2 className="text-xl font-semibold mb-2 text-[#37322F]">Floating Text</h2>
          <p className="text-[#605A57]">
            Text with continuous floating animation.
          </p>
        </Link>

        <Link
          href="/docs/components/pulse-button"
          className="block p-6 border border-[#E0DEDB] rounded-xl hover:shadow-lg transition-all bg-white/50 hover:-translate-y-1 group"
        >
          <h2 className="text-xl font-semibold mb-2 text-[#37322F]">Pulse Button</h2>
          <p className="text-[#605A57]">
            A button with pulsing scale effect.
          </p>
        </Link>
      </div>
    </div>
  )
}