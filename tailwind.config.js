/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        priamry_blue: {
          100: 'hsl(243, 100%, 93%)',
          200: 'hsl(229, 7%, 55%)',
          300: 'hsl(228, 56%, 26%)',
          400: 'hsl(229, 57%, 11%)',
        },
        bar_gradient: {
          100: 'hsl(6, 100%, 80%)',
          200: 'hsl(335, 100%, 65%)',
        },
      },
      fontFamily: {
        primary: ['Raleway']
      },
      borderRadius: {
        '4xl': '7rem',
      },
    },
  },
  plugins: [],
}

