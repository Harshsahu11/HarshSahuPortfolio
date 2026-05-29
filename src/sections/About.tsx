import { SectionHeader } from '../components/SectionHeader'
import { MotionCard } from '../components/MotionCard'
import { aboutCards } from '../data/portfolio'

export function About() {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeader
        eyebrow="Engineering Impact"
        title="Architecting Reliable Full Stack Applications"
        subtitle="Bridging modern web technologies and scalable software solutions."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <MotionCard className="p-7">
          <h3 className="text-2xl font-black text-ice">Clean systems for real user workflows.</h3>
          <div className="mt-5 space-y-4 text-base leading-8 text-muted">
            <p>I am a Full Stack Developer with strong foundations in Data Structures, Algorithms, Object-Oriented Programming, DBMS, and Operating Systems.</p>
            <p>I specialize in MERN stack development and enjoy building scalable applications, REST APIs, authentication systems, and real-time communication platforms.</p>
            <p>I focus on writing clean code, optimizing performance, and creating user-friendly digital experiences.</p>
          </div>
        </MotionCard>
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map(({ title, lines, icon: Icon }, index) => (
            <MotionCard key={title} className="p-5" delay={index * 0.04}>
              <Icon className="mb-4 text-2xl text-gold" />
              <h4 className="font-black text-ice">{title}</h4>
              <div className="mt-2 space-y-1 text-sm leading-6 text-muted">
                {lines.map((line) => <p key={line}>{line}</p>)}
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
