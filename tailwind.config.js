/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'stripes': "linear-gradient(45deg, #ffffff22 25%, transparent 25%, transparent 50%, #ffffff22 50%, #ffffff22 75%, transparent 75%, transparent)",
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          dark: 'rgb(var(--color-secondary) / <alpha-value>)'
        }
      },
      animation: {
        bounce: 'bounce 2s infinite',
        'text-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
