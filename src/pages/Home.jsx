import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import NavbarES from "../components/NavbarEs.jsx";
// import HeroSection from "../components/HeroSection.jsx";
// import HeroSectionES from "../components/HeroSectionEs.jsx";
// import ServicesSection from "../components/ServicesSection.jsx";
// import PortfolioSection from "../components/PortfolioSection.jsx";
// import AboutSection from "../components/AboutSection.jsx";
// import TestimonialsSection from "../components/TestimonialsSection.jsx";
// import ConnectSection from "../components/ConnectSection.jsx";
// import CTASection from "../components/CTASection.jsx";
// import ContactSection from "../components/ContactSection.jsx";
// import Footer from "../components/Footer";

export default function Home() {

  const[language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    if(browserLanguage.includes('es')) {
      setLanguage('es');
    }
  }, []);



  return (
    <div className="min-h-screen flex flex-col">
      {language === 'es' ? (
        <NavbarES />
      ) : (
        <Navbar />
      )}
      
      
      <main>
        {language === 'es' ? (
          <>
            {/* <HeroSectionES />
            <ServicesSection title="Servicios" />
            <PortfolioSection title="Portafolio" />
            <AboutSection title="Acerca de" />
            <TestimonialsSection title="Testimonios" />
            <ConnectSection title="Conéctate" />
            <CTASection title="Llamada a la acción" />
            <ContactSection title="Contacto" /> */}
          </>
        ) : (
          <>
            {/* <HeroSection title="Welcome" />
            <ServicesSection title="Services" />
            <PortfolioSection title="Portfolio" />
            <AboutSection title="About" />
            <TestimonialsSection title="Testimonials" />
            <ConnectSection title="Connect" />
            <CTASection title="Call to Action" />
            <ContactSection title="Contact" /> */}
          </>
        )}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
