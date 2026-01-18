"use client";
import { use, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight,Star,X} from "lucide-react";
import { motion, AnimatePresence, scale } from "framer-motion";

interface Images {
  images: string[];
}

export default function GetImages({ images }: Images) {
const [active, setActive] = useState(0);
const [direction, setDirection] = useState(0);
const [isHovered, setIsHovered] = useState(false);
const [showModal, setShowModal] = useState(false);

  // Auto Play
  useEffect(() => {
    // Jika sedang di-hover, jangan jalankan timer (Pause)
    if (isHovered||showModal) return;

    const autoPlay = setInterval(() => {
      // Panggil logika Next secara otomatis
      setDirection(1);
      setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 15000); // Ganti 5000 dengan durasi yang kamu mau (ms)

    // Bersihkan timer saat komponen berubah (Clean up)
    return () => clearInterval(autoPlay)
  }, [isHovered, showModal, images.length]); // Timer direset jika status hover berubah
  
  function prev() {
    setActive((prev) => prev === 0 ? images.length - 1 : prev - 1
    );
  }

  const next = () => {
    setActive((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlerImages = (index: number)=>{
    setDirection(index > active ? 1 : -1);
    setActive(index);

  }
  const variants={
    enter: (direction: number) => ({
     x: direction > 0 ? "100%" : "-100%", // Gunakan % biar responsif
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%", // Gunakan % biar responsif
      zIndex: 0,
      opacity: 0,
      scale: 0.95,
    }),
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="font-sans w-full h-auto relative">
      <div className="w-full relative group aspect-video overflow-hidden rounded-2xl bg-gray-100">
        <button
          onClick={prev}
          className="absolute left-5 top-4/7 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="text-black cursor-pointer"/>
        </button>
      
        <button 
          onClick={next}
          className="absolute right-5 top-4/7 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition opacity-0 group-hover:opacity-100">
          <ChevronRight className="text-black cursor-pointer" />
        </button>

        <button 
        onClick={() => setShowModal(true)}
        className="cursor-pointer absolute top-4/7 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-white text-gray-500 px-5 py-1 rounded-full font-medium shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform">
          Click to Preview
        </button>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
          className="w-full h-full rounded-2xl object-contain"
            key={active}
            src={images[active]}
            alt="Project Preview"
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
          />
        </AnimatePresence>
      

      </div>
      
      {/* Printilan gambar bawah*/}
        {images.length > 1 && (
          <div className="grid grid-cols-3 gap-5">
            {images.map((img, index) => (
              <button 
              key={index}
              onClick={() => handlerImages(index)}
              className={`bg-gray-100 relative mt-5 rounded-xl overflow-hidden aspect-video cursor-pointer transition-all ${index===active ? "ring-2 ring-blue-500 ring-offset-2 opacity-100 scale-105" : "opacity-60 hover:opacity-100 hover:scale-105" }`}>
                <img 
                src={img}
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-contain"/>
                
              </button>
            ))}
          </div>
        )}  
        <AnimatePresence>
        
        {showModal && (
          // BACKDROP: Layar Hitam Fullscreen (fixed inset-0 z-50)
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setShowModal(false)} // Klik luar untuk close
          >
            {/* KONTEN MODAL */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Supaya klik gambar tidak close modal
              >
              
              {/* Tombol Close (X) */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-12 right-0 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition"
              >
                <X size={24} />
              </button>

              {/* Gambar Besar */}
              <img 
                src={images[active]} 
                alt="Fullscreen Preview" 
                className="w-full h-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    
    </div>
  );
}
