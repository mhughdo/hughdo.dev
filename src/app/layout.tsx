import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { cookies } from 'next/headers'

import AccessibilityCheck from '@/components/AccessibilityCheck'
import Header from '@/components/Header'
import { COLOR_THEME_COOKIE_NAME } from '@/constants'
import { ColorTheme, ColorThemeType } from '@/types'

import './globals.css'

const afacad = localFont({
  src: '../fonts/Afacad-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-afacad',
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
        <body className='bg-white font-sans antialiased transition duration-500 dark:bg-gray-900'>
          <Header initialTheme={theme} />
          {children}
        </body>
        <Analytics />
      </html>
      <AccessibilityCheck />
    </>
  )
}
