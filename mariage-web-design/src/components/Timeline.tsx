import { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Timeline.css";
const EVENTS = [
  { time:"2:00 PM", title:"Guests arrirve", text:"As loved ones gather from near and far, enjoy warm conversations and the excitement of the celebration ahead.", imgs:["tl1-l-1","tl1-l-2","tl1-l-3"], side:"left" },
  { time:"3:00 PM", title:"The ceremony begins", text:"Join us as we exchange heartfelt vows, celebrate our love, and begin this beautiful new chapter together.", imgs:["tl2-r-1","tl2-r-2","tl2-r-3"], side:"right" },
  { time:"4:00 PM", title:"Cocktail hour", text:"Enjoy handcrafted drinks, delicious bites, and meaningful conversations while we capture a few cherished memories.", imgs:["tl3-l-1","tl3-l-2","tl3-l-3"], side:"left" },
  { time:"6:00 PM", title:"Dinner & toasts", text:"Share a memorable meal as family and friends raise their glasses and celebrate the journey that brought us here.", imgs:["tl4-r-1","tl4-r-2","tl4-r-3"], side:"right" },
  { time:"8:00 PM", title:"First dance", text:"The music begins, the dance floor opens, and an unforgettable evening of joy and celebration comes alive.", imgs:["tl5-l-1","tl5-l-2","tl5-l-3"], side:"left" },
  { time:"10:00 PM", title:"Sweet farewell", text:"As the night comes to a close, we thank you for your love, support, and for being part of this special day in our lives.", imgs:["tl6-r-1","tl6-r-2","tl6-r-3"], side:"right" },
];
export function Timeline() {
  const ref = useReveal<HTMLElement>(0.05);
  const fillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current, fill = fillRef.current; if (!el || !fill) return;
    let raf = 0;
    const upd = () => {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (-r.top) / (r.height - 900)));
      fill.style.height = (p * 2244) + "px";
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(upd); };
    upd(); window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section className="section timeline" ref={ref}>
      <div className="timeline-content">
        <div className="timeline-title">
          <p className="eyebrow">Wedding Day</p>
          <h2 className="h2">Here's how things will unfold</h2>
        </div>
        <div className="tl-list">
          <div className="tl-progress"><div className="tl-fill" ref={fillRef} /></div>
          {EVENTS.map((ev,idx)=>(
            <div className={"tl-row " + ev.side} key={ev.title}>
              <div className="tl-card">
                <div className="tl-images">
                  {ev.imgs.map((im,i)=>{
                    const left = ev.side==="left";
                    const styles = left
                      ? [{w:131,x:77,y:-13,r:-11},{w:127,x:138,y:-10,r:-8},{w:112,x:188,y:0,r:0}][i]
                      : [{w:112,x:0,y:0,r:0},{w:127,x:34,y:-10,r:-8},{w:131,x:91,y:-13,r:-11}][i];
                    return (
                      <div className="tl-frame" key={im} style={{width:styles.w,height:styles.w,left:styles.x,top:styles.y,transform:"rotate("+styles.r+"deg)"}}>
                        <img src={"assets/"+im+".avif"} alt="" />
                      </div>
                    );
                  })}
                </div>
                <div className="tl-text">
                  <p className="tl-time">{ev.time}</p>
                  <h5>{ev.title}</h5>
                  <p className="tl-desc">{ev.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}