/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        midnight: '#0B0B0B',
        neon: '#00FF88',
        electric: '#3CFFB0',
        glass: 'rgba(255,255,255,0.06)',
        'glass-border': 'rgba(255,255,255,0.12)',
        muted: '#808080',
        secondary: '#BFBFBF',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 30px rgba(0,255,136,0.25)',
        'neon-lg': '0 0 60px rgba(0,255,136,0.2), 0 0 120px rgba(0,255,136,0.08)',
        electric: '0 0 40px rgba(60,255,176,0.24)',
        glass: '0 24px 80px rgba(0,0,0,0.35)',
        'glass-lg': '0 32px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)',
        'card-hover': '0 28px 90px rgba(0,255,136,0.12), 0 0 40px rgba(60,255,176,0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        'glass-border-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #00FF88, #3CFFB0)',
        'text-gradient': 'linear-gradient(90deg, #00FF88, #3CFFB0, #ffffff)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'aurora-slow': 'aurora 25s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(5%, 3%) rotate(1deg) scale(1.02)' },
          '50%': { transform: 'translate(-3%, 5%) rotate(-1deg) scale(0.98)' },
          '75%': { transform: 'translate(3%, -3%) rotate(0.5deg) scale(1.01)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
