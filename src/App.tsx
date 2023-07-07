import { useRef, useState } from "react";

import "./App.css";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactMeSection from "./sections/ContactMeSection";
import Footer from "@starkit/atomic-components/misc/Footer";
import Header from "@starkit/atomic-components/misc/Header";
import { SECTIONS } from "./utils/constants/sections";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const heroRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const [activeSection, setActiveSection] = useState<SECTIONS>(SECTIONS.HOME);

  const handleNavigate = (value: string) => {
    switch (value) {
      case SECTIONS.HOME: {
        if (heroRef.current) {
          heroRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
      case SECTIONS.EXPERIENCE: {
        if (expRef.current) {
          expRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
      case SECTIONS.CONTACT_ME: {
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
      default: {
        console.warn("[App]", "No scroll instance found");
      }
    }
  };

  const handleActiveSection = (value: SECTIONS) => {
    console.log("[App]", value);

    setActiveSection(value);
  };

  return (
    <>
      <div ref={scrollRef} className="h-screen w-screen overflow-y-auto">
        <Header
          className="fixed top-0 z-50 w-full"
          labels={[SECTIONS.HOME, SECTIONS.EXPERIENCE, SECTIONS.CONTACT_ME]}
          activeLabel={activeSection}
          onNavigate={handleNavigate}
        />

        <HeroSection
          ref={heroRef}
          onInView={() => handleActiveSection(SECTIONS.HOME)}
        />

        <ExperienceSection
          ref={expRef}
          onInView={() => handleActiveSection(SECTIONS.EXPERIENCE)}
        />

        <ContactMeSection
          ref={contactRef}
          onInView={() => handleActiveSection(SECTIONS.CONTACT_ME)}
        />
        <Footer className="fixed bottom-0 w-full" />
      </div>
    </>
  );
}

export default App;
