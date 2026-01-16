'use client';
import { dataProjects } from "../dataprojects";
import Link from "next/link";
// Kita beri nama alias 'LinkIcon' agar tidak bentrok dengan 'Link' navigasi
import { ArrowLeft, Link as LinkIcon } from "lucide-react";
import { div } from "framer-motion/client";

export default function AllProjects() {
  const projects = dataProjects();

  return (
    <main className="min-h-screen bg-white font-sans py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Tombol Kembali ke Showcase Utama */}
        <Link 
            href="/?tab=projects#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 mb-10 group border border-transparent hover:border-sky-100"
        >
        <div className="p-1 rounded-full bg-gray-100 group-hover:bg-sky-100 transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        </div>
         <span className="text-sm font-semibold tracking-wide">BACK TO SHOWCASE</span>
        </Link>

        {/* Header Halaman */}
        <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-400 mb-3">All</h2>
            <p className="text-gray-500">A comprehensive list of all technical projects and professional work I have completed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD BACKGROUND */}
            {dataProjects().map((project, index) => (
              <div key={index} className="h-full">
                <Link href={`/showcase/${project.slug}?from=all`}>
                
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
      </div>
    </main>
  );
}
    
