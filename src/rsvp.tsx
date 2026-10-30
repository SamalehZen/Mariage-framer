import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./rsvp.css";

const SIDE = ["John", "Emily"];
const STEPS = 3;
export function Rsvp() {
  const [step, setStep] = useState(0);
  const [side, setSide] = useState<string | null>(null);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [attend, setAttend] = useState<string | null>(null);
  const [party, setParty] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);
  const [food, setFood] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);
  const next = () => setStep(s => Math.min(STEPS - 1, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));
  if (done) return (
    <main className="rsvp-page">
      <header className="rsvp-head"><p className="eyebrow">RSVP</p><h1>Thank you{first ? ", " + first : ""}.</h1><p className="lede">Your response has been recorded. We can't wait to celebrate with you.</p></header>
    </main>
  );
  return (
    <main className="rsvp-page">
      <header className="rsvp-head">
        <p className="eyebrow">RSVP</p>
        <h1>Will you join us?</h1>
        <p className="lede">We're saying i do and we'd love you beside us for the vows, the toasts, and everything after</p>
      </header>
      <form className="rsvp-form" onSubmit={e=>{e.preventDefault(); if(step<STEPS-1) next(); else setDone(true);}}>
        <div className="rsvp-progress"><span>{step+1} / {STEPS}</span><div className="bar"><i style={{width:((step+1)/STEPS*100)+"%"}} /></div></div>
        {step===0 && (
          <div className="step">
            <p className="q">Which side are you joining from</p>
            <div className="choices">{SIDE.map(s=><button type="button" key={s} className={"choice"+(side===s?" on":"")} onClick={()=>setSide(s)}>{s}</button>)}</div>
          </div>
        )}
        {step===1 && (
          <div className="step">
            <p className="q">Your name</p>
            <div className="row"><input value={first} onChange={e=>setFirst(e.target.value)} placeholder="First Name" aria-label="First Name" /><input value={last} onChange={e=>setLast(e.target.value)} placeholder="Last Name" aria-label="Last Name" /></div>
            <p className="q">Will you attend the wedding?</p>
            <div className="choices">{["Yes","No"].map(s=><button type="button" key={s} className={"choice"+(attend===s?" on":"")} onClick={()=>setAttend(s)}>{s}</button>)}</div>
            <p className="q">After party?</p>
            <div className="choices">{["Yes","No"].map(s=><button type="button" key={s} className={"choice"+(party===s?" on":"")} onClick={()=>setParty(s)}>{s}</button>)}</div>
          </div>
        )}
        {step===2 && (
          <div className="step">
            <p className="q">Number of guests</p>
            <div className="choices">{["1","2","3+"].map(s=><button type="button" key={s} className={"choice"+(guests===s?" on":"")} onClick={()=>setGuests(s)}>{s}</button>)}</div>
            <p className="q">Food preference</p>
            <div className="choices">{["Vegetarian","Non-Veg"].map(s=><button type="button" key={s} className={"choice"+(food===s?" on":"")} onClick={()=>setFood(s)}>{s}</button>)}</div>
            <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Dietary restrictions" aria-label="Dietary restrictions" />
          </div>
        )}
        <div className="rsvp-actions">
          {step>0 && <button type="button" className="ghost" onClick={back}>Back</button>}
          <button type="submit" className="primary">{step===STEPS-1 ? "Submit" : "Next"}</button>
        </div>
      </form>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<Rsvp />);