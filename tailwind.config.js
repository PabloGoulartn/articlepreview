 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'GrayBlue': 'hsl(212, 23%, 69%)',
        'LightGrayBlue': 'hsl(210, 46%, 95%)',
        'DarkGrayBlue': 'hsl(217, 19%, 35%)',
        'DarkBlue': 'hsl(214, 17%, 51%)',
      },
      fontFamily: {
        Manrope: ['"Manrope"', "Sans-serif"],
      }
    },
  },
  plugins: [],
}