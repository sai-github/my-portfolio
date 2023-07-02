import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

import useIsDesktop from "../utils/hooks/useIsDesktop";
import { experienceList as data } from "../content/experience-data";

import ExperienceCard from "@starkit/molecules/experience-card/ExperienceCard";
import Button from "@starkit/atomic-components/buttons/Button";

const ExperienceSection = () => {
  const isDesktop = useIsDesktop();
  return (
    <section className="h-screen w-screen" data-scroll-section>
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        {isDesktop && <Button Icon={ArrowCircleLeft} />}
        {data.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
        {isDesktop && <Button Icon={ArrowCircleRight} />}

        {!isDesktop && (
          <div className="flex gap-8">
            <Button Icon={ArrowCircleLeft} />
            <Button Icon={ArrowCircleRight} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
