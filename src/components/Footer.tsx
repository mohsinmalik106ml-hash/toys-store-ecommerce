import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Github, Linkedin, Mail, MessageSquare, ArrowUp, Code2, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile, setIsAdminModalOpen, setIsResumeModalOpen } = usePortfolio();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#06080F] text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-lg font-bold text-white tracking-tight font-display hover:text-blue-400 transition-colors"
            >
              {profile.name}
            </a>
            <p className="text-xs text-slate-400 mt-1">
              Junior PHP Laravel Developer & BS-IT Graduate · Building Scalable Web Solutions
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => setIsResumeModalOpen(true)} className="hover:text-white transition-colors">
              Resume
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              <span>Admin</span>
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Mohsin Ali. All rights reserved. Crafted for international tech recruiters & software teams.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
