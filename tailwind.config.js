const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'main-blue': '#1fb6ff',
        'main-pink': '#ff49db',
        'main-orange': '#ff7849',
        'main-green': '#13ce66',
        'main-gray-dark': '#273444',
        'main-gray': '#8492a6',
        'main-gray-light': '#d3dce6',
        'dark': '#0C1B4D',
        'dark-light': 'rgba(12, 27, 77, 0.6);',
        'primary': '#4A72FF',
        'primary-light': 'rgba(74, 114, 255, 0.05);',
        'main-body': 'linear-gradient(180deg, #eef2ff 0%, rgba(238, 242, 255, 0) 100%)'
      },
      dropShadow: {
        'primary-shadow': '0px 30px 40px rgba(74, 114, 255, 0.25)',
      }
    }
  }
}


