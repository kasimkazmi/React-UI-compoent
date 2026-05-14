"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedButton({ children, className }: AnimatedButtonProps) {
  return (
    <motion.button
      className={cn(
        "px-4 py-2 bg-blue-500 text-white rounded-lg",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}