/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'truck-pattern': "url('assets/truck.png')",
        'car-pattern': "url('assets/car.png')",
      },
      colors: {
        primary: '#F7B32B',
        black: '#000000',
      },
      fontFamily: {
        "jockey": ['Jockey One', 'sans-serif']
      }
    },
  },
  plugins: [],
}