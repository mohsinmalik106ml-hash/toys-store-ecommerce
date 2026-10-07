import React, { useState, useMemo } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Server,
  Layout,
  Database,
  Wrench,
  Network,
  Briefcase,
  Search,
  Check,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    backend: Server,
    frontend: Layout,
    database: Database,
    tools: Wrench,
    it_networking: Network,
    erp: Briefcase,
  };

  // Filter skills by selected tab & search text
  const filteredSkillsWithCategory = useMemo(() => {
    return skillCategories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter(
          (skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.badge.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [skillCategories, selectedCategory, searchQuery]);

  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 mb-2">
              Technical Competencies
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Full Stack & Systems Skillset
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Equipped with robust backend Laravel development, relational database engineering, and certified enterprise IT networking skills.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill, e.g. Eloquent, Postman..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Category Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
            }`}
          >
            All Skills ({totalSkillsCount})
          </button>

          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Server;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
                <span className="text-[10px] text-slate-400 opacity-80">({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Skills List by Category */}
        <div className="space-y-12">
          {filteredSkillsWithCategory.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <p className="text-sm text-slate-400">No skills matching "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-blue-400 hover:underline"
              >
                Clear search filter
              </button>
            </div>
          ) : (
            filteredSkillsWithCategory.map((cat) => {
              const Icon = categoryIcons[cat.id] || Server;
              return (
                <div key={cat.id} className="space-y-4">
                  {/* Category Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-400">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-md flex flex-col justify-between"
                      >
                        <div>
                          {/* Skill Header */}
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-semibold text-white">{skill.name}</span>
                            <span className="text-xs font-mono font-medium text-blue-400 tabular-nums">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Level Progress Bar */}
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                            <div
                              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>

                          {/* Description */}
                          <p className="text-xs text-slate-400 leading-relaxed mb-3">
                            {skill.details}
                          </p>
                        </div>

                        {/* Unboxed Metadata Footer */}
                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Focus Area: <span className="text-slate-300">{skill.badge}</span></span>
                          <span className="flex items-center gap-1 text-emerald-400">
                            <Check className="w-3 h-3" />
                            Verified
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
