import { Mail, Linkedin, Github } from "lucide-react";
import { ViewMyWorkScroll } from "./iteractive";
import { ContactMeScroll } from "./iteractive";

export default function Home() {
    return (
        <div id="Home" className="font-sans relative flex flex-col justify-center items-center py-20 md:py-32 px-6 space-y-8 min-h-screen w-full overflow-hidden">
            
            {/* Sub-heading: Responsif dari text-lg ke text-2xl */}
            <h2 className="text-lg md:text-2xl text-center text-sky-500 font-semibold tracking-wide">
                Welcome to My Portfolio
            </h2>

            {/* Main Title: 
                - text-4xl di HP (agar tidak overflow)
                - text-6xl di Tablet
                - text-8xl di Laptop 
            */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl text-center leading-tight flex flex-col gap-2">
                <span className="text-slate-300 font-bold">
                    Business Analyst
                </span>
                <span className="text-sky-300 font-bold">
                    and Data Analyst
                </span>
            </h1>

            {/* Description: 
                - max-w-2xl agar teks tidak terlalu lebar di monitor besar
                - text-base di HP, text-xl di Laptop 
            */}
            <div className="max-w-2xl text-center space-y-1 py-6 md:py-10">
                <p className="text-base md:text-xl font-medium text-gray-400 leading-relaxed">
                    Driving business growth through strategic analysis, 
                    <span className="md:block"> data-driven insights, and process optimization.</span>
                </p>
            </div>
            
            {/* Buttons: flex-col di HP agar tidak sempit, md:flex-row di Laptop */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <ViewMyWorkScroll />
                <ContactMeScroll />
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center justify-center mt-8 gap-6 text-gray-500">
                <a href="mailto:akunbuatskola@gmail.com" aria-label="Email" className="hover:text-sky-500 transition-all duration-300 hover:scale-110">
                    <Mail size={30} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/portokevin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-sky-500 transition-all duration-300 hover:scale-110"
                >
                    <Linkedin size={30} />
                </a>
                <a 
                    href="https://github.com/kempinn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-sky-500 transition-all duration-300 hover:scale-110"
                >
                    <Github size={30} />
                </a>
            </div>
            {/* Scroll Down Indicator */}
            <div className="flex justify-center mt-12">
                <div className="w-6 h-10 border-2 border-sky-300 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-sky-500 rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
}