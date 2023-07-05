import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const handleContentVisible = () => {
      if (scrollRef.current) {
        scrollInstance.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });

        // Force Locomotive Scroll to recalculate heights
        scrollInstance.current.update();
      }
    };
    window.addEventListener("react-content-visible", handleContentVisible);

    // Clean up the Locomotive Scroll instance when component unmounts
    return () => {
      window.removeEventListener("react-content-visible", handleContentVisible);

      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  return { scrollRef, scrollInstance };
};

export default useLocomotiveScroll;
