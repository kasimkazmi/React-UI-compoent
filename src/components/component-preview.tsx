"use client"

import { useState } from "react"
import { CopyButton } from "./copy-button"

import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  component: React.ReactNode
  code: string
  title: string
}

export function ComponentPreview({ component, code, title }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="mb-4">{component}</div>
      <div className="flex gap-2">
        <button
          onClick={() => setShowCode(!showCode)}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
        <CopyButton text={code} />
      </div>
      {showCode && (
        <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}