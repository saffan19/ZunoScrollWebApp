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
        // ZunoScroll Brand Palette - Deep Violet to Sky Blue
        primary: {
          DEFAULT: "#2851FA", // Brand color 1: Deep violet (main brand)
          light: "#8DD8FF", // Brand color 3: Sky blue (lighter shade)
          dark: "#1A35D0", // Darker shade for active states
          verylight: "#0F111A", // Very subtle tint for backgrounds
        },
        accent: {
          DEFAULT: "#8B5CF6", // Vibrant purple (complementary)
        },
        // Status Colors
        success: "#10B981", // Emerald green
        warning: "#F59E0B", // Amber
        error: "#EF4444", // Refined red
        info: "#3B82F6", // Cool blue
        // Background Colors (Dark Mode)
        background: "#000000", // Pure black
        surface: "#1C1C1E", // Slightly lighter
        surfaceElevated: "#2C2C2E", // More prominent elevation
        surfaceInteractive: "#3F3F46", // For buttons, chips
        border: "#27272A", // Subtle borders
        hover: "#3F3F46", // Hover overlay
        // Text Colors (Dark Mode)
        textPrimary: "#FFFFFF", // Pure white
        textSecondary: "#ABABB4", // Brighter for readability
        textTertiary: "#7C7C84", // Hints, placeholders
        textOnPrimary: "#FFFFFF", // White on primary
        textOnSurface: "#FAFAFA", // Pure white
        // Special Colors
        shimmerBase: "#18181B",
        shimmerHighlight: "#3F3F46",
        overlay: "rgba(0, 0, 0, 0.75)",
        glass: "rgba(255, 255, 255, 0.1)",
        shadow: "rgba(0, 0, 0, 0.15)",
        scrim: "rgba(0, 0, 0, 0.32)",
      },
      borderRadius: {
        xl: "1.25rem",
        '2xl': "1.5rem",
        '3xl': "2rem",
        glass: "1.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(40, 81, 250, 0.15)",
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
