/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222222",     // Deep Charcoal
        secondary: "#7B7B7B",   // Soft Grey
        background: "#F8F8F8",  // Off-White
        accent: "#FFFFFF",      // Pure White
      },
      fontFamily: {
        // Menggunakan Inter atau Sans umum yang elegan
        sans: ['Inter', 'sans-serif'], 
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
      }
    },
  },
  plugins: [],
}