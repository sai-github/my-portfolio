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
        <Header
          className="fixed top-0 z-50 w-full"
          labels={["Home", "Experience", "Contact Me"]}
        />
        <HeroSection />
        <ExperienceSection />
        <ContactMeSection />
        <Footer className="fixed bottom-0 w-full" />
      </div>
    </>
  );
}

export default App;
