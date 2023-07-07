import React, { useState, useEffect } from "react";
import useIntersectionObserver from "./useIntersectingObserver";

const useCustomSplineLoad = (ref: React.Ref<HTMLElement>, threshold = 1) => {
  const { isIntersecting } = useIntersectionObserver(ref, threshold);
  const [renderedOnce, setRenderedOnce] = useState(false);

  useEffect(() => {
    if (isIntersecting && !renderedOnce) {
      setRenderedOnce(true);
    }
  }, [isIntersecting, renderedOnce]);

  return { renderedOnce };
};

export default useCustomSplineLoad;
