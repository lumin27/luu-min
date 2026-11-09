import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Portfolio Custom Colors
        "electric-blue": "hsl(var(--electric-blue))",
        "electric-blue-light": "hsl(var(--electric-blue-light))",
        "brand-text": "hsl(var(--brand-text))",
        violet: {
          DEFAULT: "hsl(var(--violet))",
          text: "hsl(var(--violet-text))",
        },
        "surface-raised": "hsl(var(--surface-raised))",
        "navy-deep": "hsl(var(--navy-deep))",
        "navy-light": "hsl(var(--navy-light))",
        "glass-bg": "hsl(var(--glass-bg))",
        "glow-color": "hsl(var(--glow-color))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Portfolio Animations
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 12px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        // Used by the shadcn input-otp component.
        "caret-blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "portrait-in": {
          "0%": { opacity: "0", transform: "translate3d(0, 12px, 0) scale(0.98)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0) scale(1)" },
        },
        // Uses `translate` so it composes with the element's centring transform.
        "scroll-cue": {
          "0%, 100%": { translate: "0 0" },
          "50%": { translate: "0 6px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Portfolio Animations
        "fade-up": "fade-up var(--dur-slow) var(--ease-out-expo) both",
        "caret-blink": "caret-blink 1.1s step-end infinite",
        "portrait-in": "portrait-in var(--dur-slow) var(--ease-out-expo) both",
        "scroll-cue": "scroll-cue 2.4s var(--ease-standard) 1.2s 3",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        standard: "var(--ease-standard)",
        accelerate: "var(--ease-in)",
      },
      // Named tokens only: arbitrary `duration-[…]` values are ambiguous between
      // Tailwind core and tailwindcss-animate, so Tailwind silently drops them.
      transitionDuration: {
        press: "var(--dur-press)",
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
        swap: "var(--dur-swap)",
        "menu-in": "var(--dur-menu-in)",
        "menu-out": "var(--dur-menu-out)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
