/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      fontFamily: ["Inter", "sans - serif"],
    },
    colors: {
      gray: "#475569",
      black: "#101828",
      lightGray: "#98a2b3",
      purple: "#6e40d7",
      btnBorder: "#d0d5dd",
      formBorder: "#eaecf0",
      subColor: "#667085",
      white: "#fff",
    },
    container: {
      center: true,
      padding: "3rem",
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
