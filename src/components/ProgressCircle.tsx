import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'

type ProgressCircleProps = {
  label: string
  value: number
  icon: IconType
}

export function ProgressCircle({ label, value, icon: Icon }: ProgressCircleProps) {
  const circumference = 2 * Math.PI * 46

  return (
    <div className="glass rounded-lg p-5 text-center">
      <div className="relative mx-auto size-32">
        <svg className="size-32 -rotate-90" viewBox="0 0 112 112">
          <circle cx="56" cy="56" r="46" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
          <motion.circle
            cx="56"
            cy="56"
            r="46"
            fill="none"
            stroke="url(#circleGradient)"
            strokeLinecap="round"
            strokeWidth="10"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (value / 100) * circumference }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="circleGradient" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#F4B64F" />
              <stop offset="1" stopColor="#00D9FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div>
            <Icon className="mx-auto mb-1 text-xl text-cyan" />
            <span className="text-2xl font-black text-ice">{value}%</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm font-bold text-ice">{label}</p>
    </div>
  )
}
