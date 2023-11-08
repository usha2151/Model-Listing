/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'purple': '#941196',
      'black': '#000000',
      'white': '#FFFFFF',
      'second-black': '#151515',
      'gray':'#D9D9D9',
      'darkgray':'#6A6A6A',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },
    fontSize: {
      'h1': '48px',
      'h2': '40px',
      'h3': '30px',
      'h4': '24px',
      'h5': '18px',
      'h6': '14px',
      'p': '12px',
    },
    
    extend: {},
  },
  plugins: [],
}
