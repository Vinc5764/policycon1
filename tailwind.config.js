/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], //indicates the specific files to apply the tailwind classes
  theme: {
    fontFamily: {
      "cabinet-grotesk": ["Manrope", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      //For custom font family
    },
    screens: {
      //For defining sizes of our screens for responsiveness
      xs: "500px",
      sm: "680px",
      md: "840px",
      lg: "1024px",
      xl: "1280px",
      xll: "1600px",
      xx: "1920",
      xxl: "2560",
      xxxl: "3460",
    },
    extend: {},
  },
  plugins: [], //allows for the introduction of external libraries for styling
};
