/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: '#87CEEB',
        lightGreen: '#90EE90',
        darkGreen: '#2E8B57',
        brown: '#A52A2A',
      },
    },
  },
  plugins: [],
}