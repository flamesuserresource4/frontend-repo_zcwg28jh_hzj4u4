import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Sparkles, Layers, Mail } from 'lucide-react';

const SectionWrapper = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="relative mx-auto max-w-6xl px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative"
    >
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

export const ExperienceSection = () => (
  <SectionWrapper id="experience" icon={Briefcase} title="Experience">
    <ul className="grid gap-6 md:grid-cols-2">
      {[
        {
          role: 'Senior Frontend Engineer',
          org: 'Fintech Co.',
          info: 'Led migration to component-driven UI and introduced motion-first patterns.',
          year: '2022 — Present',
        },
        {
          role: 'Product Engineer',
          org: 'SaaS Platform',
          info: 'Built design systems and high-conversion landing experiences.',
          year: '2020 — 2022',
        },
        {
          role: 'UI Engineer',
          org: 'Agency',
          info: 'Delivered interactive sites for enterprise clients.',
          year: '2018 — 2020',
        },
        {
          role: 'Freelance Designer/Dev',
          org: 'Independent',
          info: 'Brand, web, animation for startups and creators.',
          year: '2016 — 2018',
        },
      ].map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{item.role}</h3>
              <span className="text-sm text-white/60">{item.year}</span>
            </div>
            <p className="mt-1 text-white/70">{item.org}</p>
            <p className="mt-3 text-white/60">{item.info}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  </SectionWrapper>
);

export const ProjectsSection = () => (
  <SectionWrapper id="projects" icon={Layers} title="Projects">
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <motion.a
          key={i}
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4"
        >
          <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-cyan-500/20 to-indigo-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_130%,rgba(255,255,255,0.15),transparent_40%)]" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Project {i}</h3>
              <p className="text-white/60">Interactive web experience</p>
            </div>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">Case Study</span>
          </div>
        </motion.a>
      ))}
    </div>
  </SectionWrapper>
);

export const OfferSection = () => (
  <SectionWrapper id="offer" icon={Sparkles} title="What I Offer">
    <div className="grid gap-6 md:grid-cols-3">
      {[
        { t: 'Product Design', d: 'From concept to high-fidelity prototypes.' },
        { t: 'Frontend Engineering', d: 'React, animations, performance, accessibility.' },
        { t: 'Web Animations', d: 'Motion-driven storytelling with Framer Motion & WebGL.' },
      ].map((x, i) => (
        <motion.div
          key={x.t}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <h3 className="text-lg font-semibold text-white">{x.t}</h3>
          <p className="mt-2 text-white/70">{x.d}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export const StackSection = () => (
  <SectionWrapper id="stack" icon={Code} title="Tech Stack">
    <div className="flex flex-wrap gap-3">
      {['React', 'Vite', 'Tailwind', 'Framer Motion', 'Spline', 'FastAPI', 'MongoDB'].map((tag) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  </SectionWrapper>
);

export const ContactSection = () => (
  <SectionWrapper id="contact" icon={Mail} title="Contact">
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto grid max-w-2xl gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-white/30" placeholder="Name" />
        <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-white/30" placeholder="Email" type="email" />
      </div>
      <textarea className="min-h-[140px] rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-white/30" placeholder="Tell me about your project" />
      <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 transition hover:shadow-xl hover:shadow-fuchsia-500/20">Send message</button>
    </motion.form>
  </SectionWrapper>
);
