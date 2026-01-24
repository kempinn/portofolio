'use client';
import { useState, useEffect, Suspense } from "react"; // Tambah Suspense
import { 
  Layout, Palette, Database, FlaskConical, BarChart3, 
  Layers, Briefcase, Award, TableProperties, Shuffle, Code
} from 'lucide-react';
import { easeOut, motion } from "framer-motion"; 
import { dataProjects } from "../dataprojects";
import { dataCertificate } from "../dataCertificate";
import Link from "next/link";
import CardCertificate from "../certificateComponent";
import { useSearchParams } from "next/navigation";

// --- KOMPONEN KONTEN (Semua Logika & Desain Pindah Sini) ---
export function ShowcaseContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') as 'skills' | 'projects' | 'certificate' || 'skills';
  const [activeTab, setActiveTab] = useState<'skills' | 'projects' | 'certificate'>(initialTab);

  const ClickTab = "flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-6 py-2.5 bg-sky-500 text-white rounded-lg text-xs md:text-sm font-semibold shadow-sm ";
  const NoClickTab = "flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-6 py-2.5 text-gray-500 hover:text-gray-900 rounded-lg text-xs md:text-sm font-medium";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: easeOut } 
    }
  };

  return (
    <div id="projects" className="font-sans w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 overflow-hidden">
      
      {/* Header & Tabs */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex justify-center mb-10 md:mb-16">
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
        </motion.div>
      </motion.div>

      <motion.div key={activeTab} initial="hidden" animate="visible" variants={containerVariants}>
        
        {/* --- TAB SKILLS --- */}
        {activeTab === 'skills' && (
          <div className="">
            <motion.div variants={itemVariants} className="mb-10 text-center px-4">
              <h2 className="text-medium md:text-2xl font-bold text-slate-700 mb-3">Technical Expertise</h2>
              <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
                Core competencies developed through academic projects and professional training.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* CARD 1: System Design */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
                  {['Visual Paradigm', 'Draw IO', 'UML Diagram', 'Excel'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* CARD 2: UI/UX Design */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
              </motion.div>

              {/* CARD 3: Database Relational */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
                  {['PostgreSQL', 'MySQL', 'SSMS', 'Excel'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* CARD 4: Manual Software Testing */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
              </motion.div>

              {/* CARD 5: Data Visualization */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
                  {['Tableau', 'Power BI', 'DrawIO'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* CARD 6: Project Management */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
                  {['Redmine', 'Excel'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* CARD 7: Non-Relational Database */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
                  {['Neo4J', 'Cassandra'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* CARD 8: ETL Data */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
              </motion.div>

              {/* CARD 9: Programming */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}>
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
                  {['Next.js', 'JavaGUI', 'Github', 'Jasper Report', 'Report Printer', 'JSX', 'TailwindCSS'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 font-medium text-gray-500 text-xs rounded-full border border-gray-100">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* --- TAB PROJECTS --- */}
        {activeTab === 'projects' && (
          <div className="">
            <motion.div variants={itemVariants} className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-600 mb-3">Portfolio Projects</h2>
              <p className="text-gray-500">Core competencies developed through academic projects and internship experience</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataProjects().filter((_, index) => [2, 3, 4].includes(index)).map((project, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <Link href={`/showcase/${project.slug}?from=home`}>
                    <div className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition h-full flex flex-col w-full group">
                      <div className="relative aspect-video overflow-hidden border-b border-gray-100">
                        <img src={project.background} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={project.title} />
                        <motion.div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                          <span className="text-white text-sm font-semibold">View Details</span>
                        </motion.div>
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
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <motion.div whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }} className="inline-block">
                <Link href="/showcase/all-projects" className="inline-block px-8 py-3 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 shadow-md active:scale-95">
                  See All Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* --- TAB CERTIFICATE --- */}
        {activeTab === 'certificate' && (
          <div className="">
            <motion.div variants={itemVariants} className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-600 mb-3">Professional Certifications</h2>
              <p className="text-gray-500">Industry-recognized certifications validating my technical skills</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
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
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <CardCertificate />
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
