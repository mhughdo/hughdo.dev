import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      gray: {
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
      slate: {
        500: 'var(--color-slate-500)',
      },
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      amber: colors.amber,
    },
    extend: {
      fontFamily: {
        mono: ['var(--font-fira-code)', 'var(--font-roboto-mono)', ...fontFamily.mono],
      },
      typography: (theme: any) => {
        // some fontSizes return [size, props], others just size :/
        const fontSize = (size: string) => {
          const result = theme(`fontSize.${size}`)
          return Array.isArray(result) ? result[0] : result
        }

        return {
          DEFAULT: {
            css: [
              {
                p: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
                a: {
                  textDecoration: 'none',
                },
                'a:hover,a:focus': {
                  textDecoration: 'underline',
                  outline: 'none',
                },
                strong: {
                  fontWeight: theme('fontWeight.medium'),
                  fontSize: fontSize('lg'),
                },
                hr: {
                  marginTop: theme('spacing.8'),
                  marginBottom: theme('spacing.16'),
                },
                ul: {
                  listStyle: 'none',
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                },
                ol: {
                  listStyle: 'none',
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                },
                'h1, h2, h3, h4, h5, h6': {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme('fontWeight.normal'),

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontWeight: theme('fontWeight.medium'),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                'h1, h2': {
                  fontSize: fontSize('2xl'),
                  marginTop: theme('spacing.20'),
                  marginBottom: theme('spacing.10'),
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('3xl'),
                  },
                },
                h3: {
                  fontSize: fontSize('xl'),
                  marginTop: theme('spacing.16'),
                  marginBottom: theme('spacing.10'),
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('2xl'),
                  },
                },
                'h4, h5, h6': {
                  fontSize: fontSize('lg'),
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('xl'),
                  },
                },
              },
            ],
          },
          light: {
            css: [
              {
                color: theme('colors.gray.500'),
                a: {
                  color: theme('colors.black'),
                },
                strong: {
                  color: theme('colors.black'),
                },
                hr: {
                  borderColor: theme('colors.gray.200'),
                },
                code: {
                  color: theme('colors.gray.800'),
                },
                'h1, h2, h3, h4, h5, h6, thead th': {
                  color: theme('colors.black'),
                },
              },
            ],
          },
          dark: {
            css: [
              {
                color: theme('colors.slate.500'),
                a: {
                  color: theme('colors.white'),
                },
                strong: {
                  color: theme('colors.white'),
                },
                hr: {
                  borderColor: theme('colors.gray.600'),
                },
                code: {
                  color: theme('colors.gray.100'),
                },
                'h1, h2, h3, h4, h5, h6, thead th': {
                  color: theme('colors.white'),
                },
              },
            ],
          },
        }
      },
    },
  },
  plugins: [],
} satisfies Config
