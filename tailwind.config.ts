import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#080D16",
          secondary: "#101827",
          tertiary: "#0B1220",
        },
        card: {
          DEFAULT: "#141F30",
          hover: "#18273D",
          border: "#26354A",
          muted: "#0E1726",
        },
        accent: {
          primary: "#1677FF",
          secondary: "#54A6FF",
          glow: "rgba(22, 119, 255, 0.35)",
          subtle: "rgba(22, 119, 255, 0.12)",
        },
        text: {
          primary: "#F4F7FB",
          secondary: "#A7B4C7",
          muted: "#6B7C95",
        },
        border: {
          DEFAULT: "#26354A",
          light: "#374A66",
          accent: "#1677FF55",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "'Fira Code'",
          "'SFMono-Regular'",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Liberation Mono'",
          "monospace",
        ],
      },
      boxShadow: {
        "electric": "0 0 25px -5px rgba(22, 119, 255, 0.45)",
        "electric-lg": "0 0 50px -10px rgba(22, 119, 255, 0.5)",
        "electric-sm": "0 0 15px -3px rgba(22, 119, 255, 0.3)",
        "card": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 20px 40px -15px rgba(22, 119, 255, 0.2)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "radar-sweep": "radar 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #26354A15 1px, transparent 1px), linear-gradient(to bottom, #26354A15 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(#26354A35 1px, transparent 1px)",
        "hero-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(22, 119, 255, 0.18), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
