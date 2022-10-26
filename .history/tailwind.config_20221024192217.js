/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'percent': 'percent 3s linear forwards',

      },
      keyframes:{
        percent: (number) => {
          '100%': {stroke-dasharray: `calc(160 - 160 * ${number})`}
        } 
      }
    },
  },
  plugins: [],
}
