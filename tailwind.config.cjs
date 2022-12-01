/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'hubot': ['Hubot', ...defaultTheme.fontFamily.mono],
      'mona': ['Mona', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      ...colors,
      primary: colors.white,
      secondary: colors.lime['400'],
      accent: colors.cyan['300'],
    },
    textShadow: {
      'accent': `0 0 24px ${colors.cyan['300']}`,
   },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'wide': '1440px',
    },
		extend: {},
	},
	plugins: [
    require('tailwindcss-textshadow'),
  ],
}
