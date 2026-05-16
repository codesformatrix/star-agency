/** ============================================================
 *  STAR WEB DESIGN AGENCY — tailwind.config.js
 *  Extends Tailwind with the full STAR design token system
 *  ============================================================ */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {

      /* ── Colors ──────────────────────────────────────────── */
      colors: {
        bg:      '#FAFAF8',
        'bg-2':  '#F3F1EC',
        dark:    '#111111',
        darker:  '#0A0A0A',

        ink: {
          50:  '#F7F7F6',
          100: '#EBEBEA',
          200: '#D4D4D2',
          400: '#888886',
          600: '#555553',
          800: '#333332',
          900: '#111111',
          DEFAULT: '#111111',
        },

        saffron: {
          50:  '#FDF5E6',
          100: '#FADDAB',
          300: '#F2B24A',
          500: '#E8940A',
          700: '#C67800',
          900: '#8A5200',
          DEFAULT: '#E8940A',
        },
      },

      /* ── Typography ──────────────────────────────────────── */
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        ui:      ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        /* Fluid scale — use these on className */
        'display': ['clamp(3.25rem, 8.5vw, 7.75rem)', {
          lineHeight:    '1.0',
          letterSpacing: '-0.03em',
          fontWeight:    '800',
          fontStyle:     'italic',
        }],
        'h1': ['clamp(2.25rem, 5.5vw, 4.25rem)', {
          lineHeight:    '1.05',
          letterSpacing: '-0.02em',
          fontStyle:     'italic',
        }],
        'h2': ['clamp(1.75rem, 3.2vw, 2.75rem)', {
          lineHeight:    '1.1',
          letterSpacing: '-0.01em',
        }],
        'h3': ['clamp(1.125rem, 1.6vw, 1.375rem)', {
          lineHeight: '1.25',
        }],
        'body-lg': ['clamp(0.9375rem, 1.1vw, 1.0625rem)', {
          lineHeight: '1.75',
        }],
        'label': ['0.625rem', {
          lineHeight:    '1.4',
          letterSpacing: '0.14em',
        }],
      },

      /* ── Spacing ─────────────────────────────────────────── */
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '38':  '9.5rem',
        '42':  '10.5rem',
        '50':  '12.5rem',
        '60':  '15rem',
        '70':  '17.5rem',
        '80':  '20rem',
        '90':  '22.5rem',
        '100': '25rem',
      },

      /* ── Max widths ──────────────────────────────────────── */
      maxWidth: {
        container: '1440px',
        prose:     '68ch',
      },

      /* ── Border radius ───────────────────────────────────── */
      borderRadius: {
        xs:   '3px',
        sm:   '6px',
        md:   '12px',
        lg:   '20px',
        xl:   '32px',
        full: '9999px',
      },

      /* ── Transitions ─────────────────────────────────────── */
      transitionTimingFunction: {
        'out-expo':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'spring':    'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth':    'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      transitionDuration: {
        '400':  '400ms',
        '600':  '600ms',
        '800':  '800ms',
        '1000': '1000ms',
        '1600': '1600ms',
      },

      /* ── Breakpoints ─────────────────────────────────────── */
      screens: {
        xs:  '375px',
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },

      /* ── Z-index ─────────────────────────────────────────── */
      zIndex: {
        raised:  '10',
        sticky:  '50',
        overlay: '100',
        nav:     '200',
        cursor:  '9999',
      },

      /* ── Keyframes ───────────────────────────────────────── */
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(2rem)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'line-grow': {
          from: { scaleX: '0', transformOrigin: 'left' },
          to:   { scaleX: '1', transformOrigin: 'left' },
        },
      },

      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },

  plugins: [],
}