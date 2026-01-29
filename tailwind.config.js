/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'float-x': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' },
        },
        'float-x-reverse': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-20px)' },
        },
      },
      animation: {
        'float-x': 'float-x 8s ease-in-out infinite',
        'float-x-reverse': 'float-x-reverse 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

