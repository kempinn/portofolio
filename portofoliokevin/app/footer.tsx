'use client';
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { HomeScroll, AboutmeScroll, ShowcaseScroll } from './iteractive';
import { motion,easeOut } from 'framer-motion';

export default function Footer() {
    // --- KONFIGURASI ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                ease: easeOut
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="w-full py-12 px-6 mt-20 md:px-20 border-t border-gray-100 font-sans">
            <motion.div 
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {/* Header / Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-left">
                    
                    {/* Kolom 1: Portofolio */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 items-start">
                        <h2 className="text-xl font-bold text-sky-500">Portfolio</h2>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            Driving business growth through strategic analysis, data-driven insights, and process optimization.
                        </p>
                    </motion.div>

                    {/* Kolom 2: Quick Links */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 items-start">
                        <h3 className="text-gray-500 font-bold">Quick Links</h3>
                        <div className="flex flex-col items-start gap-2">
                            <HomeScroll />
                            <ShowcaseScroll />
                            <AboutmeScroll />
                        </div>
                    </motion.div>

                    {/* Kolom 3: Connect with Me */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 items-start">
                        <h3 className="text-gray-500 font-bold">Connect</h3>
                        <div className="flex gap-4">
                            <a href="mailto:akunbuatskola@gmail.com" className="p-2 bg-gray-100 rounded-full hover:bg-sky-100 text-gray-500 hover:text-sky-500 transition-all hover:-translate-y-1">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/portokevin/" className="p-2 bg-gray-100 rounded-full hover:bg-sky-100 text-gray-500 hover:text-sky-500 transition-all hover:-translate-y-1">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/kempinn/" className="p-2 bg-gray-100 rounded-full hover:bg-sky-100 text-gray-500 hover:text-sky-500 transition-all hover:-translate-y-1">
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Reserve Rights */}
                <motion.div 
                    variants={itemVariants}
                    className="border-t border-gray-100 pt-8 flex flex-col items-center justify-center text-gray-500 text-sm"
                >
                    <p className="flex items-center gap-1">
                        Made with <Heart size={16} className="text-sky-500 fill-sky-500 animate-pulse" /> © 2026 Kevin Portfolio. All rights reserved.
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
}