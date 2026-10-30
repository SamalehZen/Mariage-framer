import { useEffect, useRef } from "react";
import "./Intro.css";
import { useReveal } from "../hooks/useReveal";

const WORDS = "If you've recieved this you're so special to us and you're cordially invited to celebrate our wedding on...".split(" ");
const DIM = new Set(["you've","recieved","this","you're","so","special","to","us","and","you're","cordially","invited","to","celebrate","our","wedding","on..."]);

export function Intro() {
  const ref = useReveal<HTMLElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const img = new Image();
    img.onload = () => { ctx.drawImage(img, 0, 0, c.width, c.height); };
    img.src = "assets/scratch-overlay.png";
    let drawing = false;
    const erase = (e: PointerEvent) => {
      if (!drawing) return;
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) * (c.width / r.width);
      const y = (e.clientY - r.top) * (c.height / r.height);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath(); ctx.arc(x, y, 24, 0, Math.PI * 2); ctx.fill();
    };
    const down = (e: PointerEvent) => { drawing = true; c.setPointerCapture(e.pointerId); erase(e); };
    const up = () => { drawing = false; };
    c.addEventListener("pointerdown", down); c.addEventListener("pointermove", erase);
    c.addEventListener("pointerup", up); c.addEventListener("pointercancel", up);
    return () => { c.removeEventListener("pointerdown", down); c.removeEventListener("pointermove", erase); c.removeEventListener("pointerup", up); c.removeEventListener("pointercancel", up); };
  }, []);
  return (
    <section className="section intro" id="intro" ref={ref}>
      <p className="intro-quote reveal">
        {WORDS.map((w,i)=> <span key={i}>{w}{i<WORDS.length-1?" ":""}</span>)}
      </p>
      <div className="intro-bottom reveal">
        <p className="scratch-label">Scratch to reveal</p>
        <div className="scratch-wrap">
          <div className="scratch-card">
            <h3 className="scratch-date">August 31st, 2026</h3>
            <canvas ref={canvasRef} className="scratch-canvas" width={500} height={269} />
            <div className="countdown">
              {[["00","DAYS"],["00","HOURS"],["00","MINUTES"],["00","SECONDS"]].map(([v,l])=>(
                <div className="cd-unit" key={l}><div className="cd-num">{v.split("").map((d,i)=><span key={i}>{d}</span>)}</div><div className="cd-label">{l}</div></div>
              ))}
            </div>
            <div className="scratch-noise" />
            <img className="scratch-pattern" src="assets/scratch-bg.avif" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}