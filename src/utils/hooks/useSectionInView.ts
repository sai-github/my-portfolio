// hooks/useSectionInView.ts

import React, { useEffect } from "react";

const useSectionInView = (
  ref: React.Ref<HTMLElement>,
  onInView: () => void
) => {
  useEffect(() => {
    let currentRef: HTMLElement | null = null;
    if (ref && "current" in ref) {
      currentRef = ref.current;
    }
    const observer = new IntersectionObserver(
      (args) => {
        const [entry] = args;
        if (entry.isIntersecting) {
          onInView();
        }
      },
      {
        threshold: 0.55, // active section is decided based on majority of view occupied
      }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, onInView]);
};

export default useSectionInView;
