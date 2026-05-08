'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Database, Cpu, Settings, LineChart, Globe, 
  Layers, ShieldCheck, Zap, Mail, ArrowRight, Server,
  Bot, Briefcase, Workflow, CheckCircle, Network,
  Activity, Lock, SearchCode, BrainCircuit, BarChart3, Fingerprint, Code2, 
  MessageSquare, LayoutDashboard, Binary, Cog, X, Users, Menu
} from 'lucide-react';

// --- STRICT ELITE ANIMATION VARIANTS ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const floatingAnim: Variants = {
  hidden: { y: 0 },
  visible: {
    y: ["-15px", "15px", "-15px"],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  }
};

const pulseGlow: Variants = {
  hidden: { opacity: 0.4, scale: 0.95 },
  visible: { 
    opacity: 0.8, 
    scale: 1.05,
    transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
  }
};

const consoleLineStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const consoleLine: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
};

export default function EnterpriseArchitectPortfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mouse tracking for background radial glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    // Only track mouse on desktop
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Prevent scrolling when mobile menu or console is open
  useEffect(() => {
    if (isConsoleOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isConsoleOpen, isMobileMenuOpen]);

  return (
    <div className="relative min-h-screen font-sans bg-[#020203] text-neutral-300 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* IMMERSIVE CYBER-GRID & RADIAL TRACKING GLOW */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[length:100%_4px] opacity-20 mix-blend-overlay" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30 md:opacity-40" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      <div 
        className="hidden md:block fixed top-0 left-0 w-[1000px] h-[1000px] rounded-full pointer-events-none z-0 transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, rgba(139,92,246,0.03) 30%, rgba(0,0,0,0) 60%)',
          transform: `translate(${mousePos.x - 500}px, ${mousePos.y - 500}px)`
        }}
      />

      {/* MINIMALIST ELITE NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-[#020203]/90 backdrop-blur-2xl border-b border-white/5 px-6 py-4 md:py-5 flex justify-between items-center">
        <div className="flex items-center gap-3 relative z-50">
          <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)] animate-pulse" />
          <span className="text-lg md:text-xl font-bold tracking-tighter text-white">ADITYA SRIVASTAVA.</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-neutral-500 uppercase items-center">
          <a href="#bio" className="hover:text-cyan-400 transition-colors">Identity</a>
          <a href="#infrastructure" className="hover:text-cyan-400 transition-colors">Capabilities</a>
          <a href="#stack" className="hover:text-cyan-400 transition-colors">Stack</a>
          <button onClick={() => setIsConsoleOpen(true)} className="bg-white text-black px-5 py-2 rounded text-[10px] font-bold uppercase tracking-wider hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
            Initialize Build
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#050508]/95 backdrop-blur-3xl pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#bio" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white border-b border-white/10 pb-4">01. Identity & Bio</a>
            <a href="#infrastructure" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white border-b border-white/10 pb-4">02. Infrastructure</a>
            <a href="#stack" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white border-b border-white/10 pb-4">03. Tech Stack</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsConsoleOpen(true); }} 
              className="mt-4 bg-cyan-500 text-black px-6 py-4 rounded font-bold uppercase tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Terminal size={18} /> Initialize Build
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded border border-cyan-500/30 bg-cyan-500/5 text-[10px] md:text-xs font-mono text-cyan-400 uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <Code2 size={14} /> Systems Architect & Backend Engineer
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1] md:leading-[1.05]">
              Building Scalable <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Business Infrastructure.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base md:text-lg lg:text-xl text-neutral-400 mb-8 md:mb-10 leading-relaxed font-light max-w-xl">
              I am not just a freelancer or a web developer. I architect and build complete custom business systems from scratch—merging heavy backend architecture, AI integrations, logic-driven automation, and scalable SaaS platforms.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button onClick={() => setIsConsoleOpen(true)} className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-wider text-xs rounded hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                Deploy System <ArrowRight size={16} />
              </button>
              <a href="#infrastructure" className="px-8 py-4 bg-[#0A0A0F] border border-white/10 text-white font-mono uppercase tracking-wider text-xs rounded hover:bg-white/5 hover:border-white/20 transition-all text-center">
                View Architecture
              </a>
            </motion.div>
          </motion.div>

          {/* FUTURISTIC SAAS DASHBOARD PREVIEW (Hidden on Mobile for cleanliness) */}
          <motion.div initial="hidden" animate="visible" variants={floatingAnim} className="hidden lg:block relative h-[550px] w-full perspective-1000">
            <motion.div variants={pulseGlow} className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-[120px] rounded-full" />
            <div className="relative w-full h-full border border-white/10 bg-[#050508]/90 backdrop-blur-3xl rounded-2xl p-6 shadow-2xl flex flex-col gap-4 transform rotate-y-[-12deg] rotate-x-[8deg] ring-1 ring-white/5">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded flex items-center justify-center border border-cyan-500/30"><Activity size={14} className="text-cyan-400"/></div>
                  <div className="w-32 h-3 bg-white/20 rounded" />
                </div>
                <div className="flex gap-2"><div className="w-8 h-8 rounded-full bg-purple-500/20"/><div className="w-8 h-8 rounded-full bg-blue-500/20"/></div>
              </div>
              <div className="flex gap-4 h-40">
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end gap-3 relative overflow-hidden">
                  <div className="text-[10px] font-mono text-neutral-500 absolute top-4 left-4">AUTOMATION_YIELD</div>
                  <div className="w-full h-1/2 bg-gradient-to-t from-cyan-500/30 to-transparent rounded border-b-2 border-cyan-400" />
                  <div className="w-1/2 h-2 bg-white/20 rounded" />
                </div>
                <div className="flex-[0.6] bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-center items-center gap-2">
                  <div className="w-16 h-16 rounded-full border-4 border-purple-500/50 border-t-purple-400 animate-spin-slow" />
                  <div className="text-[10px] font-mono text-neutral-500 mt-2">SYS_LOAD</div>
                </div>
              </div>
              <div className="flex-1 bg-[#020203] rounded-xl border border-white/5 p-5 font-mono text-xs text-neutral-400 flex flex-col gap-2 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
                <p><span className="text-green-400">[200 OK]</span> Core Backend Architecture Initialized...</p>
                <p><span className="text-cyan-400">[AUTH]</span> Role-based access verified. Token granted.</p>
                <p><span className="text-purple-400">[AI_MODULE]</span> Vision API parsing document #84920...</p>
                <p><span className="text-yellow-400">[DB_SYNC]</span> Real-time SQL synchronization active.</p>
                <p className="text-white mt-2 animate-pulse">_</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* NEW: IDENTITY & BIO SECTION */}
      <section id="bio" className="py-20 md:py-32 px-6 relative z-10 border-t border-white/5 bg-[#050508]/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-2xl rounded-full opacity-50" />
              <div className="relative bg-[#0A0A0F] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <Terminal size={28} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Aditya Srivastava</h2>
                <div className="text-cyan-400 font-mono text-sm mb-6">Systems Architect & AI Consultant</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-widest text-neutral-400">Independent</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-widest text-neutral-400">Full-Stack</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-widest text-neutral-400">Consultant</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-7">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-6">The Architect Behind the Systems.</motion.h3>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-neutral-400 mb-6 leading-relaxed">
                I bridge the gap between complex operational bottlenecks and high-performance digital solutions. With deep expertise in <strong className="text-white font-medium">C# .NET Backend Engineering</strong> and modern <strong className="text-white font-medium">AI integrations</strong>, I build software that works precisely how your business dictates.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-neutral-400 mb-8 leading-relaxed">
                Whether it's designing a multi-company SaaS platform, automating manual data entry via OCR and Python scripts, or engineering a custom CRM to manage a sales pipeline, my approach is always the same: <span className="text-cyan-400 italic">Code should generate revenue and save time.</span>
              </motion.p>
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <BrainCircuit className="text-purple-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-sm">Systems Thinker</h4>
                    <p className="text-xs text-neutral-500 mt-1">Converting manual business processes into logical, automated software.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Layers className="text-cyan-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-sm">Logic-Heavy Dev</h4>
                    <p className="text-xs text-neutral-500 mt-1">Moving beyond static websites to architect database-heavy applications.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPACT ARCHITECTURAL CAPABILITIES */}
      <section id="infrastructure" className="py-20 md:py-32 px-6 relative z-10 border-t border-white/5 bg-[#020203]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20 text-center md:text-left">
            <div className="text-xs font-mono text-purple-400 mb-4 uppercase tracking-widest">// Advanced Infrastructure</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Architectural Capabilities</h2>
            <p className="text-neutral-400 max-w-2xl text-base md:text-lg">I solve complex business problems by translating them into secure, automated, and scalable digital infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* PILLAR 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0A0A0F] border border-white/5 p-6 md:p-10 rounded-2xl flex flex-col h-full hover:border-cyan-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0"><Bot size={24}/></div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Intelligent Automation & AI</h3>
              </div>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-8">
                <strong className="text-white font-medium">What this means:</strong> I eliminate manual human bottlenecks. I build AI that automatically reads invoices, chatbots that learn how to handle customer support, and logic scripts that scrape data autonomously.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {['Learning Chatbots', 'Google Vision OCR', 'Data Scraping', 'AI Workflows', 'Decision Engines'].map((tag, i) => (
                  <span key={i} className="text-[10px] md:text-[11px] font-mono uppercase tracking-wider px-2 md:px-3 py-1.5 bg-white/5 border border-white/5 rounded text-cyan-100 group-hover:border-cyan-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* PILLAR 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0A0A0F] border border-white/5 p-6 md:p-10 rounded-2xl flex flex-col h-full hover:border-purple-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0"><Server size={24}/></div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Enterprise SaaS & Backend</h3>
              </div>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-8">
                <strong className="text-white font-medium">What this means:</strong> I build the invisible engines powering massive applications. This includes engineering heavy databases, strict security protocols, and architecture to host multiple businesses under one system.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {['Multi-Company SaaS', 'API Architectures', 'SQL Databases', 'Role-Based Auth', 'Secure Login'].map((tag, i) => (
                  <span key={i} className="text-[10px] md:text-[11px] font-mono uppercase tracking-wider px-2 md:px-3 py-1.5 bg-white/5 border border-white/5 rounded text-purple-100 group-hover:border-purple-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* PILLAR 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0A0A0F] border border-white/5 p-6 md:p-10 rounded-2xl flex flex-col h-full hover:border-green-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded bg-green-500/10 flex items-center justify-center text-green-400 shrink-0"><LineChart size={24}/></div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Revenue & Sales Operations</h3>
              </div>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-8">
                <strong className="text-white font-medium">What this means:</strong> I replace messy spreadsheets with bulletproof software. I engineer custom CRM pipelines that automatically track leads, send marketing emails, and calculate exact profit shares in real-time.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {['Custom CRM Systems', 'Lead Pipelines', 'Email Automation', 'Sales Tracking', 'Financial Dashboards'].map((tag, i) => (
                  <span key={i} className="text-[10px] md:text-[11px] font-mono uppercase tracking-wider px-2 md:px-3 py-1.5 bg-white/5 border border-white/5 rounded text-green-100 group-hover:border-green-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* PILLAR 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0A0A0F] border border-white/5 p-6 md:p-10 rounded-2xl flex flex-col h-full hover:border-orange-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0"><Users size={24}/></div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Internal Business Tools</h3>
              </div>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-8">
                <strong className="text-white font-medium">What this means:</strong> I create centralized digital workspaces custom-built for your employees. From internal chat networks to complex admin panels, I build the tools your team needs to operate efficiently.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {['Custom Admin Panels', 'Team Dashboards', 'Internal Chat', 'Business Analytics', 'Live Reporting'].map((tag, i) => (
                  <span key={i} className="text-[10px] md:text-[11px] font-mono uppercase tracking-wider px-2 md:px-3 py-1.5 bg-white/5 border border-white/5 rounded text-orange-100 group-hover:border-orange-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TIMELINE (Responsive Horizontal to Vertical) */}
      <section className="py-20 md:py-32 px-6 relative z-10 border-t border-white/5 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 md:mb-24">From Idea to Scalable System</h2>
          
          {/* Timeline Container */}
          <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4 ml-4 md:ml-0">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-0" />
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute top-0 left-6 w-[1px] h-full bg-gradient-to-b from-purple-500/10 via-purple-500/50 to-transparent z-0" />
            
            {[
              { step: '01', title: 'Planning', desc: 'Mapping workflows' },
              { step: '02', title: 'Architecture', desc: 'Logic & DB schemas' },
              { step: '03', title: 'Development', desc: 'Secure backend builds' },
              { step: '04', title: 'Optimization', desc: 'Speed & AI refinement' },
              { step: '05', title: 'Deployment', desc: 'Live environment push' },
              { step: '06', title: 'Scaling', desc: 'Continuous iteration' }
            ].map((phase, i) => (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} key={i} className="relative z-10 flex flex-row md:flex-col items-center md:text-center bg-[#050508] md:px-4 gap-6 md:gap-0">
                <div className="w-12 h-12 rounded bg-[#0A0A0F] border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-sm font-bold md:mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)] transform rotate-45 shrink-0 z-10">
                  <span className="-rotate-45">{phase.step}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 md:mt-2 text-left md:text-center">{phase.title}</h4>
                  <p className="text-xs text-neutral-500 text-left md:text-center">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section id="stack" className="py-20 md:py-32 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 md:gap-8">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="col-span-full mb-4 md:mb-8 text-center md:text-left">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Stack</h2>
             <p className="text-neutral-400 text-sm md:text-base">Deep expertise in enterprise-grade languages and frameworks.</p>
          </motion.div>

          <div className="bg-[#0A0A0F] border border-white/5 p-6 md:p-8 rounded-2xl relative overflow-hidden">
            <Server className="text-cyan-500 mb-4 md:mb-6" size={28} />
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 border-b border-white/5 pb-4">Backend Architecture</h3>
            <ul className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm text-neutral-400">
              <li><span className="text-cyan-500 mr-3">›</span>C# / .NET</li>
              <li><span className="text-cyan-500 mr-3">›</span>ASP.NET Core</li>
              <li><span className="text-cyan-500 mr-3">›</span>REST APIs & Roles</li>
              <li><span className="text-cyan-500 mr-3">›</span>Authentication Systems</li>
              <li><span className="text-cyan-500 mr-3">›</span>SQL Server Architecture</li>
            </ul>
          </div>

          <div className="bg-[#0A0A0F] border border-white/5 p-6 md:p-8 rounded-2xl relative overflow-hidden">
            <LayoutDashboard className="text-purple-500 mb-4 md:mb-6" size={28} />
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 border-b border-white/5 pb-4">Frontend UI</h3>
            <ul className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm text-neutral-400">
              <li><span className="text-purple-500 mr-3">›</span>React / Next.js</li>
              <li><span className="text-purple-500 mr-3">›</span>HTML / CSS / JavaScript</li>
              <li><span className="text-purple-500 mr-3">›</span>Tailwind CSS Framework</li>
              <li><span className="text-purple-500 mr-3">›</span>Responsive Admin Panels</li>
              <li><span className="text-purple-500 mr-3">›</span>Dashboard Interfaces</li>
            </ul>
          </div>

          <div className="bg-[#0A0A0F] border border-white/5 p-6 md:p-8 rounded-2xl relative overflow-hidden">
            <Binary className="text-green-500 mb-4 md:mb-6" size={28} />
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 border-b border-white/5 pb-4">Automation & AI</h3>
            <ul className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm text-neutral-400">
              <li><span className="text-green-500 mr-3">›</span>Python Automation</li>
              <li><span className="text-green-500 mr-3">›</span>Selenium WebDriver</li>
              <li><span className="text-green-500 mr-3">›</span>AI LLM Integrations</li>
              <li><span className="text-green-500 mr-3">›</span>Google Vision AI / OCR</li>
              <li><span className="text-green-500 mr-3">›</span>Data Scraping Systems</li>
            </ul>
          </div>

        </div>
      </section>

      {/* BUSINESS POSITIONING (INITIATE) */}
      <section id="initiate" className="py-20 md:py-32 px-6 relative z-10 border-t border-white/5 bg-[#050508]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Elite Execution.<br/>No Compromises.</h2>
            <ul className="space-y-6 md:space-y-8">
              {[
                { title: 'Independent Execution', desc: 'Direct communication with me only. No outsourcing. No project managers.' },
                { title: 'Lean & Affordable', desc: 'Enterprise-grade quality at a cost far more affordable than large agencies.' },
                { title: 'Agile & Custom', desc: 'Fast iteration cycles and highly personalized, flexible custom solutions.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <ShieldCheck className="text-cyan-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">{item.title}</h4>
                    <p className="text-sm text-neutral-400 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A0A0F] border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Cog size={150} className="animate-spin-slow" />
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-red-500 rounded-full"/>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
              <div className="w-3 h-3 bg-green-500 rounded-full"/>
              <span className="ml-4 font-mono text-[10px] text-cyan-500">SYSTEM.INIT()</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Ready to architect your system?</h3>
            <p className="text-sm text-neutral-400 mb-8">Establish a secure connection to discuss workflows, scaling goals, and deployment architecture.</p>
            
            <div className="flex flex-col gap-4">
              <button onClick={() => setIsConsoleOpen(true)} className="bg-cyan-500 text-black px-6 py-4 rounded font-bold uppercase tracking-wide text-xs md:text-sm hover:bg-cyan-400 transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Terminal size={18} /> Open Secure Console
              </button>
            </div>
          </div>

        </div>
      </section>

      <footer className="py-8 text-center text-[10px] md:text-xs font-mono text-neutral-600 border-t border-white/5 relative z-10 bg-[#020203]">
        <p>© ADITYA SRIVASTAVA // SYSTEMS ARCHITECT // SECURE BUILD {new Date().getFullYear()}</p>
      </footer>

      {/* --- CUSTOM CONSOLE POP-UP (CONTACT MODAL) --- */}
      <AnimatePresence>
        {isConsoleOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} 
              className="w-full max-w-2xl bg-[#050508] border border-cyan-500/30 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden flex flex-col"
            >
              <div className="bg-[#0A0A0F] border-b border-white/10 px-4 py-3 flex justify-between items-center select-none">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400" onClick={() => setIsConsoleOpen(false)} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] md:text-xs font-mono text-neutral-500 flex items-center gap-2 overflow-hidden whitespace-nowrap">
                  <Lock size={12} className="text-green-400 shrink-0"/> root@aditya_sys: ~/connect
                </div>
                <button onClick={() => setIsConsoleOpen(false)} className="text-neutral-500 hover:text-white transition-colors shrink-0"><X size={16} /></button>
              </div>

              <div className="p-4 md:p-8 font-mono text-xs md:text-sm h-[400px] overflow-y-auto">
                <motion.div variants={consoleLineStagger} initial="hidden" animate="visible" className="space-y-4">
                  <motion.div variants={consoleLine} className="text-neutral-400">$ <span className="text-cyan-400">./initiate_protocol.sh</span></motion.div>
                  <motion.div variants={consoleLine} className="text-neutral-400">[<span className="text-green-400">OK</span>] Bypassing standard templates...</motion.div>
                  <motion.div variants={consoleLine} className="text-neutral-400">[<span className="text-green-400">OK</span>] Loading elite system architecture...</motion.div>
                  
                  <motion.div variants={consoleLine} className="text-cyan-300 mt-6 border-l-2 border-cyan-500 pl-4 py-2 bg-cyan-500/5 text-[10px] md:text-xs leading-relaxed">
                    "Every business operates differently. I design custom digital systems tailored specifically to your workflows, scaling goals, and automation needs."
                  </motion.div>
                  
                  <motion.div variants={consoleLine} className="pt-6"><span className="text-purple-400 font-bold tracking-wider">AVAILABLE CONNECTION PROTOCOLS:</span></motion.div>

                  <motion.div variants={consoleLine} className="flex flex-col gap-4 pt-2">
                    <a href="mailto:realadityasrivastava@gmail.com" className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors w-fit group">
                      <Mail size={16} className="text-cyan-500 group-hover:animate-pulse" /><span className="truncate">&gt; sys.transmit_email()</span>
                    </a>
                    <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors w-fit group">
                      <Briefcase size={16} className="text-purple-500 group-hover:animate-pulse" /><span className="truncate">&gt; sys.schedule_consultation()</span>
                    </a>
                    <a href="https://wa.me/918429088735" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors w-fit group">
                      <MessageSquare size={16} className="text-green-500 group-hover:animate-pulse" /><span className="truncate">&gt; sys.open_direct_line()</span>
                    </a>
                  </motion.div>

                  <motion.div variants={consoleLine} className="pt-6 flex items-center text-cyan-400">
                    <span>user@guest: ~$</span><span className="w-2 h-4 bg-cyan-400 ml-2 animate-pulse inline-block" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}