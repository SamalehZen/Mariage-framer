import { useEffect, useRef } from "react";
import "./Story.css";
const SLIDES = [
  { year: "2022", text: "The day our paths crossed, neither of us knew everything was about to change forever.", img: "story-2022" },
  { year: "2023", text: "Late-night talks turned into early mornings, and suddenly we were inseparable.", img: "story-2023" },
  { year: "2024", text: "From spontaneous road trips to quiet evenings in, every moment felt like home.", img: "story-2024" },
  { year: "2025", text: "On a perfect ordinary day, at a special location, one question turned into a forever yes.", img: "story-2025" },
  { year: "2026", text: "Now we say I do, and the best chapter of all begins. Our forever begins here.", img: "story-2026" },
];
export function Story() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sec = ref.current, track = trackRef.current; if (!sec || !track) return;
    let raf = 0;
    const update = () => {
      const rect = sec.getBoundingClientRect();
      const total = rect.height - 720;
      const tx = Math.min(3569.2, Math.max(0, -rect.top));
      track.style.transform = "translate3d(" + (-tx) + "px,0,0)";
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es)=>{for(const e of es) if(e.isIntersecting) e.target.classList.add("in");},{threshold:0.05,root:null});
    track.querySelectorAll(".polaroid").forEach(el=>io.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); io.disconnect(); };
  }, []);
  return (
    <section className="story" ref={ref}>
      <div className="story-sticky">
        <div className="story-title"><h2 className="h2">Here's our story</h2></div>
        <div className="story-viewport">
          <div className="story-track" ref={trackRef}>
            {SLIDES.map((s,i)=>(
              <div className="story-slide" key={s.year}>
                <div className="polaroid">
                  <div className="polaroid-img"><img src={"assets/"+s.img+".avif"} alt="" /><div className="polaroid-shade" /></div>
                  <div className="polaroid-text"><h5>{s.year}</h5><p>{s.text}</p></div>
                </div>
                {i<SLIDES.length-1 ? <div className="story-line"><div className="story-progress" /></div> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}