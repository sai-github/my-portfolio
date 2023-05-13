/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Telex", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
        serif: ["Averia Serif Libre", "serif"],
      },
    },
  },
  plugins: [],
};
