/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        graphite: '#181A1B',
        cyan: {
          DEFAULT: '#10B8EC',
        },
        teal: {
          DEFAULT: '#24D1C6',
        },
        lime: {
          DEFAULT: '#7AD13F',
        },
        red: {
          DEFAULT: '#ED4848',
        },
        yellow: {
          DEFAULT: '#FFD600',
        },
        indigo: {
          DEFAULT: '#6C47FF',
        },
        pink: {
          DEFAULT: '#FF5C8A',
        },
        slate: {
          DEFAULT: '#ECEEF1',
        },
        gunmetal: {
          DEFAULT: '#2D333A',
        },
        // For dark mode body text
        'body-dark': '#ECEEF1',
        'body-bg-dark': '#181A1B',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'Arial', 'sans-serif'],
        body: ['IBM Plex Sans', 'Montserrat', 'system-ui', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 