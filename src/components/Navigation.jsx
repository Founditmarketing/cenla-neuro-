import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PhoneCall, MapPin, Clock, ArrowRight } from 'lucide-react';

const NavLink = ({ onClick, children, active }) => (
  <button
    onClick={onClick}
    style={{
      color: active ? "var(--gold)" : "var(--text-light)",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: "0.8px",
      textTransform: "uppercase",
      cursor: "pointer",
      border: "none",
      background: "none",
      fontFamily: "inherit",
      position: "relative",
      padding: "4px 0",
      transition: "color 0.3s"
    }}
    onMouseEnter={e => e.target.style.color = "var(--gold)"}
    onMouseLeave={e => { if (!active) e.target.style.color = "var(--text-light)"; }}
  >
    {children}
    <span
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: active ? "100%" : 0,
        height: "1.5px",
        background: "var(--gold)",
        transition: "width 0.3s"
      }}
    />
  </button>
);

const Navigation = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const route = location.pathname;
  const cp = route.startsWith("/services") ? "services"
    : route.startsWith("/physicians") ? "physicians"
    : route.startsWith("/contact") ? "contact"
    : route.startsWith("/clinical") ? "clinical"
    : route.startsWith("/new-patient-forms") ? "forms" : "home";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "10px 0" : "18px 0",
          background: scrolled || (cp !== "home" && cp !== "services") ? "rgba(10,22,40,.96)" : "transparent",
          backdropFilter: scrolled || (cp !== "home" && cp !== "services") ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184,160,100,.12)" : "none",
          transition: "all .4s cubic-bezier(.16,1,.3,1)"
        }}
      >
        <div className={`h-inner ${scrolled ? 'scrolled' : ''}`} style={{ width: "100%", padding: "0 40px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <img src="/neurocenlanewlogo.png" alt="Neuro Medical Clinic of Cenla" className={`hl ${scrolled ? 'scrolled' : ''}`} style={{ width: "auto", objectFit: "contain", transition: "height 0.4s cubic-bezier(0.16,1,0.3,1)" }} />
          </div>
          
          <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="dn">
            <NavLink onClick={() => navigate("/")} active={cp === "home"}>Home</NavLink>
            <NavLink onClick={() => navigate("/physicians")} active={cp === "physicians"}>Physicians</NavLink>
            <NavLink onClick={() => navigate("/services")} active={cp === "services"}>Services</NavLink>
            <NavLink onClick={() => navigate("/clinical-studies")} active={cp === "clinical"}>Research</NavLink>
            <NavLink onClick={() => navigate("/new-patient-forms")} active={cp === "forms"}>Patient Forms</NavLink>
            <button
              onClick={() => navigate("/contact")}
              className="bp"
              style={{
                padding: "10px 22px",
                fontSize: 12,
                background: cp === "contact" ? "var(--gold)" : "transparent",
                border: "1.5px solid var(--gold)",
                color: cp === "contact" ? "var(--navy)" : "var(--gold)"
              }}
              onMouseEnter={e => { e.target.style.background = "var(--gold)"; e.target.style.color = "var(--navy)"; }}
              onMouseLeave={e => { if (cp !== "contact") { e.target.style.background = "transparent"; e.target.style.color = "var(--gold)"; } }}
            >
              Contact
            </button>
          </div>

          <button onClick={() => setMenuOpen(true)} style={{ display: "none", flexDirection: "column", gap: 5, cursor: "pointer", background: "none", border: "none", padding: 4 }} className="bb">
            <span style={{ width: 24, height: 2, background: "var(--cream)", display: "block" }} />
            <span style={{ width: 18, height: 2, background: "var(--cream)", display: "block" }} />
            <span style={{ width: 24, height: 2, background: "var(--cream)", display: "block" }} />
          </button>
        </div>
      </nav>

      <div className={`mo ${menuOpen ? "open" : ""}`}>
        {/* Header Block */}
        <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <img src="/neurocenlanewlogo.png" alt="Neuro Medical Clinic" style={{ height: 48, objectFit: "contain" }} />
          <button onClick={() => setMenuOpen(false)} style={{ fontSize: 32, color: "var(--cream)", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44 }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "12px 24px", display: "flex", flexDirection: "column" }}>
          {[{ l: "Home", p: "/" }, { l: "Physicians", p: "/physicians" }, { l: "Comprehensive Services", p: "/services" }, { l: "Clinical Research", p: "/clinical-studies" }, { l: "New Patient Forms", p: "/new-patient-forms" }].map(i => (
            <button 
              key={i.p} 
              className="ml" 
              onClick={() => { navigate(i.p); setMenuOpen(false); }}
            >
              <span style={{ fontSize: 20, fontWeight: 500, color: "var(--cream)", fontFamily: "'Playfair Display', serif" }}>{i.l}</span>
              <ArrowRight size={18} color="var(--gold)" style={{ opacity: 0.6 }} />
            </button>
          ))}
        </div>

        {/* Intelligence Data Block */}
        <div style={{ padding: "20px 24px", background: "rgba(0,0,0,0.25)", borderTop: "1px solid rgba(184,160,100,0.15)" }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>Clinical Information</p>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
            <MapPin size={16} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} />
            <div style={{ color: "var(--text-light)", fontSize: 13, lineHeight: 1.5, fontWeight: 300 }}>
              3311 Prescott Road, Suite 216 <br/>Alexandria, LA 71301
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20 }}>
            <Clock size={16} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} />
            <div style={{ color: "var(--text-light)", fontSize: 13, lineHeight: 1.5, fontWeight: 300 }}>
              Mon - Fri: 8:00 AM - 5:00 PM<br/>Sat - Sun: Closed
            </div>
          </div>
          
          {/* Touch-Target Global CTAs */}
          <div style={{ display: "flex", gap: 12, flexDirection: "column" }}>
            <button onClick={() => { navigate('/contact'); setMenuOpen(false); }} style={{ width: "100%", padding: "14px", background: "var(--gold)", color: "var(--navy)", fontWeight: 700, fontSize: 14, border: "none", borderRadius: 8, display: "flex", justifyContent: "center", alignItems: "center", gap: 8, cursor: "pointer", transition: "transform 0.2s" }}>
              Request Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
