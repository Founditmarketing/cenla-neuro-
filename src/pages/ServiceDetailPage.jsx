import { useNavigate, useParams } from 'react-router-dom';
import NeuralNetwork from '../components/NeuralNetwork';
import FadeIn from '../components/FadeIn';
import { services } from '../data';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const svc = services.find(s => s.id === id);
  if (!svc) {
    return (
      <div className="ph">
        <div className="phi">
          <h1>Not found</h1>
          <button className="bp" onClick={() => navigate("/services")}>← Back</button>
        </div>
      </div>
    );
  }

  const rel = services.filter(s => s.id !== id).slice(0, 3);

  return (
    <>
      <div className="ph">
        <NeuralNetwork opacity={0.25} />
        <div className="phi">
          <div className="cr">
            <button onClick={() => navigate("/")}>Home</button>
            <span>/</span>
            <button onClick={() => navigate("/services")}>Services</button>
            <span>/</span> {svc.name}
          </div>
          <div style={{ fontSize: 48, marginBottom: 16 }}>{svc.icon}</div>
          <h1>{svc.name}</h1>
        </div>
      </div>

      <section className="sec sc">
        <div className="si" style={{ maxWidth: 800 }}>
          <FadeIn>
            <p style={{ fontSize: 18, lineHeight: 1.9, color: "var(--text-muted)", marginBottom: 40 }}>{svc.desc}</p>
            <div style={{ padding: 32, background: "var(--white)", borderRadius: 16, border: "1px solid var(--cream-dark)", marginBottom: 40 }}>
              <div style={{ fontWeight: 600, marginBottom: 12 }}>Our Approach</div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-muted)" }}>
                Our board-certified neurologists use the latest diagnostic tools and evidence-based treatments for {svc.name.toLowerCase()}. We combine clinical expertise with active research, giving patients access to cutting-edge therapies and clinical trials.
              </p>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 60 }}>
              <button className="bp" onClick={() => navigate("/contact")}>Schedule Appointment →</button>
              <button className="bo" onClick={() => navigate("/services")}>← All Services</button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ borderTop: "1px solid var(--cream-dark)", paddingTop: 40 }}>
              <div className="ey"><span className="el" />Related Services</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16, marginTop: 20 }}>
                {rel.map(r => (
                  <div
                    key={r.id}
                    onClick={() => navigate(`/services/${r.id}`)}
                    style={{ padding: 20, borderRadius: 12, background: "var(--white)", border: "1px solid var(--cream-dark)", cursor: "pointer", transition: "all .3s" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "var(--cream-dark)"}
                  >
                    <span style={{ fontSize: 22, display: "block", marginBottom: 8 }}>{r.icon}</span>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{r.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
