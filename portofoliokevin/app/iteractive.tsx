"use client";
import { useLenis } from "lenis/react";
import { ArrowRight } from "lucide-react";

export function GetMeScroll() {
  const lenis = useLenis();
  const aboutme = () => {
    const aboutmediv = document.getElementById("AboutMe");
    if (!aboutmediv) return;
    if (lenis) {
      lenis.scrollTo(aboutmediv, {offset: -80, duration: 1.2});
    }
};

  return (
   <button 
      className="flex items-center justify-center bg-sky-500 text-white px-6 py-2 rounded-xl full hover:bg-sky-600 transition duration-300 cursor-pointer"
      onClick={aboutme}>
       Get Me
   </button>
  )

  // or return { scrollToAbout } if you want to export the function
}
export function HomeScroll(){
   const lenis = useLenis();
   const scrollToHome = () => {
    const homediv = document.getElementById("Home");
    if (!homediv) return;
    if (lenis) {
      lenis.scrollTo(homediv, {offset: -80, duration: 1.2});
    }
};
   return (
      <button className="text-zinc-500 hover:text-sky-500 font-medium cursor-pointer" onClick={scrollToHome} >
       Home
      </button>
   )
}
export function ShowcaseScroll(){
   const lenis = useLenis();
   const scrollToShowcase = () => {
    const showcasediv = document.getElementById("Showcase");
    if (!showcasediv) return;
    if (lenis) {
      lenis.scrollTo(showcasediv, {offset: -80, duration: 1.2});
    }
};
      return ( 
         <button className="text-zinc-500 hover:text-sky-500 font-medium cursor-pointer" onClick={scrollToShowcase} >
            Showcase
         </button>
)
}
export function AboutmeScroll(){
   const lenis = useLenis();
   const scrollToAbout = () => {
    const aboutmediv = document.getElementById("About");
    if (!aboutmediv) return;
    if (lenis) {
      lenis.scrollTo(aboutmediv, {offset: -80, duration: 1.2});
    }
};
   return (
      <button className="text-zinc-500 hover:text-sky-500 font-medium cursor-pointer" onClick={scrollToAbout}>
         About Me
      </button>
   )
}

export function ViewMyWorkScroll(){
   const lenis = useLenis();
   const ScrollingViewMyWork = () => {
    const projectsdiv = document.getElementById("Showcase");
    if (!projectsdiv) return;
    if (lenis) {
      lenis.scrollTo(projectsdiv, {offset: -80, duration: 1.2});
    }
};
   return (
      <button 
         onClick={ScrollingViewMyWork}
         className="group flex items-center justify-center bg-sky-500 text-white px-5 py-2 rounded-lg full hover:bg-sky-600 transition duration-300 cursor-pointer">
         View my Work
         <ArrowRight className="ml-3 scale-x-110 transition-transform duration-300 group-hover:translate-x-1"/>
         </button>
   )
}
export function ContactMeScroll(){
   const lenis = useLenis();
   const scrollToContact = () => {
    const contactdiv = document.getElementById("AboutMe");
    if (!contactdiv) return;
    if (lenis) {
      lenis.scrollTo(contactdiv, {offset: -80, duration: 1.2});
    }
};
   return (
      <button
         onClick={scrollToContact} 
         className="flex items-center justify-center bg-sky-300 text-white px-5 py-2 rounded-lg full hover:bg-sky-600 transition duration-300 cursor-pointer">
         Contact me
      </button>
   )
}