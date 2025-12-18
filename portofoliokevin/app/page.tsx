import Header from "./header";
import Home from "./home";
import About from "./about";
import Showcase from "./showcase/page";
import ContactForm from "./contactform";

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* HEADER & CONTENT */}
      <Header />
      <Home />
      <About />
      <Showcase />
      <ContactForm />

      {/* WAVE PALING BAWAH */}
      <div className="relative w-full mt-auto">
        <svg
          className="block w-full h-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#8bd1ff"
            d="M0,160L48,150C96,140,192,120,288,130C384,140,480,180,576,190C672,200,768,160,864,140C960,120,1056,110,1152,130C1248,150,1344,200,1392,230L1440,260L1440,320L0,320Z"
          />
        </svg>
      </div>

    </div>
  );
}



