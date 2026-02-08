import { useSyncExternalStore } from "react";
import { breakpoints } from "../constants/breakpoints";

const getSnapshot = () => window.innerWidth >= breakpoints.md;

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const useIsDesktop = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
};

export default useIsDesktop;
