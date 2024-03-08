/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary' : '#EDC7B7',
        'secondary': '#123C69',
        'third': '#EEE2DC',
        'forth':' #AC3B61',
      },
      
      fontFamily: {
        'lucky' : ['Luckiest\\ Guy','sans-serif'],
        'san' : 'sans-serif',
        'love' : 'Love Ya Like A Sister',
      },

      width :{
        '85' : '22rem',
        '100':'29rem',
      },
    },
    
  },
  plugins: [],
}

