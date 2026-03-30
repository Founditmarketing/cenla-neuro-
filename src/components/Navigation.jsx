import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

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
    : route.startsWith("/clinical") ? "clinical" : "home";

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
          background: scrolled || cp !== "home" ? "rgba(10,22,40,.96)" : "transparent",
          backdropFilter: scrolled || cp !== "home" ? "blur(20px)" : "none",
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
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, fontSize: 28, color: "var(--cream)", background: "none", border: "none", cursor: "pointer" }}>✕</button>
        {[{ l: "Home", p: "/" }, { l: "Physicians", p: "/physicians" }, { l: "Services", p: "/services" }, { l: "Research", p: "/clinical-studies" }, { l: "Contact", p: "/contact" }].map(i => (
          <button key={i.p} className="ml" onClick={() => { navigate(i.p); setMenuOpen(false); }}>{i.l}</button>
        ))}
        <a href="tel:3184430490" className="ml" style={{ color: "var(--gold)", fontSize: 20, marginTop: 12 }}><PhoneCall size={20} style={{ marginRight: 8, verticalAlign: "middle" }} /> (318) 443-0490</a>
      </div>
    </>
  );
};

export default Navigation;
