import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { navItems, personal } from '../data/portfolio'
import { BrandLogo } from './BrandLogo'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-3">
        <BrandLogo />
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth
              spy
              duration={600}
              offset={-78}
              activeClass="!text-gold"
              className="cursor-pointer text-sm font-bold text-muted transition hover:text-ice"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href={personal.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-10 items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-4 text-sm font-extrabold text-gold transition hover:bg-gold hover:text-navy lg:inline-flex"
        >
          <FiDownload /> Resume
        </a>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/5 text-ice lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open ? (
        <motion.div
          className="section-shell mb-4 grid gap-2 rounded-lg border border-white/10 bg-[#081122]/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] lg:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth
              duration={600}
              offset={-78}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-md px-3 py-3 text-sm font-bold text-muted hover:bg-white/5 hover:text-ice"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-3 text-sm font-extrabold text-gold"
          >
            <FiDownload /> Resume
          </a>
        </motion.div>
      ) : null}
    </header>
  )
}
