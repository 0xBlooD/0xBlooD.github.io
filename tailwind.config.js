/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./scr/*.{css,js}"],
  theme: {
    extend: {
      fontFamily: {
        'firacode': ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ]
}

