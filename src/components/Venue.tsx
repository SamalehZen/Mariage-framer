import { useReveal } from "../hooks/useReveal";
import "./Venue.css";
export function Venue() {
  const ref = useReveal<HTMLElement>(0.1);
  return (
    <section className="section venue" id="tegltz" ref={ref}>
      <div className="venue-content">
        <div className="venue-title">
          <p className="eyebrow reveal">Wedding Venue</p>
          <h2 className="h2 reveal">So kindly join us on August 31st at....</h2>
        </div>
        <div className="venue-image reveal">
          <img src="assets/venue.avif" srcSet="assets/venue.avif 1024w" sizes="900px" alt="water paint Photo of a castle" />
        </div>
        <div className="venue-cta">
          <div className="venue-text reveal">
            <p className="venue-invite">INVITATION TO</p>
            <p className="venue-script">Cateau Bell Fluer</p>
          </div>
          <div className="rsvp-pill reveal">
            <div className="rsvp-info">
              <p className="rsvp-name">Chateau Belle Fleur</p>
              <p className="rsvp-addr">24 Via del Lago, Bellagio, Lake Como, Italy</p>
            </div>
            <a className="btn-dark" href="./rsvp">Submit RSVP</a>
          </div>
        </div>
      </div>
    </section>
  );
}