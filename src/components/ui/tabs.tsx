"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TabsContextType {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

interface TabsProps {
  defaultValue: string
  children: ReactNode
  className?: string
}

interface TabsListProps {
  children: ReactNode
  className?: string
}

interface TabsTriggerProps {
  value: string
  children: ReactNode
  className?: string
}

interface TabsContentProps {
  value: string
  children: ReactNode
  className?: string
}

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div className={cn("flex border-b", className)}>
      {children}
    </div>
  )
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const context = useContext(TabsContext)
  if (!context) return null

  const { activeTab, setActiveTab } = context
  const isActive = activeTab === value

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
        isActive
          ? "border-blue-500 text-blue-600"
          : "border-transparent hover:border-gray-300",
        className
      )}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const context = useContext(TabsContext)
  if (!context) return null

  const { activeTab } = context

  if (activeTab !== value) return null

  return (
    <div className={cn("p-4", className)}>
      {children}
    </div>
  )
}