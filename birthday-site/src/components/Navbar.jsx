import { motion } from 'framer-motion'

function Navbar({
  sections,
}) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 mx-auto mt-3 flex w-[96%] max-w-6xl items-center justify-between rounded-full border border-white/45 bg-white/30 px-4 py-2 shadow-2xl shadow-pink-500/10 backdrop-blur-xl"
    >
      <button
        type="button"
        onClick={() => {
          const top = document.getElementById('hero')
          top?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="font-display text-lg font-semibold text-rose-900"
      >
        Shikha's Day
      </button>

      <div className="hidden gap-3 md:flex">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => {
              const node = document.getElementById(section.id)
              node?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="rounded-full px-3 py-1 text-sm font-semibold text-rose-950 transition hover:bg-white/70"
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="h-9 w-9 md:w-14" aria-hidden="true" />
    </motion.nav>
  )
}

export default Navbar
