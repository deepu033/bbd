import { motion } from 'framer-motion'

function SectionFrame({ children, index = 0, showDivider = true, preset = 'dreamy' }) {
  const isEnergetic = preset === 'energetic'

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: isEnergetic ? 52 : 76, filter: `blur(${isEnergetic ? 9 : 14}px)`, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: isEnergetic ? 0.72 : 1.1,
          delay: index * (isEnergetic ? 0.05 : 0.1),
          ease: isEnergetic ? [0.34, 1.22, 0.64, 1] : [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

      {showDivider && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.65, y: isEnergetic ? 5 : 10 }}
          whileInView={{ opacity: 1, scaleX: 1, y: 0 }}
          viewport={{ amount: 0.8, once: true }}
          transition={{ duration: isEnergetic ? 0.52 : 0.95, ease: isEnergetic ? 'easeOut' : [0.22, 1, 0.36, 1] }}
          className="cinematic-divider"
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default SectionFrame
