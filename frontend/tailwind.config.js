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
        backscreen:'#050505',
        card:'#0e0e0e',
        red1:'#ea2b03',
      },
      scale: {
        '102': '1.02', // 102% scale
      },
    },
  },
  plugins: [],
}

