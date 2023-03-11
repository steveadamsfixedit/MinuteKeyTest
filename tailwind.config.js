/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
   ],
   theme: {
   colors: {
     'blue': '#5f8ee4',
     'black': '#19191a',
     'red': '#e4655f',
     'gray': '#e6e6e6',
     'white': '#ffffff',
   },
   fontFamily: {
     sans: ['Open Sans', 'sans-serif'],
     serif: ['Merriweather', 'serif'],
   },
   fontSize: {
      base: ['16px', '24px'],
      xl: ['40px', '48px'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
    }
  }
}
