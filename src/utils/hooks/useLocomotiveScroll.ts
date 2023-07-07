import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      console.log("useLocomotiveScroll mounted");

      // Force Locomotive Scroll to recalculate heights
      scrollInstance.current.update();

      scrollInstance.current.on("call", (value) => {
        // value will be 'section1', 'section2', or 'section3' depending on which section is in view
        // You can use this value to update your header
        console.log("-------On call", value);
      });
    }

    // Clean up the Locomotive Scroll instance when component unmounts
    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  return { scrollRef, scrollInstance };
};

export default useLocomotiveScroll;
