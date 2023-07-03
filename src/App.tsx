import { useEffect, useRef } from "react";

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

import "./App.css";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactMeSection from "./sections/ContactMeSection";
import Footer from "@starkit/atomic-components/misc/Footer";
import Header from "@starkit/atomic-components/misc/Header";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const handleContentVisible = () => {
      if (scrollRef.current) {
        scrollInstance.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });

        // Force Locomotive Scroll to recalculate heights
        scrollInstance.current.update();
      }
    };

    window.addEventListener("react-content-visible", handleContentVisible);

    // Clean up the event listener and Locomotive Scroll instance when component unmounts
    return () => {
      window.removeEventListener("react-content-visible", handleContentVisible);
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  const handleNavigate = (value: string) => {
    // map the label to the corresponding section ID
    const idMap: { [key: string]: string } = {
      Home: "hero-section",
      Experience: "experience-section",
      "Contact Me": "contact-section",
    };

    const id = idMap[value];
    if (id && scrollInstance.current) {
      scrollInstance.current.scrollTo(`#${id}`);
    }
  };

  return (
    <>
      <div data-scroll-container ref={scrollRef}>
        <Header
          className="fixed top-0 z-50 w-full"
          labels={["Home", "Experience", "Contact Me"]}
          onNavigate={handleNavigate}
        />
        <HeroSection id="hero-section" />
        <ExperienceSection id="experience-section" />
        <ContactMeSection id="contact-section" />
        <Footer className="fixed bottom-0 w-full" />
      </div>
    </>
  );
}

export default App;
