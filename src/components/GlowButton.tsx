import type { AnchorHTMLAttributes, ReactNode } from 'react'

type GlowButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function GlowButton({ children, variant = 'primary', className = '', ...props }: GlowButtonProps) {
  const styles =
    variant === 'primary'
      ? 'border-gold/70 bg-gold text-navy shadow-[0_0_36px_rgba(244,182,79,0.26)] hover:bg-[#ffd27b]'
      : 'border-cyan/45 bg-white/5 text-ice hover:border-cyan hover:bg-cyan/10'

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-extrabold transition duration-300 hover:-translate-y-1 ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
