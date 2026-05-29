import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiGithub, FiLinkedin, FiMapPin, FiMail, FiSend } from 'react-icons/fi'
import { SectionHeader } from '../components/SectionHeader'
import { MotionCard } from '../components/MotionCard'
import { personal } from '../data/portfolio'

const fields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, event.currentTarget, { publicKey })
      event.currentTarget.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <SectionHeader title="Initiate Transmission" subtitle="Open to SDE roles, MERN opportunities, internships, and engineering collaborations." />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionCard className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="grid gap-4">
            {fields.map((field) => (
              <label key={field.name} className="grid gap-2 text-sm font-bold text-ice">
                {field.label}
                <input
                  required
                  name={field.name}
                  type={field.type}
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.055] px-4 text-ice outline-none transition placeholder:text-muted focus:border-cyan/60"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-bold text-ice">
              Message
              <textarea required name="message" rows={6} className="resize-none rounded-md border border-white/10 bg-white/[0.055] px-4 py-3 text-ice outline-none transition focus:border-cyan/60" />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-gold/70 bg-gold px-5 text-sm font-black text-navy transition hover:-translate-y-1 hover:bg-[#ffd27b] disabled:cursor-wait disabled:opacity-70"
            >
              <FiSend /> {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' ? <p className="text-sm font-bold text-cyan">Message sent successfully.</p> : null}
            {status === 'error' ? (
              <p className="text-sm font-bold text-gold">
                EmailJS is ready for credentials. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to enable delivery.
              </p>
            ) : null}
          </form>
        </MotionCard>
        <MotionCard className="p-4 sm:p-6">
          <h3 className="text-xl font-black text-ice sm:text-2xl">Contact Coordinates</h3>
          <div className="mt-6 grid gap-4">
            <a href={`mailto:${personal.email}`} className="flex min-w-0 gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4 text-muted transition hover:border-cyan/40 hover:text-ice">
              <FiMail className="mt-1 shrink-0 text-xl text-cyan" /> <span className="min-w-0 break-words"><strong className="block text-ice">Email</strong>{personal.email}</span>
            </a>
            <div className="flex min-w-0 gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4 text-muted">
              <FiMapPin className="mt-1 shrink-0 text-xl text-gold" /> <span className="min-w-0 break-words"><strong className="block text-ice">Location</strong>{personal.location}</span>
            </div>
            <a href={personal.github} target="_blank" rel="noreferrer" className="flex min-w-0 gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4 text-muted transition hover:border-cyan/40 hover:text-ice">
              <FiGithub className="mt-1 shrink-0 text-xl text-cyan" /> <span className="min-w-0 break-words"><strong className="block text-ice">GitHub</strong>github.com/harshsahu11</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex min-w-0 gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4 text-muted transition hover:border-cyan/40 hover:text-ice">
              <FiLinkedin className="mt-1 shrink-0 text-xl text-gold" /> <span className="min-w-0 break-words"><strong className="block text-ice">LinkedIn</strong>linkedin.com/in/harsh-sahu1109</span>
            </a>
          </div>
        </MotionCard>
      </div>
    </section>
  )
}
