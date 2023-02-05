/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
    extend: {
      backgroundImage: {
        'carousel': "url('https://huuhienqt.dev/wp-content/themes/monst/assets/imgs/placeholders/img-15.jpeg)",
      },
      spacing: {
        '355px':"355px",
        '33%': '33%'
      }
    },
  },
  plugins: [],
}
