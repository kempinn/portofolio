'use client';
import { useState,useEffect } from "react";
import { 
  Layout, 
  Palette, 
  Database, 
  FlaskConical, 
  BarChart3, 
  Layers, 
  Briefcase, 
  Award,
  TableProperties,
  Shuffle,
  Code
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
const ClickTab = "flex items-center gap-2 px-6 py-2.5 bg-sky-500 text-white rounded-lg text-sm font-semibold shadow-sm transition-all";
const NoClickTab = "flex items-center gap-2 px-6 py-2.5 text-gray-500 hover:text-gray-900 rounded-lg text-sm font-medium transition-all";

const certificates = dataCertificate();
    //total certificate
    const totalCertificate = certificates.length
    //total platform
    const totalPlatform = new Set(certificates.map(item => item.issued)).size
    //total skills
    const totalSkills = new Set(certificates.flatMap(item=> item.skills_act)).size

useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'projects' || tab === 'skills' || tab === 'certificate') {
            setActiveTab(tab as any);
        }
    }, [searchParams]);
    return(
    <>
        <div className="flex justify-center mb-16">
            <div className="bg-gray-50 p-1.5 rounded-xl inline-flex">
                <button 
                onClick={()=>setActiveTab('skills')}
                className={`cursor-pointer ${activeTab === 'skills' ? ClickTab : NoClickTab}`}>
                 <Layers size={16} />
                 Skills
                </button>
                <button 
                onClick={()=>setActiveTab('projects')}
                className={`cursor-pointer ${activeTab === 'projects' ? ClickTab : NoClickTab}`}>
                <Briefcase size={16} />
                Projects
                </button>
                <button
                onClick={()=>setActiveTab('certificate')}
                className={`cursor-pointer ${activeTab === 'certificate' ? ClickTab : NoClickTab}`}>
                 <Award size={16} />
                Certificates
                </button>
          </div>
        </div>
        {/* TAB SKILLS */}
        {activeTab === 'skills' && (
        <>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-400 mb-3">Featured Projects</h2>
            <p className="text-gray-500">A selection of projects showcasing my passion for creating exceptional digital experiences</p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* CARD 1: System Design (Blue Theme) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Layout className="w-6 h-6 text-blue-500" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">System Design</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
              Analyzing user challenges and translating them into efficient system designs through UML modeling and comprehensive documentation.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-blue-500">90%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-blue-500" style={{ width: '90%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">Visual Paradigm</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">Draw IO</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">UML Diagram</span>
            </div>
          </div>

          {/* CARD 2: UI/UX Design (Pink Theme) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-pink-500" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">UI/UX Design</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
              Creating intuitive and visually appealing user experiences.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-pink-500">90%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-pink-500" style={{ width: '90%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">Figma</span>
            </div>
          </div>

          {/* CARD 3: Database (Green/Emerald Theme) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-emerald-500" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">Relational Database Query and Modelling</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
              Writing and optimizing SQL queries for database creation, manipulation, and analysis using DDL and DML operations.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-emerald-500">80%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-emerald-500" style={{ width: '80%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">PostgreSQL</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">MySQL</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">SSMS</span>
            </div>
          </div>

          {/* CARD 4: Testing (Orange Theme) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <FlaskConical className="w-6 h-6 text-orange-500" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">Manual Software Testing</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
              Execute Excel-based test cases and conduct User Acceptance Testing to ensure system accuracy and readiness.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-orange-500">80%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-orange-500" style={{ width: '80%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Excel</span>
            </div>
          </div>

          {/* CARD 5: Data Visualization (Indigo/Purple Theme) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-indigo-500" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">Data Visualization</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
              Transforming complex data into clear and interactive visual insights to make a decision easily.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-indigo-500">78%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-indigo-500" style={{ width: '78%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Tableau</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Power BI</span>
            </div>
          </div>

          {/* CARD 6: Project Management */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-rose-400" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">Project Management</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
              Managing and coordinating resource and projects from the planning, execution, to evaluation phases. Skilled in task management to ensure projects are completed on time and meet quality standards.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-rose-400">86%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-rose-400" style={{ width: '86%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Redmine</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Excel</span>
            </div>
          </div>

          
          {/* CARD 7: Non Relational Database*/}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
              <TableProperties className="w-6 h-6 text-teal-500" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">Non Relational Database</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
             Leveraged non-relational databases to handle dynamic data structures and support business analysis by enabling efficient data storage, retrieval, and relationship exploration.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-teal-400">30%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-teal-400" style={{ width: '30%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Pentaho</span>
            </div>
          </div>

          {/* CARD 8: Extract, Transform, Load Data*/}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
              <Shuffle className="w-6 h-6 text-cyan-500" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">Extract, Transform, Load Data</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
             Designed and executed ETL workflows to clean, transform, and integrate data from multiple sources, enabling accurate analysis and data-driven decision making.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-cyan-400">30%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-cyan-400" style={{ width: '30%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Neo4J</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Cassandra</span>
            </div>
          </div>

          {/* CARD 8: Programming*/}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-violet-500" strokeWidth={2} />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-gray-500 mb-2">Programming</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
           Experience in programming languages to develop software and desktop applications, solve complex problems, and perform reporting.
            </p>
            {/* Proficiency */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">Proficiency</span>
                <span className="text-xs font-bold text-violet-400">50%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-full rounded-full bg-violet-400" style={{ width: '50%' }}></div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">JavaGUI</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Jasper Report</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Report Printer</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">HTML</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">CSS</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Next.js</span>
               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Github</span>
            </div>
          </div>

        </div>

        </>
        )}
        {activeTab === 'projects' && (
          <>
          <div id='projects' className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-400 mb-3">Technical Expertise</h2>
            <p className="text-gray-500">Core competencies developed through academic projects and internship experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD BACKGROUND */}
            {dataProjects().slice(0, 3).map((project, index) => (
              <div key={index} className="h-full">
                <Link href={`/showcase/${project.slug}?from=home`}>
                
                <div className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition h-full flex flex-col w-full group">
                  <div className="relative h-40 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.background})`,
                      backgroundSize: '100% 100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                       <span className="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        View Details 
                        </span>
                    </div>
                  </div>
                  {/* ISI BACKGROUND */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-gray-500">{project.title}</h3>
                        <p className="text-sm text-gray-500 mb-4 ">{project.description}</p>
                          <div className="flex gap-2 flex-wrap mt-auto">
                            {project.software.map((software, idx) => (
                            <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-500 rounded-full">{software}</span>
                            ))}
                            
                          </div>
                      </div>
                </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/showcase/all-projects" 
              className="px-8 py-3 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-all shadow-md"
          >
              See All Projects
          </Link>
          </div>
          </>
          
        
      
        
        )}
        {activeTab === 'certificate' && (
        <>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-400 mb-3">Professional Certifications</h2>
            <p className="text-gray-500">Industry-recognized certifications that validate my skills and commitment to continuous learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="grid grid-row-1 text-center bg-gray-50 p-3 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-sky-500">
              {totalCertificate}
              </h3>
              <p className="text-gray-500 mt-2 text-center">Certificates</p>
            </div>
            
            <div className="grid grid-row-1 text-center bg-gray-50 p-3 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-sky-500">
              {totalPlatform}
              </h3>
              <p className="text-gray-500 mt-2">Platforms</p>
            </div>

            <div className="grid grid-row-1 text-center bg-gray-50 p-3 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-sky-500">
              {totalSkills}+
              </h3>
              <p className="text-gray-500 mt-2">Skills Verified</p>
            </div>
          </div>
          <CardCertificate/>
        </>
        )}
        <div className="flex justify-center mt-12">
          
    </div>
    </>
    )
}