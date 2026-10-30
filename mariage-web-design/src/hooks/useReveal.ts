import { useEffect, useRef } from "react";
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const targets = [el, ...Array.from(el.querySelectorAll<HTMLElement>(".reveal"))];
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }, { threshold });
    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
