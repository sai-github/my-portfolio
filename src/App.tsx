import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

import "./App.css";
import HeroSection from "./sections/HeroSection";
import { useEffect, useRef } from "react";
import ExperienceSection from "./sections/ExperienceSection";
import ContactMeSection from "./sections/ContactMeSection";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      // Clean up Locomotive Scroll instance when component unmounts
      return () => {
        if (scroll) {
          scroll.destroy();
        }
      };
    }
  }, []);

  return (
    <>
      <div data-scroll-container ref={scrollRef}>
        <HeroSection />
        <ExperienceSection />
        <ContactMeSection />
      </div>
    </>
  );
}

export default App;
