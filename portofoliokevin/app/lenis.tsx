"use client";
import { ReactLenis } from "lenis/react";

// Pastikan tipe data children didefinisikan
export default function Scrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (x: number) => 1 - Math.pow(1 - x, 4),
      }}
    >
      {children}
    </ReactLenis>
  );
  
}