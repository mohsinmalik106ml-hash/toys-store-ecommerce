import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Github,
  Star,
  GitFork,
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Terminal,
} from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const { githubRepos, profile, addToast } = usePortfolio();
  const [copiedRepo, setCopiedRepo] = useState<string | null>(null);

  const copyCloneCommand = (repoName: string) => {
    const cmd = `git clone https://github.com/mohsinali-dev/${repoName}.git`;
    navigator.clipboard.writeText(cmd);
    setCopiedRepo(repoName);
    addToast(`Copied: ${cmd}`, 'success');
    setTimeout(() => setCopiedRepo(null), 2500);
  };

  const totalStars = githubRepos.reduce((acc, r) => acc + r.stars, 0);
  const totalForks = githubRepos.reduce((acc, r) => acc + r.forks, 0);

  return (
    <section className="py-20 bg-[#090D16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & GitHub Stats Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-400 mb-2">
              <Github className="w-4 h-4" />
              <span>Open Source & Version Control</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              GitHub Repositories & Code Activity
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Consistent commit hygiene, Git feature branching, and clean repository readmes.
            </p>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors shadow-sm self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit @mohsinali-dev on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* GitHub Statistics Overview Box */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">4</p>
              <p className="text-xs text-slate-400 mt-1">Public Repositories</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tabular-nums">{totalStars}</p>
              <p className="text-xs text-slate-400 mt-1">Repository Stars</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">{totalForks}</p>
              <p className="text-xs text-slate-400 mt-1">Forks & Clones</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">100%</p>
              <p className="text-xs text-slate-400 mt-1">PSR-12 PHP Standard</p>
            </div>
          </div>

          {/* Language distribution bar */}
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-medium text-slate-300">Top Languages Across Repositories</span>
              <span className="font-mono text-[11px]">PHP 64% · Blade 18% · JS 12% · SQL 6%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
              <div style={{ width: '64%' }} className="bg-indigo-500 h-full" title="PHP 64%" />
              <div style={{ width: '18%' }} className="bg-rose-500 h-full" title="Blade 18%" />
              <div style={{ width: '12%' }} className="bg-amber-400 h-full" title="JavaScript 12%" />
              <div style={{ width: '6%' }} className="bg-cyan-400 h-full" title="SQL 6%" />
            </div>
          </div>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubRepos.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Title and Stars */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                    <h3 className="text-base font-bold text-white hover:text-blue-400 transition-colors">
                      <a href={repo.url} target="_blank" rel="noreferrer">
                        {repo.name}
                      </a>
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      {repo.forks}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.techTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Clone Command bar */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500 text-[11px]">{repo.updatedDate}</span>

                <button
                  onClick={() => copyCloneCommand(repo.name)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy git clone command"
                >
                  {copiedRepo === repo.name ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>git clone</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
