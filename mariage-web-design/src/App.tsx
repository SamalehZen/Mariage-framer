import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Venue } from "./components/Venue";
import { Story } from "./components/Story";
import { Timeline } from "./components/Timeline";
import { RsvpIntro } from "./components/RsvpIntro";
import { Details } from "./components/Details";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import "./styles/global.css";
import "./styles/shared.css";
export default function App() {
  return (
    <div className="page">
      <Hero />
      <Intro />
      <Venue />
      <Story />
      <Timeline />
      <RsvpIntro />
      <Details />
      <Faq />
      <Footer />
    </div>
  );
}
