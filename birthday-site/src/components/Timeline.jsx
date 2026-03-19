import { motion } from 'framer-motion'

function Timeline({ entries }) {
  return (
    <section id="timeline" className="section-wrap relative">
      <h2 className="section-title">Memory Timeline</h2>
      <p className="section-subtitle">A little story of moments that made life brighter.</p>

      <div className="relative mt-10">
        <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-pink-400 to-purple-300 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {entries.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className={`relative ml-12 rounded-2xl border border-white/60 bg-white/45 p-4 shadow-xl backdrop-blur md:ml-0 md:w-[46%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
            >
              <span className="absolute -left-[38px] top-8 h-4 w-4 rounded-full border-2 border-white bg-rose-400 md:left-auto md:right-[-42px] md:top-10" />
              <img src={item.src} alt={item.caption} className="h-44 w-full rounded-xl object-cover md:h-48" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">{item.date}</p>
              <p className="mt-1 text-rose-900">{item.caption}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
