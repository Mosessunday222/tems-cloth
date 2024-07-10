/** @type {import('tailwindcss').Config} */
     // eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      // Logo: 'Roboto Mono, monospace',
      
     logo: 'Oleo Script Swash Caps' 
    },
    extend: {
      colors: {
        pizza: '#123456'
      },

      // fontSize: {
      //   huge :['8rem', { lineHeight: '1' }]

        
      // },

      height : {
        screen: '100dvh'
      }
    },
  },
  plugins: [],
}

