import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Faq.css";
const QA = [
  ["What time should I arrive?","We recommend arriving 30 minutes before the ceremony begins so you have plenty of time to settle in and enjoy the moment."],
  ["Will the ceremony be indoors or outdoors?","Our celebration will take place in a beautiful outdoor setting, so we recommend dressing comfortably for the season."],
  ["How do I RSVP?","Simply click the RSVP button and submit your response before the requested date. We can't wait to celebrate with you!"],
  ["Are children welcome?","We adore your little ones! Please refer to your invitation for specific guest details."],
  ["Can I take photos during the ceremony?","We kindly invite everyone to be fully present during the ceremony. There will be plenty of opportunities to capture memories afterward."],
  ["Is there a dress code?","We'll be dressing up in formal, semi-formal attire — think garden-party elegant. Come in something that makes you feel wonderful, and get ready to dance."],
];
export function Faq() {
  const ref = useReveal<HTMLElement>(0.1);
  const [open,setOpen] = useState<number|null>(null);
  return (
    <section className="section faq" id="cctwd2" ref={ref}>
      <div className="faq-content">
        <div className="faq-title">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h3>Here are answers to your questions</h3>
        </div>
        <div className="accordion">
          {QA.map(([q,a],i)=>(
            <div className={"acc-item"+(open===i?" open":"")} key={q}>
              <button className="acc-btn" aria-label={open===i?"Close":"Open"} onClick={()=>setOpen(open===i?null:i)}><span className="acc-icon" /></button>
              <div className="acc-question" onClick={()=>setOpen(open===i?null:i)}>
                <p>{q}</p>
                <div className="acc-answer"><p>{a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
