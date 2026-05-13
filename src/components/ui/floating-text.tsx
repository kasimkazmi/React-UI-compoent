"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface FloatingTextProps {
  children: React.ReactNode
  className?: string
}

export function FloatingText({ children, className }: FloatingTextProps) {
  return (
    <motion.div
      className={cn("inline-block", className)}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}