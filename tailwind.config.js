/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '-90': '-90deg',
        '90': '90deg',
        '180': '180deg',
      },
      colors: {
        primaryTitle: '#127369',
        primaryContent: '#4C5958',
        primarySubContent: '#BAA6A3',
        primaryBase: '#a9b5b4',
        primaryAccent:'#104038',
        primaryBg: '#BFBFBF',
      }
    },
  },
  plugins: [],
}

