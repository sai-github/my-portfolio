import Header from "../stories/atomic-components/misc/Header";

const HeroSection = () => {
  return (
    <section data-scroll-section className="h-screen w-screen">
      <Header labels={["Home", "Experience", "Contact Me"]} />
      <div className="inline-flex  flex-col items-start justify-start gap-10">
        <div className="self-stretch">
          <span className="text-[60px] font-bold text-black">Developer & </span>
          <span className="text-[60px] font-bold">Designer</span>
        </div>
        <div className="self-stretch text-[30px] font-medium text-black">
          Hi there 👋 <br />
          Bhargava Ramu here, crafting the intersection of Design and Code
        </div>
        <div className="self-stretch text-[18px] font-normal text-black">
          📍Bengaluru, India
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
