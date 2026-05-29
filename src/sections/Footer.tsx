import { Link } from 'react-scroll'
import { BrandLogo } from '../components/BrandLogo'
import { navItems, socials } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040713] py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <BrandLogo />
            <p className="mt-5 text-xl font-black text-ice sm:text-2xl">Architecting the Next Generation of Web Applications.</p>
            <p className="mt-3 text-sm font-semibold text-muted">Made with React, Tailwind CSS and Passion for Software Engineering.</p>
          </div>
          <div className="flex flex-wrap gap-4 sm:justify-end">
            {navItems.map((item) => (
              <Link key={item.target} to={item.target} smooth duration={600} offset={-78} className="cursor-pointer text-sm font-bold text-muted transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-muted">&copy; 2026 Harsh Sahu</p>
          <div className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/5 text-ice transition hover:border-gold/50 hover:text-gold">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
