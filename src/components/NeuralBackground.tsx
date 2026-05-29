import { motion } from 'framer-motion'

const nodes = [
  { x: '12%', y: '18%' },
  { x: '28%', y: '34%' },
  { x: '44%', y: '16%' },
  { x: '62%', y: '38%' },
  { x: '78%', y: '20%' },
  { x: '88%', y: '48%' },
  { x: '22%', y: '66%' },
  { x: '50%', y: '72%' },
  { x: '72%', y: '78%' },
]

const lines = [
  ['12%', '18%', '28%', '34%'],
  ['28%', '34%', '44%', '16%'],
  ['44%', '16%', '62%', '38%'],
  ['62%', '38%', '78%', '20%'],
  ['62%', '38%', '88%', '48%'],
  ['22%', '66%', '50%', '72%'],
  ['50%', '72%', '72%', '78%'],
  ['28%', '34%', '22%', '66%'],
  ['62%', '38%', '50%', '72%'],
]

export function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      <svg className="absolute inset-0 size-full opacity-60">
        {lines.map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={`${x1}-${x2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={index % 2 ? 'rgba(244,182,79,.32)' : 'rgba(0,217,255,.34)'}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: index * 0.11, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2.4 }}
          />
        ))}
      </svg>
      {nodes.map((node, index) => (
        <motion.span
          key={`${node.x}-${node.y}`}
          className="absolute size-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,217,255,0.9)]"
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -14, 0], scale: [1, 1.5, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 3 + index * 0.18, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
