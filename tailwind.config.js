/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Paleta Premium Cafeteria Dev
        primary: {
          black: "#000000",
          brown: "#2D1B14",
          "brown-light": "#3D2B1E",
        },
        secondary: {
          gold: "#D4AF37",
          copper: "#B87333",
          "copper-light": "#CD853F",
        },
        accent: {
          "gold-bright": "#FFD700",
          "gold-glow": "#FFF700",
          warm: "#8B4513",
        },
        background: {
          dark: "#0A0A0A",
          "brown-matte": "#1A1A1A",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        elegant: ["Cormorant Garamond", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "parallax": "parallax 20s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #D4AF37, 0 0 10px #D4AF37" },
          "100%": { boxShadow: "0 0 10px #FFD700, 0 0 20px #FFD700" },
        },
        parallax: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
