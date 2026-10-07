import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  GraduationCap,
  Code2,
  Server,
  Network,
  Briefcase,
  CheckCircle2,
  Calendar,
  Building,
  Award,
} from 'lucide-react';

export const About: React.FC = () => {
  const { profile } = usePortfolio();

  const highlights = [
    {
      icon: GraduationCap,
      title: 'BS-IT Graduate',
      description: 'Solid academic foundation in algorithms, relational database theory, network architectures, and software engineering principles.',
    },
    {
      icon: Code2,
      title: 'Laravel Backend Specialist',
      description: 'Hands-on proficiency in building maintainable MVC applications, migrations, Eloquent relationships, authentication, and RESTful APIs.',
    },
    {
      icon: Briefcase,
      title: 'Software House Internship',
      description: '3 months intensive development at Technic Mentors writing production Laravel CRUD modules, testing, and team Git collaboration.',
    },
    {
      icon: Network,
      title: 'Enterprise IT & Networking',
      description: 'Practical IT support and SAP ERP workflow exposure at Honda Atlas Cars Pakistan, covering LAN diagnostics, subnetting, and system support.',
    },
  ];

  const timelineMilestones = [
    {
      year: 'Degree Completion',
      period: '4-Year University Program',
      role: 'Bachelor of Science in Information Technology (BS-IT)',
      institution: 'Higher Education Institution',
      summary:
        'Graduated with honors in core computing courses including Object-Oriented Programming (OOP), Database Systems & Advanced SQL, Web Technologies, Computer Networks, and Software Engineering.',
      skillsLearned: ['OOP Principles', 'Database Normalization', 'Cisco Packet Tracer', 'MVC Fundamentals', 'Web Security'],
    },
    {
      year: 'Corporate IT',
      period: 'Enterprise IT Internship',
      role: 'IT Intern',
      institution: 'Honda Atlas Cars Pakistan',
      summary:
        'Embedded within a Fortune 500 manufacturing IT department. Gained first-hand understanding of corporate SAP ERP modules, workstation deployment, LAN switch troubleshooting, and enterprise IT service desk workflows.',
      skillsLearned: ['SAP ERP Overview', 'Network Troubleshooting', 'IP Addressing', 'Hardware Diagnostics', 'Enterprise SOPs'],
    },
    {
      year: 'Web Development',
      period: '3 Months Software Engineering',
      role: 'Web Development Intern (PHP & Laravel)',
      institution: 'Technic Mentors',
      summary:
        'Engineered responsive web applications using PHP 8, Laravel, and MySQL. Implemented dynamic CRUD modules, database migrations, jQuery AJAX flows, and participated in sprint code reviews via GitHub.',
      skillsLearned: ['Laravel Framework', 'Eloquent ORM', 'MySQL Schemas', 'Bootstrap 5', 'Git Branching', 'RESTful Endpoints'],
    },
    {
      year: 'Current Focus',
      period: 'Actively Interviewing',
      role: 'Junior Laravel Developer & Web Engineer',
      institution: 'Seeking Full-Time Placement',
      summary:
        'Building scalable business solutions, contributing to open-source Laravel packages, and eager to bring disciplined engineering habits to software houses and tech companies.',
      skillsLearned: ['REST API Architecture', 'ERP Business Logic', 'RBAC Security', 'Continuous Learning'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 mb-2">
            Professional Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Engineering Rigor Grounded in Information Technology
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {profile.fullBio}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Professional Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white font-display mb-2">
              Career & Educational Timeline
            </h3>
            <p className="text-sm text-slate-400">
              The journey from rigorous academic coursework to real-world corporate IT and software engineering.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-6 md:pl-10">
                
                {/* Year Marker on Left for Desktop */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {milestone.year}
                  </span>
                  <p className="text-[11px] text-slate-500">{milestone.period}</p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 shadow-sm shadow-blue-500/50" />

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {milestone.role}
                    </h4>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-blue-400" />
                      {milestone.institution}
                    </span>
                  </div>

                  {/* Mobile Year Badge */}
                  <div className="md:hidden text-xs text-blue-400 font-semibold mb-2">
                    {milestone.year} · {milestone.period}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {milestone.summary}
                  </p>

                  {/* Skills Clean Text */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800/60">
                    <span className="text-slate-500 font-medium">Core Competencies:</span>
                    {milestone.skillsLearned.map((skill, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="text-slate-300">{skill}</span>
                        {sIdx < milestone.skillsLearned.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
