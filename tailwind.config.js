/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'inter' :'var(--regular-text)',
      'interHead' : 'var(--heading-text)'
    },
    extend: {},
  },
  plugins: [],
}