/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'b-orange' : 'hsl(31, 77%, 52%)',
        'd-cyan' : 'hsl(184, 100%, 22%)',
        'v-d-cyan' : 'hsl(179, 100%, 13%)',
        't-white' : 'hsla(0, 0%, 100%, 0.75)',
        'v-l-gray' : 'hsl(0, 0%, 95%)',
      },
      fontFamily:
      {
        'lexendDeca' : 'Lexend Deca, sans-serif',
        'bigShoulders' : 'ig Shoulders Display, sans-serif',
      },
    },
  },
  plugins: [],
}