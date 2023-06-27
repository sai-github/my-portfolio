/** @type {import('tailwindcss').Config} */

// overrides and extensions
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        light: {
          background: "var(--light-background)",
          text: "var(--light-text)",
          primary: "var(--light-primary)",
          secondary: "var(--light-secondary)",
          accent: "var(--light-accent)",
        },
        dark: {
          background: "var(--dark-background)",
          text: "var(--dark-text)",
          primary: "var(--dark-primary)",
          secondary: "var(--dark-secondary)",
          accent: "var(--dark-accent)",
        },
        actions: {
          danger: "#ff4d4f",
          warning: "#e0a800",
          info: "#3399cc",
          success: "#1da54f",
        },
        shades: {
          white: "#ffffff",
          black: "#000000",
          lightGrey: "#ebebeb",
          disabledBlack: "#8b8681",
          disabledWhite: "#fffff7",
        },
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3.75rem",
        "6xl": "6rem",
      },
      fontFamily: {
        raleway: ["Raleway"],
        averiaSerifLibre: ["Averia Serif Libre"],
        telex: ["Telex"],
      },
      boxShadow: {
        "button-default": "2px 2px 0px 0px var(--light-text)",
        "button-hover": "3px 3px 0px 0px var(--light-text)",
        "button-focus": "4px 4px 0px 0px var(--light-text)",
        "button-default-dark": "2px 2px 0px 0px var(--dark-text)",
        "button-hover-dark": "3px 3px 0px 0px var(--dark-text)",
        "button-focus-dark": "4px 4px 0px 0px var(--dark-text)",
        "input-focus-light": "0px 0px 0px 2px #fae7d6",
        "input-focus-dark": "0px 0px 0px 2px #efb680",
        "card-light": "2px 2px 0px 0px var(--light-text)",
        "card-dark": "2px 2px 0px 0px var(--dark-text)",
      },
      borderRadius: {
        none: "0",
        xs: "0.125rem",
        sm: "0.25rem",
        default: "0.3125rem",
        lg: "0.5rem",
        xl: "0.5208387970924377rem",
        "2xl": "0.8886638879776001rem",
        "3xl": "1rem",
        "4xl": "2.648750066757202rem",
        "5xl": "4rem",
        "6xl": "4.688735485076904rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
