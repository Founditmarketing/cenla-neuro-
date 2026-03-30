import { useNavigate } from 'react-router-dom';
import NeuralNetwork from '../components/NeuralNetwork';
import FadeIn from '../components/FadeIn';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph">
        <NeuralNetwork opacity={0.3} />
        <div className="phi">
          <div className="cr">
            <button onClick={() => navigate("/")}>Home</button>
            <span>/</span> Services
          </div>
          <div className="ey"><span className="el" />Our Specialties</div>
          <h1>Neurological <em>Services</em></h1>
          <p>Expert care across 11 specialties — from diagnosis through treatment and research.</p>
        </div>
      </div>
      <section className="sec sc">
        <div className="si">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={Math.min(i * 0.05, 0.35)}>
                <ServiceCard s={s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
