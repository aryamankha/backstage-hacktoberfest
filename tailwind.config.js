/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: { 100: "#485ED1", 500: "#485ed1", 700: "#364abd" },
        "dark-gray": "#232428",
        white: "#ffffff",
        gold: { 500: "#ecc55f", 700: "#e2b154", tier: "#FEE39A" },
        black: "#000000",
        diamond: "#D6F7FF",
        silver: "#E0E0E0",
        bronze: "#EBCCAD",
        gray: { 100: "#f3f4f6", 200: "#e5e7eb" },
      },
      fontFamily: {
        sans: [
          "Lato",
          "AvenirNext",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
