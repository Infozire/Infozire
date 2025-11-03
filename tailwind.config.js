// tailwind.config.js
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { lg: "1120px", xl: "1240px" },
    },
    extend: {},
  },
  plugins: [animate],
};
