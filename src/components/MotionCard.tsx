import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type MotionCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionCard({ children, className = '', delay = 0 }: MotionCardProps) {
  return (
    <motion.div
      className={`glass rounded-lg ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      whileHover={{ y: -5, borderColor: 'rgba(244, 182, 79, 0.34)' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
