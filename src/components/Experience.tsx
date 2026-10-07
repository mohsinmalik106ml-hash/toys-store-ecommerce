import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = usePortfolio();

  return (
    <section id="experience" className="py-20 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 mb-2">
            Work History
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Practical Experience & Internships
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real software house engineering combined with enterprise corporate IT infrastructure support. Demonstrating practical readiness for development teams.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-7 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                      {exp.type} · {exp.duration}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {exp.period}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>

                {/* Deliverables / Bullets */}
                <div className="space-y-2.5 mb-6">
                  {exp.descriptionBullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Highlight achievement banner */}
                <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-300 flex items-start gap-2.5 mb-6">
                  <Trophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Impact Highlight: </span>
                    <span>{exp.achievement}</span>
                  </div>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Technologies:</span>
                {exp.keyTech.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
