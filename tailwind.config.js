/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./scr/*.{css,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ]
}

