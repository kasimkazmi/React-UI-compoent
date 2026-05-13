"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface RotatingCardProps {
  children: React.ReactNode
  className?: string
}

export function RotatingCard({ children, className }: RotatingCardProps) {
  return (
    <motion.div
      className={cn(
        "p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg",
        className
      )}
      whileHover={{ rotateY: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  )
}