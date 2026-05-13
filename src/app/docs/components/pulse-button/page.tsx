import { PulseButton } from "@/components/ui/pulse-button"

export default function PulseButtonPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Pulse Button</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        A button with pulsing scale animation.
      </p>

      {/* Preview */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <div className="p-8 border rounded-lg bg-gray-50 dark:bg-gray-900">
          <PulseButton>Pulse</PulseButton>
        </div>
      </div>

      {/* Installation */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Installation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Manual</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Copy and paste the following code into your project.
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
              <code>{`"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface PulseButtonProps {
  children: React.ReactNode
  className?: string
}

export function PulseButton({ children, className }: PulseButtonProps) {
  return (
    <motion.button
      className={cn(
        "px-4 py-2 bg-green-500 text-white rounded-lg",
        className
      )}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {children}
    </motion.button>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
          <code>{`import { PulseButton } from "@/components/ui/pulse-button"

export default function MyComponent() {
  return <PulseButton>Pulse</PulseButton>
}`}</code>
        </pre>
      </div>

      {/* Props */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Props</h2>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Prop</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Type</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Default</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-2">children</td>
              <td className="border border-gray-300 dark:border-gray-700 p-2">React.ReactNode</td>
              <td className="border border-gray-300 dark:border-gray-700 p-2">-</td>
              <td className="border border-gray-300 dark:border-gray-700 p-2">The content inside the button</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-2">className</td>
              <td className="border border-gray-300 dark:border-gray-700 p-2">string</td>
              <td className="border border-gray-300 dark:border-gray-700 p-2">-</td>
              <td className="border border-gray-300 dark:border-gray-700 p-2">Additional CSS classes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}