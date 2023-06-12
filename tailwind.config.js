/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'ow-orange': '#FC9D1F',
        'ow-grey': '#4D4E53',
      },
      colors: {
        primary: '#FC9D1F',
        secondary: '#4D4E53',
      },
    },
  },
  plugins: [],
}

