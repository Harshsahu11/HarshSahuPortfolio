import { SectionHeader } from '../components/SectionHeader'
import { MotionCard } from '../components/MotionCard'
import { SkillPill } from '../components/SkillPill'
import { ProgressCircle } from '../components/ProgressCircle'
import { progressSkills, skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-shell py-24">
      <SectionHeader title="Engineered Competencies" subtitle="A focused stack for secure, scalable, production-ready web applications." />
      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map(({ title, skills, icon: Icon }, index) => (
          <MotionCard key={title} className="p-5" delay={index * 0.04}>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-md border border-cyan/20 bg-cyan/10 text-xl text-cyan">
                <Icon />
              </span>
              <h3 className="text-lg font-black text-ice">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => <SkillPill key={skill} label={skill} index={skillIndex} />)}
            </div>
          </MotionCard>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {progressSkills.map((skill) => <ProgressCircle key={skill.label} {...skill} />)}
      </div>
    </section>
  )
}
