/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sanlorenzoRed: '#db3833', 
        sanlorenzoBlu: '#25245e',
        bgColorPartner: '#e0e0e0',
        bgColorDiv:'#97a2af',
        partner:'#4258ab',

      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}



