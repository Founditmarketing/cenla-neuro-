import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NeuralNetwork from '../components/NeuralNetwork';
import FadeIn from '../components/FadeIn';
import ServiceCard from '../components/ServiceCard';
import useParallax from '../hooks/useParallax';
import { services, physicians, testimonials } from '../data';
import { Microscope, Hospital, GraduationCap, Zap, PhoneCall, ArrowLeft, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [pRef, pOff] = useParallax(0.12);
  const [at, setAt] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setAt(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(iv);
  }, []);

  const carouselRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(0);
  const [activePhysician, setActivePhysician] = useState(null);
  const [activeServiceId, setActiveServiceId] = useState("alzheimers");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveServiceId(entry.target.getAttribute('data-id'));
          }
        });
      },
      {
        root: carouselRef.current,
        rootMargin: '0px -49% 0px -49%',
        threshold: 0,
      }
    );

    const cards = carouselRef.current?.querySelectorAll('.service-card-node');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  const expertiseImages = [
    "/neurocenlaspinepic.png",
    "/neurocenlapatient.jpg",
    "/neurocenlastaff.jpg",
    "/neurocenlabrainpic.png"
  ];

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 968 ? 420 : 320;
      carouselRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div style={{ position: "relative", background: "var(--navy)", overflow: "hidden" }}>
        <NeuralNetwork opacity={0.6} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 25% 50%,rgba(42,157,143,.07) 0%,transparent 60%),radial-gradient(ellipse at 75% 25%,rgba(184,160,100,.05) 0%,transparent 50%)" }} />
        <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "160px 40px 100px", width: "100%", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 64 }}>
            <div style={{ flex: "1 1 540px", maxWidth: 820 }}>
              <FadeIn delay={0.2}>
                <div className="ey"><span className="el" />Central Louisiana's Premier Neurology Practice</div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(44px,6vw,78px)", fontWeight: 600, color: "var(--cream)", lineHeight: 1.08, maxWidth: 820, marginBottom: 28 }}>
                  Advanced <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Neurological</em> Care, Close to Home
                </h1>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p style={{ fontSize: 18, color: "var(--text-light)", maxWidth: 560, lineHeight: 1.75, marginBottom: 44, fontWeight: 300 }}>
                  Board-certified neurologists providing comprehensive diagnosis, treatment, and groundbreaking clinical research for Central Louisiana and beyond.
                </p>
              </FadeIn>
              <FadeIn delay={0.65}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <button className="bp" onClick={() => navigate("/contact")}>Schedule a Visit →</button>
                  <button className="bs" onClick={() => navigate("/services")}>Explore Services</button>
                </div>
              </FadeIn>
              <FadeIn delay={0.8}>
                <div style={{ display: "flex", gap: 48, marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.07)", flexWrap: "wrap" }}>
                  {[["20+", "Years of Excellence"], ["11", "Specialties"], ["1st", "Neuro Research Center in CENLA"]].map(([n, l]) => (
                    <div key={l}>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 44, fontWeight: 600, color: "var(--gold)", lineHeight: 1 }}>{n}</div>
                      <div style={{ fontSize: 13, color: "var(--text-light)", marginTop: 6, letterSpacing: .5 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            
            <div className="hero-mobile-hidden" style={{ flex: "0 0 33%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <FadeIn delay={0.4} direction="left" style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
                  <img src="/neurocenloherosideimage.png" alt="Neuro Medical Clinic of Cenla" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <section className="maven-section" ref={pRef} style={{ background: "var(--cream-light)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="maven-left">
           <FadeIn>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 600, color: "var(--text-dark)", lineHeight: 1.1, marginBottom: 24 }}>Where expertise<br/>meets compassion</h2>
              <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 48, fontWeight: 300, maxWidth: 500 }}>
                Central Louisiana's first and largest Neurological Research and Infusion Center, providing expert care and advancing neurological medicine.
              </p>
           </FadeIn>
           
           <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
             {[
               [<Microscope size={24} color="var(--gold)" />, "Clinical Research"],
               [<Hospital size={24} color="var(--gold)" />, "Comprehensive Care"],
               [<GraduationCap size={24} color="var(--gold)" />, "Academic Leadership"],
               [<Zap size={24} color="var(--gold)" />, "MS Center of Excellence"]
             ].map(([ic, ti], i) => (
               <FadeIn key={ti} delay={i * 0.1}>
                 <div className="maven-item light-item" onClick={() => navigate("/services")} onMouseEnter={() => setHoveredImage(i)} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                   <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32 }}>{ic}</div>
                     <span className="maven-text" style={{ color: hoveredImage === i ? "var(--gold)" : "var(--text-dark)", transition: "color 0.3s" }}>{ti}</span>
                   </div>
                   <span className="maven-arrow" style={{ opacity: hoveredImage === i ? 1 : 0, transform: hoveredImage === i ? "translateX(0)" : "translateX(-16px)" }}>→</span>
                 </div>
               </FadeIn>
             ))}
           </div>
        </div>
        
        <div className="maven-right" style={{ padding: "0 40px 0 0", height: 800 }}>
           <FadeIn direction="left" delay={0.2} style={{ height: "100%", width: "100%", position: "relative", borderRadius: 32, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.06)" }}>
              {expertiseImages.map((imgSrc, i) => (
                 <img key={imgSrc} src={imgSrc} alt="NeuroCenla Feature" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "opacity 0.6s ease", opacity: hoveredImage === i ? 1 : 0 }} />
              ))}
           </FadeIn>
        </div>
      </section>

      <div style={{ position: "relative", background: "var(--navy)", overflow: "hidden", paddingTop: 140 }}>
        <NeuralNetwork />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 25% 50%,rgba(42,157,143,.07) 0%,transparent 60%),radial-gradient(ellipse at 75% 25%,rgba(184,160,100,.05) 0%,transparent 50%)" }} />
        <section className="maven-team-section" style={{ position: "relative", zIndex: 2, paddingBottom: 140 }}>
          <div style={{ width: "85%", maxWidth: 1800, margin: "0 auto", padding: "0", textAlign: "center" }}>
            <FadeIn>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, color: "var(--cream)", marginBottom: 16 }}>Meet Our Physicians</h2>
              <p style={{ fontSize: 18, color: "var(--text-light)", maxWidth: 640, margin: "0 auto 80px", fontWeight: 300, lineHeight: 1.6 }}>
                Board-certified neurologists and skilled nurse practitioners dedicated to delivering advanced neurological care to Central Louisiana.
              </p>
            </FadeIn>
            
            <div 
              className="physician-accordion" 
              style={{ 
                display: "flex", 
                gap: 16, 
                height: "calc(max(600px, 60vh))", 
                marginTop: 40, 
                width: "100%", 
                overflow: "hidden",
                "--m-col": activePhysician === null ? "1fr 1fr" : activePhysician === 0 || activePhysician === 2 ? "2.5fr 1fr" : "1fr 2.5fr",
                "--m-row": activePhysician === null ? "1fr 1fr" : activePhysician === 0 || activePhysician === 1 ? "2.5fr 1fr" : "1fr 2.5fr"
              }}
            >
              {physicians.map((d, i) => {
                const isActive = activePhysician === i;
                return (
                  <div 
                    key={d.name} 
                    className="physician-card"
                    style={{ position: "relative", flex: isActive ? 4 : 1, borderRadius: 32, overflow: "hidden", cursor: "pointer", transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)", backgroundColor: "var(--slate)", transform: "translateZ(0)" }} 
                    onMouseEnter={() => window.innerWidth > 968 && setActivePhysician(i)} 
                    onMouseLeave={() => window.innerWidth > 968 && setActivePhysician(null)}
                    onClick={() => {
                      if (window.innerWidth <= 968) {
                        navigate("/physicians");
                      }
                    }}
                  >
                    <img src={d.img} alt={d.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 2s ease", transform: isActive ? "scale(1.05)" : "scale(1)" }} loading="lazy" />
                    
                    {/* Gradient Mask for Readability */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,24,32,0.95) 0%, rgba(16,24,32,0.6) 20%, transparent 50%)", transition: "opacity 0.6s ease" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(184,160,100,0.1)", opacity: isActive ? 1 : 0, transition: "opacity 0.6s ease", mixBlendMode: "overlay" }} />
                    
                    {/* Content Layer */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
                      <div className="physician-text-wrapper" style={{ width: "100%", minWidth: 200 }}>
                        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 600, color: "var(--cream)", marginBottom: 8, whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                          {d.name.includes(',') ? d.name.substring(0, d.name.indexOf(',')) : d.name}
                          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 400, marginLeft: 6 }}>{d.name.includes(',') ? d.name.substring(d.name.indexOf(',')) : ''}</span>
                        </h3>
                        <div style={{ fontSize: 13, color: "var(--gold)", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: isActive ? 16 : 0, transition: "margin 0.4s ease" }}>{d.role}</div>
                        
                        {/* Progressive Disclosure Content */}
                        <div style={{ maxHeight: isActive ? 200 : 0, opacity: isActive ? 1 : 0, overflow: "hidden", transition: "all 0.5s ease" }}>
                            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                              {d.bio}
                            </div>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate("/physicians");
                              }}
                              style={{ 
                                marginTop: 8, 
                                padding: "10px 24px", 
                                background: "var(--gold)", 
                                color: "var(--text-dark)", 
                                border: "none", 
                                borderRadius: 100, 
                                fontWeight: 600, 
                                fontSize: 14, 
                                cursor: "pointer", 
                                display: "inline-flex", 
                                alignItems: "center", 
                                gap: 8,
                                transition: "transform 0.2s ease"
                              }}
                              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                            >
                                View Full Profile <ArrowRight size={16} />
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <FadeIn delay={0.4} style={{ marginTop: 80 }}>
              <button className="bo" onClick={() => navigate("/physicians")} style={{ borderColor: "rgba(184,160,100,0.5)", color: "var(--cream)", cursor: "pointer", transition: "all .3s" }} onMouseEnter={e => { e.currentTarget.style.background="var(--gold)"; e.currentTarget.style.color="var(--navy)"; e.currentTarget.style.borderColor="var(--gold)"; }} onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="var(--cream)"; e.currentTarget.style.borderColor="rgba(184,160,100,0.5)"; }}>VIEW FULL PROFILES →</button>
            </FadeIn>
          </div>
        </section>
      </div>

      <section className="parsley-services" style={{ padding: "120px 0 0 0", background: "var(--cream-light)", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", maxWidth: 1440, margin: "0 auto" }}>
          <div className="parsley-left" style={{ width: "100%", maxWidth: 460, padding: "0 40px 40px", flexShrink: 0 }}>
            <FadeIn>
              <div className="ey"><span className="el" />Our Specialties</div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 600, color: "var(--text-dark)", lineHeight: 1.1, marginBottom: 24 }}>
                Comprehensive<br/>Neurological<br/>Services
              </h2>
              <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 48, fontWeight: 300 }}>
                Expert, root-cause care for the full spectrum of complex neurological conditions, restoring function and lasting vitality.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="parsley-arrow-nav" style={{ display: "flex", gap: 16 }}>
                <button onClick={() => scrollCarousel('left')} style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.1)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", cursor: "pointer", transition: "all .3s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "none"; }}>
                  <ArrowLeft size={24} strokeWidth={1.5} />
                </button>
                <button onClick={() => scrollCarousel('right')} style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.1)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", cursor: "pointer", transition: "all .3s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "none"; }}>
                  <ArrowRight size={24} strokeWidth={1.5} />
                </button>
              </div>
            </FadeIn>
          </div>
          
          <div className="parsley-right" style={{ flex: 1, minWidth: 0 }}>
            <div ref={carouselRef} className="no-scrollbar" style={{ display: "flex", gap: 24, overflowX: "auto", padding: "40px calc(50% - 180px) 80px", scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}>
              {services.slice(0, 6).map((s, i) => {
                const isSpotlight = activeServiceId === s.id;
                return (
                  <FadeIn key={s.id} delay={Math.min(i * 0.1, 0.4)} style={{ flexShrink: 0 }}>
                    <div 
                      className="service-card-node"
                      data-id={s.id}
                      style={{ 
                        backgroundColor: "#ffffff", 
                        border: isSpotlight ? "2px solid var(--gold)" : "1px solid rgba(0,0,0,0.06)", 
                        borderRadius: 20, 
                        width: 360, 
                        height: 520, 
                        padding: 36, 
                        display: "flex", 
                        flexDirection: "column", 
                        cursor: "pointer", 
                        transition: "all .4s cubic-bezier(0.25, 1, 0.5, 1)",
                        transform: isSpotlight ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                        boxShadow: isSpotlight ? "0 24px 48px rgba(0,0,0,0.08)" : "none",
                        scrollSnapAlign: "center"
                      }} 
                      onClick={() => navigate("/services")}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "var(--gold)";
                        e.currentTarget.querySelector('.parsley-link').style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = isSpotlight ? "var(--gold)" : "rgba(0,0,0,0.06)";
                        e.currentTarget.querySelector('.parsley-link').style.transform = "none";
                      }}
                    >
                      <div style={{ flexShrink: 0, minWidth: 64, minHeight: 64, width: 64, height: 64, borderRadius: "50%", background: isSpotlight ? "var(--gold)" : "rgba(184,160,100,0.08)", color: isSpotlight ? "var(--navy)" : "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32, transition: "all .4s ease" }}>
                        {s.icon}
                      </div>
                      <h3 style={{ fontFamily: "inherit", fontSize: 24, fontWeight: 600, color: "var(--navy)", marginBottom: 16 }}>{s.name}</h3>
                      <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6, fontWeight: 300, flex: 1 }}>{s.desc}</p>
                      <div className="parsley-link" style={{ fontSize: 14, color: "var(--gold)", fontWeight: 600, transition: "transform .3s", marginTop: "auto" }}>
                        Learn more →
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
              
              {/* Distinct "View All Services" Routing Card */}
              <FadeIn delay={0.6} style={{ flexShrink: 0 }}>
                <div 
                  className="service-card-node"
                  data-id="view-all"
                  style={{ 
                    backgroundColor: "var(--navy)", 
                    border: activeServiceId === "view-all" ? "2px solid var(--gold)" : "1px solid rgba(0,0,0,0)", 
                    borderRadius: 20, 
                    width: 360, 
                    height: 520, 
                    padding: 36, 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    cursor: "pointer", 
                    transition: "all .4s cubic-bezier(0.25, 1, 0.5, 1)",
                    transform: activeServiceId === "view-all" ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                    boxShadow: activeServiceId === "view-all" ? "0 24px 48px rgba(0,0,0,0.2)" : "none",
                    scrollSnapAlign: "center"
                  }} 
                  onClick={() => navigate("/services")}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = activeServiceId === "view-all" ? "var(--gold)" : "rgba(0,0,0,0)";
                  }}
                >
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(184,160,100,0.15)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, transition: "all .4s ease" }}>
                    <ArrowRight size={32} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: "inherit", fontSize: 28, fontWeight: 600, color: "var(--cream)", marginBottom: 16 }}>View All<br/>Services</h3>
                  <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, fontWeight: 300 }}>
                    Explore our complete directory of specialized neurological treatments.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        
      </section>

      <section className="sec sd" style={{ position: "relative", overflow: "hidden" }}>
        <img src="/neurocenlanewlogo.png" alt="" style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", width: 500, opacity: 0.04, pointerEvents: "none" }} />
        <div className="si" style={{ position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div className="ey"><span className="el" />Patient Stories</div>
            <h2 className="st">What Our Patients Say</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ marginTop: 48, minHeight: 180 }}>
              <div key={at} style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,3vw,32px)", fontStyle: "italic", lineHeight: 1.6, color: "var(--cream)", maxWidth: 700, animation: "fadeT .5s ease" }}>
                <span style={{ fontSize: 72, color: "var(--gold)", lineHeight: 0, display: "block", marginBottom: 20, fontStyle: "normal" }}>"</span>{testimonials[at].text}
              </div>
              <div style={{ marginTop: 20, fontSize: 14, fontWeight: 600, color: "var(--gold)", letterSpacing: 1, textTransform: "uppercase" }}>— {testimonials[at].author}</div>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setAt(i)} style={{ width: i === at ? 56 : 36, height: 3, borderRadius: 2, background: i === at ? "var(--gold)" : "rgba(255,255,255,.15)", border: "none", cursor: "pointer", transition: "all .3s" }} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div style={{ position: "relative", padding: "100px 40px", textAlign: "center", background: "linear-gradient(135deg,var(--navy) 0%,var(--slate) 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(184,160,100,.06) 0%,transparent 70%)" }} />
        <NeuralNetwork opacity={0.2} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 600, color: "var(--cream)", marginBottom: 16 }}>Ready to Take the First Step?</div>
            <div style={{ fontSize: 17, color: "var(--text-light)", marginBottom: 36, fontWeight: 300 }}>Schedule your appointment today. We're here to help.</div>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="bp" onClick={() => navigate("/contact")}>Contact the Clinic →</button>
              <a href="tel:3184430490" className="bs" style={{ textDecoration: "none" }}><PhoneCall size={18} style={{ marginRight: 8, verticalAlign: "middle" }} /> (318) 443-0490</a>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default HomePage;
