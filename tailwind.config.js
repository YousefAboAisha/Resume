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
        primary_dark: "#FB2576",
        primary_light: "#003566",
        secondary_dark: "#3F0071",
        secondary_light: "#3F0071",
      },
      fontFamily: {
        primary: ["var(--font-ibm)"],
        secondary: ["var(--font-cairo)"],
      },
      keyframes: {
        HorizentalMove: {
          "0%, 100%": { transform: "translateY(10px)", opacity: 1 },
          "50%": { transform: "translateY(-10px)", opacity: 0.8 },
        },
        shadowPulse: {
          "0%, 100%": { boxShadow: "7px 12px #88888890", opacity: 1 },
          "50%": { opacity: 0.9 },
        },
      },
      animation: {
        HorizentalMove: "HorizentalMove 2.5s linear infinite",
        shadowPulse: "shadowPulse 2.5s linear infinite",
      },
    },
  },
  plugins: [],
}
