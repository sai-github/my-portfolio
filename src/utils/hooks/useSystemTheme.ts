import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useSystemTheme = () => {
  const { theme, toggleTheme, updateTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme, updateTheme };
};

export default useSystemTheme;
