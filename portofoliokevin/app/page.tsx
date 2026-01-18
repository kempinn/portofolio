import Header from "./header";
import Home from "./home";
import About from "./about";
import Showcase from "./showcase/page";
import ContactForm from "./contactform";
import Footer from "./footer";

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* HEADER & CONTENT */}
      <Header />
      <Home />
      <About />
      <Showcase />
      <ContactForm />
      <Footer />
    </div>
  );
}



