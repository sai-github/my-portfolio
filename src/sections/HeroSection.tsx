import useIsDesktop from "../utils/hooks/useIsDesktop";
import "./hero-section.css";

const MobileView = () => {
  return (
    <div className="mb-24 flex flex-col justify-end  gap-4 text-center">
      <h4>
        <span className="">Developer & </span>
        <span className="">Designer</span>
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
    <div className="wrapper">
      <div className="intro flex flex-col justify-center gap-10">
        <h2>
          <span className="">Developer & </span>
          <span className="">Designer</span>
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

const HeroSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section data-scroll-section className="my-section">
      {isDesktop ? <DesktopView /> : <MobileView />}
    </section>
  );
};

export default HeroSection;
