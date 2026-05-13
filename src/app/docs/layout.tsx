import Link from "next/link"
import { ReactNode } from "react"

interface DocsLayoutProps {
  children: ReactNode
}

const sidebarItems = [
  {
    title: "Components",
    items: [
      { title: "Animated Button", href: "/docs/components/animated-button" },
      { title: "Rotating Card", href: "/docs/components/rotating-card" },
      { title: "Floating Text", href: "/docs/components/floating-text" },
      { title: "Pulse Button", href: "/docs/components/pulse-button" },
    ],
  },
]

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 border-r">
        <h2 className="text-lg font-semibold mb-4">Documentation</h2>
        {sidebarItems.map((section) => (
          <div key={section.title} className="mb-4">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}