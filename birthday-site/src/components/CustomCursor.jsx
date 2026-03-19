import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CustomCursor({ preset = 'dreamy' }) {
  const [enabled, setEnabled] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [points, setPoints] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ])

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(supportsFinePointer)
    if (!supportsFinePointer) return

    document.body.classList.add('custom-cursor-enabled')

    const onMove = (event) => {
      setPoints((current) => [
        { x: event.clientX, y: event.clientY },
        ...current.slice(0, current.length - 1),
      ])
    }

    const onDown = () => setIsPressed(true)
    const onUp = () => setIsPressed(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      document.body.classList.remove('custom-cursor-enabled')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  if (!enabled) return null

  const isEnergetic = preset === 'energetic'

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      {points.map((point, index) => (
        <motion.span
          key={index}
          className="custom-cursor-dot"
          animate={{
            x: point.x - 8,
            y: point.y - 8,
            scale: (1 - index * (isEnergetic ? 0.085 : 0.1)) * (isPressed && index === 0 ? (isEnergetic ? 1.2 : 1.34) : 1),
            opacity: (isEnergetic ? 0.88 : 0.95) - index * (isEnergetic ? 0.1 : 0.12),
          }}
          transition={{
            type: 'spring',
            stiffness: (isEnergetic ? 460 : 340) - index * (isEnergetic ? 36 : 34),
            damping: (isEnergetic ? 28 : 34) + index * 2,
            mass: isEnergetic ? 0.22 : 0.28,
          }}
        />
      ))}
    </div>
  )
}

export default CustomCursor
