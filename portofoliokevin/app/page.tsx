"use client";
import Header from "./header";
import Home from "./home";
import About from "./about";
import Showcase from "./showcase/page";
import ContactForm from "./contactform";
import Footer from "./footer";


export default function PortfolioPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative">
      
      {/* 2. KONTEN HALAMAN */}
      <Header />
      <main className="relative z-10">
        <Home />
        <About />
        <Showcase />
        <ContactForm />
      </main>
      <Footer />

    </div>
  );
}