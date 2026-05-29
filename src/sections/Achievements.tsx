import { SectionHeader } from '../components/SectionHeader'
import { MotionCard } from '../components/MotionCard'
import { achievements } from '../data/portfolio'

export function Achievements() {
  return (
    <section className="section-shell py-24">
      <SectionHeader title="Achievements" subtitle="Consistent problem solving, certifications, and production-grade MERN practice." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {achievements.map(({ title, icon: Icon }, index) => (
          <MotionCard key={title} className="p-5 text-center" delay={index * 0.05}>
            <Icon className="mx-auto mb-4 text-4xl text-gold" />
            <p className="text-sm font-black leading-6 text-ice">{title}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}
