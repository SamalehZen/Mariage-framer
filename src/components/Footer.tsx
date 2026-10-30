import { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Footer.css";
export function Footer() {
  const ref = useReveal<HTMLElement>(0.1);
  const photoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current, ph = photoRef.current; if (!el || !ph) return;
    let raf = 0;
    const upd = () => {
      const r = el.getBoundingClientRect();
      const s = Math.min(1.2, Math.max(1, 1 + Math.max(0, r.top - 10) * 0.00059));
      ph.style.transform = "scale(" + s + ")";
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(upd); };
    upd(); window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, [ref]);
  return (
    <footer className="footer" id="1g3g6bv" ref={ref}>
      <div className="footer-inner">
        <div className="footer-photo" ref={photoRef}>
          <img src="assets/footer-photo.avif" srcSet="assets/footer-photo.avif 1180w" sizes="1180px" alt="Couple taking a photo in the mirror" />
          <div className="footer-photo-shade" />
        </div>
        <div className="footer-content">
          <div className="footer-top">
            <h4 className="reveal">Can't wait to spend the<br />rest of my life with you.</h4>
            <a className="btn-light footer-cta reveal" href="./rsvp">Submit RVSP
              <span className="footer-arrow" />
            </a>
          </div>
          <h2 className="footer-big">Come join us</h2>
          <div className="footer-copy">
            <p>Copyright © WeddingDay</p>
            <p>Created by Adheeb</p>
          </div>
        </div>
      </div>
    </footer>
  );
}