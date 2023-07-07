import React from "react";

import Spline from "@splinetool/react-spline";
import { Application, SplineEvent } from "@splinetool/runtime";

import "./hero-section.css";
import {
  useCustomSplineLoad,
  useIsDesktop,
  useSectionInView,
  useSystemTheme,
} from "../utils/hooks";

const MobileView = () => {
  return (
    <div
      className="pointer-events-none z-10 mb-24 flex  flex-col justify-end gap-4 text-center"
      data-scroll
    >
      <h4>
        <span className="">Developer & </span>
        <span className="text-gradient">Designer</span>
      </h4>
      <h6>
        Hi there 👋 <br />
        Bhargava Ramu here, crafting the intersection of Design and Code
      </h6>
      <div className="small">📍Bengaluru, India</div>
    </div>
  );
};

const DesktopView = () => {
  return (
    <div className="wrapper pointer-events-none z-10" data-scroll-speed="2">
      <div className="intro flex flex-col justify-center gap-10">
        <h2>
          <span className="">Developer & </span>
          <span className="text-gradient">Designer</span>
        </h2>
        <h4 className="max-w-xl">
          Hi there 👋 <br />
          Bhargava Ramu here, crafting the intersection of Design and Code
        </h4>
        <div className="subtitle">📍Bengaluru, India</div>
      </div>
    </div>
  );
};

interface HeroSectionProps {
  onInView: () => void;
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ onInView }, ref) => {
    const isDesktop = useIsDesktop();
    const { theme, setTheme } = useSystemTheme();

    useSectionInView(ref, onInView);
    const { renderedOnce } = useCustomSplineLoad(ref, 0.5);

    // onload check if the view should be desktop/mobile
    const onLoad = (spline: Application) => {
      const room = spline.findObjectByName("Room Object");
      const night = spline.findObjectByName("Night");

      // switch theme state
      if (theme === "dark") {
        // the state are defined in spline to handle this action on night button
        night?.emitEvent("mouseDown");
      }

      // switch to mobile state
      if (!isDesktop) {
        room?.emitEvent("keyDown");
      }
    };

    // handle theme switch
    const handleThemeToggle = (e: SplineEvent) => {
      if (e.target.name === "Day") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    return (
      <section ref={ref} className="my-section justify-end sm:justify-center">
        {isDesktop ? <DesktopView /> : <MobileView />}

        {renderedOnce && (
          <div className="absolute h-full w-full">
            <Spline
              scene="https://prod.spline.design/R3qmL30wVLy-6YRF/scene.splinecode"
              onLoad={onLoad}
              onMouseDown={handleThemeToggle}
            />
          </div>
        )}
      </section>
    );
  }
);

export default HeroSection;
