module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      opacity: {
        '76': '.76',
      },
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        marquee: {
          "0%": { transform: 'translateX(0%)' },
          "100%": { transform: 'translateX(-100%)' }
        },
        marquee2: {
          "0%": { transform: 'translateX(100%)' },
          "100%": { transform: 'translateX(0%)' },
        }
      },
      animation: {
        blink: 'blink 2s infinite both'
      }
    }
  },
  plugins: [],
}
