import { useRef } from 'react'
import { motion } from 'framer-motion'
import { stats } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const value = useCountUp(ref, stat.value, stat.decimals ?? 0)

  return (
    <motion.div
      ref={ref}
      className="glass rounded-lg p-6 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="text-4xl font-black text-gold sm:text-5xl">
        {value}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-muted">{stat.label}</p>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section className="section-shell py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  )
}
