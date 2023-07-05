import React from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

import "./hero-section.css";
import { useCustomSplineLoad, useIsDesktop } from "../utils/hooks";

const MobileView = () => {
  return (
    <div className="pointer-events-none z-10 mb-24 flex  flex-col justify-end gap-4 text-center">
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
    <div className="wrapper pointer-events-none z-10">
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
  id?: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  const isDesktop = useIsDesktop();
  const { ref, renderedOnce } = useCustomSplineLoad();

  return (
    <section
      ref={ref}
      id={id}
      data-scroll-section
      className="my-section justify-end sm:justify-center"
    >
      {isDesktop ? <DesktopView /> : <MobileView />}
      {renderedOnce && (
        <div className="absolute h-full w-full">
          <Spline scene="https://prod.spline.design/R3qmL30wVLy-6YRF/scene.splinecode" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
