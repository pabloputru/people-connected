"use client"

import { motion } from "framer-motion"
import { BookOpen, Award, Play } from "lucide-react"

export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div initial={{ rotate: -5 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
        <BookOpen className="h-8 w-8 text-blue-600" />
      </motion.div>
      <span className="ml-2 font-bold text-blue-600">People Connected</span>
    </motion.div>
  )
}

export function AnimatedCertificateIcon({ className }: { className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={`rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 ${className}`}>
      <motion.div
        initial={{ y: 3 }}
        animate={{ y: 0 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 1.5,
        }}
      >
        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </motion.div>
    </motion.div>
  )
}

export function AnimatedPlayButton({ className }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`rounded-full bg-blue-600 p-3 text-white ${className}`}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
        }}
      >
        <Play className="h-6 w-6" fill="white" />
      </motion.div>
    </motion.div>
  )
}

