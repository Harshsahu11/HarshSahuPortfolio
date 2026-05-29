import { motion } from 'framer-motion'

export function SkillPill({ label, index = 0 }: { label: string; index?: number }) {
  return (
    <motion.span
      className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-semibold text-ice shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-gold/50 hover:text-gold"
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.035 }}
    >
      {label}
    </motion.span>
  )
}
