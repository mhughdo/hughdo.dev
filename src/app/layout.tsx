import React from 'react'
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

const afacad = localFont({
  src: [
    {
      path: '../fonts/Afacad-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Afacad-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/Afacad-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-afacad',
  fallback: ['Adjusted Arial Fallback'],
  adjustFontFallback: false,
})

// const robotoMono = localFont({
//   src : [
//     {
//       path: "../fonts/RobotoMono-Regular.woff",
//       style: "normal",
//       weight: "400",
//     },
//     {
//       path: "../fonts/RobotoMono-SemiBold.woff2",
//       style: "semibold",
//       weight: "600",
//     },
//   ],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// }
// )

const SpeedInsights = dynamic(() => import('../components/VercelSpeedInsights').then((mod) => mod.default))
const Analytics = dynamic(() => import('../components/VercelAnalytics').then((mod) => mod.default))

export const metadata: Metadata = {
  title: 'Hugh Do',
  description: 'Focus on creating interactive and user-friendly blogs about React, Next.js, Kubernetes, AWS, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME)
  const theme: ColorThemeType = savedTheme?.value === ColorTheme.DARK ? ColorTheme.DARK : ColorTheme.LIGHT

  return (
    <>
      <html lang='en' className={clsx({ [ColorTheme.DARK]: theme === ColorTheme.DARK }, afacad.variable)}>
        <body className='flex min-h-dvh flex-col justify-between bg-white font-sans antialiased transition duration-500 dark:bg-gray-900'>
          <LazyMotion>
            <Header initialTheme={theme} />
            <div className='flex-1'>{children}</div>
            <Footer />
            <SpeedInsights />
          </LazyMotion>
          <Analytics />
        </body>
      </html>
      <AccessibilityCheck />
    </>
  )
}
