import { useReveal } from "../hooks/useReveal";
import "./Details.css";
const CARDS = [
  { title:"Accommodations", img:"detail-accommodations" },
  { title:"Food & Drinks", img:"detail-food" },
  { title:"Dress Code", img:"detail-dress" },
];
export function Details() {
  const ref = useReveal<HTMLElement>(0.1);
  return (
    <section className="section details" id="6dzec8" ref={ref}>
      <div className="details-content">
        <div className="details-head">
          <h3>Additional Details</h3>
          <p>We've pulled together all the practical bits in one spot. Explore accommodations, dining, dress code, and more below so you can arrive relaxed and fully ready</p>
        </div>
        <div className="details-grid">
          {CARDS.map(c=>(
            <div className="detail-card reveal" key={c.title}>
              <img src={"assets/"+c.img+".avif"} alt="" />
              <div className="detail-shade" />
              <div className="detail-title"><h5>{c.title}</h5></div>
              <div className="detail-bar">
                <div className="detail-bar-text"><p>Full Description Inside</p><p>Tap to view</p></div>
                <div className="detail-btn"><span className="detail-arrow" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
