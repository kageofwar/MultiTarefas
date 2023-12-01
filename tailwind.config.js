/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '[#7A7474]': '#7A7474'
      },
      fontFamily: {
        'JetBrains': ['JetBrains Mono'],
        'Galindo': ['Galindo', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}