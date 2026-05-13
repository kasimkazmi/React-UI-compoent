import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Documentation</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore our collection of animated UI components.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/docs/components/animated-button"
          className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Animated Button</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A button with hover and tap animations.
          </p>
        </Link>

        <Link
          href="/docs/components/rotating-card"
          className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Rotating Card</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A card that rotates on hover.
          </p>
        </Link>

        <Link
          href="/docs/components/floating-text"
          className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Floating Text</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Text with continuous floating animation.
          </p>
        </Link>

        <Link
          href="/docs/components/pulse-button"
          className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Pulse Button</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A button with pulsing scale effect.
          </p>
        </Link>
      </div>
    </div>
  )
}