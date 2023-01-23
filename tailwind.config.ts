const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'Inter', ...defaultTheme.fontFamily.sans],
        'mono' : ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
      },
    },
  },
  plugins: [],
}
