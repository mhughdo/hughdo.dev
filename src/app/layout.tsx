import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { cookies } from 'next/headers'

import Header from '@/components/Header'
import { COLOR_THEME_COOKIE_NAME } from '@/constants'
import { ColorTheme, ColorThemeType } from '@/types'

import './globals.css'

const firaCode = localFont({
  src: '../fonts/FiraCode-VF.woff2',
  display: 'swap',
  variable: '--font-fira-code',
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

export const meta: Metadata = {
  title: 'Hugh Do',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME)
  const theme: ColorThemeType = savedTheme?.value === ColorTheme.DARK ? ColorTheme.DARK : ColorTheme.LIGHT

  return (
    <html lang='en' className={clsx({ [ColorTheme.DARK]: theme === ColorTheme.DARK }, firaCode.variable)}>
      <body className='bg-white font-mono transition duration-500 dark:bg-gray-900'>
        <Header initialTheme={theme} />
        {children}
      </body>
      <Analytics />
    </html>
  )
}
