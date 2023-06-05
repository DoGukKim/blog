// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontSize: {
      h1: '3.5rem',
      h2: '3rem',
      h3: '2.25rem',
      h4: '2rem',
      h5: '1.5rem',
      h6: '1.25rem',
      h7: '1.0625rem',
      p: '1rem',
      sm: '0.8125rem',
      xs: '0.6875rem',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '70rem',
        },
      },
      listStyleType: {
        circle: 'circle',
      },
      colors: {
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        adaptive: {
          gray: {
            50: 'var(--adaptive-gray-50)',
            100: 'var(--adaptive-gray-100)',
            200: 'var(--adaptive-gray-200)',
            300: 'var(--adaptive-gray-300)',
            400: 'var(--adaptive-gray-400)',
            500: 'var(--adaptive-gray-500)',
            600: 'var(--adaptive-gray-600)',
            700: 'var(--adaptive-gray-700)',
            800: 'var(--adaptive-gray-800)',
            900: 'var(--adaptive-gray-900)',
          },
        },
        // TODO: will set primary color
        primary: 'var(--primary)',
        background: 'var(--background)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
