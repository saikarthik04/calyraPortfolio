// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'native-color-white' :'#ebeae6',
        'native-color-black' :'#000',
      },
    },
  },
  plugins: [],
};
