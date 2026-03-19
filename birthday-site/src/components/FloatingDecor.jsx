import { motion } from 'framer-motion'
import { FaHeart, FaRegStar } from 'react-icons/fa'
import { GiBalloonDog } from 'react-icons/gi'

const floaters = [
  { id: 1, icon: FaHeart, left: '8%', top: '20%', size: 20, delay: 0.2, color: 'text-pink-300/60' },
  { id: 2, icon: FaRegStar, left: '88%', top: '15%', size: 18, delay: 1, color: 'text-yellow-200/70' },
  { id: 3, icon: GiBalloonDog, left: '12%', top: '75%', size: 26, delay: 0.6, color: 'text-rose-300/60' },
  { id: 4, icon: FaHeart, left: '82%', top: '72%', size: 24, delay: 1.5, color: 'text-fuchsia-300/60' },
  { id: 5, icon: FaRegStar, left: '52%', top: '10%', size: 16, delay: 0.9, color: 'text-amber-200/70' },
]

function FloatingDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {floaters.map(({ id, icon: Icon, left, top, size, delay, color }) => (
        <motion.div
          key={id}
          className={`absolute ${color}`}
          style={{ left, top, fontSize: `${size}px` }}
          animate={{ y: [-8, -26, -8], x: [0, 6, 0], rotate: [0, 10, -10, 0], opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 8 + id, repeat: Infinity, ease: 'easeInOut', delay }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingDecor
