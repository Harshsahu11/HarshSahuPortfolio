import { Link } from 'react-scroll'
import logo from '../assets/harsh-sahu-logo.svg'

type BrandLogoProps = {
  compact?: boolean
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link to="hero" smooth duration={500} className="group inline-flex min-w-0 cursor-pointer items-center gap-2 sm:gap-3">
      <img
        src={logo}
        alt="Harsh Sahu logo"
        className="size-10 shrink-0 rounded-lg shadow-[0_0_28px_rgba(244,182,79,0.16)] sm:size-11"
      />
      {!compact ? (
        <span className="min-w-0 leading-none">
          <span className="block truncate text-xs font-black uppercase tracking-[0.16em] text-ice transition group-hover:text-gold sm:text-sm sm:tracking-[0.22em]">
            Harsh Sahu
          </span>
          <span className="mt-1 block truncate text-[9px] font-bold uppercase tracking-[0.16em] text-cyan sm:text-[10px] sm:tracking-[0.24em]">
            Full Stack Developer
          </span>
        </span>
      ) : null}
    </Link>
  )
}
