/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2874a1',
        secondary: '#e6f0f8',
      },
      fontFamily: {
        inter: 'var(--font-inter); ',
      },
    },
  },
  plugins: [],
};
