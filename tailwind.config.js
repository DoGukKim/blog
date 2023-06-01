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
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1248px',
        },
      },
      colors: {
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
}
