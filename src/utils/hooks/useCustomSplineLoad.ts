import React, { useState, useEffect } from "react";
import useIntersectionObserver from "./useIntersectingObserver";

const useCustomSplineLoad = (
  ref: React.Ref<HTMLElement>,
  { threshold = 0.5, rootMargin = "0px" }
) => {
  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold,
    rootMargin,
  });
  const [renderedOnce, setRenderedOnce] = useState(false);

  useEffect(() => {
    if (isIntersecting && !renderedOnce) {
      setRenderedOnce(true);
    }
  }, [isIntersecting, renderedOnce]);

  return { renderedOnce };
};

export default useCustomSplineLoad;
