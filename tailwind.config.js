/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        quattrocento: ["Quattrocento", "serif"],
      },
      colors: {
        gray: {
          100: "#F4F4F4",
          300: "#C5CACD",
          500: "#98A1A8",
          700: "#556168",
          900: "#1E272D",
        },
      },
    },
  },
  plugins: [],
};
