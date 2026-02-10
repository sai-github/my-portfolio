import { useState, forwardRef, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  RefreshLeftSquare,
} from "iconsax-react";

import { experienceList as data } from "../content/experience-data";

import ExperienceCard from "@starkit/molecules/experience-card/ExperienceCard";
import Button from "@starkit/atomic-components/buttons/Button";
import {
  useCustomSplineLoad,
  useIsDesktop,
  useSectionInView,
} from "../utils/hooks";
import { Application, SPEObject } from "@splinetool/runtime";

interface ExperienceSectionProps {
  onInView: () => void;
}

const ExperienceSection = forwardRef<HTMLElement, ExperienceSectionProps>(
  ({ onInView }, ref) => {
    const isDesktop = useIsDesktop();
    const { renderedOnce } = useCustomSplineLoad(ref, {
      threshold: 1,
    });
    const [current, setCurrent] = useState(0);
    useSectionInView(ref, onInView);
    const plane = useRef<SPEObject | null>(null);
    const drone = useRef<SPEObject | null>(null);

    const handleNext = () => {
      setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
      setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    // onload get plane obj
    const onLoad = (spline: Application) => {
      const planeObj = spline.findObjectByName("Plane Group");
      const droneObj = spline.findObjectByName("Drone Cam");

      if (planeObj && droneObj) {
        plane.current = planeObj;
        drone.current = droneObj;
      }
    };

    const replayScene = () => {
      if (plane && drone) {
        plane.current?.emitEvent("mouseDown");
        drone.current?.emitEvent("mouseDown");
      }
    };

    return (
      <section
        ref={ref}
        className="my-section my-rounded-section items-start justify-between"
      >
        <div className="flex min-h-[28rem] flex-col items-center justify-center gap-6 md:flex-row">
          {isDesktop && (
            <Button
              variant="outline"
              Icon={ArrowCircleLeft}
              aria-label="Previous experience"
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
                variant={isDesktop ? "large" : "small"}
              />
            </motion.div>
          </AnimatePresence>
          {isDesktop && (
            <Button
              variant="outline"
              Icon={ArrowCircleRight}
              aria-label="Next experience"
              onClick={handleNext}
            />
          )}

          {!isDesktop && (
            <div className="flex gap-8">
              <Button
                variant="outline"
                Icon={ArrowCircleLeft}
                aria-label="Previous experience"
                onClick={handlePrev}
              />
              <Button
                variant="outline"
                Icon={ArrowCircleRight}
                aria-label="Next experience"
                onClick={handleNext}
              />
            </div>
          )}
        </div>

        {renderedOnce && (
          <div className="relative mb-8 aspect-video w-full flex-shrink-0 xl:mb-0 xl:h-1/2">
            <Spline
              scene="https://prod.spline.design/IIZ3CCuef7hWRwsS/scene.splinecode"
              onLoad={onLoad}
            />
            <Button
              className="absolute bottom-0 right-0 mb-2 mr-2 sm:mb-8 sm:mr-8"
              variant="secondary"
              Icon={RefreshLeftSquare}
              aria-label="Replay scene"
              onClick={() => replayScene()}
            />
          </div>
        )}
      </section>
    );
  }
);

export default ExperienceSection;
