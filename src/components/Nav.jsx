import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#offer', label: 'What I Offer' },
    { href: '#stack', label: 'Tech Stack' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto max-w-6xl px-6">
      <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white backdrop-blur-xl">
        <a href="#home" className="font-semibold tracking-tight">motive.</a>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="mt-2 overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;
