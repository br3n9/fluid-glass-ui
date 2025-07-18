/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
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
        primary: {
          50: 'hsl(var(--fg-primary-hue), 60%, 98%)',
          100: 'hsl(var(--fg-primary-hue), 60%, 95%)',
          200: 'hsl(var(--fg-primary-hue), 60%, 90%)',
          300: 'hsl(var(--fg-primary-hue), 60%, 80%)',
          400: 'hsl(var(--fg-primary-hue), 60%, 70%)',
          500: 'hsl(var(--fg-primary-hue), 60%, 60%)',
          600: 'hsl(var(--fg-primary-hue), 60%, 50%)',
          700: 'hsl(var(--fg-primary-hue), 60%, 40%)',
          800: 'hsl(var(--fg-primary-hue), 60%, 30%)',
          900: 'hsl(var(--fg-primary-hue), 60%, 20%)',
        },
        accent: {
          50: 'hsl(var(--fg-accent-hue), 70%, 98%)',
          100: 'hsl(var(--fg-accent-hue), 70%, 95%)',
          200: 'hsl(var(--fg-accent-hue), 70%, 90%)',
          300: 'hsl(var(--fg-accent-hue), 70%, 80%)',
          400: 'hsl(var(--fg-accent-hue), 70%, 70%)',
          500: 'hsl(var(--fg-accent-hue), 70%, 60%)',
          600: 'hsl(var(--fg-accent-hue), 70%, 50%)',
          700: 'hsl(var(--fg-accent-hue), 70%, 40%)',
          800: 'hsl(var(--fg-accent-hue), 70%, 30%)',
          900: 'hsl(var(--fg-accent-hue), 70%, 20%)',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.2)',
          dark: 'rgba(0, 0, 0, 0.1)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)'],
      },
      fontSize: {
        'xs': 'var(--fg-text-xs)',
        'sm': 'var(--fg-text-sm)',
        'base': 'var(--fg-text-base)',
        'lg': 'var(--fg-text-lg)',
        'xl': 'var(--fg-text-xl)',
        '2xl': 'var(--fg-text-2xl)',
        '3xl': 'var(--fg-text-3xl)',
        '4xl': 'var(--fg-text-4xl)',
        '5xl': 'var(--fg-text-5xl)',
        '6xl': 'var(--fg-text-6xl)',
      },
      spacing: {
        'xs': 'var(--fg-space-xs)',
        'sm': 'var(--fg-space-sm)',
        'md': 'var(--fg-space-md)',
        'lg': 'var(--fg-space-lg)',
        'xl': 'var(--fg-space-xl)',
        '2xl': 'var(--fg-space-2xl)',
      },
      borderRadius: {
        'glass': 'var(--fg-radius-md)',
        'glass-lg': 'var(--fg-radius-lg)',
        'glass-xl': 'var(--fg-radius-xl)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-lg': '40px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' },
          '50%': { boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
