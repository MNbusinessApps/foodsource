/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'butcher': {
          'red': '#dc2626',
          'red-dark': '#b91c1c',
          'gold': '#f59e0b',
          'gold-dark': '#d97706',
          'black': '#0a0a0a',
          'gray-dark': '#1a1a1a'
        }
      },
      backgroundImage: {
        'blood-gradient': 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'premium-gradient': 'linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)',
        'meat-gradient': 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(220, 38, 38, 0.3)',
        'gold-glow': '0 0 20px rgba(245, 158, 11, 0.3)',
      }
    },
  },
  plugins: [],
}