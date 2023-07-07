import React, { useState, useEffect } from "react";

const useIntersectionObserver = (
  ref: React.Ref<HTMLElement>,
  threshold: number
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef: HTMLElement | null = null;

    if (ref && "current" in ref) {
      currentRef = ref.current;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return { isIntersecting };
};

export default useIntersectionObserver;
