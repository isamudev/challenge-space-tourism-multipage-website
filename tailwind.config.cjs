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
      screens: {
        'sm-only': { min: '640px', max: '767px' },
        'md-only': { min: '768px', max: '1023px' },
        'lg-only': { min: '1024px', max: '1279px' },
        'xl-only': { min: '1280px', max: '1535px' },
        '2xl-only': { min: '1536px' },
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
}
