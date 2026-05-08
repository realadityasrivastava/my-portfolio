'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  Terminal, Server, BrainCircuit, CheckCircle, 
  ArrowRight, Shield, Zap, Activity, ChevronLeft,
  Code2, GitBranch, Layers
} from 'lucide-react';

// --- STRICT ELITE ANIMATION VARIANTS ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function PricingArchitecture() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tracking for background radial glow (Desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
        <Link href="/" className="flex items-center gap-3 relative z-50 group">
          <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
            <ChevronLeft size={16} className="text-neutral-400 group-hover:text-cyan-400" />
          </div>
          <span className="hidden sm:block text-sm font-bold tracking-widest text-white uppercase">Return to Main System</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)] animate-pulse" />
          <span className="text-lg font-bold tracking-tighter text-white">SYS.ARCHITECT</span>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded border border-purple-500/30 bg-purple-500/5 text-[10px] md:text-xs font-mono text-purple-400 uppercase tracking-widest">
            <Activity size={14} /> System Investment Topography
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6">
            Infrastructure Pricing <br className="hidden md:block" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">Built to Scale.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            I do not build generic websites with fixed price tags. I engineer custom operational systems. Below are the baseline investment ranges for standard architectural deployments. Exact costs are finalized post-discovery.
          </motion.p>
        </motion.div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          
          {/* TIER 1: AUTOMATION */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-colors" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400"><Zap size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-white">Logic & Automation</h3>
                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mt-1">Tier 01 // Efficiency</div>
              </div>
            </div>

            <div className="mb-8 border-b border-white/5 pb-8">
              <div className="text-neutral-500 font-mono text-sm mb-2">Estimated Range</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">$1,500</span>
                <span className="text-xl text-neutral-400">- $4,000+</span>
              </div>
              <p className="text-sm text-neutral-500 mt-4 leading-relaxed">Perfect for businesses looking to eliminate manual human bottlenecks, scrape data, or automate routine tasks.</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {['Custom Python/Selenium Scripts', 'Automated Data Scraping', 'Basic OCR / Vision API Integration', 'Third-Party API Connections', 'Automated Reporting Generators'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a href="mailto:your.email@example.com" className="w-full py-4 rounded border border-cyan-500/30 text-cyan-400 font-bold uppercase tracking-wider text-xs text-center hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2">
              <Terminal size={14} /> Request Blueprint
            </a>
          </motion.div>

          {/* TIER 2: CORE INFRASTRUCTURE (Highlighted) */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-gradient-to-b from-[#0A0A0F] to-[#050508] border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden flex flex-col transform lg:-translate-y-4 shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30"><Server size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-white">Core Infrastructure</h3>
                <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mt-1">Tier 02 // Operations</div>
              </div>
            </div>

            <div className="mb-8 border-b border-white/5 pb-8 relative z-10">
              <div className="text-neutral-500 font-mono text-sm mb-2">Estimated Range</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">$5,000</span>
                <span className="text-xl text-neutral-400">- $15,000+</span>
              </div>
              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">End-to-end custom business software. Ideal for custom CRMs, internal dashboards, and database-driven applications.</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 relative z-10">
              {['Custom CRM & Lead Pipelines', 'Secure C# / .NET Backend Architecture', 'SQL Server Database Design', 'React / Next.js Admin Panels', 'Role-Based User Authentication', 'Financial & Sales Dashboards'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-200">
                  <CheckCircle size={16} className="text-purple-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a href="mailto:your.email@example.com" className="w-full py-4 rounded bg-purple-600 text-white font-bold uppercase tracking-wider text-xs text-center hover:bg-purple-500 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)] relative z-10">
              <Code2 size={14} /> Initialize System Build
            </a>
          </motion.div>

          {/* TIER 3: ENTERPRISE AI */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col group hover:border-blue-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full group-hover:bg-blue-500/10 transition-colors" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded bg-blue-500/10 flex items-center justify-center text-blue-400"><BrainCircuit size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-white">Enterprise Ecosystem</h3>
                <div className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mt-1">Tier 03 // Scale</div>
              </div>
            </div>

            <div className="mb-8 border-b border-white/5 pb-8">
              <div className="text-neutral-500 font-mono text-sm mb-2">Estimated Range</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">$15,000</span>
                <span className="text-xl text-neutral-400">- $35,000+</span>
              </div>
              <p className="text-sm text-neutral-500 mt-4 leading-relaxed">Massive scale multi-tenant architectures, deep AI integrations, and complex algorithmic decision engines.</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {['Multi-Company SaaS Platforms', 'Learning Custom AI Chatbots', 'Heavy Microservice Architecture', 'Advanced Algorithmic Logic', 'Enterprise Security Protocols', 'High-Concurrency Processing'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a href="mailto:your.email@example.com" className="w-full py-4 rounded border border-blue-500/30 text-blue-400 font-bold uppercase tracking-wider text-xs text-center hover:bg-blue-500/10 transition-colors flex items-center justify-center gap-2">
              <GitBranch size={14} /> Request Architecture
            </a>
          </motion.div>

        </div>
      </section>

      {/* RETAINER / MAINTENANCE SECTION */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0A0A0F] to-[#050508] border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Shield size={32} className="text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">System Maintenance & Scaling</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Once a system is deployed, it requires server management, database optimization, API updates, and scaling monitoring. Retainers are available for active infrastructure.</p>
          </div>
          <div className="shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Starting At</div>
            <div className="text-3xl font-black text-white">$1,000 <span className="text-sm font-normal text-neutral-500">/mo</span></div>
          </div>
        </div>
      </section>

      {/* FAQ / LOGIC SECTION */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5 bg-[#050508]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Operational Protocol</h2>
            <p className="text-neutral-400">Understanding the logic behind custom system pricing.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0A0A0F] border border-white/5 p-8 rounded-xl">
              <h4 className="text-white font-bold mb-3 flex items-center gap-3"><Layers size={18} className="text-cyan-500"/> Why is it a range, not a fixed price?</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">Every business has different logic. A CRM for a 3-person team has a vastly different database architecture and security requirement than a CRM built to handle 100,000 daily active users. We quote based on logic weight, not page count.</p>
            </div>
            
            <div className="bg-[#0A0A0F] border border-white/5 p-8 rounded-xl">
              <h4 className="text-white font-bold mb-3 flex items-center gap-3"><Terminal size={18} className="text-purple-500"/> How does billing work?</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">Standard protocol is a 50% initial deployment fee to begin architecture mapping and backend infrastructure creation. The remaining 50% is due upon successful deployment and UAT (User Acceptance Testing) to the live server.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-[10px] md:text-xs font-mono text-neutral-600 border-t border-white/5 relative z-10 bg-[#020203]">
        <p>© ADITYA SRIVASTAVA // SYSTEMS ARCHITECT // PRICING ARCHITECTURE</p>
      </footer>
      
    </div>
  );
}