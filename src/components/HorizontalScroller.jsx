import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
  {
    id: 'experience',
    title: 'Experience',
    desc: 'Roles, impact, outcomes',
    gradient: 'from-fuchsia-500 to-rose-500',
  },
  {
    id: 'projects',
    title: 'Projects',
    desc: 'Selected case studies',
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'offer',
    title: 'What I Offer',
    desc: 'Strategy • Design • Build',
    gradient: 'from-indigo-500 to-sky-500',
  },
  {
    id: 'stack',
    title: 'Tech Stack',
    desc: 'React • FastAPI • MongoDB',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 'contact',
    title: 'Contact',
    desc: 'Let’s build something',
    gradient: 'from-pink-500 to-fuchsia-500',
  },
];

const Card = ({ index, title, desc, id, gradient }) => (
  <a href={`#${id}`} className="group block w-[80vw] max-w-sm shrink-0">
    <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-[1px] backdrop-blur-md transition-transform duration-300 will-change-transform group-hover:-translate-y-1">
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-20 blur-2xl`} />
      <div className="relative z-10 flex h-full flex-col justify-between rounded-3xl bg-gradient-to-b from-white/5 to-white/0 p-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-white/70">{desc}</p>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-white/60">
          <span>Jump to section</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  </a>
);

const HorizontalScroller = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${cards.length * 80 - 100}vw`]);
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.98, 0.95]);

  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x, scale }} className="flex h-full items-center gap-6 px-6">
          {cards.map((c, i) => (
            <Card key={c.id} index={i} {...c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroller;
