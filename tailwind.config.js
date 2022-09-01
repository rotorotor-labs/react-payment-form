/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}", "./public/**/*.{html,css,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#1c1c1c',
      'white': '#ffffff',
      'gray' : '#d5d5d5',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
    },
  },
  plugins: [],
}
