import { FiCheckCircle } from 'react-icons/fi'
import { SectionHeader } from '../components/SectionHeader'
import { MotionCard } from '../components/MotionCard'
import { SkillPill } from '../components/SkillPill'
import { experience } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="section-shell py-24">
      <SectionHeader title="Professional Experience" subtitle="Hands-on backend and MERN engineering in a product delivery environment." />
      <MotionCard className="relative overflow-hidden p-7">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-cyan" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan">{experience.company}</p>
            <h3 className="mt-2 text-2xl font-black text-ice">{experience.role}</h3>
          </div>
          <span className="rounded-md border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-extrabold text-gold">{experience.duration}</span>
        </div>
        <p className="mt-5 text-base leading-8 text-muted">{experience.description}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {experience.responsibilities.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm font-bold text-ice">
              <FiCheckCircle className="shrink-0 text-gold" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tech.map((item) => <SkillPill key={item} label={item} />)}
        </div>
      </MotionCard>
    </section>
  )
}
