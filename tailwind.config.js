/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        redLi: '#ff6b6b',
      },
    },
  },
  plugins: [require('daisyui')],
};
