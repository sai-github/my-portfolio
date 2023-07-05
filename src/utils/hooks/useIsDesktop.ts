import { useEffect, useState } from "react";
import { breakpoints } from "../constants/breakpoints";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= breakpoints.md
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoints.md);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop;
};

export default useIsDesktop;
