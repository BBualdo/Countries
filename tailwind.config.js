/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      lg: "1440px",
      md: "1098px",
      sm: "764px",
    },
    extend: {
      colors: {
        black: "#111517",
        gray: "#848484",
        light: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
