import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  FileText,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  CheckCircle,
  Terminal,
  Database,
  Layers,
  Sparkles,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile, setIsResumeModalOpen } = usePortfolio();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Title, CTAs, Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/20 text-xs text-blue-300 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Junior Laravel & Full Stack Roles</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display mb-4">
              {profile.name}
            </h1>

            {/* Professional Title */}
            <p className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6 tracking-tight">
              {profile.title}
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {profile.shortIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-95 whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all active:scale-95 whitespace-nowrap"
              >
                <FolderGit2 className="w-4 h-4 text-blue-400" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 rounded-xl transition-all active:scale-95 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Direct Channels:
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                  aria-label="WhatsApp Chat"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait Card with Tech Terminal Accent */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow & Glass Frame */}
              <div className="relative p-3 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
                
                {/* Image Container with Fallback */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/60">
                  <img
                    src={profile.avatarUrl}
                    alt="Mohsin Ali - PHP Laravel Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback in case of asset path issue
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-xs flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">Mohsin Ali</p>
                      <p className="text-slate-400 text-[11px]">BS-IT · Laravel Specialist</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
                      <CheckCircle className="w-3 h-3" />
                      Verified Degree
                    </span>
                  </div>
                </div>

                {/* Floating Micro-Card 1: MVC Architecture */}
                <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-xl backdrop-blur-md text-xs text-white">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="font-semibold text-[11px]">Clean MVC</p>
                    <p className="text-slate-400 text-[10px]">Robust Architecture</p>
                  </div>
                </div>

                {/* Floating Micro-Card 2: Relational MySQL */}
                <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-xl backdrop-blur-md text-xs text-white">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <div>
                    <p className="font-semibold text-[11px]">MySQL 3NF</p>
                    <p className="text-slate-400 text-[10px]">Optimized Schemas</p>
                  </div>
                </div>
              </div>

              {/* Terminal Code Snippet beneath avatar */}
              <div className="mt-6 p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/90 font-mono text-xs text-slate-300 shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-slate-400 ml-1">artisan-server</span>
                  </div>
                  <span className="text-[10px] text-blue-400">Laravel v10.x</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <p className="text-slate-400">
                    <span className="text-emerald-400 font-semibold">$</span> php artisan serve --port=8000
                  </p>
                  <p className="text-slate-500">
                    INFO Server running on [http://127.0.0.1:8000].
                  </p>
                  <p className="text-blue-400">
                    Press Ctrl+C to stop the server
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
