import { useState } from 'react';
import NeuralNetwork from '../components/NeuralNetwork';
import FadeIn from '../components/FadeIn';

const ContactPage = () => {
  const [fd, setFd] = useState({ name: "", phone: "", email: "", message: "" });
  
  const S = {
    width: "100%", padding: "14px 16px", fontSize: 15, fontFamily: "'DM Sans',sans-serif",
    border: "1.5px solid var(--cream-dark)", background: "var(--white)", borderRadius: 8,
    outline: "none", color: "var(--text-dark)", transition: "border-color .3s"
  };
  const L = {
    display: "block", fontSize: 12, fontWeight: 600, letterSpacing: 1.5,
    textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8
  };
  
  const f = e => e.target.style.borderColor = "var(--gold)";
  const b = e => e.target.style.borderColor = "var(--cream-dark)";

  return (
    <>
      <div className="ph">
        <NeuralNetwork opacity={0.25} />
        <div className="phi">
          <div className="ey"><span className="el" />Get in Touch</div>
          <h1>Contact <em>Us</em></h1>
          <p>Schedule an appointment or ask a question. We look forward to hearing from you.</p>
        </div>
      </div>
      <section className="sec sc">
        <div className="si">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }} className="cg">
            <FadeIn>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, marginBottom: 28 }}>Send Us a Message</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="fr">
                  <div>
                    <label style={L}>Full Name</label>
                    <input style={S} placeholder="John Doe" value={fd.name} onChange={e => setFd({ ...fd, name: e.target.value })} onFocus={f} onBlur={b} />
                  </div>
                  <div>
                    <label style={L}>Phone</label>
                    <input style={S} placeholder="(318) 555-0000" value={fd.phone} onChange={e => setFd({ ...fd, phone: e.target.value })} onFocus={f} onBlur={b} />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={L}>Email</label>
                  <input style={S} placeholder="you@email.com" value={fd.email} onChange={e => setFd({ ...fd, email: e.target.value })} onFocus={f} onBlur={b} />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={L}>Message</label>
                  <textarea style={{ ...S, resize: "vertical", minHeight: 140 }} placeholder="How can we help you?" value={fd.message} onChange={e => setFd({ ...fd, message: e.target.value })} onFocus={f} onBlur={b} />
                </div>
                <button className="bp" style={{ width: "100%", justifyContent: "center" }}>Send Message →</button>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div>
                {[
                  ["Address", <a href="https://www.google.com/maps/dir//The+NeuroMedical+Clinic+of+Central+Louisiana/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-dark)", transition: "color .3s" }} onMouseEnter={e => e.target.style.color = "var(--gold)"} onMouseLeave={e => e.target.style.color = "var(--text-dark)"}>3311 Prescott Road, Suite 216<br />Alexandria, LA 71301</a>],
                  ["Phone & Fax", <><a href="tel:3184430490" style={{ color: "var(--text-dark)", transition: "color .3s" }} onMouseEnter={e => e.target.style.color = "var(--gold)"} onMouseLeave={e => e.target.style.color = "var(--text-dark)"}>(318) 443-0490</a><br /><span style={{ color: "var(--text-muted)" }}>Fax: (318) 443-0690</span></>],
                  ["Email", <a href="mailto:jroland@neurocenla.com" style={{ color: "var(--text-dark)", transition: "color .3s" }} onMouseEnter={e => e.target.style.color = "var(--gold)"} onMouseLeave={e => e.target.style.color = "var(--text-dark)"}>jroland@neurocenla.com</a>]
                ].map(([l, c]) => (
                  <div key={l} style={{ marginBottom: 28 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>{l}</div>
                    <div style={{ fontSize: 16, lineHeight: 1.6 }}>{c}</div>
                  </div>
                ))}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>Office Hours</div>
                  <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 20px", fontSize: 15 }}>
                    <span style={{ fontWeight: 500 }}>Mon–Thurs</span><span style={{ color: "var(--text-muted)" }}>8:00 AM – 5:00 PM</span>
                    <span style={{ fontWeight: 500 }}>Friday</span><span style={{ color: "var(--text-muted)" }}>8:00 AM – 12:00 PM</span>
                    <span style={{ fontWeight: 500 }}>Lunch</span><span style={{ color: "var(--text-muted)" }}>Closed 12–1 PM daily</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>Quick Links</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <a href="https://neurocenla.com/new-patient-forms/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: "var(--text-dark)", transition: "color .3s" }} onMouseEnter={e => e.target.style.color = "var(--gold)"} onMouseLeave={e => e.target.style.color = "var(--text-dark)"}>New Patient Forms ↗</a>
                    <a href="https://neurocenla.com/patient-portal/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: "var(--text-dark)", transition: "color .3s" }} onMouseEnter={e => e.target.style.color = "var(--gold)"} onMouseLeave={e => e.target.style.color = "var(--text-dark)"}>Patient Portal ↗</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
