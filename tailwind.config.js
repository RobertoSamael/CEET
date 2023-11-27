/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      'ceet1': '#0B1D41',
      'ceet2': '#24324C',
      'ceet3': '#00C8BF',
      'ceet4': '#A8E4E4',
      'ceet5': '#FF9302',
      'ceet6': '#FED500',
    },
    fontFamily: {
      Poppins: 'Poppins',
    },
    backgroundImage: {
      'hero-bg': "url('/assets/Homepagebg.jpg')",
    },
  },
  plugins: [],
  }
}
