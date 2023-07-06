import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

import { experienceList as data } from "../content/experience-data";

import ExperienceCard from "@starkit/molecules/experience-card/ExperienceCard";
import Button from "@starkit/atomic-components/buttons/Button";
import { useCustomSplineLoad, useIsDesktop } from "../utils/hooks";

import Spline from "@splinetool/react-spline";

interface ExperienceSectionProps {
  id?: string;
}

const ExperienceSection = ({ id }: ExperienceSectionProps) => {
  const isDesktop = useIsDesktop();
  const { ref, renderedOnce } = useCustomSplineLoad(0.99);
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <section
      ref={ref}
      id={id}
      className="my-section my-rounded-section items-start sm:justify-between"
      data-scroll-section
    >
      <div className="z-10 mt-32 flex flex-col items-center justify-center gap-6 md:flex-row">
        {isDesktop && (
          <Button
            variant="outline"
            Icon={ArrowCircleLeft}
            onClick={handlePrev}
          />
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} //[0.25, 0.46, 0.45, 0.94]
          >
            <ExperienceCard
              {...data[current]}
              variant={isDesktop ? "small" : "large"}
            />
          </motion.div>
        </AnimatePresence>
        {isDesktop && (
          <Button
            variant="outline"
            Icon={ArrowCircleRight}
            onClick={handleNext}
          />
        )}

        {!isDesktop && (
          <div className="flex gap-8">
            <Button
              variant="outline"
              Icon={ArrowCircleLeft}
              onClick={handlePrev}
            />
            <Button
              variant="outline"
              Icon={ArrowCircleRight}
              onClick={handleNext}
            />
          </div>
        )}
      </div>

      {renderedOnce && (
        <div className="aspect-video w-full sm:aspect-auto ">
          <Spline scene="https://prod.spline.design/IIZ3CCuef7hWRwsS/scene.splinecode" />
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
