/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /**
         * Brand navy, sampled from the club emblem in logo_mark.png (#204060).
         * brand-800 is the logo ink itself: buttons and mark share one colour.
         * All steps 600+ clear WCAG AA against white and stone-50.
         */
        brand: {
          50: '#f2f6fa',
          100: '#e3edf5',
          200: '#c3d8e9',
          300: '#94b9d5',
          400: '#5d92b8',
          500: '#3a719c',
          600: '#2b5a82',
          700: '#244969',
          800: '#1e4462',
          900: '#16324a',
        },
        /**
         * Warm ochre for eyebrow labels, numerals and icon accents.
         * Replaces the former crimson `accent`, which read as an error colour
         * and sat at 4.50:1 on stone-50 — marginally under AA.
         */
        ochre: {
          50: '#fdf8ef',
          100: '#f8ecd5',
          200: '#efd5a6',
          300: '#e0b76d',
          400: '#c9933c',
          500: '#a87420',
          600: '#8a5a10',
          700: '#6f480c',
          800: '#5a3a0b',
          900: '#4a300a',
        },
        /**
         * Reserved exclusively for genuine caution (the waiting-period notice).
         * Nothing decorative may use this scale.
         */
        caution: {
          50: '#fef6f6',
          100: '#fde8e8',
          200: '#f9cccc',
          600: '#a32b2b',
          700: '#8a2323',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
