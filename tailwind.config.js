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
          "50%": { transform: "translateY(-10px)", opacity: 1 },
        },
        ShadowPulse: {
          "0%, 100%": { boxShadow: "7px 12px #88888890", opacity: 1 },
          "50%": { opacity: 0.9 },
        },
        ScaleEffect: {
          "0%, 100%": { scale: "1", opacity: 1 },
          "50%": { scale: "1.01", opacity: 0.9 },
        },
      },
      animation: {
        HorizentalMove: "HorizentalMove 2.5s linear infinite",
        ShadowPulse: "ShadowPulse 2.5s linear infinite",
        ScaleEffect: "ScaleEffect 4s linear infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('/technology.jpg')",
      },
    },
  },
  plugins: [],
}
