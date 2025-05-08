/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'animate-text-jerk',
  ],
  theme: {
    colors: {
      
    },
    extend: {
        keyframes: {
          glitchSmall: {
            '0%, 5%': { opacity: '0', transform: 'translate(0, 0)' },
            '7%': { opacity: '1', transform: 'translate(-1px, -1px)' },
            '9%, 15%': { opacity: '0', transform: 'translate(0, 0)' },
            '22%': { opacity: '1', transform: 'translate(2px, -1px)' },
            '24%, 35%': { opacity: '0', transform: 'translate(0, 0)' },
            '50%': { opacity: '1', transform: 'translate(-2px, 2px)' },
            '52%, 75%': { opacity: '0', transform: 'translate(0, 0)' },
            '88%': { opacity: '1', transform: 'translate(1px, -3px)' },
            '90%, 100%': { opacity: '0', transform: 'translate(0, 0)' },
          },
          glitchBig: {
            '0%, 8%': { opacity: '0', transform: 'translate(0, 0)' },
            '10%': { opacity: '1', transform: 'translate(3px, 2px)' },
            '12%, 25%': { opacity: '0', transform: 'translate(0, 0)' },
            '35%': { opacity: '1', transform: 'translate(-4px, 3px)' },
            '37%, 60%': { opacity: '0', transform: 'translate(0, 0)' },
            '75%': { opacity: '1', transform: 'translate(2px, -4px)' },
            '77%, 100%': { opacity: '0', transform: 'translate(0, 0)' },
          },
          glitchJerk: {
            '0%': { transform: 'translate(0, 0)', opacity: '1' },
            '15%': { transform: 'translate(-6px, 3px)', opacity: '0.8' },
            '30%': { transform: 'translate(4px, -4px)', opacity: '0.9' },
            '45%': { transform: 'translate(-3px, 2px)', opacity: '0.7' },
            '60%': { transform: 'translate(2px, -3px)', opacity: '0.85' },
            '100%': { transform: 'translate(0, 0)', opacity: '1' },
          },
        },
        animation: {
          'glitch-jerk': 'glitchJerk 0.5s steps(3, end)',
          'glitch-small': 'glitchSmall 2.5s infinite',
          'glitch-big': 'glitchBig 3s infinite',
        },
      },
  },
  plugins: [],
}

