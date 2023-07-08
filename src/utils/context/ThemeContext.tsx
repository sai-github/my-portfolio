import React, { createContext, useState, useEffect } from "react";

type themeType = "light" | "dark";

interface ThemeContextType {
  theme: themeType;
  toggleTheme: () => void;
  updateTheme: (theme: themeType) => void;
}

const notImplemented = () => {
  throw new Error("toggleTheme is not implemented");
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: notImplemented,
  updateTheme: notImplemented,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<themeType>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const updateTheme = (theme: themeType) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
