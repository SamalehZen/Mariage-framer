import { useReveal } from "../hooks/useReveal";
import "./Footer.css";
export function Footer() {
  const ref = useReveal<HTMLElement>(0.1);
  return (
    <footer className="footer" id="1g3g6bv" ref={ref}>
      <div className="footer-inner">
        <img className="footer-bg" src="assets/footer-photo.avif" srcSet="assets/footer-photo.avif 1180w" sizes="1180px" alt="Couple taking a photo in the mirror" />
        <div className="footer-shade" />
        <div className="footer-content">
          <div className="footer-top">
            <h4 className="reveal">Can't wait to spend the rest of my life with you.</h4>
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