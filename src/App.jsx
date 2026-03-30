import { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhysiciansPage from './pages/PhysiciansPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import ClinicalStudiesPage from './pages/ClinicalStudiesPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)", minHeight: "80vh" }}>
      {children}
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showFcta, setShowFcta] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPageLoaded(true), 100);
    
    const handleScroll = () => {
      // Trigger interaction when scrolling past the majority of the hero section
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowFcta(true);
      } else {
        setShowFcta(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className={`splash ${pageLoaded ? "h" : ""}`}>
        <div style={{ textAlign: "center" }}>
          <img src="/neurocenlanewlogo.png" alt="Neuro Medical Clinic of Cenla" style={{ height: 110, objectFit: "contain", margin: "0 auto 24px" }} />
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, color: "var(--cream)", letterSpacing: 1 }}>Neuro Medical Clinic of Cenla</div>
          <div className="sbar" style={{ bottom: "35%" }}><div className="sbar-f" /></div>
        </div>
      </div>

      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <a href="tel:3184430490" className="fcta" style={{ opacity: showFcta ? 1 : 0, pointerEvents: showFcta ? "auto" : "none", transition: "all 0.4s ease" }}>
        <PhoneCall size={18} /> Request Care
      </a>

      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/physicians" element={<PhysiciansPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/clinical-studies" element={<ClinicalStudiesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </PageTransition>

      <Footer />
    </>
  );
}

export default App;
