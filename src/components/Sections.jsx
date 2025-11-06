import { motion } from 'framer-motion'

function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="relative w-full py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  const items = [
    { role: 'Senior Frontend Engineer', company: 'Acme Co', period: '2022 — Present', points: ['Led UI platform migration', 'Built design system components', 'Improved performance and accessibility'] },
    { role: 'Product Designer & Dev', company: 'Studio Q', period: '2020 — 2022', points: ['Prototyped 3D interactions', 'Delivered data viz dashboards', 'Cross-functional collaboration'] },
  ]

  return (
    <SectionWrapper id="work" title="Work Experience">
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <span className="text-sm text-white/70">{item.period}</span>
            </div>
            <p className="text-white/80 mt-1">{item.company}</p>
            <ul className="mt-4 space-y-2 text-white/80">
              {item.points.map((p, i) => <li key={i} className="flex gap-2"><span className="text-white/50">•</span><span>{p}</span></li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export function ProjectsSection() {
  const projects = [
    { name: 'Interactive Portfolio', tag: '3D + Motion', desc: 'A playful portfolio with 3D hero and horizontal scroller.' },
    { name: 'Analytics Dashboard', tag: 'Data Viz', desc: 'Real-time dashboard with charts and micro-interactions.' },
    { name: 'E-commerce UI Kit', tag: 'Design System', desc: 'Reusable components with accessibility baked in.' },
  ]

  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.a key={idx} href="#" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{p.tag}</span>
            </div>
            <p className="mt-3 text-white/80">{p.desc}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-white/90 font-semibold">
              <span className="underline decoration-white/40 underline-offset-4">View</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}

export function OfferSection() {
  const offers = [
    { title: 'Product-focused Frontend', desc: 'I translate ideas into polished, high-performing web apps.' },
    { title: 'Motion & Micro-interactions', desc: 'Delightful animations that serve usability and brand.' },
    { title: 'Design Systems', desc: 'Scalable components with accessibility and theming.' },
  ]

  return (
    <SectionWrapper id="offer" title="What I Offer">
      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((o, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">{o.title}</h3>
            <p className="mt-2 text-white/80">{o.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export function StackSection() {
  const stack = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion', 'Three.js', 'FastAPI', 'MongoDB']
  return (
    <SectionWrapper id="stack" title="Tech Stack">
      <div className="flex flex-wrap gap-3">
        {stack.map((s, i) => (
          <motion.span key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/90 backdrop-blur">
            {s}
          </motion.span>
        ))}
      </div>
    </SectionWrapper>
  )
}

export function ContactSection() {
  return (
    <SectionWrapper id="contact" title="Contact Me">
      <div className="max-w-2xl">
        <form className="grid gap-4">
          <input type="text" name="name" placeholder="Your name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" />
          <input type="email" name="email" placeholder="Your email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" />
          <textarea name="message" placeholder="Tell me about your project" rows={5} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" />
          <button type="submit" className="inline-flex justify-center rounded-xl bg-white text-gray-900 font-semibold py-3 px-5 hover:bg-white/90 transition">Send</button>
        </form>
      </div>
    </SectionWrapper>
  )
}
