import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ServiceCard({ s }) {
  const [h, setH] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/services/${s.id}`)}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: 28,
        borderRadius: 14,
        cursor: "pointer",
        background: "var(--white)",
        border: `1px solid ${h ? "transparent" : "rgba(0,0,0,0.05)"}`,
        transition: "all 0.4s",
        position: "relative",
        overflow: "hidden",
        transform: h ? "translateY(-4px)" : "none",
        boxShadow: h ? "0 16px 48px rgba(0,0,0,0.07)" : "none",
        height: "100%"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 4,
          height: h ? "100%" : 0,
          background: `linear-gradient(180deg, var(--gold), ${s.color})`,
          transition: "height 0.4s"
        }}
      />
      <span style={{ fontSize: 26, marginBottom: 14, display: "block" }}>
        {s.icon}
      </span>
      <div
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 19,
          fontWeight: 600,
          marginBottom: 8,
          color: "var(--text-dark)"
        }}
      >
        {s.name}
      </div>
      <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
        {s.short}
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: 13,
          fontWeight: 600,
          color: "var(--gold)",
          letterSpacing: 0.5,
          textTransform: "uppercase",
          opacity: h ? 1 : 0,
          transform: h ? "none" : "translateX(-8px)",
          transition: "all 0.3s"
        }}
      >
        Learn More →
      </div>
    </div>
  );
}

export default ServiceCard;
