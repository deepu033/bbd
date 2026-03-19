import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Hero({ photos, onEnter }) {
  const rotatingPhotos = useMemo(() => photos, [photos])
  const wishLines = [
    'Wishing you a year full of joy, good health, and beautiful moments, my dear friend.',
    'May every dream in your heart come true, and may each day bring laughter and peace.',
    'Stay blessed, stay radiant, and keep shining the way only you can.',
    'Happy Birthday once again, Shikha. You deserve all the happiness in the world.',
  ]
  const [photoIndex, setPhotoIndex] = useState(0)
  const [activeLineIndex, setActiveLineIndex] = useState(0)
  const [activeCharCount, setActiveCharCount] = useState(0)

  useEffect(() => {
    if (rotatingPhotos.length <= 1) return undefined
    const timer = window.setInterval(() => {
      setPhotoIndex((current) => (current + 1) % rotatingPhotos.length)
    }, 2400)

    return () => window.clearInterval(timer)
  }, [rotatingPhotos.length])

  useEffect(() => {
    if (activeLineIndex >= wishLines.length) return undefined

    const currentLine = wishLines[activeLineIndex]

    if (activeCharCount < currentLine.length) {
      const charTimer = window.setTimeout(() => {
        setActiveCharCount((count) => count + 1)
      }, 28)

      return () => window.clearTimeout(charTimer)
    }

    if (activeLineIndex === wishLines.length - 1) return undefined

    const nextLineTimer = window.setTimeout(() => {
      setActiveLineIndex((line) => line + 1)
      setActiveCharCount(0)
    }, 700)

    return () => window.clearTimeout(nextLineTimer)
  }, [activeCharCount, activeLineIndex, wishLines])

  const currentPhoto = rotatingPhotos[photoIndex]
  const currentMessage = currentPhoto?.specialMessage || currentPhoto?.caption || ''
  const completedLines = wishLines.slice(0, activeLineIndex)
  const activeLine = wishLines[activeLineIndex] || ''
  const typedActiveLine = activeLine.slice(0, activeCharCount)
  const isTypingComplete = activeLineIndex === wishLines.length - 1 && activeCharCount >= activeLine.length

  return (
    <section id="hero" className="relative flex min-h-screen items-start px-4 pt-20 md:px-8 md:pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:items-center">
        {/* Left Column - Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-4xl font-bold leading-tight text-rose-900 md:text-6xl"
          >
            <span className="bg-gradient-to-r from-rose-900 via-fuchsia-700 to-rose-800 bg-clip-text text-transparent">
              Happy Birthday Shikha
            </span>{' '}
            <span className="text-rose-700">🎂✨</span>
          </motion.h1>

          <div className="mb-8 max-w-xl rounded-2xl border border-white/70 bg-white/55 p-4 shadow-[0_14px_35px_rgba(162,62,138,0.2)] backdrop-blur md:p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.24em] text-rose-500">Birthday Wishes</p>
              <p className="text-xs text-rose-500">{Math.min(activeLineIndex + 1, wishLines.length)}/{wishLines.length}</p>
            </div>

            <AnimatePresence initial={false}>
              {completedLines.map((line) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="mb-2 flex items-start gap-2 text-sm leading-relaxed text-rose-800 md:text-base"
                >
                  <span className="mt-0.5 inline-block text-rose-500">✦</span>
                  <span>{line}</span>
                </motion.p>
              ))}
            </AnimatePresence>

            {activeLine && (
              <motion.p
                key={activeLineIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 text-sm leading-relaxed text-rose-800 md:text-base"
              >
                <span className="mt-0.5 inline-block text-rose-500">✦</span>
                <span>
                  {typedActiveLine}
                  {!isTypingComplete && <span className="animate-pulse text-rose-500">|</span>}
                </span>
              </motion.p>
            )}
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={onEnter}
            className="glow-btn rounded-full px-7 py-3 font-semibold text-white"
          >
            Enter Surprise
          </motion.button>
        </div>

        {/* Right Column - Photo Carousel */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto h-[340px] w-[320px] md:h-[470px] md:w-[460px]"
        >
          <div className="absolute right-5 top-8 h-[280px] w-[230px] rounded-[34px] bg-white/25 shadow-[0_25px_55px_rgba(84,36,92,0.28)] backdrop-blur md:h-[360px] md:w-[290px]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto?.id}
              initial={{ opacity: 0, y: 24, rotate: -12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, rotate: -9, scale: 1 }}
              exit={{ opacity: 0, y: -18, rotate: -5, scale: 0.96 }}
              transition={{ duration: 0.62, ease: 'easeInOut' }}
              className="absolute right-7 top-10 h-[270px] w-[220px] overflow-hidden rounded-[30px] border border-white/80 bg-white/40 p-1.5 shadow-[0_22px_44px_rgba(56,24,63,0.35)] md:h-[350px] md:w-[280px]"
            >
              {currentPhoto && (
                <img
                  src={currentPhoto.src}
                  alt={`Shikha memory ${currentPhoto.id}`}
                  className="h-full w-full rounded-[26px] object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="absolute left-0 top-12 h-[170px] w-[170px] rounded-full border-2 border-white/70 bg-white/45 shadow-[0_18px_40px_rgba(132,67,136,0.24)] backdrop-blur-xl md:h-[210px] md:w-[210px]"
          >
            <p className="pt-[70px] text-center font-display text-4xl text-rose-900 md:pt-[88px] md:text-5xl">Shikha</p>
          </motion.div>

          <div className="absolute left-4 top-[205px] flex items-center gap-2 md:top-[258px]">
            {[0, 1, 2, 3, 4, 5].map((bubble) => (
              <motion.span
                key={bubble}
                className="inline-block rounded-full bg-gradient-to-b from-pink-300/90 to-fuchsia-400/60"
                style={{
                  width: `${18 - bubble * 2}px`,
                  height: `${18 - bubble * 2}px`,
                  opacity: Math.max(0.2, 0.85 - bubble * 0.13),
                }}
                animate={{ y: [0, -8, 0], x: [0, 2, 0] }}
                transition={{ duration: 2.2 + bubble * 0.35, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>

          <div className="absolute bottom-0 right-2 left-1 rounded-2xl border border-white/60 bg-white/35 p-3 shadow-xl backdrop-blur md:left-8 md:right-8 md:p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-600">
              Memory {photoIndex + 1} of {rotatingPhotos.length}
            </p>
            <p className="mt-1 text-sm text-rose-900 md:text-base">{currentMessage}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
