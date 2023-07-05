import { useState, useEffect } from "react";
import useIntersectionObserver from "./useIntersectingObserver";

const useCustomSplineLoad = (threshold = 1) => {
  const { ref, isIntersecting } = useIntersectionObserver(threshold);
  const [renderedOnce, setRenderedOnce] = useState(false);

  useEffect(() => {
    if (isIntersecting && !renderedOnce) {
      setRenderedOnce(true);
    }
  }, [isIntersecting, renderedOnce]);

  return { ref, renderedOnce };
};

export default useCustomSplineLoad;
