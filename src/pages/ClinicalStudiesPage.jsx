import { useNavigate } from 'react-router-dom';
import NeuralNetwork from '../components/NeuralNetwork';
import FadeIn from '../components/FadeIn';
import { Brain, Zap, HeartPulse, Microscope } from 'lucide-react';

const ClinicalStudiesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph">
        <NeuralNetwork opacity={0.3} />
        <div className="phi">
          <div className="cr">
            <button onClick={() => navigate("/")}>Home</button>
            <span>/</span> Clinical Studies
          </div>
          <div className="ey"><span className="el" />Research</div>
          <h1>Clinical <em>Studies</em></h1>
          <p>Advancing neurological medicine through cutting-edge clinical trials.</p>
        </div>
      </div>
      <section className="sec sc">
        <div className="si" style={{ maxWidth: 800 }}>
          <FadeIn>
            <p style={{ fontSize: 18, lineHeight: 1.9, color: "var(--text-muted)", marginBottom: 32 }}>
              The Neuro Medical Clinic of Cenla operates Central Louisiana's first and largest neurological research center. Our physicians serve as principal investigators in multiple clinical trials, with focus on Alzheimer's, memory disorders, MS, and stroke.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.9, color: "var(--text-muted)", marginBottom: 40 }}>
              Participants gain access to promising new therapies before they become widely available. Contact us to learn about current studies or eligibility.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }} className="fr">
              {[
                [<Brain size={28} color="var(--gold)" />, "Alzheimer's Disease", "Active trials investigating novel treatments for memory disorders."],
                [<Zap size={28} color="var(--gold)" />, "Multiple Sclerosis", "Numerous trials evaluating new disease-modifying therapies."],
                [<HeartPulse size={28} color="var(--gold)" />, "Stroke Prevention", "Research into prevention strategies and treatment improvements."],
                [<Microscope size={28} color="var(--gold)" />, "Emerging Therapies", "Evaluating next-generation neurological treatments."]
              ].map(([ic, ti, de]) => (
                <div key={ti} style={{ padding: 28, background: "var(--white)", borderRadius: 14, border: "1px solid var(--cream-dark)" }}>
                  <span style={{ display: "block", marginBottom: 12 }}>{ic}</span>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{ti}</div>
                  <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{de}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <button className="bp" onClick={() => navigate("/contact")}>Inquire About Studies →</button>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default ClinicalStudiesPage;
