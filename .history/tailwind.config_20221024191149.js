/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'percent': 'percent 3s linear forwards'
      } 
    },
  },
  plugins: [],
}
