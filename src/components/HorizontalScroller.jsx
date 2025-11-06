import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Horizontal scroll section that pins and translates cards sideways
export default function HorizontalScroller() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%'])

  const items = [
    {
      title: 'Experience',
      id: 'work',
      desc: '5+ years crafting interfaces, design systems, and micro-interactions.',
      color: 'from-cyan-400 to-sky-500'
    },
    {
      title: 'Projects',
      id: 'projects',
      desc: 'Interactive web apps, data visualizations, and 3D experiences.',
      color: 'from-fuchsia-400 to-pink-500'
    },
    {
      title: 'What I Offer',
      id: 'offer',
      desc: 'Product design, frontend engineering, and motion design with a user-first mindset.',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Tech Stack',
      id: 'stack',
      desc: 'React, TypeScript, Next.js, Tailwind, Framer Motion, Three.js, FastAPI, MongoDB.',
      color: 'from-amber-400 to-orange-500'
    }
  ]

  useEffect(() => {
    // ensure the container has enough height to allow scrolling
    if (ref.current) {
      const width = items.length * 1000 // approximate scroll distance
      ref.current.style.height = Math.max(1200, width / 2) + 'px'
    }
  }, [])

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-transparent to-black/10">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-8 px-10">
          {items.map((card, idx) => (
            <a key={card.id} href={`#${card.id}`} className="group block min-w-[80vw] sm:min-w-[60vw] md:min-w-[46vw] lg:min-w-[40vw]">
              <div className="relative rounded-3xl p-8 sm:p-10 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-20`} />
                <div className="relative">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">{card.title}</h3>
                  <p className="mt-4 text-white/80 text-lg max-w-xl">{card.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-white/90 font-semibold">
                    <span className="underline decoration-white/40 underline-offset-4">Jump to section</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
