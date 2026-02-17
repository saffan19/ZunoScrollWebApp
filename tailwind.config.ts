import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
          dark: "#4F46E5",
          verylight: "#0F111A",
        },
        accent: {
          DEFAULT: "#8B5CF6",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
        background: "#000000",
        surface: "#1C1C1E",
        surfaceElevated: "#2C2C2E",
        surfaceInteractive: "#3F3F46",
        border: "#27272A",
        hover: "#3F3F46",
        textPrimary: "#FFFFFF",
        textSecondary: "#ABABB4",
        textTertiary: "#7C7C84",
        textOnPrimary: "#FFFFFF",
        textOnSurface: "#FAFAFA",
        premiumGradientFrom: "#FFD700",
        premiumGradientTo: "#FF8C00",
      },
      borderRadius: {
        xl: "1.25rem",
        '2xl': "1.5rem",
        '3xl': "2rem",
        glass: "1.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
