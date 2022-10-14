const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        default: '#D0D6F9',
        primary: '#0B0D17',
      },
      fontFamily: {
        barlow: ['Barlow', ...defaultTheme.fontFamily.sans],
        'barlow-condensed': ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
        bellefair: ['Bellefair', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
