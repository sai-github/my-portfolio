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
    const handleContentVisible = () => {
      if (scrollRef.current) {
        const scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });

        // Force Locomotive Scroll to recalculate heights
        scroll.update();

        // Clean up Locomotive Scroll instance when component unmounts
        return () => {
          if (scroll) {
            scroll.destroy();
          }
        };
      }
    };

    window.addEventListener("react-content-visible", handleContentVisible);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("react-content-visible", handleContentVisible);
    };
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
