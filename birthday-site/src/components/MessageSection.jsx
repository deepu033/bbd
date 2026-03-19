import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const lines = [
  'Dear Shikha,',
  'You bring warmth, laughter, and calm into every room.',
  'Your kindness is rare, your smile is unforgettable, and your energy is pure magic.',
  'May this year gift you bold dreams, peaceful mornings, and endless reasons to smile.',
  'Happy Birthday to someone truly one of a kind. 💖'
]

function MessageSection() {
  return (
    <section id="message" className="section-wrap relative overflow-hidden">
      <h2 className="section-title">A Heartfelt Note</h2>
      <p className="section-subtitle">Every line is written with love and gratitude.</p>

      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-300/45"
          style={{ left: `${10 + index * 11}%`, top: `${18 + (index % 3) * 20}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.65, 0.2] }}
          transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaHeart />
        </motion.div>
      ))}

      <div className="relative z-10 mt-8 space-y-4 rounded-3xl border border-white/60 bg-white/50 p-6 text-left shadow-2xl backdrop-blur md:p-10">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: index * 0.2 }}
            className="font-writing text-lg text-rose-900 md:text-2xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  )
}

export default MessageSection
