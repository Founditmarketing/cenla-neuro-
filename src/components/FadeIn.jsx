import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (t = 0.12) => {
  const ref = useRef(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          o.unobserve(el);
        }
      },
      { threshold: t }
    );
    o.observe(el);
    return () => o.disconnect();
  }, [t]);

  return [ref, v];
};

const FadeIn = ({ children, delay = 0, direction = 'up', style = {}, className = '' }) => {
  const [ref, vis] = useScrollReveal(0.08);
  const t = {
    up: 'translateY(50px)',
    down: 'translateY(-50px)',
    left: 'translateX(50px)',
    right: 'translateX(-50px)',
    none: 'none',
    scale: 'scale(0.95)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : t[direction],
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
