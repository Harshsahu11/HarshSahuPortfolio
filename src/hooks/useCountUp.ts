import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import type { RefObject } from 'react'

export function useCountUp(
  ref: RefObject<Element>,
  target: number,
  decimals = 0,
  duration = 1200,
) {
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let frame = 0
    const totalFrames = Math.max(1, Math.round(duration / 16))

    const animate = () => {
      frame += 1
      const progress = Math.min(frame / totalFrames, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Number((target * eased).toFixed(decimals)))

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [decimals, duration, inView, target])

  return value.toFixed(decimals)
}
