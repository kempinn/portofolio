'use client';
import { useState, useEffect } from "react";
import { 
  Layout, Palette, Database, FlaskConical, BarChart3, 
  Layers, Briefcase, Award, TableProperties, Shuffle, Code
} from 'lucide-react';
import { dataProjects } from "../dataprojects";
import { dataCertificate } from "../dataCertificate";
import Link from "next/link";
import CardCertificate from "../certificateComponent";
import { useSearchParams } from "next/navigation";

export default function ShowcaseMenu() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') as 'skills' | 'projects' | 'certificate' || 'skills';
  const [activeTab, setActiveTab] = useState<'skills' | 'projects' | 'certificate'>(initialTab);

  // Perbaikan Tab: flex-1 agar rata di HP, text-xs agar tidak meluap
  const ClickTab = "flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-6 py-2.5 bg-sky-500 text-white rounded-lg text-xs md:text-sm font-semibold shadow-sm transition-all";
  const NoClickTab = "flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-6 py-2.5 text-gray-500 hover:text-gray-900 rounded-lg text-xs md:text-sm font-medium transition-all";

  const certificates = dataCertificate();
  const totalCertificate = certificates.length;
  const totalPlatform = new Set(certificates.map(item => item.issued)).size;
  const totalSkills = new Set(certificates.flatMap(item => item.skills_act)).size;

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'projects' || tab === 'skills' || tab === 'certificate') {
      setActiveTab(tab as any);
    }
  }, [searchParams]);

  return (
    <>
      <div id="projects"className="font-sans w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="bg-gray-50 p-1 rounded-xl flex w-full max-w-md md:w-auto shadow-sm border border-gray-100">
            <button onClick={() => setActiveTab('skills')} className={activeTab === 'skills' ? ClickTab : NoClickTab}>
              <Layers size={16} className="shrink-0" />
              <span>Skills</span>
            </button>
            <button onClick={() => setActiveTab('projects')} className={activeTab === 'projects' ? ClickTab : NoClickTab}>
              <Briefcase size={16} className="shrink-0" />
              <span>Projects</span>
            </button>
            <button onClick={() => setActiveTab('certificate')} className={activeTab === 'certificate' ? ClickTab : NoClickTab}>
              <Award size={16} className="shrink-0" />
              <span className="truncate">Certificates</span>
            </button>
          </div>
        </div>

        {/* --- TAB SKILLS --- */}
        {activeTab === 'skills' && (
          <div className="animate-in fade-in duration-500">
            <div className="mb-10 text-center px-4">
              <h2 className="text-medium md:text-2xl font-bold text-slate-700 mb-3">Technical Expertise</h2>
              <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
                Core competencies developed through academic projects and professional training.
              </p>
            </div>

            {/* Grid Responsive: 1 kol (HP), 2 kol (Tablet), 3 kol (Laptop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              
              {/* CARD 1: System Design */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-blue-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">System Design</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Analyzing user challenges and translating them into efficient system designs through UML modeling and documentation.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-blue-500">90%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-blue-500" style={{ width: '90%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Visual Paradigm</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Draw IO</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">UML Diagram</span>
                   <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Excel</span>
                </div>
              </div>

              {/* CARD 2: UI/UX Design */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-pink-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">UI/UX Design</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Creating intuitive and visually appealing user experiences.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-pink-500">90%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-pink-500" style={{ width: '90%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Figma</span>
                </div>
              </div>

              {/* CARD 3: Database Relational */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-emerald-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Relational Database</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Writing and optimizing SQL queries for database creation and analysis using DDL and DML.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-emerald-500">80%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-emerald-500" style={{ width: '80%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">MySQL</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">SSMS</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Excel</span>
                </div>
              </div>

              {/* CARD 4: Manual Software Testing */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6 text-orange-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Manual Software Testing</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Execute test cases and conduct UAT to ensure system accuracy and readiness.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-orange-500">80%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-orange-500" style={{ width: '80%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Excel</span>
                </div>
              </div>

              {/* CARD 5: Data Visualization */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Data Visualization</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Transforming complex data into interactive visual insights to assist decision-making.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-indigo-500">78%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-indigo-500" style={{ width: '78%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Tableau</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Power BI</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">DrawIO</span>
                </div>
              </div>

              {/* CARD 6: Project Management */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-rose-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Project Management</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Coordinating resources and tasks from execution to evaluation phases.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-rose-500">86%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-rose-500" style={{ width: '86%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Redmine</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Excel</span>
                </div>
              </div>

              {/* CARD 7: Non-Relational Database */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <TableProperties className="w-6 h-6 text-teal-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Non-Relational Database</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Handling dynamic data structures and supporting business analysis with NoSQL.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-teal-500">30%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-teal-500" style={{ width: '30%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Neo4J</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Cassandra</span>
                </div>
              </div>

              {/* CARD 8: ETL Data */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                  <Shuffle className="w-6 h-6 text-cyan-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">ETL Data</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Designing workflows to clean, transform, and integrate data from multiple sources.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-cyan-500">30%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-cyan-500" style={{ width: '30%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Pentaho</span>
                </div>
              </div>

              {/* CARD 9: Programming */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-violet-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Programming</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">Experience in JavaGUI, Next.js, and other languages to develop software and perform reporting.</p>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-xs font-medium text-gray-400">Proficiency</span><span className="text-xs font-bold text-violet-500">50%</span></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full rounded-full bg-violet-500" style={{ width: '50%' }}></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Next.js</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">JavaGUI</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Github</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Jasper Report</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">Report Printer</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">JSX</span>
                  <span className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">TailwindCSS</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- TAB PROJECTS --- */}
        {activeTab === 'projects' && (
          <div className="animate-in fade-in duration-500">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-600 mb-3">Portfolio Projects</h2>
              <p className="text-gray-500">Core competencies developed through academic projects and internship experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataProjects().filter((_, index) => [2,3,4].includes(index)).map((project, index) => (
                <div key={index} className="h-full">
                  <Link href={`/showcase/${project.slug}?from=home`}>
                    <div className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition h-full flex flex-col w-full group">
                      <div className="relative aspect-video overflow-hidden border-b border-gray-100">
                        <img src={project.background} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="text-white text-sm font-semibold">View Details</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-2 text-gray-500">{project.title}</h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex gap-2 flex-wrap mt-auto">
                          {project.software.map((software, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">{software}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/showcase/all-projects" className="inline-block px-8 py-3 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-all shadow-md active:scale-95">
                See All Projects
              </Link>
            </div>
          </div>
        )}

        {/* --- TAB CERTIFICATE --- */}
        {activeTab === 'certificate' && (
          <div className="animate-in fade-in duration-500">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-600 mb-3">Professional Certifications</h2>
              <p className="text-gray-500">Industry-recognized certifications validating my technical skills</p>
            </div>
            {/* Stats Grid: Menumpuk di HP (1 kol), Jajar di Laptop (3 kol) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-sky-500">{totalCertificate}</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Certificates</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-sky-500">{totalPlatform}</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Platforms</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-sky-500">{totalSkills}+</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Skills Verified</p>
              </div>
            </div>
            <CardCertificate />
          </div>
        )}
      </div>
    </>
  );
}