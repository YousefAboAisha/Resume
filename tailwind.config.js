/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#000814",
        primary_dark: "#001d3d",
        primary_light: "#003566",
        secondary_dark: "#ffc300",
        secondary_light: "#ffd60a",
      },
      fontFamily: {
        primary: ["var(--font-ibm)"],
        secondary: ["var(--font-cairo)"],
      },
    },
  },
  plugins: [],
};
