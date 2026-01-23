'use client';
import { GetMeScroll, HomeScroll, ShowcaseScroll, AboutmeScroll } from "./iteractive";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="font-sans">
      {/* Container utama dengan Framer Motion */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 flex justify-between items-center px-6 md:px-10 py-4"
      >
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-sans font-semibold text-sky-400 shrink-0">
          Portfolio
        </h1>

        {/* Navigation */}
        <nav className="ml-4 overflow-x-auto no-scrollbar">
          {/* Menggunakan staggerChildren kecil agar menu navigasi 
              muncul berurutan secara subtle 
          */}
          <motion.ul 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
            className="flex items-center gap-4 md:gap-8 flex-nowrap list-none whitespace-nowrap"
          >
            <motion.li variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
              <HomeScroll />
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
              <AboutmeScroll />
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
              <ShowcaseScroll />
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
              <GetMeScroll />
            </motion.li>
          </motion.ul>
        </nav>
      </motion.div>

      {/* Spacer agar konten di bawah tidak tertutup fixed header */}
      <div className="h-5 md:h-10"></div>
    </section>
  );
}