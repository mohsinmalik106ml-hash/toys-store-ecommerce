import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  GitHubRepo,
  TestimonialItem,
  CertificationItem,
  TechnicalArticle,
  PortfolioProfile,
  ContactMessage,
} from '../types/portfolio';
import {
  INITIAL_PROFILE,
  INITIAL_PROJECTS,
  INITIAL_SKILL_CATEGORIES,
  INITIAL_EXPERIENCES,
  INITIAL_EDUCATION,
  INITIAL_GITHUB_REPOS,
  INITIAL_TESTIMONIALS,
  INITIAL_CERTIFICATIONS,
  INITIAL_BLOGS,
} from '../data/initialData';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface PortfolioContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  profile: PortfolioProfile;
  updateProfile: (updated: Partial<PortfolioProfile>) => void;
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  skillCategories: SkillCategory[];
  addSkill: (categoryId: string, skill: { name: string; level: number; badge: string; details: string }) => void;
  updateSkill: (categoryId: string, skillName: string, updated: { level?: number; badge?: string; details?: string }) => void;
  deleteSkill: (categoryId: string, skillName: string) => void;
  experiences: ExperienceItem[];
  updateExperience: (id: string, updated: Partial<ExperienceItem>) => void;
  addExperience: (experience: Omit<ExperienceItem, 'id'>) => void;
  deleteExperience: (id: string) => void;
  education: EducationItem[];
  githubRepos: GitHubRepo[];
  testimonials: TestimonialItem[];
  certifications: CertificationItem[];
  blogs: TechnicalArticle[];
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: { name: string; email: string; subject: string; message: string; roleInterest?: string }) => boolean;
  markMessageRead: (id: string) => void;
  deleteMessage: (id: string) => void;
  activeProjectModal: Project | null;
  setActiveProjectModal: (proj: Project | null) => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  isResumeModalOpen: boolean;
  setIsResumeModalOpen: (open: boolean) => void;
  toasts: ToastMessage[];
  addToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
  resetAllToDefault: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('mohsin_portfolio_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('mohsin_portfolio_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Profile
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    try {
      const saved = localStorage.getItem('mohsin_portfolio_profile');
      return saved ? JSON.parse(saved) : INITIAL_PROFILE;
    } catch {
      return INITIAL_PROFILE;
    }
  });

  useEffect(() => {
    localStorage.setItem('mohsin_portfolio_profile', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updated: Partial<PortfolioProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
    addToast('Profile updated successfully', 'success');
  };

  // Projects
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('mohsin_portfolio_projects');
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  useEffect(() => {
    localStorage.setItem('mohsin_portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: `proj-${Date.now()}`,
    };
    setProjects((prev) => [newProject, ...prev]);
    addToast(`Project "${newProject.title}" added successfully`, 'success');
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
    addToast('Project updated successfully', 'success');
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    addToast('Project removed', 'info');
  };

  // Skills
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(() => {
    try {
      const saved = localStorage.getItem('mohsin_portfolio_skills');
      return saved ? JSON.parse(saved) : INITIAL_SKILL_CATEGORIES;
    } catch {
      return INITIAL_SKILL_CATEGORIES;
    }
  });

  useEffect(() => {
    localStorage.setItem('mohsin_portfolio_skills', JSON.stringify(skillCategories));
  }, [skillCategories]);

  const addSkill = (categoryId: string, skill: { name: string; level: number; badge: string; details: string }) => {
    setSkillCategories((prev) =>
      prev.map((cat) => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            skills: [...cat.skills, skill],
          };
        }
        return cat;
      })
    );
    addToast(`Skill "${skill.name}" added`, 'success');
  };

  const updateSkill = (categoryId: string, skillName: string, updated: { level?: number; badge?: string; details?: string }) => {
    setSkillCategories((prev) =>
      prev.map((cat) => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            skills: cat.skills.map((s) => (s.name === skillName ? { ...s, ...updated } : s)),
          };
        }
        return cat;
      })
    );
    addToast(`Skill "${skillName}" updated`, 'success');
  };

  const deleteSkill = (categoryId: string, skillName: string) => {
    setSkillCategories((prev) =>
      prev.map((cat) => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            skills: cat.skills.filter((s) => s.name !== skillName),
          };
        }
        return cat;
      })
    );
    addToast(`Skill "${skillName}" deleted`, 'info');
  };

  // Experiences
  const [experiences, setExperiences] = useState<ExperienceItem[]>(() => {
    try {
      const saved = localStorage.getItem('mohsin_portfolio_experiences');
      return saved ? JSON.parse(saved) : INITIAL_EXPERIENCES;
    } catch {
      return INITIAL_EXPERIENCES;
    }
  });

  useEffect(() => {
    localStorage.setItem('mohsin_portfolio_experiences', JSON.stringify(experiences));
  }, [experiences]);

  const updateExperience = (id: string, updated: Partial<ExperienceItem>) => {
    setExperiences((prev) => prev.map((exp) => (exp.id === id ? { ...exp, ...updated } : exp)));
    addToast('Experience updated successfully', 'success');
  };

  const addExperience = (expData: Omit<ExperienceItem, 'id'>) => {
    const newExp: ExperienceItem = {
      ...expData,
      id: `exp-${Date.now()}`,
    };
    setExperiences((prev) => [newExp, ...prev]);
    addToast('Experience added successfully', 'success');
  };

  const deleteExperience = (id: string) => {
    setExperiences((prev) => prev.filter((e) => e.id !== id));
    addToast('Experience entry removed', 'info');
  };

  // Education & Static/Seed sets
  const [education] = useState<EducationItem[]>(INITIAL_EDUCATION);
  const [githubRepos] = useState<GitHubRepo[]>(INITIAL_GITHUB_REPOS);
  const [testimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [certifications] = useState<CertificationItem[]>(INITIAL_CERTIFICATIONS);
  const [blogs] = useState<TechnicalArticle[]>(INITIAL_BLOGS);

  // Contact Messages
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('mohsin_portfolio_messages');
      if (saved) return JSON.parse(saved);
      // Sample initial message from recruiter
      return [
        {
          id: 'msg-sample-1',
          name: 'Sarah Jenkins',
          email: 'sjenkins@techrecruiters.global',
          subject: 'Junior Laravel Developer Position (Hybrid / Remote)',
          roleInterest: 'Full-time Laravel Developer',
          message:
            'Hi Mohsin, we were impressed by your Office Management System and clean database design. We have an opening for a Junior Backend Developer on our Laravel team. Would you be open for a short introductory call this week?',
          createdAt: new Date(Date.now() - 86400000 * 2).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          isRead: false,
        },
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('mohsin_portfolio_messages', JSON.stringify(contactMessages));
  }, [contactMessages]);

  const submitContactMessage = (msg: {
    name: string;
    email: string;
    subject: string;
    message: string;
    roleInterest?: string;
  }) => {
    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: msg.name,
      email: msg.email,
      subject: msg.subject,
      roleInterest: msg.roleInterest || 'General Inquiry',
      message: msg.message,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      isRead: false,
    };
    setContactMessages((prev) => [newMsg, ...prev]);
    addToast('Message sent successfully! Mohsin will reply shortly.', 'success');
    return true;
  };

  const markMessageRead = (id: string) => {
    setContactMessages((prev) => prev.map((m) => (m.id === id ? { ...m, isRead: true } : m)));
  };

  const deleteMessage = (id: string) => {
    setContactMessages((prev) => prev.filter((m) => m.id !== id));
    addToast('Message deleted', 'info');
  };

  // Modals & Active items
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const resetAllToDefault = () => {
    setProfile(INITIAL_PROFILE);
    setProjects(INITIAL_PROJECTS);
    setSkillCategories(INITIAL_SKILL_CATEGORIES);
    setExperiences(INITIAL_EXPERIENCES);
    localStorage.removeItem('mohsin_portfolio_profile');
    localStorage.removeItem('mohsin_portfolio_projects');
    localStorage.removeItem('mohsin_portfolio_skills');
    localStorage.removeItem('mohsin_portfolio_experiences');
    localStorage.removeItem('mohsin_portfolio_messages');
    addToast('Portfolio data restored to verified default state', 'success');
  };

  return (
    <PortfolioContext.Provider
      value={{
        theme,
        toggleTheme,
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
        education,
        githubRepos,
        testimonials,
        certifications,
        blogs,
        contactMessages,
        submitContactMessage,
        markMessageRead,
        deleteMessage,
        activeProjectModal,
        setActiveProjectModal,
        isAdminModalOpen,
        setIsAdminModalOpen,
        isResumeModalOpen,
        setIsResumeModalOpen,
        toasts,
        addToast,
        resetAllToDefault,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
