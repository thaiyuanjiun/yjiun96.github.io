
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  purge: [
  './public/**/*.html',
  './src/**/*.vue'
     ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
