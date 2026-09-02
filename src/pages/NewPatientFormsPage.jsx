import { Download, ShieldCheck, Clock, FileText } from 'lucide-react';
import NeuralNetwork from '../components/NeuralNetwork';
import FadeIn from '../components/FadeIn';

const ADOBE_SIGN_URL = "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBW6IaMYjbFDxRBgYYP9YJa5nkc8O9bEDDLWnHT9AGVOlAFiw57PJYQjNagadjwLzU*&hosted=false";

const NewPatientFormsPage = () => {
  return (
    <>
      <div className="ph">
        <NeuralNetwork opacity={0.25} />
        <div className="phi">
          <div className="ey"><span className="el" />For New Patients</div>
          <h1>New Patient <em>Forms</em></h1>
          <p>
            Complete and sign your intake paperwork online before your visit. It takes about
            15 minutes and saves you time in our waiting room.
          </p>
        </div>
      </div>

      <section className="sec sc">
        <div className="si">
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginBottom: 64 }} className="fr">
              {[
                { icon: <ShieldCheck size={22} color="var(--gold)" />, title: "Secure & Confidential", body: "Signed through Adobe Acrobat Sign with email-verified e-signatures." },
                { icon: <Clock size={22} color="var(--gold)" />, title: "About 15 Minutes", body: "Fill it out at your own pace, from your phone, tablet, or computer." },
                { icon: <FileText size={22} color="var(--gold)" />, title: "Submit Before You Arrive", body: "Please complete your forms prior to your scheduled appointment." }
              ].map(({ icon, title, body }) => (
                <div key={title}>
                  <div style={{ marginBottom: 14 }}>{icon}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, marginBottom: 8 }}>{title}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)", fontWeight: 300 }}>{body}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Not wrapped in FadeIn: the form must render unconditionally, never gated on a scroll-reveal firing. */}
          <div>
            <div style={{ marginBottom: 28 }}>
              <div className="ey"><span className="el" />Complete Online</div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3vw,36px)", fontWeight: 600, marginBottom: 14 }}>
                Sign Your Forms Here
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", maxWidth: 640, fontWeight: 300 }}>
                Fill in each section below, then click <strong style={{ color: "var(--text-dark)", fontWeight: 600 }}>Continue</strong> at
                the bottom of the form to sign and submit. You'll receive a verification email to confirm your signature.
              </p>
            </div>

            <div
              style={{
                background: "var(--white)",
                border: "1.5px solid var(--cream-dark)",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(10,22,40,.06)"
              }}
            >
              <iframe
                src={ADOBE_SIGN_URL}
                title="New Patient Forms — Neuro Medical Clinic of Cenla"
                className="npf-frame"
                style={{ width: "100%", border: "none", display: "block" }}
              />
            </div>
          </div>

          <FadeIn delay={0.1}>
            <div
              style={{
                marginTop: 64,
                paddingTop: 48,
                borderTop: "1px solid var(--cream-dark)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 32,
                flexWrap: "wrap"
              }}
            >
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, marginBottom: 10 }}>
                  Prefer to print?
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)", maxWidth: 480, fontWeight: 300 }}>
                  Download the forms, complete them by hand, and bring them with you to your appointment.
                </p>
              </div>
              <a
                href="/new-patient-forms.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bo"
                style={{ textDecoration: "none", flexShrink: 0 }}
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p style={{ marginTop: 48, fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)", fontWeight: 300 }}>
              Questions about your paperwork? Call us at{" "}
              <a href="tel:3184430490" style={{ color: "var(--gold)", fontWeight: 500 }}>(318) 443-0490</a>{" "}
              or email{" "}
              <a href="mailto:jroland@neurocenla.com" style={{ color: "var(--gold)", fontWeight: 500 }}>jroland@neurocenla.com</a>.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default NewPatientFormsPage;
