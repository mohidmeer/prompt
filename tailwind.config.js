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
      colors: {
        'app': '#EAEAE9',
        'dark': '#FFFFFF',
        'dark-2': '#FFFFFF',
        'green': '#55b947',
        'facebook': '#4267B2',
        'twitter': '#1DA1F2',
        'instagram': '#833AB4',
        'discord': '#7289da',
        'pintrest': '#E60023',
        'telegram': ' #229ED9',
        'reddit': '#FF5700',
        
      },

      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
