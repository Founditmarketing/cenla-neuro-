import { useState, useEffect, useRef } from 'react';

const useParallax = (speed = 0.3) => {
  const ref = useRef(null);
  const [off, setOff] = useState(0);

  useEffect(() => {
    const h = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setOff((r.top + r.height / 2 - window.innerHeight / 2) * speed);
    };
    window.addEventListener("scroll", h, { passive: true });
    h();
    return () => window.removeEventListener("scroll", h);
  }, [speed]);

  return [ref, off];
};

export default useParallax;
