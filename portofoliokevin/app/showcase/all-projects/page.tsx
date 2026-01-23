'use client';
import { dataProjects } from "../dataprojects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, easeOut } from "framer-motion"; 
import Header from "@/app/header";
import Footer from "@/app/footer";

export default function AllProjects() {
  const projects = dataProjects();

  // --- KONFIGURASI ANIMASI ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 // Elemen muncul satu per satu
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: easeOut 
      } 
    }
  };

  return (
    <>
      <Header />
    <main className="font-sans min-h-screen bg-white py-12 md:py-16 px-4 sm:px-8 md:px-12">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        
        {/* Tombol Kembali dengan Animasi */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <Link 
                href="/?tab=projects#projects"
                className="group inline-flex items-center gap-2 text-gray-500 hover:text-sky-500 transition-colors font-medium text-sm md:text-base"
            >
                <div className="p-1.5 rounded-full bg-gray-100 group-hover:bg-sky-100 transition-colors">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                </div>
                <span>Back to Showcase</span>
            </Link>
        </motion.div>

        {/* Header Halaman dengan Animasi */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-400 mb-4">All Projects</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                A comprehensive list of all technical projects and professional work I have completed.
            </p>
        </motion.div>

        {/* GRID SYSTEM dengan Animasi Stagger */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="flex">
              <Link href={`/showcase/${project.slug}?from=all`} className="w-full">
                <div className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-xl transition-all duration-300 h-full flex flex-col group border border-gray-100">
                  
                  {/* Bagian Gambar */}
                  <div 
                    className="relative h-44 md:h-48 overflow-hidden shrink-0" 
                    style={{
                      backgroundImage: `url(${project.background})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                        <span className="text-white text-sm font-semibold translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-5 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                            View Details 
                        </span>
                    </div>
                  </div>

                  {/* Konten Kartu */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-500 group-hover:text-sky-600 transition-colors truncate">
                        {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                    
                    {/* Software Tags */}
                    <div className="flex gap-2 flex-wrap mt-auto pt-3 border-t border-gray-50">
                      {project.software.map((software, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-0.5 bg-gray-100 text-[10px] md:text-xs font-medium text-gray-500 rounded-md border border-gray-100"
                        >
                            {software}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
        <div className="bg-gray-100">
            <Footer />
        </div>
    </>
  );
}