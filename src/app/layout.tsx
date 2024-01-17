import { ReactNode } from 'react'
import clsx from 'clsx'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import { cookies } from 'next/headers'

import AccessibilityCheck from '@/components/AccessibilityCheck'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LazyMotion from '@/components/LazyMotion'
import { COLOR_THEME_COOKIE_NAME } from '@/constants'
import { ColorTheme, ColorThemeType } from '@/types'

import './globals.css'

const uncutSans = localFont({
  src: '../fonts/UncutSans-Variable.woff2',
  display: 'swap',
  variable: '--font-uncut-sans',
  fallback: ['Adjusted Arial Fallback'],
  adjustFontFallback: false,
})

const robotoMono = localFont({
  src: [
    {
      path: '../fonts/RobotoMono-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../fonts/RobotoMono-SemiBold.woff2',
      style: 'semibold',
      weight: '600',
    },
  ],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const SpeedInsights = dynamic(() => import('../components/VercelSpeedInsights').then((mod) => mod.default))
const Analytics = dynamic(() => import('../components/VercelAnalytics').then((mod) => mod.default))

export const metadata: Metadata = {
  metadataBase: new URL('https://hughdo.dev'),
  title: {
    default: 'Hugh Do',
    template: '%s | Hugh Do',
  },
  description:
    'Focus on creating interactive and easy-to-understand blogs about React, Next.js, Kubernetes, AWS, and more.',
  openGraph: {
    title: 'Hugh Do',
    description:
      'Focus on creating interactive and easy-to-understand blogs about React, Next.js, Kubernetes, AWS, and more.',
    url: 'https://hughdo.dev',
    siteName: 'Hugh Do',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Hugh Do',
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME)
  const theme: ColorThemeType = savedTheme?.value === ColorTheme.LIGHT ? ColorTheme.LIGHT : ColorTheme.DARK

  return (
    <>
      <html
        lang='en'
        data-theme={theme}
        suppressHydrationWarning
        className={clsx({ [ColorTheme.DARK]: theme === ColorTheme.DARK }, uncutSans.variable, robotoMono.variable)}>
        <body className='flex min-h-dvh flex-col justify-between bg-white font-sans antialiased transition duration-500 dark:bg-gray-900'>
          <script
            id='set-color-theme'
            dangerouslySetInnerHTML={{
              __html: `
              const theme = document.cookie.split(';').find((row) => row.startsWith('color-theme=')) || 'color-theme=dark'
              const themeValue = theme.split('=')[1] === 'light' ? 'light' : 'dark'
              if (themeValue !== document.documentElement.getAttribute('data-theme')) {
                if (themeValue === 'dark') {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
              }
              document.documentElement.setAttribute('data-theme', themeValue)
              }
              `,
            }}
          />
          <LazyMotion>
            <Header initialTheme={theme} />
            <div className='flex-1'>{children}</div>
            <Footer />
            {modal}
          </LazyMotion>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>

      <AccessibilityCheck />
    </>
  )
}
