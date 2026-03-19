import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

function Surprise({ onCelebrate }) {
  const [revealed, setRevealed] = useState(false)

  const triggerSurprise = () => {
    const defaults = { origin: { y: 0.65 } }
    confetti({ ...defaults, particleCount: 130, spread: 70, startVelocity: 42 })
    window.setTimeout(() => {
      confetti({ ...defaults, particleCount: 90, spread: 120, scalar: 1.1 })
    }, 220)
    setRevealed(true)
    onCelebrate()
  }

  return (
    <section id="surprise" className="section-wrap">
      <h2 className="section-title">Interactive Surprise</h2>
      <p className="section-subtitle">One click. A thousand sparkles.</p>

      <div className="mt-8 flex flex-col items-center gap-6">
        <motion.button
          type="button"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          onClick={triggerSurprise}
          className="glow-btn rounded-full px-8 py-3 text-lg font-semibold text-white"
        >
          Click for Surprise 🎁
        </motion.button>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl rounded-3xl border border-white/50 bg-white/50 p-6 shadow-2xl backdrop-blur"
            >
              <h3 className="font-display text-3xl text-rose-900">Surprise Unlocked ✨</h3>
              <p className="mt-3 text-rose-800">
                The world is brighter because you are in it. Keep shining, keep dreaming, and keep being beautifully you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Surprise
