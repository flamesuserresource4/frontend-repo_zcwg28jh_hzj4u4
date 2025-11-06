import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#', label: 'Home' },
    { href: '#work', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#offer', label: 'What I Offer' },
    { href: '#stack', label: 'Tech' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur px-4 py-2">
          <a href="#" className="font-extrabold tracking-tight text-white">Portfolio</a>
          <div className="hidden sm:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 transition">{l.label}</a>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="sm:hidden text-white/80">Menu</button>
        </div>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mt-2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-2 sm:hidden">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block rounded-xl px-3 py-2 text-white/90 hover:bg-white/10 transition">{l.label}</a>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
