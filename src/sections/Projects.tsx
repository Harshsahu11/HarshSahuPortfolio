import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { SectionHeader } from '../components/SectionHeader'
import { MotionCard } from '../components/MotionCard'
import { SkillPill } from '../components/SkillPill'
import { ProjectVisual } from '../components/ProjectVisual'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <SectionHeader title="Featured Projects" subtitle="Full-stack applications shaped around performance, security, and clean product workflows." />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map(({ title, description, highlights, features, tech, icon: Icon, image, gradient, github, live }, index) => (
          <MotionCard key={title} className="flex h-full flex-col overflow-hidden" delay={index * 0.06}>
            <ProjectVisual title={title} image={image} gradient={gradient} icon={Icon} />
            <div className="flex flex-1 flex-col p-4 sm:p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-black text-ice sm:text-2xl">{title}</h3>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-muted">
                  0{index + 1}
                </span>
              </div>

              <p className="text-sm leading-7 text-muted">{description}</p>

              <div className="mt-5">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-cyan">Impact Highlights</p>
                <ul className="grid gap-2">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-gold">Key Features</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {features.map((feature) => (
                    <span key={feature} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-ice">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-gold">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((item) => <SkillPill key={item} label={item} />)}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row">
                <a href={github} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-extrabold text-ice transition hover:border-gold/50 hover:text-gold">
                  <FiGithub /> GitHub
                </a>
                {live ? (
                  <a href={live} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-cyan/35 bg-cyan/10 px-4 py-3 text-sm font-extrabold text-cyan transition hover:bg-cyan hover:text-navy">
                    <FiExternalLink /> Live Demo
                  </a>
                ) : (
                  <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-extrabold text-muted">
                    <FiExternalLink /> Live Soon
                  </span>
                )}
              </div>
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}
