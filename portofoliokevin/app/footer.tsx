import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { HomeScroll, AboutmeScroll, ShowcaseScroll } from './iteractive';
import { div } from 'framer-motion/m';

export default function Footer() {
    return(
        <footer className="w-full py-12 px-6 mt-20 md:px-20 border-t border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-left">
          
          {/* Kolom 1: Portofolio */}
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-xl font-bold text-sky-500">Portfolio</h2>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Driving business growth through strategic analysis, data-driven insights, and process optimization.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="flex flex-col gap-4 items-start">
            <h3 className="text-gray-500 font-bold">Quick Links</h3>
            <div className="flex flex-col items-start gap-2">
                <HomeScroll />
                <ShowcaseScroll />
                <AboutmeScroll />
            </div>
          </div>

          {/* Kolom 3: Connect with Me */}
          <div className="flex flex-col gap-4 items-start">
            <h3 className="text-gray-500 font-bold">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-sky-100 text-gray-500 hover:text-sky-500 transition">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-sky-100 text-gray-500 hover:text-sky-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-sky-100 text-gray-500 hover:text-sky-500 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Reserve Rights */}
        <div className="border-t border-gray-100 pt-8 flex flex-col items-center justify-center text-gray-500 text-sm">
          <p className="flex items-center gap-1">
            Made with <Heart size={16} className="text-sky-500 fill-sky-500" /> © 2026 Kevin Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    )
}