import { motion } from 'framer-motion'

function FinalSection() {
  return (
    <section id="final" className="section-wrap relative overflow-hidden pb-28">
      {[...Array(26)].map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/80"
          style={{ left: `${(index * 37) % 100}%`, top: `${(index * 29) % 100}%` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.7, 1] }}
          transition={{ duration: 2 + (index % 5), repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="relative z-10 mt-16 text-center font-display text-4xl text-rose-950 md:text-6xl"
      >
        You are special, Shikha ❤️
      </motion.h2>
    </section>
  )
}

export default FinalSection
