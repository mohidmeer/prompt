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
        } ,
        'facebook': '#4267B2',
        'twitter': '#1DA1F2',
        'instagram': '#833AB4',
        'discord': '#7289da',
        'pintrest': '#E60023',
        'telegram': ' #229ED9',
        'reddit': '#FF5700',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      flexBasis: {
        '224': '224px',
      },

    },
  },
  plugins: [],
}
