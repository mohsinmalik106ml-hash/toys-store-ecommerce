import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  FileText,
  Download,
  Eye,
  CheckCircle,
  GraduationCap,
  Briefcase,
  Code,
  Sparkles,
} from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const { profile, setIsResumeModalOpen, education, experiences } = usePortfolio();

  return (
    <section id="resume" className="py-20 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 mb-2 block">
                  Curriculum Vitae
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                  Professional Resume & Qualifications
                </h2>
              </div>

              {/* Career Objective Quote Box */}
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Career Objective:
                </span>
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{profile.careerObjective}"
                </p>
              </div>

              {/* Snapshot Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase">Degree</span>
                  </div>
                  <p className="text-sm font-bold text-white">BS-IT Graduate</p>
                  <p className="text-[11px] text-slate-400">Information Technology</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase">Experience</span>
                  </div>
                  <p className="text-sm font-bold text-white">2 Corporate Internships</p>
                  <p className="text-[11px] text-slate-400">Technic Mentors & Honda Atlas</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Code className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase">Stack</span>
                  </div>
                  <p className="text-sm font-bold text-white">Laravel & MySQL</p>
                  <p className="text-[11px] text-slate-400">REST APIs & OOP</p>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Actions & Preview Trigger */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FileText className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Ready for Hiring Review</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Updated with latest internships, technical stack, and verified degree qualifications.
                </p>
              </div>

              <div className="w-full space-y-2.5 pt-2">
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Full Resume</span>
                </button>

                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download Print-Ready CV</span>
                </button>
              </div>

              <span className="text-[11px] text-slate-500">
                Format: PDF / Text Printable
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
