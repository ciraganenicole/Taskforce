/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#5D5DFF',
      white: '#FFFFFF',
      paragraph50: '#9BA9B4',
      paragraph100: '#D9E3EA',
      border: '#A3A3A3',
      icon: '#6C0013'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      mono: ['Poppins', 'monospace'],
      heading: ['Poppins', 'sans-serif'],
    },
    screens: {
      tablet: { max: '800px' },
      sm: { max: '640px' },
      md: '801px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
