import { useState } from 'react'
import { motion } from 'framer-motion'

function CoverGate({ onUnlock }) {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [error, setError] = useState('')
  const [isUnlocking, setIsUnlocking] = useState(false)

  const handleUnlock = (event) => {
    event.preventDefault()

    const isValidName = name.trim().toLowerCase() === 'gullu'
    const isValidDob = dob === '2005-03-20'

    if (!isValidName || !isValidDob) {
      setError('Please enter correct name and date of birth to open the surprise.')
      return
    }

    setError('')
    setIsUnlocking(true)
    window.setTimeout(() => onUnlock(), 700)
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute bottom-6 left-1/3 h-44 w-44 rounded-full bg-rose-300/30 blur-3xl" />
      </div>

      <motion.form
        onSubmit={handleUnlock}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/70 bg-white/60 p-6 shadow-[0_24px_60px_rgba(119,43,113,0.22)] backdrop-blur-xl md:p-8"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-rose-500">Private Entry</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-rose-900">A Little Secret Door</h1>
        <p className="mt-3 text-sm text-rose-700">
          Enter the birthday star&apos;s name and date of birth to unlock this special page.
        </p>

        <label className="mt-6 block text-sm font-semibold text-rose-700" htmlFor="cover-name">
          Name
        </label>
        <input
          id="cover-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter name"
          className="mt-2 w-full rounded-xl border border-rose-200 bg-white/80 px-4 py-3 text-rose-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-300/40"
        />

        <label className="mt-4 block text-sm font-semibold text-rose-700" htmlFor="cover-dob">
          Date of Birth
        </label>
        <input
          id="cover-dob"
          type="date"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
          className="mt-2 w-full rounded-xl border border-rose-200 bg-white/80 px-4 py-3 text-rose-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-300/40"
        />
        <p className="mt-2 text-xs text-rose-500">Use date: 20/03/2005</p>

        {error && <p className="mt-4 rounded-lg bg-rose-100 px-3 py-2 text-sm text-rose-700">{error}</p>}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isUnlocking}
          className="glow-btn mt-6 w-full rounded-full px-6 py-3 font-semibold text-white disabled:opacity-70"
        >
          {isUnlocking ? 'Opening...' : 'Unlock Surprise'}
        </motion.button>
      </motion.form>
    </section>
  )
}

export default CoverGate
