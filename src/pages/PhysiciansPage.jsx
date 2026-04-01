import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NeuralNetwork from '../components/NeuralNetwork';
import FadeIn from '../components/FadeIn';
import { physicians } from '../data';

const DocBio = ({ d, dark }) => (
  <FadeIn delay={0.15}>
    <div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3.5vw,36px)", fontWeight: 600, color: dark ? "var(--cream)" : "var(--text-dark)", marginBottom: 6, lineHeight: 1.2 }}>
        {d.name}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
        {d.role}
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.8, color: dark ? "var(--text-light)" : "var(--text-muted)", marginBottom: 24 }}>
        {d.bio}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {d.details.map((x, j) => (
          <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ color: "var(--gold)", fontSize: 12, marginTop: 4, flexShrink: 0 }}>◆</span>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: dark ? "var(--text-light)" : "var(--text-muted)" }}>{x}</span>
          </div>
        ))}
      </div>
    </div>
  </FadeIn>
);

const PhysiciansPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <>
      <div className="ph">
        <NeuralNetwork opacity={0.3} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 80%,rgba(42,157,143,.06),transparent 60%)" }} />
        <div className="phi">
          <div className="cr">
            <button onClick={() => navigate("/")}>Home</button>
            <span>/</span> Physicians
          </div>
          <div className="ey"><span className="el" />Our Team</div>
          <h1>Meet Our <em>Physicians</em></h1>
          <p>Board-certified neurologists and experienced nurse practitioners providing exceptional care.</p>
        </div>
      </div>
      
      {physicians.map((d, i) => (
        <section key={d.name} id={d.name.split(',')[0].replace(/\s+/g, '-').toLowerCase()} className={`sec ${i % 2 === 0 ? "sc" : "sd"}`}>
          <div className="si">
            <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "380px 1fr" : "1fr 380px", gap: 60, alignItems: "center" }} className="dg">
              {i % 2 === 0 ? (
                <>
                  <FadeIn direction="right">
                    <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,.15)" }}>
                      <img src={d.profileImg || d.img} alt={d.name} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top" }} loading="lazy" />
                    </div>
                  </FadeIn>
                  <DocBio d={d} dark={false} />
                </>
              ) : (
                <>
                  <DocBio d={d} dark={true} />
                  <FadeIn direction="left">
                    <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,.3)" }}>
                      <img src={d.profileImg || d.img} alt={d.name} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top" }} loading="lazy" />
                    </div>
                  </FadeIn>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default PhysiciansPage;
