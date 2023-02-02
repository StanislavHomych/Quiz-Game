/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light-green': 'rgba(93, 121, 82, 0.71)',
        'dark-green': 'rgb(105, 138, 92)',
        'light-blue': '#62B0C5'
      }
    },
    fontFamily: {
      K2D: ['K2D', 'system-ui'],
      Kulim: ['Kulim Park', 'system-ui']
    }
  },
  plugins: []
}
