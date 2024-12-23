/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#f5f7fa',
        customBlue: "#718ebf",
        customBlueDark: "#396aff",
        customBlack: "#343C6A",
        grayCustom: "#5B5A6F"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'], // For Lato font
        inter: ['Inter', 'sans-serif'], // For Inter font
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounceText: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

