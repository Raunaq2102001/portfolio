/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        serifDisplay: ["DM Serif Display", "serif"],
        pubserifDisplay: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
}
