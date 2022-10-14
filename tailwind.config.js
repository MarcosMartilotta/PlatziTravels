/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/css/**/*.{html,js}"], //poner la ruta de mi tailwind base sin mencionar al archivo
  theme: {
    extend: {
      inset: {
        '25px': '25px',
      },
      colors: {
        primary:'#34a853', //puedo agregar todos los colores personalizados que quiera
        secondary:'#353535'
      },
      backgroundImage: {
        'sanFrancisco': "url('./img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('./public/img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('./img/yosemite.jpg)", 
			  'LA': "url('./img/LA.jpg')",
			  'seattle': "url('./img/seattle.jpg')",
			  'new_york': "url('./img/new_york.jpg')",
			  'norway': "url('./img/norway.jpg')",   
			  'sydney': "url('./img/sydney.jpg')",
			  'miami': "url('./img/miami.jpg')",
			  'switzerland': "url('./img/switzerland.jpg')",
			  'bali': "url('./img/bali.jpg')",
			  'norway': "url('./img/norway.jpg')",
			  'chicago': "url('./img/chicago.jpg')",
			  'europe': "url('./img/europe.jpg')",
			  'iceland': "url('./img/iceland.jpg')",
      },
      backgroundColor: theme => ({ 
        ...theme('colors'), // con esto logro que tome los colores de tw nativos tambien 
        'primary': '#CC2D4A',
        'secondary':  '#8FA206',
        'terciary': '#61AEC9',

      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary':  '#8FA206',
        'terciary': '#61AEC9',
      }),
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        'sm': '767px',
        'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
