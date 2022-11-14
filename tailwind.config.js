/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'thumbs-down': '#F9AD1D',
        'thumbs-up': '#3CBBB4',
      },
      spacing: {
        '4/100': '4%',
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-in',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
