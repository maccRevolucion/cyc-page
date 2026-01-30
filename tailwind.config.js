
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1D23',
        'cyan-electric': '#00E5FF',
        'gray-light': '#E8E9ED',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 229, 255, 0.15)',
      }
    },
  },
  plugins: [],
}
