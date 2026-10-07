import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project } from '../types/portfolio';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  Database,
  Terminal,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Play,
  Users,
  DollarSign,
  Clock,
  BookOpen,
  Send,
} from 'lucide-react';

interface Props {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'simulation'>('overview');
  
  // Interactive Simulation State
  const [simEmployeeDepartment, setSimEmployeeDepartment] = useState('Engineering');
  const [simAttendanceStatus, setSimAttendanceStatus] = useState('Present');
  const [simCrmStage, setSimCrmStage] = useState('Proposal Sent');
  const [simBookBorrowStatus, setSimBookBorrowStatus] = useState('Available');
  const [simApiResponseCode, setSimApiResponseCode] = useState(200);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Laravel Architecture</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center px-6 border-b border-slate-800/80 bg-slate-900/50 text-xs font-semibold text-slate-400 gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-blue-500 text-white'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            Project Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-blue-500 text-white'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            Backend & Database Architecture
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'simulation'
                ? 'border-blue-500 text-white'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            Interactive Live Simulation
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Image Preview Banner */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={project.previewImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-white font-medium bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md">
                    {project.tagline}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-base font-semibold text-white mb-2">Description</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="text-base font-semibold text-white mb-2.5">Tech Stack & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/80 text-xs text-slate-200 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comprehensive Features List */}
              <div>
                <h4 className="text-base font-semibold text-white mb-3">Key Core Modules & Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Pattern Banner */}
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-blue-200">
                <span className="font-semibold text-white">Pattern: </span>
                {project.architectureDetails?.mvcStructure || 'Laravel MVC with Eloquent ORM relationships and FormRequest validation.'}
              </div>

              {/* Relational Schema Breakdown */}
              <div>
                <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  Relational MySQL Database Tables
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {project.architectureDetails?.databaseTables.map((tbl, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      <span className="text-blue-400">table:</span> {tbl}
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet / Route Definition */}
              <div>
                <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Laravel Route Definition (routes/web.php or routes/api.php)
                </h4>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                  <code>{project.architectureDetails?.sampleRoute}</code>
                </div>
              </div>

              {/* Controller Logic Explanation */}
              <div>
                <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  Controller Business Logic & Transactional Safety
                </h4>
                <p className="text-xs text-slate-300 p-4 rounded-xl bg-slate-950 border border-slate-800 leading-relaxed">
                  {project.architectureDetails?.controllerLogic}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-white font-semibold">Live Sandbox Tester: </span>
                Experience how Mohsin engineered this application's core workflow handlers. Try changing parameters below:
              </div>

              {project.id === 'proj-1' && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <h5 className="font-semibold text-white text-sm">Simulated Office Management Workflow</h5>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Select Department:</label>
                      <select
                        value={simEmployeeDepartment}
                        onChange={(e) => setSimEmployeeDepartment(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
                      >
                        <option value="Engineering">Software Engineering</option>
                        <option value="Human Resources">Human Resources (HR)</option>
                        <option value="Finance & Accounts">Finance & Accounts</option>
                        <option value="Operations">IT Operations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Mark Attendance:</label>
                      <select
                        value={simAttendanceStatus}
                        onChange={(e) => setSimAttendanceStatus(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
                      >
                        <option value="Present">Present (Checked In: 09:00 AM)</option>
                        <option value="Late">Late Arrival (09:42 AM)</option>
                        <option value="Leave Approved">Approved Annual Leave</option>
                      </select>
                    </div>
                  </div>

                  {/* Calculated Simulated Output */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Assigned Department:</span>
                      <span className="font-semibold text-blue-400">{simEmployeeDepartment}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Calculated Duty Roster Status:</span>
                      <span className="font-semibold text-emerald-400">{simAttendanceStatus}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Payroll Deduction Factor:</span>
                      <span className="font-semibold text-white">
                        {simAttendanceStatus === 'Late' ? '0.5 Day Grace' : simAttendanceStatus === 'Present' ? '$0.00 (Standard Rate)' : 'Covered by Leave Allowance'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'proj-2' && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <h5 className="font-semibold text-white text-sm">Simulated CRM Pipeline Stage Transition</h5>
                  <div className="text-xs">
                    <label className="block text-slate-400 mb-1">Current Deal Stage:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['New Lead', 'Discovery Call', 'Proposal Sent', 'Contract Won'].map((stg) => (
                        <button
                          key={stg}
                          onClick={() => setSimCrmStage(stg)}
                          className={`p-2.5 rounded-lg border text-xs font-medium transition-all ${
                            simCrmStage === stg
                              ? 'bg-blue-600 border-blue-500 text-white'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {stg}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
                    <p className="text-slate-400">
                      <span className="text-white font-semibold">Active State: </span>
                      {simCrmStage}
                    </p>
                    <p className="text-slate-400">
                      <span className="text-blue-400 font-semibold">Automated Trigger: </span>
                      {simCrmStage === 'Contract Won'
                        ? 'Triggering Invoice generation event & notifying Account Manager.'
                        : simCrmStage === 'Proposal Sent'
                        ? 'Follow-up task scheduled for +3 days at 10:00 AM.'
                        : 'Lead scoring updated +15 points based on activity interaction.'}
                    </p>
                  </div>
                </div>
              )}

              {project.id === 'proj-3' && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <h5 className="font-semibold text-white text-sm">Simulated Circulation & Fine Calculator</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Book Status:</label>
                      <button
                        onClick={() =>
                          setSimBookBorrowStatus(
                            simBookBorrowStatus === 'Available' ? 'Issued to Patron' : 'Available'
                          )
                        }
                        className="w-full p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium"
                      >
                        Toggle: {simBookBorrowStatus}
                      </button>
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Overdue Days Simulation:</label>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white">
                        {simBookBorrowStatus === 'Available' ? '0 Days (In Shelf)' : '4 Days Overdue (Fine: Rs. 200)'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'proj-4' && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <h5 className="font-semibold text-white text-sm">Simulated Postman API Response Tester</h5>
                  <div className="flex gap-2 text-xs">
                    <button
                      onClick={() => setSimApiResponseCode(200)}
                      className={`px-3 py-1.5 rounded-lg border font-mono ${
                        simApiResponseCode === 200
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      GET /api/v1/records (200 OK)
                    </button>
                    <button
                      onClick={() => setSimApiResponseCode(401)}
                      className={`px-3 py-1.5 rounded-lg border font-mono ${
                        simApiResponseCode === 401
                          ? 'bg-rose-950 text-rose-300 border-rose-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      Auth Invalid (401 Unauthorized)
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto text-emerald-300">
                    {simApiResponseCode === 200 ? (
                      <pre>
{`{
  "status": "success",
  "code": 200,
  "data": [
    {
      "id": 104,
      "title": "Enterprise Module Record",
      "author": "Mohsin Ali",
      "created_at": "2026-03-01T12:00:00Z"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "per_page": 15
  }
}`}
                      </pre>
                    ) : (
                      <pre className="text-rose-400">
{`{
  "status": "error",
  "code": 401,
  "message": "Unauthenticated. Invalid or expired Sanctum bearer token."
}`}
                      </pre>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Engineered by <span className="text-white font-medium">Mohsin Ali</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <button
              onClick={() => {
                setActiveTab('simulation');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Run Live Simulation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
