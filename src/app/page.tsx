import Image from 'next/image';
import { ArrowRight, Github, ExternalLink, Code2, Layers, Database, Sparkles, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[200px]">
          
          {/* Profile Picture Box */}
          <div className="bento-card md:col-span-1 md:row-span-2 group">
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
          <div className="bento-card md:col-span-2 md:row-span-1 p-8 flex flex-col justify-center">
            <h3 className="text-cyber mb-2">Location</h3>
            <p className="text-xl font-medium leading-snug flex items-center gap-2">
              <MapPin className="text-[#ff007f]" /> Baguio City, Philippines
            </p>
            <p className="text-slate-400 mt-4 text-sm">
              Expected Graduation: September 2026. Passionate about solving real problems through clean code and scalable infrastructure.
            </p>
          </div>

          {/* Frontend Box */}
          <div className="bento-card md:col-span-1 md:row-span-1 p-8 bg-gradient-to-br from-[#050505] to-[#0f172a]/50">
            <Code2 className="w-8 h-8 text-[#00ffcc] mb-4" />
            <h3 className="text-lg font-bold mb-2">Frontend</h3>
            <p className="text-slate-400 text-sm">Next.js 16, React 19, TypeScript, Tailwind CSS.</p>
          </div>

          {/* Backend Box */}
          <div className="bento-card md:col-span-1 md:row-span-2 p-8 flex flex-col justify-between border-[#ff007f]/20 hover:border-[#ff007f]/50">
            <Layers className="w-8 h-8 text-[#ff007f]" />
            <div>
              <h3 className="text-lg font-bold mb-2">Backend & Arch</h3>
              <p className="text-slate-400 text-sm mb-4">Python, Django, Django REST Framework, Vercel, Railway.</p>
            </div>
          </div>

          {/* Database & Tools Box */}
          <div className="bento-card md:col-span-2 md:row-span-1 p-8 flex items-center justify-between">
            <div>
              <h3 className="text-cyber mb-2">Data & Storage</h3>
              <p className="text-xl font-bold">PostgreSQL, SQLite, Redis</p>
            </div>
            <Database className="w-12 h-12 text-white/10" />
          </div>

          {/* Extra Box */}
          <div className="bento-card md:col-span-3 md:row-span-1 p-8 flex items-center gap-6 overflow-hidden relative">
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

        <div className="flex flex-col gap-32">
          
          {/* ARASE */}
          <div className="group relative w-full">
            <div className="absolute -inset-y-12 -inset-x-8 bg-white/[0.02] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 bento-card aspect-[4/3] w-full flex items-center justify-center p-12 bg-gradient-to-tr from-[#050505] to-[#0f172a]">
                 {/* Placeholder for real screenshot */}
                 <div className="w-full h-full border border-white/10 rounded-xl bg-[#050505] flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:border-[#00ffcc]/30 transition-colors">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    <span className="text-6xl font-black tracking-tighter text-white/10 group-hover:text-white/20 transition-colors">ARASE</span>
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
                <button className="flex items-center gap-4 text-white font-bold hover:text-[#00ffcc] transition-colors w-fit group/btn">
                  View Case Study
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[#00ffcc] group-hover/btn:translate-x-2 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
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
                <button className="flex items-center gap-4 text-white font-bold hover:text-[#ff007f] transition-colors w-fit group/btn">
                  Visit Site
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[#ff007f] group-hover/btn:translate-x-2 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </button>
              </div>
              <div className="lg:col-span-7 bento-card aspect-[4/3] w-full flex items-center justify-center p-12 bg-gradient-to-br from-[#050505] to-[#1a0f14] lg:order-2 order-1">
                 {/* Placeholder for real screenshot */}
                 <div className="w-full h-full border border-white/10 rounded-xl bg-[#050505] flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:border-[#ff007f]/30 transition-colors">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    <span className="text-6xl font-black tracking-tighter text-white/10 group-hover:text-white/20 transition-colors">DEPED</span>
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
        
        <a href="mailto:hello@example.com" className="group flex items-center gap-4 text-2xl md:text-4xl font-bold mb-16 relative">
          <Mail className="w-8 h-8 text-[#00ffcc] group-hover:-rotate-12 transition-transform" />
          Say Hello
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#00ffcc] group-hover:w-full transition-all duration-500"></span>
        </a>

        <div className="flex w-full justify-between items-end text-slate-500 font-medium uppercase tracking-widest text-xs">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              GitHub
            </a>
          </div>
          <div>© {new Date().getFullYear()} ABUEL BAYANGAN</div>
        </div>
      </footer>

    </main>
  );
}
