import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Details.css";
const CARDS = [
  { title:"Accommodations", img:"detail-accommodations", body:["The venue is surrounded by charming boutique hotels and guesthouses within a ten-minute drive.","Nearest railway station is a short taxi ride away, with regular connections to nearby cities.","Taxis and ride-sharing are easily available throughout the area. Ample parking is available at the venue for guests arriving by car."] },
  { title:"Food & Drinks", img:"detail-food", body:["A seated dinner will be served after the ceremony, followed by cocktails, wine and dancing.","Please tell us about any dietary requirements in your RSVP and we will take care of the rest.","Vegetarian and non-vegetarian menus are both available."] },
  { title:"Dress Code", img:"detail-dress", body:["Formal, semi-formal attire — think garden-party elegant.","The ceremony takes place outdoors, so choose shoes you feel comfortable in on grass.","Come in something that makes you feel wonderful, and get ready to dance."] },
];
export function Details() {
  const ref = useReveal<HTMLElement>(0.1);
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);
  return (
    <section className="section details" id="6dzec8" ref={ref}>
      <div className="details-content">
        <div className="details-head">
          <h3>Additional Details</h3>
          <p>We've pulled together all the practical bits in one spot. Explore accommodations, dining, dress code, and more below so you can arrive relaxed and fully ready</p>
        </div>
        <div className="details-grid">
          {CARDS.map((c,idx)=>(
            <div className="detail-card reveal" key={c.title} onClick={()=>setActive(idx)} role="button" tabIndex={0} onKeyDown={(e)=>{if(e.key==="Enter"||e.key===" ") setActive(idx);}}>
              <img src={"assets/"+c.img+".avif"} srcSet={"assets/"+c.img+".avif 765w"} sizes="347.5px" alt="" />
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
      {active !== null && (
        <div className="detail-modal" role="dialog" aria-modal="true" onClick={()=>setActive(null)}>
          <div className="detail-panel" onClick={(e)=>e.stopPropagation()}>
            <button className="detail-close" aria-label="Close" onClick={()=>setActive(null)}>×</button>
            <p className="eyebrow">Additional details</p>
            <h3>{CARDS[active].title}</h3>
            <div className="detail-body">{CARDS[active].body.map((p,i)=><p key={i}>{p}</p>)}</div>
          </div>
        </div>
      )}
    </section>
  );
}