import typography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

import { type Config } from 'tailwindcss'

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
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      containerLine: 'rgb(var(--color-container-line) / calc(var(--line-opacity) * 3))',
      runningLine: 'hsl(var(--color-running-line))',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      'geist-text-gradient': 'rgba(0,0,0,.8)',
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
      sky: colors.sky,
      blue: colors.blue,
      slate: colors.slate,
      indigo: colors.indigo,
      amber: colors.amber,
      zinc: colors.zinc,
      orange: colors.orange,
      yellow: colors.yellow,
      red: colors.red,
      violet: {
        500: colors.violet[500],
      },
    },
    extend: {
      fontFamily: {
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
        sans: ['var(--font-uncut-sans)', ...fontFamily.sans],
      },
      colors: {
        slate: {
          500: 'var(--color-slate-500)',
        },
        blue: {
          600: 'oklch(var(--hey-start-gradient))',
        },
        teal: {
          600: 'oklch(var(--hey-end-gradient))',
        },
        violet: {
          700: 'oklch(var(--im-start-gradient))',
        },
        pink: {
          600: 'oklch(var(--im-end-gradient))',
        },
        rose: {
          600: 'oklch(var(--hughdo-start-gradient))',
        },
        yellow: {
          500: 'oklch(var(--hughdo-end-gradient))',
        },
      },
      backgroundImage: ({ theme }) => ({
        'horizontal-intro-line': `linear-gradient(to right,${theme('colors.containerLine')},${theme(
          'colors.containerLine'
        )} 50%,transparent 0,transparent)`,
        'vertical-intro-line': `linear-gradient(to bottom,${theme('colors.containerLine')},${theme(
          'colors.containerLine'
        )} 50%,transparent 0,transparent)`,
        'running-line': `conic-gradient(from 0deg at 50% 51.35%,rgba(185,215,243,0) 0deg,rgba(185,215,243,0) 289.4deg,${theme(
          'colors.runningLine'
        )} 318.05deg,${theme(
          'colors.runningLine'
        )} 1turn),conic-gradient(from 180deg at 50% 51.35%,rgba(185,215,243,0) 0deg,rgba(185,215,243,0) 287.46deg,${theme(
          'colors.runningLine'
        )} 325.02deg,${theme('colors.runningLine')} 1turn)`,
      }),
      backgroundSize: {
        'horizontal-intro-line-size': 'var(--line-gap) var(--line-width)',
        'vertical-intro-line-size': 'var(--line-width) var(--line-gap)',
      },
      keyframes: {
        'animated-gradient-hey-text-fade-foreground': {
          '0%, 16.667%, 100%': { opacity: '1' },
          '33.333%, 83.333%': { opacity: '0' },
        },
        'animated-gradient-hey-text-fade-background': {
          '0%, 16.667%, 100%': { opacity: '0' },
          '25%, 91.667%': { opacity: '1' },
        },
        'animated-gradient-im-text-fade-foreground': {
          '0%, 100%': { opacity: '0' },
          '33.333%, 50%': { opacity: '1' },
          '16.667%, 66.667%': { opacity: '0' },
        },
        'animated-gradient-im-text-fade-background': {
          '0%, 100%': { opacity: '1' },
          '33.333%, 50%': { opacity: '0' },
          '25%, 58.333%': { opacity: '1' },
        },
        'animated-gradient-hughdo-text-fade-foreground': {
          '0%, 50%, 100%': { opacity: '0' },
          '66.667%, 83.333%': { opacity: '1' },
        },
        'animated-gradient-hughdo-text-fade-background': {
          '0%, 58.333%, 91.667%, 100%': { opacity: '1' },
          '66.667%, 83.333%': { opacity: '0' },
        },
        'intro-line-width': {
          '0%': { opacity: '1' },
          '100%': { width: 'calc(100% + var(--horizontal-line-offset))', opacity: '0.3' },
        },
        'intro-line-height': {
          '0%': { opacity: '1' },
          '100%': { height: 'calc(100% + var(--line-offset))', opacity: '0.3' },
        },
        'dotted-circle': {
          '100%': { opacity: '1' },
        },
        'running-line': {
          '100%': {
            transform: 'translate(-50%,-50%) rotate(1turn)',
          },
        },
      },
      animation: {
        'hey-text-foreground': 'animated-gradient-hey-text-fade-foreground 8s infinite',
        'hey-text-background': 'animated-gradient-hey-text-fade-background 8s infinite',
        'im-text-foreground': 'animated-gradient-im-text-fade-foreground 8s infinite',
        'im-text-background': 'animated-gradient-im-text-fade-background 8s infinite',
        'hughdo-text-foreground': 'animated-gradient-hughdo-text-fade-foreground 8s infinite',
        'hughdo-text-background': 'animated-gradient-hughdo-text-fade-background 8s infinite',
        'intro-line-width': 'intro-line-width var(--line-a-duration) var(--line-a-delay) var(--line-a-easing) forwards',
        'intro-line-height':
          'intro-line-height var(--line-a-duration) var(--line-a-delay-plus) var(--line-a-easing) forwards',
        'dotted-circle':
          'dotted-circle var(--line-a-duration-half) var(--line-a-delay-ultra) var(--line-a-easing) forwards',
        'running-line': 'running-line 10s infinite linear',
      },
    },
  },
  plugins: [typography],
} satisfies Config
