import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project, SkillCategory, ExperienceItem, ContactMessage } from '../types/portfolio';
import {
  X,
  Mail,
  FolderGit2,
  Cpu,
  Briefcase,
  FileText,
  RotateCcw,
  Trash2,
  Plus,
  CheckCircle,
  Eye,
  ExternalLink,
  Edit2,
  Save,
} from 'lucide-react';

export const AdminDashboardModal: React.FC = () => {
  const {
    isAdminModalOpen,
    setIsAdminModalOpen,
    profile,
    updateProfile,
    projects,
    addProject,
    updateProject,
    deleteProject,
    skillCategories,
    addSkill,
    updateSkill,
    deleteSkill,
    experiences,
    updateExperience,
    addExperience,
    deleteExperience,
    contactMessages,
    markMessageRead,
    deleteMessage,
    resetAllToDefault,
    addToast,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<'messages' | 'projects' | 'skills' | 'experience' | 'profile'>('messages');

  // Form states for new project
  const [newProjectForm, setNewProjectForm] = useState({
    title: '',
    tagline: '',
    category: 'Full Stack' as Project['category'],
    description: '',
    technologies: '',
    features: '',
    githubUrl: '',
    liveDemoUrl: '',
  });

  // Form state for adding skill
  const [newSkillForm, setNewSkillForm] = useState({
    categoryId: 'backend',
    name: '',
    level: 85,
    badge: 'Core Competency',
    details: '',
  });

  // Profile edit state
  const [profileForm, setProfileForm] = useState({
    title: profile.title,
    shortIntro: profile.shortIntro,
    careerObjective: profile.careerObjective,
    availability: profile.availability,
    email: profile.email,
    whatsapp: profile.whatsapp,
  });

  if (!isAdminModalOpen) return null;

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectForm.title || !newProjectForm.description) return;

    addProject({
      title: newProjectForm.title,
      tagline: newProjectForm.tagline || 'Custom Enterprise Application',
      category: newProjectForm.category,
      description: newProjectForm.description,
      technologies: newProjectForm.technologies.split(',').map((s) => s.trim()).filter(Boolean),
      features: newProjectForm.features.split('\n').map((s) => s.trim()).filter(Boolean),
      githubUrl: newProjectForm.githubUrl || 'https://github.com/mohsinali-dev',
      liveDemoUrl: newProjectForm.liveDemoUrl || '#',
      previewImage: '/src/assets/images/office_management_preview_1791268370218.jpg',
      featured: true,
      architectureDetails: {
        mvcStructure: 'Laravel MVC Architecture with Eloquent Models & Repository Layer',
        databaseTables: ['users', 'records', 'audit_logs'],
        sampleRoute: "Route::resource('app', CustomController::class);",
        controllerLogic: 'Standardized CRUD Controller with FormRequest validation.',
      },
    });

    setNewProjectForm({
      title: '',
      tagline: '',
      category: 'Full Stack',
      description: '',
      technologies: '',
      features: '',
      githubUrl: '',
      liveDemoUrl: '',
    });
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillForm.name) return;

    addSkill(newSkillForm.categoryId, {
      name: newSkillForm.name,
      level: Number(newSkillForm.level),
      badge: newSkillForm.badge,
      details: newSkillForm.details || 'Solid operational knowledge and development experience.',
    });

    setNewSkillForm({
      categoryId: newSkillForm.categoryId,
      name: '',
      level: 85,
      badge: 'Core Competency',
      details: '',
    });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  const unreadCount = contactMessages.filter((m) => !m.isRead).length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
              M
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Portfolio Admin Console</h3>
              <p className="text-[11px] text-slate-400">LocalStorage Managed Data · Instant Hot-Update</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Reset all portfolio projects, skills, and settings back to verified seed data?')) {
                  resetAllToDefault();
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/60 transition-colors"
              title="Reset data"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={() => setIsAdminModalOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center gap-2 px-6 border-b border-slate-800/80 bg-slate-950/50 overflow-x-auto text-xs font-semibold text-slate-400">
          <button
            onClick={() => setActiveTab('messages')}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'messages' ? 'border-blue-500 text-white' : 'border-transparent hover:text-slate-200'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Recruiter Messages ({contactMessages.length})</span>
            {unreadCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-emerald-500 text-[10px] text-black font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'projects' ? 'border-blue-500 text-white' : 'border-transparent hover:text-slate-200'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Manage Projects ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'skills' ? 'border-blue-500 text-white' : 'border-transparent hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Manage Skills</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'profile' ? 'border-blue-500 text-white' : 'border-transparent hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Profile & Resume Objective</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          {/* TAB 1: Messages */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-base">Inbound Recruiter & Client Messages</h4>
                <span className="text-xs text-slate-400">Stored in browser LocalStorage</span>
              </div>

              {contactMessages.length === 0 ? (
                <div className="text-center py-12 p-8 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 text-xs">
                  No contact messages received yet. Submit an inquiry through the Contact section to test.
                </div>
              ) : (
                <div className="space-y-3">
                  {contactMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        msg.isRead
                          ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                          : 'bg-blue-950/20 border-blue-500/30 text-white shadow-sm'
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{msg.name}</span>
                            {!msg.isRead && (
                              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500 text-black font-bold">
                                UNREAD
                              </span>
                            )}
                          </div>
                          <a
                            href={`mailto:${msg.email}`}
                            className="text-xs text-blue-400 hover:underline block"
                          >
                            {msg.email}
                          </a>
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-slate-500 text-[11px]">{msg.createdAt}</span>
                          {!msg.isRead && (
                            <button
                              onClick={() => markMessageRead(msg.id)}
                              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                            >
                              Mark Read
                            </button>
                          )}
                          <a
                            href={`mailto:${msg.email}?subject=Re:%20${encodeURIComponent(msg.subject)}`}
                            className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs transition-colors"
                          >
                            Reply
                          </a>
                          <button
                            onClick={() => deleteMessage(msg.id)}
                            className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                            title="Delete message"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="text-xs text-blue-300 font-semibold mb-1">
                        Role Focus: {msg.roleInterest || 'General Inquiry'} · Subject: {msg.subject}
                      </div>

                      <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Projects Management */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              {/* Add New Project Form */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Plus className="w-4 h-4 text-blue-400" />
                  Add New Portfolio Project
                </h4>

                <form onSubmit={handleCreateProject} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Project Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. E-Commerce Order API"
                      value={newProjectForm.title}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, title: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Tagline</label>
                    <input
                      type="text"
                      placeholder="e.g. Scalable Microservice Backend"
                      value={newProjectForm.tagline}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, tagline: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Category</label>
                    <select
                      value={newProjectForm.category}
                      onChange={(e) =>
                        setNewProjectForm({ ...newProjectForm, category: e.target.value as Project['category'] })
                      }
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                    >
                      <option value="Full Stack">Full Stack</option>
                      <option value="CRM & Enterprise">CRM & Enterprise</option>
                      <option value="Laravel Backend">Laravel Backend</option>
                      <option value="REST API">REST API</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Technologies (comma separated)</label>
                    <input
                      type="text"
                      placeholder="Laravel, MySQL, Redis, Docker"
                      value={newProjectForm.technologies}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, technologies: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 mb-1">Description</label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Describe the application scope, architecture, and problem solved..."
                      value={newProjectForm.description}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, description: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 mb-1">Key Features (one per line)</label>
                    <textarea
                      rows={3}
                      placeholder="Admin Dashboard&#10;RBAC Roles&#10;Automated Invoicing"
                      value={newProjectForm.features}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, features: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
                    >
                      Publish Project to Portfolio
                    </button>
                  </div>
                </form>
              </div>

              {/* Current Projects List */}
              <div className="space-y-3">
                <h4 className="font-bold text-white text-sm">Existing Projects ({projects.length})</h4>
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div>
                      <h5 className="font-semibold text-white text-sm">{proj.title}</h5>
                      <p className="text-xs text-blue-400">{proj.category} · {proj.technologies.join(', ')}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => deleteProject(proj.id)}
                        className="p-2 text-slate-400 hover:text-rose-400 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Skills Management */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              {/* Add Skill Form */}
              <form onSubmit={handleAddSkill} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Plus className="w-4 h-4 text-blue-400" />
                  Add Technical Skill
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Target Category</label>
                    <select
                      value={newSkillForm.categoryId}
                      onChange={(e) => setNewSkillForm({ ...newSkillForm, categoryId: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                    >
                      {skillCategories.map((c) => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Skill Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Redis Cache"
                      value={newSkillForm.name}
                      onChange={(e) => setNewSkillForm({ ...newSkillForm, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Proficiency % ({newSkillForm.level}%)</label>
                    <input
                      type="range"
                      min="50"
                      max="100"
                      value={newSkillForm.level}
                      onChange={(e) => setNewSkillForm({ ...newSkillForm, level: Number(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-slate-400 mb-1">Practical Description / Context</label>
                  <input
                    type="text"
                    placeholder="e.g. Used for caching database queries and session store"
                    value={newSkillForm.details}
                    onChange={(e) => setNewSkillForm({ ...newSkillForm, details: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
                >
                  Add Skill
                </button>
              </form>

              {/* Existing Skills Quick Management */}
              <div className="space-y-4">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                    <h5 className="font-semibold text-white text-xs mb-3">{cat.title}</h5>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs"
                        >
                          <span className="text-white">{s.name}</span>
                          <span className="text-blue-400 font-mono font-medium">{s.level}%</span>
                          <button
                            onClick={() => deleteSkill(cat.id, s.name)}
                            className="text-slate-500 hover:text-rose-400 ml-1"
                            title="Delete"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Profile Settings */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <h4 className="font-bold text-white text-sm">Update Profile & Career Objective</h4>

              <div>
                <label className="block text-slate-400 mb-1">Professional Title</label>
                <input
                  type="text"
                  value={profileForm.title}
                  onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Short Introduction</label>
                <textarea
                  rows={2}
                  value={profileForm.shortIntro}
                  onChange={(e) => setProfileForm({ ...profileForm, shortIntro: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Career Objective (ATS & Resume)</label>
                <textarea
                  rows={3}
                  value={profileForm.careerObjective}
                  onChange={(e) => setProfileForm({ ...profileForm, careerObjective: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">Availability Tagline</label>
                  <input
                    type="text"
                    value={profileForm.availability}
                    onChange={(e) => setProfileForm({ ...profileForm, availability: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">WhatsApp Contact</label>
                  <input
                    type="text"
                    value={profileForm.whatsapp}
                    onChange={(e) => setProfileForm({ ...profileForm, whatsapp: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
