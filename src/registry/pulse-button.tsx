"use client"

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
}