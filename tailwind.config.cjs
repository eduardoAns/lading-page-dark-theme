/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100:'hsl(217, 28%, 15%)',
          200:'hsl(218, 28%, 13%)',
          300:'hsl(216, 53%, 9%)',
          400:'hsl(219, 30%, 18%)',
        },
        white:{
          100:'hsl(0, 0%, 100%)'
        } ,
        blue:{
          100:'hsl(198, 60%, 50%)'
        },
        cyan:{
          100:'hsl(170, 68%, 64%)'
        } ,
        red:{
          100:'hsl(0, 100%, 63%)'
        },
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        
      },
      backgroundImage: {
        'hero-pattern': "url('/images/illustration-intro.png')",
      },
      spacing: {
        '3/10': '30%',
        'screen-1/2':'50vh',
        'screen-3/4':'75vh',
        'screen-3/2':'150vh',
        'screen-7/4':'175vh',
        'screen-2/1':'200vh'

      }
    },
  },
  plugins: [],
}
