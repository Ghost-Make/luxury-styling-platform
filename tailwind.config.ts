import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        /* Luxury Specific Colors */
        luxury: {
          ivory: "#FDF8F7",
          rose: "#E8D3D0",
          blush: "#E3C8C5",
          black: "#1A1514",
          cocoa: "#523C3A",
        },
        /* Midnight Luxe Theme */
        midnight: {
          obsidian: "#0D0D12",
          champagne: "#C9A84C",
          ivory: "#FAF8F5",
          slate: "#2A2A35",
        }
      },
      transitionTimingFunction: {
        "magnetic": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
        "magnetic": "magnetic 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.5", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(20px)" },
        },
        "magnetic": {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(var(--tw-magnetic-x, 0), var(--tw-magnetic-y, 0))" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
