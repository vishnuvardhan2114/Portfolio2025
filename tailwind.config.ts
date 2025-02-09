import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      fontFamily: {
        roboto_condensed: ['"Roboto Condensed"', 'sans-serif'], 
        bebas_neue: ['"Bebas Neue"', 'sans-serif'],
        dancing_script: ['"Dancing Script"', 'cursive'],
        cabin: ['"Cabin"', 'sans-serif'],
        source_code_pro: ['"Source Code Pro"', 'monospace'],
        londrina_sketch: ['"Londrina Sketch"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

export default config

