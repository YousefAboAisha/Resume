/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Containers/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#001",
        primary_dark: "#FB2576",
        primary_light: "#ff3380",
        secondary_dark: "#222",
        secondary_light: "#003566",
      },

      fontFamily: {
        primary: ["var(--font-opensans)"],
        secondary: ["var(--font-cairo)"],
      },

      borderColor: {
        light: "#dddddd1a",
      },

      keyframes: {
        HorizentalMove: {
          "0%, 100%": { transform: "translateY(5px) scale(1)", opacity: 1 },
          "50%": { transform: "translateY(-5px) scale(1.01)", opacity: 1 },
        },
        ShadowPulse: {
          "0%, 100%": { boxShadow: "7px 12px #222222", opacity: 1 },
          "50%": { opacity: 0.9 },
        },
        ScaleEffect: {
          "0%, 100%": { scale: "1", opacity: 1 },
          "50%": { scale: "1.01", opacity: 0.9 },
        },
      },
      animation: {
        HorizentalMove: "HorizentalMove 3.5s linear infinite",
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
