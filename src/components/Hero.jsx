import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -80])

  return (
    <section ref={ref} className="relative h-[120vh] sm:h-[140vh] w-full overflow-hidden">
      <div className="sticky top-0 h-screen w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* subtle gradient glow overlays that don't block interactions */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/20 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/30 to-emerald-400/20 blur-3xl" />
        </div>

        <motion.div style={{ opacity, y }} className="relative z-10 flex h-full w-full items-center justify-center text-center px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent drop-shadow"
            >
              Building Playful, Modern Web Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="mt-6 max-w-2xl mx-auto text-white/80 text-lg sm:text-xl"
            >
              I craft interactive products with performance, accessibility, and delightful motion.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              className="mt-8 flex items-center justify-center gap-3"
            >
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/90 hover:bg-white text-gray-900 px-5 py-2.5 font-semibold shadow-lg shadow-black/10 backdrop-blur transition">
                Get in touch
              </a>
              <a href="#work" className="inline-flex items-center rounded-full bg-black/40 hover:bg-black/60 text-white px-5 py-2.5 font-semibold backdrop-blur border border-white/20 transition">
                See my work
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
