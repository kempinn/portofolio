"use client";
import { useState, useEffect } from "react"; // Tambahkan ini
import Ballpit from "../components/Ballpit";
import { Mail, Linkedin, Github } from "lucide-react";
import { ViewMyWorkScroll } from "./iteractive";
import { ContactMeScroll } from "./iteractive";

export default function Home() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Bola akan menghilang total saat scroll mencapai 500px
            // Kamu bisa ganti angka 500 sesuai selera
            const newOpacity = Math.max(0, 1 - scrollY / 1000);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="Home" className="font-sans relative flex flex-col justify-center items-center py-20 md:py-32 px-6 min-h-screen w-full overflow-hidden">
            
            {/* 1. LAYER BACKGROUND dengan Transisi Opacity */}
            <div 
                className="absolute inset-0 z-0 transition-opacity duration-300 ease-out"
                style={{ opacity: opacity }} // Opacity berubah otomatis saat scroll
            >
                <Ballpit
                    count={50}
                    gravity={0.01}
                    friction={0.9975}
                    wallBounce={0.95}
                    followCursor={false}
                    colors={["#5227FF", "#7cff67", "#ff6b6b"]}
                />
            </div>

            {/* 2. LAYER KONTEN */}
            <div className="relative z-10 flex flex-col items-center text-center w-full space-y-8 pointer-events-none">
                <h2 className="text-lg md:text-2xl text-sky-500 font-semibold tracking-wide">
                    Welcome to My Portfolio
                </h2>

                <h1 className="text-4xl sm:text-6xl md:text-8xl leading-tight flex flex-col gap-2">
                    <span className="text-slate-300 font-bold">Business Analyst</span>
                    <span className="text-sky-300 font-bold">and System Analyst</span>
                </h1>

                <div className="max-w-2xl py-6 md:py-10">
                    <p className="text-base md:text-xl font-medium text-gray-400 leading-relaxed">
                        Driving business growth through strategic analysis, 
                        <span className="md:block"> data-driven insights, and process optimization.</span>
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pointer-events-auto">
                    <ViewMyWorkScroll />
                    <ContactMeScroll />
                </div>
                
                <div className="flex items-center justify-center mt-8 gap-6 text-gray-500 pointer-events-auto">
                    <a href="mailto:akunbuatskola@gmail.com" className="hover:text-sky-500 transition-all duration-300 hover:scale-110">
                        <Mail size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/portokevin/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-all duration-300 hover:scale-110">
                        <Linkedin size={30} />
                    </a>
                    <a href="https://github.com/kempinn/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-all duration-300 hover:scale-110">
                        <Github size={30} />
                    </a>
                </div>

                <div className="flex justify-center mt-12">
                    <div className="w-6 h-10 border-2 border-sky-300 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-sky-500 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}