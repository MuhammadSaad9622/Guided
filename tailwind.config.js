/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d8e0f1',
          200: '#b3c2e4',
          300: '#8da4d7',
          400: '#6886ca',
          500: '#4268bd',
          600: '#345397',
          700: '#273e71',
          800: '#1a294b',
          900: '#0d1424',
        },
      },
    },
  },
  plugins: [],
};