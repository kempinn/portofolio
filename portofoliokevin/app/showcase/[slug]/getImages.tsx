"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Images {
  images: string[];
}

export default function GetImages({ images }: Images) {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full h-auto relative group">
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="text-black"/>
      </button>
      
      <button 
      onClick={next}
      className="absolute right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition opacity-0 group-hover:opacity-100">
        <ChevronRight className="text-black" />
      </button>

      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-white text-gray-500 px-5 py-1 rounded-full font-medium shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform">
        Click to Preview
      </button>
        
      <img
        src={images[active]}
        alt="Project Preview"
        className="w-full h-auto rounded-2xl object-cover"
      />

      
    </div>
  );
}
