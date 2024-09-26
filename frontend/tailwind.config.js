/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        new: '#111111',
        shade:'#3c3c3c',
        line:'#ff4655',
      },
    },
  },
  plugins: [],
}

