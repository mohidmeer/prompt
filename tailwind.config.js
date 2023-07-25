/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        dark:{
           'background':'#1a1b1e',
           'border':'#373a40',
           'text':'#c1c2c5',     
           'light':'#25262b',
           'muted':'#495057',
           'hover':'#383a3f',
           'button':'#2c2e33',
           'success':'#2b8a3e',
           'info':'#1864ab',
        } ,
        light:{
           'background':'#ffffff',
           'border':'#dee2e6',
           'light':'#ffffff',
           'muted':'#b6bdc4',
           'success':'#2b8a3e',
           'info':'#1864ab',
        } 
      },




      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
