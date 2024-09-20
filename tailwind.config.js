/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': 'rgba(237, 32, 39, 1)',  // Equivalent of hsba(358, 86%, 93%, 1)
      },
      backgroundColor: {
        'custom-gray': 'rgba(60, 60, 60, 0.8)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      textColor: {
        'custom-gray': 'rgba(112, 112, 112, 1)',
      },
      width: {
        '477': '477px', // Custom width
      },
      height: {
        '616': '616px', // Custom height
      },
      inset: {
        '90': '90px', // Custom top spacing
        '482': '482px', // Custom left spacing
      },
      gap: {
        '19': '19px', // Custom gap
      },
      borderRadius: {
        'lg': '20px', // Custom border radius size
      },
      
    },

  },
  plugins: [],
}


