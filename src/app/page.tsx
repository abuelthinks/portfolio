"use client";

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, ExternalLink, Code2, Layers, Database, Sparkles, Mail, MapPin, X } from 'lucide-react';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
    <main className="flex flex-col items-center px-4 md:px-12 lg:px-24 w-full max-w-[1400px] mx-auto pb-32">
      
      {/* Navigation */}
      <nav className="w-full py-8 flex justify-between items-center mix-blend-difference z-50">
        <div className="text-2xl font-black tracking-tighter">AB<span className="text-[#00ffcc]">.</span></div>
        <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
          <a href="#work" className="hover:text-[#00ffcc] transition-colors">Work</a>
          <a href="#about" className="hover:text-[#00ffcc] transition-colors">About</a>
        </div>
      </nav>

      {/* Massive Hero Section */}
      <section className="w-full pt-20 pb-32 md:pt-32 md:pb-48 flex flex-col items-start relative">
        <div className="text-cyber mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#00ffcc] animate-pulse"></span>
          Available for new projects
        </div>
        
        <h1 className="text-massive font-black flex flex-col gap-2">
          <span className="text-white/40 hover:text-white transition-colors duration-500 cursor-default">ABUEL</span>
          <span className="gradient-text-neon pb-2">BAYANGAN</span>
        </h1>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center w-full justify-between">
          <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-medium leading-relaxed">
            I craft digital experiences. Specializing in <span className="text-white">Next.js</span>, <span className="text-white">Django</span>, and <span className="text-white">System Architecture</span>.
          </p>
          
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-[#00ffcc] blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
            <a href="#work" className="relative flex items-center justify-center w-32 h-32 rounded-full border border-white/10 bg-[#050505] text-white font-bold tracking-widest uppercase text-xs hover:border-[#00ffcc] transition-colors z-10 group">
              <span className="absolute inset-2 border border-[#00ffcc]/30 rounded-full group-hover:rotate-180 transition-transform duration-1000 ease-in-out"></span>
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* Bento Box About & Skills */}
      <section id="about" className="w-full py-24">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">System & Stack</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-auto md:auto-rows-[200px]">
          
          {/* Profile Picture Box */}
          <div className="bento-card md:col-span-1 md:row-span-2 group min-h-[250px] md:min-h-0">
            <Image 
              src="/profile.png" 
              alt="Abuel" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 font-bold text-lg">BSIT @ UC</div>
          </div>

          {/* Intro Box */}
          <div className="bento-card md:col-span-2 md:row-span-1 p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-cyber mb-2">Location</h3>
            <p className="text-xl font-medium leading-snug flex items-center gap-2">
              <MapPin className="text-[#ff007f]" /> Baguio City, Philippines
            </p>
            <p className="text-slate-400 mt-4 text-sm">
              Expected Graduation: September 2026. Passionate about solving real problems through clean code and scalable infrastructure.
            </p>
          </div>

          {/* Frontend Box */}
          <div className="bento-card md:col-span-1 md:row-span-1 p-6 md:p-8 bg-gradient-to-br from-[#050505] to-[#0f172a]/50">
            <Code2 className="w-8 h-8 text-[#00ffcc] mb-4" />
            <h3 className="text-lg font-bold mb-2">Frontend</h3>
            <p className="text-slate-400 text-sm">Next.js 16, React 19, TypeScript, Tailwind CSS.</p>
          </div>

          {/* Database & Tools Box */}
          <div className="bento-card md:col-span-2 md:row-span-1 p-6 md:p-8 flex items-center justify-between">
            <div>
              <h3 className="text-cyber mb-2">Data & Storage</h3>
              <p className="text-xl font-bold">PostgreSQL, SQLite, Redis</p>
            </div>
            <Database className="w-12 h-12 text-white/10" />
          </div>

          {/* Backend Box */}
          <div className="bento-card md:col-span-1 md:row-span-2 p-6 md:p-8 flex flex-col justify-between border-[#ff007f]/20 hover:border-[#ff007f]/50">
            <Layers className="w-8 h-8 text-[#ff007f]" />
            <div>
              <h3 className="text-lg font-bold mb-2">Backend & Arch</h3>
              <p className="text-slate-400 text-sm mb-4">Python, Django, Django REST Framework, Vercel, Railway.</p>
            </div>
          </div>

          {/* Extra Box */}
          <div className="bento-card md:col-span-3 md:row-span-1 p-6 md:p-8 flex items-center gap-6 overflow-hidden relative">
            <Sparkles className="w-8 h-8 text-[#00ffcc] shrink-0" />
            <p className="text-lg font-medium relative z-10">
              Beyond code, I handle WordPress management, SEO-conscious publishing, and visual content creation via Canva.
            </p>
            <div className="absolute right-0 top-0 text-[10rem] font-black text-white/[0.02] -translate-y-1/4 leading-none">
              SEO
            </div>
          </div>

        </div>
      </section>

      {/* High Impact Projects */}
      <section id="work" className="w-full py-24">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Selected Works</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <div className="flex flex-col gap-16 md:gap-32">
          
          {/* ARASE */}
          <div className="group relative w-full">
            <div className="absolute -inset-y-12 -inset-x-8 bg-white/[0.02] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 bento-card aspect-video w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-tr from-[#050505] to-[#0f172a]">
                 {/* ARASE Video Showcase */}
                 <div 
                   onClick={() => setIsVideoModalOpen(true)}
                   className="group/video w-full h-full border border-white/10 rounded-xl bg-[#050505] flex items-center justify-center shadow-2xl relative overflow-hidden hover:border-[#00ffcc]/30 transition-colors cursor-pointer"
                 >
                    <video 
                      src="/ARASE.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white font-bold tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full bg-black/50">Play Full Video</span>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-5 flex flex-col relative z-10">
                <div className="text-cyber mb-4">Capstone Project</div>
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Automated Reporting App for SPED</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  A comprehensive web system for special education centers. Manages student assessments, tracks teacher progress, and utilizes Gemini AI to auto-generate structured Individualized Education Plans (IEPs).
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {['Next.js', 'Django DRF', 'PostgreSQL', 'Gemini AI', 'Tailwind'].map(t => (
                    <span key={t} className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300">{t}</span>
                  ))}
                </div>
                <a href="https://github.com/abuelthinks/arase1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white font-bold hover:text-[#00ffcc] transition-colors w-fit group/btn">
                  View Source Code
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[#00ffcc] group-hover/btn:translate-x-2 transition-all">
                    <Code2 className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* DepEd Tambayan */}
          <div className="group relative w-full">
            <div className="absolute -inset-y-12 -inset-x-8 bg-white/[0.02] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col relative z-10 lg:order-1 order-2">
                <div className="text-cyber mb-4 text-[#ff007f]">Work Experience</div>
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">DepEdTambayan.org</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Managed and structured education-related website content. Orchestrated practical SEO-conscious formatting, organized WordPress publishing flows, and designed visual materials with Canva.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {['WordPress', 'SEO', 'Canva', 'Content Management'].map(t => (
                    <span key={t} className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300">{t}</span>
                  ))}
                </div>
                <a href="https://depedtambayan.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white font-bold hover:text-[#ff007f] transition-colors w-fit group/btn">
                  Visit Site
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[#ff007f] group-hover/btn:translate-x-2 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>
              <div className="lg:col-span-7 bento-card aspect-video w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#050505] to-[#1a0f14] lg:order-2 order-1">
                 {/* DepEd Screenshot Showcase */}
                 <div 
                   onClick={() => setIsImageModalOpen(true)}
                   className="group/image w-full h-full border border-white/10 rounded-xl bg-[#050505] flex items-center justify-center shadow-2xl relative overflow-hidden hover:border-[#ff007f]/30 transition-colors cursor-pointer"
                 >
                    <Image 
                      src="/depedtambayan.png" 
                      alt="DepEdTambayan Homepage" 
                      fill 
                      className="object-cover opacity-80 group-hover/image:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white font-bold tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full bg-black/50">View Full Image</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vibe Footer */}
      <footer className="w-full pt-32 pb-12 flex flex-col items-center border-t border-white/10 mt-12">
        <h2 className="text-[clamp(2rem,8vw,6rem)] font-black uppercase tracking-tighter leading-none text-center mb-12 text-white/80 hover:text-white transition-colors cursor-default">
          Let&apos;s Build <br/> <span className="gradient-text-neon">Together</span>
        </h2>
        
        <a href="mailto:abuel.dev@gmail.com" className="group flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xl sm:text-2xl md:text-4xl font-bold mb-16 relative text-center w-full break-all">
          <Mail className="w-8 h-8 text-[#00ffcc] group-hover:-rotate-12 transition-transform shrink-0" />
          <span>abuel.dev@gmail.com</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#00ffcc] group-hover:w-full transition-all duration-500"></span>
        </a>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-between items-center sm:items-end text-slate-500 font-medium uppercase tracking-widest text-xs">
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/abuel-bayangan-13b653187/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              LinkedIn
            </a>
            <a href="https://github.com/abuelthinks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              GitHub
            </a>
          </div>
          <div>© {new Date().getFullYear()} ABUEL BAYANGAN</div>
        </div>
      </footer>

    </main>

      {/* Video Modal Overlay */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 animate-in fade-in duration-300">
          <button 
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video max-h-[75vh] md:max-h-none rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,255,204,0.1)] border border-white/10">
            <video 
              src="/ARASE.mp4" 
              autoPlay 
              controls 
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}

      {/* Image Modal Overlay */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 animate-in fade-in duration-300">
          <button 
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video max-h-[75vh] md:max-h-none rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(255,0,127,0.1)] border border-white/10 relative">
            <Image 
              src="/depedtambayan.png" 
              alt="DepEdTambayan Homepage" 
              fill 
              className="object-contain bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
}
