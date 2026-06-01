/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1A2E25',
        secondary: '#437C6F',
        tertiary: '#F5F5F0',
        neutral: '#282828',
        accent: '#F5F5F0',
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}