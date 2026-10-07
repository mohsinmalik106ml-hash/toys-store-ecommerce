import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Award,
  BookOpen,
  Quote,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const CertificationsAndBlogs: React.FC = () => {
  const { certifications, blogs, testimonials } = usePortfolio();
  const [expandedBlog, setExpandedBlog] = useState<string | null>(null);

  return (
    <section className="py-20 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. Testimonials & Internship Endorsements */}
        <div>
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 mb-2">
              Professional Endorsements
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display">
              Internship Lead & Supervisor Feedback
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Feedback from senior colleagues and technical mentors regarding work ethic, execution speed, and architectural understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between relative"
              >
                <div>
                  <Quote className="w-8 h-8 text-blue-500/20 mb-3" />
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{test.feedback}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-xs text-blue-400">
                    {test.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{test.name}</h4>
                    <p className="text-xs text-slate-400">
                      {test.role} · <span className="text-blue-400">{test.company}</span>
                    </p>
                    <p className="text-[11px] text-slate-500">{test.relationship}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Certifications Section */}
        <div>
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 mb-2">
              Continuous Learning
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display">
              Technical Certifications & Courses
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Verifiable skill verifications in Laravel, Networking Topologies, and Relational Database Engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-blue-400 block mb-1">
                    Issued {cert.issueDate}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">{cert.issuer}</p>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    {cert.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 text-xs text-emerald-400 flex items-center justify-between">
                  <span>Verified Credential</span>
                  <Award className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Tech Blog / Learning Notes */}
        <div>
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 mb-2">
              Engineering Notes & Knowledge Sharing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display">
              Technical Articles by Mohsin
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Documenting practical solutions to common backend engineering and infrastructure challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => {
              const isExpanded = expandedBlog === blog.id;
              return (
                <div
                  key={blog.id}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {blog.summary}
                    </p>

                    {isExpanded && (
                      <div className="pt-3 pb-2 space-y-2 border-t border-slate-800 text-xs text-slate-300 animate-fade-in">
                        <span className="font-semibold text-blue-400 block">Key Takeaways:</span>
                        {blog.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpandedBlog(isExpanded ? null : blog.id)}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Less' : 'Read Notes'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
