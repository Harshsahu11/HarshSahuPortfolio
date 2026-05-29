import { FiArrowDownRight, FiDownload, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { GlowButton } from '../components/GlowButton'
import { NeuralBackground } from '../components/NeuralBackground'
import { personal, socials, tickerSkills } from '../data/portfolio'
import profilePhoto from '../assets/profile-photo.png'

const heroBadges = ['MERN Stack', 'REST APIs', 'JWT Auth', 'MongoDB']

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <NeuralBackground />
      <div className="section-shell relative z-10 grid gap-9 pb-24 pt-10 sm:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <motion.div className="text-center lg:text-left" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <div className="mb-5 inline-flex rounded-md border border-cyan/30 bg-cyan/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan sm:text-xs sm:tracking-[0.22em]">
            Jhansi, Uttar Pradesh
          </div>
          <h1 className="mx-auto max-w-4xl text-[clamp(3rem,16vw,5.75rem)] font-black leading-[0.9] tracking-normal text-ice lg:mx-0 lg:text-8xl">
            HARSH <span className="gold-text">SAHU</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-extrabold text-cyan sm:text-2xl lg:mx-0">{personal.heroRole}</p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:mx-0">{personal.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="projects" smooth duration={700} offset={-74} className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md border border-gold/70 bg-gold px-5 text-sm font-extrabold text-navy shadow-[0_0_36px_rgba(244,182,79,0.26)] transition hover:-translate-y-1 hover:bg-[#ffd27b]">
              View Projects <FiArrowDownRight />
            </Link>
            <GlowButton href={personal.resume} target="_blank" rel="noreferrer" variant="secondary">
              <FiDownload /> Download Resume
            </GlowButton>
          </div>
          <div className="mt-7 flex justify-center gap-3 lg:justify-start">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/5 text-lg text-ice transition hover:-translate-y-1 hover:border-cyan/60 hover:text-cyan hover:shadow-[0_0_28px_rgba(0,217,255,0.2)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass relative mx-auto w-full max-w-[460px] overflow-hidden rounded-lg p-3 sm:p-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(0,217,255,.22),transparent_42%),radial-gradient(circle_at_85%_70%,rgba(244,182,79,.14),transparent_38%)]" />
          <div className="relative rounded-lg border border-white/10 bg-navy/55 p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-muted sm:text-xs sm:tracking-[0.22em]">
              <span>Developer Profile</span>
              <span className="rounded-md border border-gold/30 bg-gold/10 px-3 py-1 text-gold">Online</span>
            </div>

            <div className="grid gap-5 md:grid-cols-[170px_1fr] md:items-center">
              <div className="relative mx-auto size-36 overflow-hidden rounded-full border border-cyan/30 bg-[radial-gradient(circle_at_50%_18%,rgba(0,217,255,.28),transparent_52%),linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.02))] shadow-[0_0_48px_rgba(0,217,255,0.16)] sm:size-44">
                <div className="absolute inset-3 rounded-full border border-gold/20" />
                <img
                  src={profilePhoto}
                  alt="Harsh Sahu"
                  className="absolute inset-x-0 bottom-0 mx-auto h-[108%] w-auto object-contain drop-shadow-[0_20px_34px_rgba(0,0,0,0.42)]"
                />
              </div>

              <div className="rounded-lg border border-white/10 bg-[#050816]/72 p-4 text-center backdrop-blur-xl sm:p-5 md:text-left">
                <div className="mx-auto mb-3 h-1 w-24 rounded-full bg-gold shadow-[0_0_22px_rgba(244,182,79,.7)] md:mx-0" />
                <p className="text-2xl font-black leading-tight text-ice sm:text-3xl">Harsh Sahu</p>
                <p className="mt-1 text-sm font-extrabold text-cyan">Full Stack Developer</p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  MERN stack developer focused on secure APIs, clean React interfaces, and scalable backend systems.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-3 text-center text-xs font-extrabold text-muted transition hover:border-cyan/40 hover:text-cyan"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/10 bg-white/[0.035] py-3">
        <motion.div className="flex w-max gap-7 text-xs font-black uppercase tracking-[0.14em] text-muted sm:gap-10 sm:text-sm sm:tracking-[0.18em]" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
          {[...tickerSkills, ...tickerSkills, ...tickerSkills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="whitespace-nowrap">{skill}</span>
          ))}
        </motion.div>
      </div>
      <a
        href={`mailto:${personal.email}`}
        className="absolute bottom-20 right-6 z-20 hidden max-w-[calc(100vw-3rem)] items-center gap-2 rounded-md border border-cyan/30 bg-[#050816]/85 px-4 py-3 text-sm font-bold text-cyan shadow-[0_12px_34px_rgba(0,0,0,0.32)] backdrop-blur-xl transition hover:border-cyan/60 hover:bg-cyan/10 lg:flex xl:right-10"
      >
        <FiMail /> {personal.email}
      </a>
    </section>
  )
}
