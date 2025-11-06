import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const ctaY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.85, 0.6]);

  return (
    <section ref={ref} id="home" className="relative h-[120vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Subtle gradient glows (non-interactive) */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.6)_100%)]" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <motion.h1
            style={{ y: titleY }}
            className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl"
          >
            Motive-grade Fintech Experiences
          </motion.h1>
          <motion.p
            style={{ y: subtitleY }}
            className="mt-5 max-w-2xl text-balance text-lg text-white/75 md:text-xl"
          >
            Sleek, high-performance web apps with cinematic motion, crafted for modern brands.
          </motion.p>
          <motion.div
            style={{ y: ctaY }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur-md transition hover:bg-white/10"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500/0 via-white/10 to-cyan-500/0 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">View Projects</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 transition hover:shadow-xl hover:shadow-fuchsia-500/20"
            >
              Let’s Talk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
