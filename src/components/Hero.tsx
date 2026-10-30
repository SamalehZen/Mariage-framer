import { useRef, useState } from "react";
import "./Hero.css";

const NAMES = "John & Emily's";
const PETALS = [
  { x: 882.7, y: 192, w: 243.6, h: 209.7, r: -15, delay: 0, dur: 140, op: 0.86 },
  { x: 698, y: -36.3, w: 111, h: 114.9, r: 52.6, delay: 14, dur: 150, op: 0.9 },
  { x: 141.8, y: -21.2, w: 148.3, h: 132.9, r: 158, delay: 37, dur: 145, op: 0.78 },
  { x: 46.2, y: 156.2, w: 258.7, h: 263.4, r: 49, delay: 8, dur: 160, op: 0.95 },
  { x: 871.4, y: 19.6, w: 142.2, h: 134.6, r: -33, delay: 52, dur: 138, op: 0.83 },
];
const WAVE = '<svg display="block" role="presentation" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 8.4 7.434 L 8.4 3.565 C 8.4 1.403 8.4 0.323 7.752 0.053 C 7.104 -0.216 6.342 0.548 4.817 2.078 C 4.027 2.87 3.577 3.045 2.453 3.045 C 1.471 3.045 0.98 3.045 0.626 3.282 C -0.106 3.772 0.006 4.731 0.006 5.5 C 0.006 6.269 -0.105 7.228 0.628 7.719 C 0.981 7.955 1.472 7.955 2.454 7.955 C 3.578 7.955 4.028 8.13 4.818 8.922 C 6.342 10.451 7.105 11.216 7.753 10.947 C 8.4 10.677 8.4 9.597 8.4 7.434 Z M 10.5 3.438 C 10.937 4.001 11.2 4.718 11.2 5.5 C 11.2 6.282 10.937 6.999 10.5 7.562 M 12.6 2.063 C 13.475 3.002 14 4.198 14 5.5 C 14 6.802 13.475 7.998 12.6 8.937" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" stroke="#fff" transform="translate(1.001 3)"/></svg>';

export function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [sound, setSound] = useState(false);
  const letters = Array.from(NAMES);
  const waveCss = "url(\"data:image/svg+xml," + encodeURIComponent(WAVE) + "\")";
  return (
    <section className="hero" data-name="Hero - Section">
      <video className="hero-video" src="assets/bg.mp4" autoPlay muted loop playsInline preload="auto" />
      <div className="hero-inner">
        <div className="hero-media">
          <img className="hero-photo" src="assets/hero-photo.avif" alt="two couple together" />
          <div className="hero-title">
            <p className="hero-invite">Inviting you to</p>
            <h1 className="hero-names" aria-label={NAMES}>
              <strong>
              {letters.map((ch, i) => ch === " " ? <span key={i} className="space"> </span> :
                <span key={i} className="ch" style={{animationDelay: (120 + i*32) + "ms"}}>{ch}</span>)}
              </strong>
            </h1>
          </div>
          <div className="hero-petals" aria-hidden>
            {PETALS.map((p,i)=>(
              <div key={i} className="petal" style={{left:p.x,top:p.y,width:p.w,height:p.h,opacity:p.op,animationDelay:(-p.delay)+"s",animationDuration:p.dur+"s"}}>
                <img src="assets/petal.avif" alt="" style={{"--r":p.r+"deg"} as React.CSSProperties} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <a className="hero-cue" href="#intro">
        <span>Scroll Below</span>
        <svg viewBox="0 0 16 16" fill="none" aria-hidden><path d="M8 2.5v10M3.8 8.6 8 12.8l4.2-4.2" stroke="#000" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>
      <button className={"sound"+(sound?" on":" off")} aria-label={sound?"Mute":"Play music"} onClick={()=>{
        const a=audioRef.current; if(!a) return;
        if(sound){a.pause();setSound(false);}else{a.play().then(()=>setSound(true)).catch(()=>setSound(false));}
      }}>
        <span className="sound-icon" style={{"--wave":waveCss} as React.CSSProperties} />
      </button>
      <audio ref={audioRef} src="assets/music.mp3" loop preload="auto" />
    </section>
  );
}
export default Hero;