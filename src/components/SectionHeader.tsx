import { motion } from 'framer-motion'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <motion.div
      className={`mx-auto mb-10 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black tracking-normal text-ice sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">{subtitle}</p> : null}
    </motion.div>
  )
}
