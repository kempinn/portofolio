"use client"; // Tambahkan ini jika menggunakan Next.js App Router

import { Users, Award, Download,BarChart3,Gauge, TrendingUp } from "lucide-react";
import { motion, easeOut,backOut } from "framer-motion";


export default function About() {
  //Animasi untuk teks naik ke atas dengan efek fade in
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: easeOut} 
    }
  };

  // 2. Konfigurasi Animasi untuk Foto (Muncul perlahan/Zoom in sedikit)
  const photoAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: backOut} 
    }
  };

  return (
    <div id="About" className="font-sans min-h-screen bg-white overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center py-3 md:py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // once: true artinya animasi hanya jalan 1x
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-400">
            About Me
          </h1>
          <div className="w-20 h-1 mx-auto rounded-full bg-blue-300 mt-4 md:mt-6" />
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 md:px-12 lg:px-24 xl:px-40 pb-20">
        
        {/* Kolom Gambar */}
        <div className="flex justify-center order-first lg:order-last">
          <motion.div 
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={photoAnim} // Animasi Foto diterapkan di sini
          >
            {/* Dekorasi Bingkai */}
            <div className="absolute -top-8 -left-6 -right-6 -bottom-4 border-2 border-sky-200 rounded-2xl -rotate-15 group-hover:rotate-0 transition-transform duration-300 hidden md:block"></div>
            
            <img 
              src="/images/fotokevin.jpg" 
              alt="Kevin Photo" 
              className="relative z-10 w-full max-w-[320px] md:max-w-[400px] h-[400px] md:h-[500px] rounded-2xl object-cover shadow-xl transition-all duration-300 group-hover:-translate-y-2"
            />
          </motion.div>
        </div>

        {/* Kolom Teks & Stats */}
        {/* Kita gunakan staggerChildren agar elemen anak muncul berurutan */}
        <motion.div 
          className="space-y-6 md:space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }} // Jeda 0.2 detik antar elemen
        >
          <motion.div variants={fadeInUp} className="space-y-4 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl text-gray-400 font-bold leading-tight">
              Driven by Data, <span className="text-sky-300">Empowered by Strategy</span>
            </h2>
            <div className="space-y-4 text-sm md:text-base text-gray-500 leading-relaxed text-justify lg:text-left">
              <p>
                Hi All, My Name is Christopher Kevin Gunawan, a passionate and experienced Information Technology Business Analyst and System Analyst. 
                With a strong background in analyzing complex data, business processes and designing efficient systems, I specialize in bridging the gap between technology and business needs.
              </p>
              <p>
                I offer organizations data-driven insights that inform smarter decisions, 
                combined with systems optimization to improve efficiency and performance. 
              </p>
              <p>
                By bridging technology with business strategy, I help companies streamline 
                operations, identify growth opportunities, and create sustainable solutions 
                that drive real results.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            variants={fadeInUp} 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >
            {/* Card 1 */}
          <div className="group p-4 md:p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">

             <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 mt-6 flex items-center justify-center rounded-xl border border-sky-200 bg-sky-50 transition-colors group-hover:bg-sky-100">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-sky-500" />
            </div>

            <div>
                <h3 className="min-h-[48px] flex items-center justify-center text-base font-semibold text-sky-800 leading-tight">
                  Data Insights
                </h3>

                <p className="-mt-2 text-xs text-slate-500">
                  Analytics & Trends
                 </p>
             </div>

          </div>

        {/* Card 2 */}
        <div className="group p-4 md:p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">

          <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 mt-6 flex items-center justify-center rounded-xl border border-amber-200 bg-amber-50 transition-colors group-hover:bg-amber-100">
            <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
          </div>

          <div>
              <h3 className="min-h-[48px] flex items-center justify-center text-base font-semibold text-amber-800 leading-tight whitespace-nowrap">
                System Optimization
              </h3>

              <p className="-mt-2 text-xs text-slate-500">
                Performance and Efficiency
               </p>
            </div>

        </div>

        {/* Card 3 */}
          <div className="group p-4 md:p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">

            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 mt-6 flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 transition-colors group-hover:bg-emerald-100">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
            </div>

             <div>
                <h3 className="min-h-[48px] flex items-center justify-center text-base font-semibold text-emerald-800 leading-tight">
                   Business Impact
                </h3>

                <p className="-mt-2 text-xs text-slate-500">
                  Value Delivered
                 </p>
             </div>

          </div>
          </motion.div>

          {/* Download Button */}
          <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start pt-4">
            <a 
              href="/CV_ChristopherKevin.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center bg-sky-500 text-white px-8 py-3 gap-3 rounded-full hover:bg-sky-600 transition duration-300 shadow-lg shadow-sky-200"
            >
              <span className="font-semibold">Download my CV</span>
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}