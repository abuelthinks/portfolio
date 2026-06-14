'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const LINKS = [
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const top = window.scrollY;
        setScrolled(top > 24);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (top / max) * 100 : 0;
        if (barRef.current) barRef.current.style.width = `${pct}%`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div
          ref={barRef}
          className="h-full w-0"
          style={{
            background:
              'linear-gradient(90deg, var(--accent), var(--accent-2))',
          }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-[55] transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-[#06070a]/70 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1320px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-2xl font-bold tracking-tight"
          >
            AB<span className="text-[var(--accent)]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
                  active === l.id
                    ? 'text-[var(--accent)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Abuel_Bayangan_CV.pdf"
              download
              className="ml-2 btn btn-ghost !py-2 !px-4 text-xs font-mono uppercase tracking-widest"
            >
              <Download className="w-3.5 h-3.5" />
              CV
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/5 backdrop-blur-xl bg-[#06070a]/90">
            <div className="px-5 py-4 flex flex-col gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest py-3 text-slate-300 hover:text-[var(--accent)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Abuel_Bayangan_CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-3 text-sm font-mono uppercase tracking-widest"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
