import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Briefcase,
  GraduationCap,
  Wrench,
  Award,
  Layers,
} from 'lucide-react';

export const ResumeModal: React.FC = () => {
  const {
    isResumeModalOpen,
    setIsResumeModalOpen,
    profile,
    experiences,
    education,
    projects,
    skillCategories,
  } = usePortfolio();

  if (!isResumeModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generates a clean text / markdown / printable CV download
    const cvContent = `MOHSIN ALI - CURRICULUM VITAE
Title: ${profile.title}
Email: ${profile.email} | Phone: ${profile.phone}
Location: ${profile.location}
LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}

CAREER OBJECTIVE:
${profile.careerObjective}

EDUCATION:
${education.map((e) => `${e.degree} - ${e.institution} (${e.period})\n- Status: ${e.status}`).join('\n')}

TECHNICAL SKILLS:
${skillCategories.map((c) => `${c.title}: ${c.skills.map((s) => s.name).join(', ')}`).join('\n')}

WORK EXPERIENCE:
${experiences.map((exp) => `${exp.role} - ${exp.company} (${exp.period})\n${exp.descriptionBullets.map((b) => `  * ${b}`).join('\n')}`).join('\n\n')}

FEATURED PROJECTS:
${projects.map((p) => `${p.title} (${p.technologies.join(', ')})\n${p.description}\nKey Features: ${p.features.join('; ')}`).join('\n\n')}
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mohsin_Ali_Laravel_Developer_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Controls Header */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div>
            <h3 className="text-lg font-bold text-white">Curriculum Vitae Preview</h3>
            <p className="text-xs text-slate-400">Standardized ATS & Recruiter Friendly Format</p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body (Styled as a clean high-end printable sheet) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900 text-slate-200 text-xs sm:text-sm font-sans space-y-7">
          
          {/* Resume Header */}
          <div className="border-b border-slate-700/80 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {profile.name}
                </h1>
                <p className="text-blue-400 font-semibold text-sm sm:text-base mt-0.5">
                  {profile.title}
                </p>
              </div>

              {/* Contact meta */}
              <div className="space-y-1 text-slate-400 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <a href={`mailto:${profile.email}`} className="hover:text-white">{profile.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Links row */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <span>GitHub</span>
              </a>
              <span className="text-emerald-400 font-medium ml-auto">
                {profile.availability}
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-2.5">
              Career Objective
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {profile.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-2.5">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                  <span className="text-xs text-slate-400">{edu.period}</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">{edu.institution} · <span className="text-emerald-400">{edu.status}</span></p>
                <div className="space-y-1 text-slate-400 text-xs pl-3 border-l-2 border-slate-800">
                  {edu.highlights.map((h, hIdx) => (
                    <p key={hIdx}>• {h}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Technical Skills Summary */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-2.5">
              Technical Skills Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-white block mb-1">{cat.title}:</span>
                  <p className="text-slate-300">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-2.5">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="font-bold text-white text-sm">{exp.role}</h3>
                    <span className="text-xs text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-blue-400 font-medium">{exp.company} · {exp.location}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                    {exp.descriptionBullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-2.5">
              Key Laravel & Web Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h3 className="font-bold text-white text-xs sm:text-sm">{proj.title}</h3>
                    <span className="text-[11px] text-blue-400 font-mono">[{proj.technologies.join(', ')}]</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-1.5">{proj.description}</p>
                  <p className="text-[11px] text-slate-400">
                    <span className="text-slate-500 font-medium">Core Modules: </span>
                    {proj.features.slice(0, 5).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
