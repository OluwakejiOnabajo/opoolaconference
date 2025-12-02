import AboutPage from "./components/About";
import CallForPapersPage from "./components/CallForPapers";
import ContactPage from "./components/Contact";
import Hero from "./components/Hero";
import SpeakersPage from "./components/Speakers";
import ThemePage from "./components/Theme";

export default function Home() {
  return (
    <>
      <div id="home">
      <Hero />
        </div>

      <div id="about">
      <AboutPage />
        </div>
      <div id="theme">
      <ThemePage />
        </div>
      <div id="call-for-papers">
        <CallForPapersPage />
        </div>
      <div id="speakers">
      <SpeakersPage />
        </div>
      <div id="contact">
      <ContactPage />
        </div>


    </>
  );
}
