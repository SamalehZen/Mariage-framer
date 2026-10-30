import { useReveal } from "../hooks/useReveal";
import "./RsvpIntro.css";
export function RsvpIntro() {
  const ref = useReveal<HTMLElement>(0.1);
  return (
    <section className="section rsvp-intro" ref={ref}>
      <p className="rsvp-quote reveal">To be honest, this is a gathering of the people who shaped us and we can't imagine saying I do without you in the room.</p>
      <div className="rsvp-pill reveal">
        <div className="rsvp-info">
          <p className="rsvp-name">August 31, 2026</p>
          <p className="rsvp-addr">RSVP by July 15 at least</p>
        </div>
        <a className="btn-dark" href="./rsvp">Submit RSVP</a>
      </div>
    </section>
  );
}
