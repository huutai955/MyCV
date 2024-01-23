/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192fd9',
        'grey-custom': '#ccd6f6',
        'grey-custom2': '#8892b0',
        'hover-color': '#64ffda',
        'dark-navy': '#020c1b'
      },
      screens: {
        '325px': '325px',
        '680px': '680px',

        '768px': '768px',

        '992px': '992px',

        '1024px': '1024px',
      },
    },
  },
  plugins: [],
}

