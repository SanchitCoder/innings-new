/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#40C900',
          dark: '#2fa000',
          light: '#5ddc1a',
        },
        maroon: {
          primary: '#7A001E',
          dark: '#5a0016',
          light: '#9a0026',
        },
        dark: {
          bg: '#0B0B16',
          card: '#12121f',
          border: '#1e1e30',
        },
        gold: '#F4C542',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'pulse-green': 'pulseGreen 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(64,201,0,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(64,201,0,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #40C900 0%, #2fa000 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #7A001E 0%, #5a0016 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0B0B16 0%, #12121f 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0B0B16 0%, #0f1a08 50%, #0B0B16 100%)',
      },
    },
  },
  plugins: [],
};
