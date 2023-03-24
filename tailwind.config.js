/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  //important: true,
  content: ['./*.html', './js/teacher.js'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [
    require('autoprefixer')
  ]
}
