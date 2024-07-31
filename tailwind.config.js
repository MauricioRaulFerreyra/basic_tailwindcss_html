/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#3b82f6',
        'azul-oscuro': '#172554'
      },
      spacing: {
        18: '50%'
      },
      width: {
        20: '600px'
      }
    }
  },
  plugins: []
}
