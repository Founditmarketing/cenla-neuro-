import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="ft">
      <div className="fti">
        <div className="ftg">
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: "var(--cream)", marginBottom: 12 }}>
              Neuro Medical Clinic of Cenla
            </div>
            <p style={{ fontSize: 14, color: "var(--text-light)", lineHeight: 1.7, maxWidth: 280 }}>
              Central Louisiana's first and largest Neurological Research and Infusion Center.
            </p>
          </div>
          <div>
            <div className="fth">Clinic</div>
            <button className="ftl" onClick={() => navigate("/")}>Home</button>
            <button className="ftl" onClick={() => navigate("/physicians")}>Physicians</button>
            <button className="ftl" onClick={() => navigate("/services")}>Services</button>
            <button className="ftl" onClick={() => navigate("/clinical-studies")}>Research</button>
          </div>
          <div>
            <div className="fth">Patients</div>
            <a className="ftl" href="https://neurocenla.com/new-patient-forms/" target="_blank" rel="noopener noreferrer">New Patient Forms</a>
            <a className="ftl" href="https://neurocenla.com/patient-portal/" target="_blank" rel="noopener noreferrer">Patient Portal</a>
            <button className="ftl" onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
          <div>
            <div className="fth">Contact</div>
            <a className="ftl" href="tel:3184430490">(318) 443-0490</a>
            <a className="ftl" href="mailto:jroland@neurocenla.com">jroland@neurocenla.com</a>
            <a className="ftl" href="https://www.google.com/maps/dir//The+NeuroMedical+Clinic+of+Central+Louisiana/" target="_blank" rel="noopener noreferrer">
              3311 Prescott Rd, Ste 216<br />Alexandria, LA 71301
            </a>
          </div>
        </div>
        <div className="ftb">
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.3)" }}>
            © {new Date().getFullYear()} Neuro Medical Clinic of Cenla. All rights reserved.
          </div>
          <a href="https://www.facebook.com/profile.php?id=100084031118647" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "var(--text-light)", transition: "color .3s" }}>
            Facebook ↗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
