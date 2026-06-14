'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Code2,
  Layers,
  Database,
  Network,
  Sparkles,
  Mail,
  MapPin,
  X,
  Cpu,
  Play,
  GraduationCap,
  Briefcase,
  Terminal,
} from 'lucide-react';
import Nav from '@/components/nav';
import NetworkBackground from '@/components/network-background';
import Reveal from '@/components/reveal';
import ContactForm from '@/components/contact-form';

const MARQUEE = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Python', 'Django',
  'Django REST', 'PostgreSQL', 'Redis', 'Gemini AI', 'Network Security',
  'Git', 'Vercel', 'Railway', 'WordPress', 'Canva',
];

const TIMELINE = [
  {
    period: '2026 — Now',
    role: 'Capstone · Lead Developer',
    org: 'ARASE — Automated Reporting App for SPED',
    icon: Cpu,
    accent: 'var(--accent)',
    points: [
      'Full-stack web system for special-education centers.',
      'Gemini AI auto-generates structured IEP reports.',
      'Next.js + Django REST + PostgreSQL.',
    ],
  },
  {
    period: '2022 — 2026',
    role: 'BSIT · Network & Security Track',
    org: 'University of the Cordilleras — Baguio City',
    icon: GraduationCap,
    accent: 'var(--accent-2)',
    points: [
      'Expected graduation: September 2026.',
      'Focus on computer networking & network security.',
      'Building production-grade full-stack apps along the way.',
    ],
  },
  {
    period: '2018 — 2022',
    role: 'Website Assistant · WordPress Developer',
    org: 'DepEdTambayan.org — Remote',
    icon: Briefcase,
    accent: 'var(--accent-3)',
    points: [
      'Managed & structured education-related website content.',
      'SEO-conscious formatting and publishing workflows.',
      'Designed visual materials with Canva.',
    ],
  },
];

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <NetworkBackground />
      <div className="bg-aurora" aria-hidden>
        <span /><span /><span />
      </div>
      <div className="bg-grid" aria-hidden />
      <div className="bg-noise" aria-hidden />

      <Nav />

      <main
        id="top"
        className="relative flex flex-col items-center px-5 md:px-10 w-full max-w-[1320px] mx-auto pb-24"
      >
        {/* ---------------- HERO ---------------- */}
        <section className="w-full min-h-screen flex flex-col justify-center pt-28 pb-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal y={20}>
                <div className="eyebrow flex items-center gap-3 mb-7">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75 [animation:pulse-ring_2s_ease-out_infinite]" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]" />
                  </span>
                  Available for work · Baguio City, PH
                </div>
              </Reveal>

              <Reveal y={28} delay={0.05}>
                <h1 className="text-display font-display">
                  <span className="block text-white/35 hover:text-white transition-colors duration-500">
                    ABUEL
                  </span>
                  <span className="block gradient-text">BAYANGAN</span>
                </h1>
              </Reveal>

              <Reveal y={24} delay={0.1}>
                <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                  Full-stack developer building digital experiences with{' '}
                  <span className="text-white font-medium">Next.js</span>,{' '}
                  <span className="text-white font-medium">Django</span>, and a{' '}
                  <span className="text-white font-medium">
                    network &amp; security
                  </span>{' '}
                  mindset.
                </p>
              </Reveal>

              <Reveal y={20} delay={0.15}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#work" className="btn btn-primary">
                    View Work <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/Abuel_Bayangan_CV.pdf"
                    download
                    className="btn btn-ghost"
                  >
                    <Download className="w-4 h-4" /> Download CV
                  </a>
                </div>
              </Reveal>

              <Reveal y={20} delay={0.2}>
                <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
                  {[
                    ['2026', 'Expected Grad'],
                    ['5+ yrs', 'Building for the web'],
                    ['Net/Sec', 'Specialization'],
                  ].map(([big, small]) => (
                    <div key={small}>
                      <div className="font-display text-2xl font-bold text-white">
                        {big}
                      </div>
                      <div className="font-mono text-[0.68rem] uppercase tracking-widest text-slate-500">
                        {small}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* terminal flavor card */}
            <Reveal y={32} delay={0.15} className="lg:col-span-5">
              <div className="terminal shadow-[0_30px_80px_-30px_rgba(0,255,204,0.25)]">
                <div className="terminal-bar">
                  <span className="terminal-dot bg-[#ff5f57]" />
                  <span className="terminal-dot bg-[#febc2e]" />
                  <span className="terminal-dot bg-[#28c840]" />
                  <span className="ml-2 text-slate-500 text-[0.7rem] flex items-center gap-1.5">
                    <Terminal className="w-3 h-3" /> abuel@portfolio
                  </span>
                </div>
                <div className="p-5 space-y-1.5">
                  <p>
                    <span className="text-[var(--accent)]">➜</span>{' '}
                    <span className="text-[var(--accent-2)]">~</span> whoami
                  </p>
                  <p className="text-slate-300 pl-4">
                    Abuel A. Bayangan — Full-Stack Developer
                  </p>
                  <p className="pt-2">
                    <span className="text-[var(--accent)]">➜</span>{' '}
                    <span className="text-[var(--accent-2)]">~</span> cat
                    stack.txt
                  </p>
                  <p className="text-slate-300 pl-4">
                    Next.js · Django · System Architecture
                  </p>
                  <p className="text-slate-300 pl-4">
                    BSIT — Network &amp; Security @ UC
                  </p>
                  <p className="pt-2">
                    <span className="text-[var(--accent)]">➜</span>{' '}
                    <span className="text-[var(--accent-2)]">~</span> status
                    --availability
                  </p>
                  <p className="pl-4 text-[var(--accent)] cursor-blink">
                    ● open to roles &amp; freelance
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- MARQUEE ---------------- */}
        <section className="w-full py-6 border-y border-white/5 marquee-wrap overflow-hidden">
          <div className="marquee gap-0">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-8 px-8 font-mono text-sm uppercase tracking-widest text-slate-500 whitespace-nowrap"
              >
                {item}
                <span className="text-[var(--accent)]/40">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ---------------- STACK / ABOUT ---------------- */}
        <section id="stack" className="w-full py-28 scroll-mt-24">
          <Reveal>
            <div className="flex items-end gap-5 mb-14">
              <div>
                <div className="eyebrow mb-3">// system &amp; stack</div>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                  How I&apos;m built
                </h2>
              </div>
              <div className="h-px bg-white/10 flex-1 mb-3" />
            </div>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 md:grid-cols-4 gap-5 md:auto-rows-[200px]"
          >
            {/* profile */}
            <div className="bento-card md:col-span-1 md:row-span-2 group min-h-[280px] md:min-h-0">
              <Image
                src="/profile.png"
                alt="Abuel Bayangan"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <div className="font-mono text-[0.7rem] uppercase tracking-widest text-[var(--accent)]">
                  BSIT @ UC
                </div>
                <div className="font-display font-bold text-lg">
                  Abuel A. Bayangan
                </div>
              </div>
            </div>

            {/* intro / location */}
            <div className="bento-card spotlight md:col-span-2 p-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xl font-medium mb-3">
                <MapPin className="w-5 h-5 text-[var(--accent-3)]" /> Baguio
                City, Philippines
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                BSIT student on the Network &amp; Security track, graduating
                September 2026. I like solving real problems with clean code and
                scalable infrastructure — then making it look good.
              </p>
            </div>

            {/* networking & security — featured */}
            <div className="bento-card spotlight md:col-span-1 md:row-span-2 p-7 flex flex-col justify-between min-h-[220px] md:min-h-0 border-[var(--accent-3)]/25 hover:!border-[var(--accent-3)]/60">
              <Network className="w-8 h-8 text-[var(--accent-3)]" />
              <div>
                <h3 className="font-display text-xl font-bold mb-2">
                  Network &amp; Security
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  My academic specialization. Computer networking, network
                  security concepts, and security-aware system design.
                </p>
                <div className="mt-4 font-mono text-[0.68rem] uppercase tracking-widest text-[var(--accent-3)]">
                  Specialization Track
                </div>
              </div>
            </div>

            {/* frontend */}
            <div className="bento-card spotlight p-7 flex flex-col justify-between min-h-[180px] md:min-h-0">
              <Code2 className="w-7 h-7 text-[var(--accent)]" />
              <div>
                <h3 className="font-semibold mb-1">Frontend</h3>
                <p className="text-slate-400 text-sm">
                  Next.js 16, React 19, TypeScript, Tailwind.
                </p>
              </div>
            </div>

            {/* backend */}
            <div className="bento-card spotlight p-7 flex flex-col justify-between min-h-[180px] md:min-h-0">
              <Layers className="w-7 h-7 text-[var(--accent-2)]" />
              <div>
                <h3 className="font-semibold mb-1">Backend</h3>
                <p className="text-slate-400 text-sm">
                  Python, Django, Django REST Framework.
                </p>
              </div>
            </div>

            {/* data */}
            <div className="bento-card spotlight md:col-span-2 p-7 flex items-center justify-between">
              <div>
                <div className="eyebrow mb-2">data &amp; deploy</div>
                <p className="text-lg font-semibold">
                  PostgreSQL · SQLite · Redis · Vercel · Railway
                </p>
              </div>
              <Database className="w-12 h-12 text-white/10" />
            </div>

            {/* extra */}
            <div className="bento-card spotlight md:col-span-2 p-7 flex items-center gap-5 relative overflow-hidden">
              <Sparkles className="w-7 h-7 text-[var(--accent)] shrink-0" />
              <p className="text-sm md:text-base font-medium relative z-10">
                Beyond code: WordPress management, SEO-conscious publishing, and
                visual content with Canva.
              </p>
              <div className="absolute right-2 -bottom-6 font-display text-[7rem] font-black text-white/[0.025] leading-none select-none">
                SEO
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <section id="experience" className="w-full py-28 scroll-mt-24">
          <Reveal>
            <div className="flex items-end gap-5 mb-16">
              <div>
                <div className="eyebrow mb-3">// timeline</div>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                  The path so far
                </h2>
              </div>
              <div className="h-px bg-white/10 flex-1 mb-3" />
            </div>
          </Reveal>

          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px timeline-line" />
            <div className="flex flex-col gap-12">
              {TIMELINE.map((item) => (
                <Reveal key={item.org} y={26}>
                  <div className="relative group">
                    <span
                      className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full border-2 bg-[#06070a] transition-transform group-hover:scale-125"
                      style={{ borderColor: item.accent }}
                    />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <span
                        className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border w-fit"
                        style={{
                          color: item.accent,
                          borderColor: 'rgba(255,255,255,0.1)',
                        }}
                      >
                        {item.period}
                      </span>
                      <div className="flex items-center gap-2">
                        <item.icon
                          className="w-4 h-4"
                          style={{ color: item.accent }}
                        />
                        <h3 className="font-display text-xl md:text-2xl font-bold">
                          {item.role}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-300 font-medium mb-4">{item.org}</p>
                    <ul className="space-y-2">
                      {item.points.map((p) => (
                        <li
                          key={p}
                          className="text-slate-400 text-sm flex gap-3 leading-relaxed"
                        >
                          <span
                            className="mt-2 w-1 h-1 rounded-full shrink-0"
                            style={{ background: item.accent }}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- WORK ---------------- */}
        <section id="work" className="w-full py-28 scroll-mt-24">
          <Reveal>
            <div className="flex items-end gap-5 mb-16">
              <div>
                <div className="eyebrow mb-3">// selected works</div>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                  Things I&apos;ve shipped
                </h2>
              </div>
              <div className="h-px bg-white/10 flex-1 mb-3" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-24 md:gap-32">
            {/* ARASE */}
            <Reveal y={30}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bento-card aspect-video w-full p-3 sm:p-5 bg-gradient-to-tr from-[#06070a] to-[#0f1a2e]">
                  <div
                    onClick={() => setIsVideoOpen(true)}
                    className="group/v w-full h-full border border-white/10 rounded-xl overflow-hidden relative cursor-pointer"
                  >
                    <video
                      src="/ARASE.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-80 group-hover/v:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/v:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="btn btn-ghost !bg-black/50 text-sm font-mono uppercase tracking-widest">
                        <Play className="w-4 h-4" /> Play full video
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="eyebrow mb-4">Capstone Project</div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 tracking-tight">
                    ARASE — Automated Reporting App
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-7">
                    A web system for special-education centers. It manages
                    student assessments, tracks teacher progress, and uses Gemini
                    AI to auto-generate structured Individualized Education Plans
                    (IEPs).
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {['Next.js', 'Django REST', 'PostgreSQL', 'Gemini AI', 'Tailwind'].map(
                      (t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://github.com/abuelthinks/arase1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-semibold hover:text-[var(--accent)] transition-colors group/btn"
                  >
                    View source code
                    <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[var(--accent)] group-hover/btn:translate-x-1 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* DepEd Tambayan */}
            <Reveal y={30}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 lg:order-1 order-2">
                  <div className="eyebrow mb-4 text-[var(--accent-3)]">
                    Work Experience
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 tracking-tight">
                    DepEdTambayan.org
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-7">
                    Managed and structured education-related website content.
                    Built SEO-conscious formatting, organized WordPress publishing
                    flows, and designed visual materials with Canva.
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {['WordPress', 'SEO', 'Canva', 'Content Ops'].map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://depedtambayan.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-semibold hover:text-[var(--accent-3)] transition-colors group/btn"
                  >
                    Visit site
                    <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[var(--accent-3)] group-hover/btn:translate-x-1 transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </a>
                </div>
                <div className="lg:col-span-7 lg:order-2 order-1 bento-card aspect-video w-full p-3 sm:p-5 bg-gradient-to-br from-[#06070a] to-[#1a0f16]">
                  <div
                    onClick={() => setIsImageOpen(true)}
                    className="group/i w-full h-full border border-white/10 rounded-xl overflow-hidden relative cursor-pointer"
                  >
                    <Image
                      src="/depedtambayan.png"
                      alt="DepEdTambayan homepage"
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover opacity-80 group-hover/i:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/i:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="btn btn-ghost !bg-black/50 text-sm font-mono uppercase tracking-widest">
                        <ArrowUpRight className="w-4 h-4" /> View full image
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="w-full py-28 scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <Reveal>
              <div className="eyebrow mb-3">// contact</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
                Let&apos;s build
                <br />
                <span className="gradient-text">something good</span>
              </h2>
              <p className="mt-7 text-slate-400 leading-relaxed max-w-md">
                Open to junior dev roles, freelance, and collaborations. Drop a
                message and I&apos;ll get back to you.
              </p>

              <a
                href="mailto:abuel.dev@gmail.com"
                className="mt-8 inline-flex items-center gap-3 font-display text-xl md:text-2xl font-bold group"
              >
                <Mail className="w-6 h-6 text-[var(--accent)] group-hover:-rotate-12 transition-transform" />
                <span className="border-b border-transparent group-hover:border-[var(--accent)] transition-colors break-all">
                  abuel.dev@gmail.com
                </span>
              </a>

              <div className="mt-8 flex gap-3">
                {[
                  ['LinkedIn', 'https://www.linkedin.com/in/abuel-bayangan-13b653187/'],
                  ['GitHub', 'https://github.com/abuelthinks'],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag !px-4 !py-2.5 hover:!border-[var(--accent)]/50"
                  >
                    {label} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal y={30} delay={0.1}>
              <div className="panel p-6 md:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="relative border-t border-white/5 mt-10">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-12 flex flex-col md:flex-row gap-6 justify-between items-center">
          <a href="#top" className="font-display text-3xl font-bold tracking-tight">
            AB<span className="text-[var(--accent)]">.</span>
          </a>
          <div className="font-mono text-[0.7rem] uppercase tracking-widest text-slate-500 text-center">
            © {new Date().getFullYear()} Abuel Bayangan · Built with Next.js
          </div>
          <a
            href="#top"
            className="font-mono text-[0.7rem] uppercase tracking-widest text-slate-400 hover:text-[var(--accent)] transition-colors flex items-center gap-2"
          >
            Back to top <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>

      {/* ---------------- MODALS ---------------- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video max-h-[80vh] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,255,204,0.12)]">
            <video
              src="/ARASE.mp4"
              autoPlay
              controls
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}

      {isImageOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12">
          <button
            onClick={() => setIsImageOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video max-h-[80vh] rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_0_100px_rgba(255,47,126,0.12)]">
            <Image
              src="/depedtambayan.png"
              alt="DepEdTambayan homepage"
              fill
              className="object-contain bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
}
