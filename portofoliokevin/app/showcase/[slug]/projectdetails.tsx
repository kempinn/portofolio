'use client'; // Tambahkan use client karena menggunakan Framer Motion
import { dataProjects } from "@/app/showcase/dataprojects";
import { notFound } from "next/navigation";
import { Wrench, FileText, Notebook, CircleDot, Star, Circle, ArrowLeft } from "lucide-react"
import GetImages from "./getImages";
import Link from "next/link";
import { motion,easeOut,easeInOut} from "framer-motion"; // Import Framer Motion
import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";

interface Props {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ from?: string }>
}

export default function ProjectDetails({ params, searchParams }: any) {
    // Unwrapping params menggunakan React.use() karena ini Client Component sekarang
    const { slug } = React.use(params) as { slug: string };
    const { from } = React.use(searchParams) as { from?: string };
    
    const projects = dataProjects().find(item => item.slug === slug);
    
    if (!projects) return notFound();

    let backLink = "/showcase/all-projects";
    let backText = "Back to All Projects";

    if (from === "all") {
        backLink = "/showcase/all-projects";
        backText = "Back to All Projects";
    } else if (from === "home") {
        backLink = "/?tab=projects#projects";
        backText = "Back to Showcase";
    }

    // --- KONFIGURASI ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: easeOut } 
        }
    };

    // Animasi khusus gambar (Hanya Fade In)
    const fadeOnlyVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { duration: 0.1, ease: easeInOut } 
        }
    };

    return (
        <>
        <Header />
        <motion.div 
            className="font-sans bg-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header */}
            <motion.div variants={itemVariants} className="max-w-7xl mx-auto px-6 md:px-14 pt-16 font-sans">
                <Link
                    href={backLink}
                    className="group inline-flex items-center gap-2 text-gray-500 hover:text-sky-500 transition-colors font-medium"
                >
                    <div className="p-1 rounded-full bg-gray-100 group-hover:bg-sky-100 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span>{backText}</span>
                </Link>
            </motion.div>

            {/* Section Main Content */}
            <section className="max-w-7xl mx-auto px-6 -mt-10 md:px-14 py-16 md:py-30">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-30">
                    
                    {/* Kolom Kiri - Text & Details */}
                    <div className="order-2 lg:order-1">
                        <motion.div variants={itemVariants}>
                            <h1 className="text-slate-400 text-3xl md:text-4xl font-bold mb-6 py-2">{projects.title}</h1>
                            
                            <div className="space-y-4">
                                {Array.isArray(projects.description2) ? (
                                    projects.description2.map((paragraph, index) => (
                                        <p key={index} className="text-gray-500 text-lg leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-lg leading-relaxed">
                                        {projects.description2}
                                    </p>
                                )}
                            </div>
                        </motion.div>

                        {/* Card stats */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start gap-4 mt-10">
                            <div className="flex flex-1 w-full items-center h-20 gap-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
                                <div className="flex h-12 w-12 items-center ml-5 justify-center rounded-xl bg-blue-50 text-blue-500">
                                    <Wrench className="flex items-center h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900">{projects.tools}</h3>
                                    <p className="text-sm text-gray-500">Tools</p>
                                </div>
                            </div>
                            <div className="flex flex-1 w-full items-center h-20 gap-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
                                <div className="flex h-12 w-12 items-center ml-5 justify-center rounded-xl bg-blue-50 text-blue-500">
                                    <FileText className="flex items-center h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900">{projects.documentation}</h3>
                                    <p className="text-sm text-gray-500">Documentations</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <a
                                href={projects.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full sm:w-auto"
                            >
                                <button className="group flex w-full sm:w-auto items-center justify-center bg-sky-500 mt-4 text-white px-5 py-2 rounded-2xl hover:bg-sky-600 transition duration-300">
                                    <Notebook className="h-5 w-5 mr-2 text-white group-hover:text-white" />
                                    <p className="text-white group-hover:text-white cursor-pointer">Documentation</p>
                                </button>
                            </a>
                        </motion.div>

                        {/* Used Tools */}
                        <motion.div variants={itemVariants} className="flex flex-row gap-5 mt-10">
                            <Wrench className="h-6 w-6 text-blue-300" />
                            <p className="text-medium font-semibold text-gray-500">Used Tools</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-3">
                            {projects.toolsused?.map((toolused, index) => (
                                <div key={index} className="group inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 hover:bg-blue-100 transition duration-300">
                                    <Wrench className="h-3 w-3 text-sky-500" />
                                    <p className="text-sm font-regular text-sky-500">{toolused}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Build Process */}
                        <motion.div variants={itemVariants} className="flex flex-row gap-5 mt-10">
                            <CircleDot className="h-5 w-5 text-blue-300 " />
                            <p className="font-sans text-medium font-semibold text-gray-500">Build Process</p>
                        </motion.div>
                        
                        <div className="flex flex-col gap-6 mt-4">
                            {projects.process?.map((process, index) => (
                                <motion.div key={index} variants={itemVariants} className="flex gap-6">
                                    <div className="flex flex-col items-center shrink-0">
                                        <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10 mt-1.5" />
                                        {index !== projects.process.length - 1 && (
                                            <div className="w-px flex-1 bg-blue-200" />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-600">{process.title}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{process.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Kolom Kanan - Gambar & Features */}
                    <div className="order-1 lg:order-2">
                        {/* ANIMASI FADE-IN SAJA UNTUK GAMBAR */}
                        <motion.div variants={fadeOnlyVariants}>
                            {projects.images && <GetImages images={projects.images} />}
                        </motion.div>

                        {/* Features Card - Tetap slide up agar sinkron dengan kolom kiri */}
                        <motion.div 
                            variants={itemVariants}
                            className="w-full h-auto mt-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)]"
                        >
                            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-gray-500">
                                <Star className="text-blue-500 w-6 h-6" /> Designed Features
                            </h3>
                            {projects.features?.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 mb-4">
                                    <div className="mt-1 shrink-0">
                                        <Circle className="h-3 w-3 fill-blue-500 text-blue-500" />
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base">{feature}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
        <div className="bg-gray-100">
            <Footer />
        </div>
        </>
    )
}