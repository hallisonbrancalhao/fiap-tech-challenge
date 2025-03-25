const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#004D61',
        secondary: '#FF5031',
        tertiary: '#DEE9EA',
        quarternary: '#F8F8F8',
        black: '#000000',
        highlight: '#47A138',
        gray: {
          background: '#CBCBCB'
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif']
      },
      fontSize: {
        sm: ['0.812rem', { lineHeight: '0.975rem' }],
        '2xl': ['1.562rem', { lineHeight: '1.875rem' }]
      },
      screens: {
        sm: '430',
        md: '780'
      }
    },
  },
  plugins: [],
};
