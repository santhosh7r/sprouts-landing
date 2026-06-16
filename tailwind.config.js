/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F3",
        beige: "#F5F2EA",
        forest: "#0F5B45",
        emerald: "#15803D",
        gold: "#D4AF37",
        mint: "#DDF7EA",
        inkgreen: "#06201A",
        brand: {
          50: "#ECF5F0",
          100: "#D6EBE0",
          200: "#AEDAC6",
          300: "#7DC0A4",
          400: "#4CA07E",
          500: "#22855B",
          600: "#15803D",
          700: "#0F5B45",
          800: "#0B4233",
          900: "#072A21",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tight2: "-0.02em",
        tight3: "-0.035em",
        tight4: "-0.05em",
      },
      opacity: {
        12: "0.12",
        15: "0.15",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        soft: "0 2px 8px -3px rgba(6,32,26,0.08), 0 10px 30px -12px rgba(6,32,26,0.10)",
        premium: "0 6px 16px -6px rgba(6,32,26,0.10), 0 24px 60px -20px rgba(6,32,26,0.18)",
        lift: "0 14px 30px -10px rgba(6,32,26,0.14), 0 40px 90px -30px rgba(15,91,69,0.30)",
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.65), 0 12px 36px -14px rgba(6,32,26,0.18)",
        gold: "0 10px 30px -10px rgba(212,175,55,0.45)",
        forest: "0 14px 34px -12px rgba(15,91,69,0.50)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        floatSlow: { "0%,100%": { transform: "translateY(0) rotate(0deg)" }, "50%": { transform: "translateY(-22px) rotate(3deg)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        marqueeRev: { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0)" } },
        aurora: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(4%,-3%) scale(1.08)" }, "66%": { transform: "translate(-3%,4%) scale(0.96)" } },
        shimmer: { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "floatSlow 11s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marqueeRev 40s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
      },
    },
  },
  plugins: [],
};
