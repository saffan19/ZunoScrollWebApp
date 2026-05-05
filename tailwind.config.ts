import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2E8D8",
        paperDeep: "#EADCC4",
        paperSoft: "#F8F1E3",
        cardBg: "#F2E8D8",
        ink: "#1F1A17",
        inkSoft: "#5A4A3D",
        inkMute: "#8C7A68",
        terracotta: "#C8553D",
        terracottaL: "#E07055",
        ochre: "#E0A458",
        sage: "#88A096",
        heroBg: "#1F1A17",
        primary: "#E84037",
        border: "#D8C0A0",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
        script: ["Caveat", "cursive"],
      },
      borderRadius: {
        card: "14px",
        btn: "10px",
        pill: "999px",
        sheet: "24px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(31,26,23,0.08)",
        float: "0 8px 32px rgba(31,26,23,0.12)",
        dialog: "0 20px 60px rgba(31,26,23,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
