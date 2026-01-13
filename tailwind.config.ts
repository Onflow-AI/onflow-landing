import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core Brand Colors
        primary: '#0e70f9',
        secondary: '#008ba6',
        'brand-blue': '#063268',
        background: '#f8fafc',
        'text-dark': '#003040',

        // Accent Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',

        // Blue Scale
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          400: '#60a5fa',
          500: '#0e70f9',
          600: '#0b5cd5',
          700: '#0847a0',
        },

        // Cyan Scale
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#22d3ee',
          500: '#008ba6',
          600: '#007089',
          700: '#00546b',
        },

        // Gray Scale
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h4': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'eyebrow': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'productive': 'cubic-bezier(0.2, 0, 0.38, 0.9)',
      },
    },
  },
  plugins: [],
};

export default config;
