import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sun, Moon, Shield, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, setIsAdminModalOpen, setIsResumeModalOpen, contactMessages } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const unreadMessagesCount = contactMessages.filter((m) => !m.isRead).length;

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090D16]/90 dark:bg-[#090D16]/90 light:bg-white/90 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand title wordmark (single text element) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="text-lg font-bold tracking-tight text-white dark:text-white light:text-slate-900 font-display transition-colors"
        >
          Mohsin Ali
        </a>

        {/* Zone 2: 4–6 text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Projects
          </button>
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Resume
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="p-2 text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 rounded-lg hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Admin Dashboard Trigger */}
          <button
            onClick={() => setIsAdminModalOpen(true)}
            title="Portfolio Admin & Inquiries"
            className="relative p-2 text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <Shield className="w-4 h-4" />
            {unreadMessagesCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-blue-500/20"
          >
            <span>Hire Mohsin</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090D16] px-4 pt-3 pb-6 flex flex-col gap-3 animate-fade-in">
          <button
            onClick={() => scrollTo('about')}
            className="text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Projects
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsResumeModalOpen(true);
            }}
            className="text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Resume (CV)
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Contact
          </button>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAdminModalOpen(true);
              }}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Panel</span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
