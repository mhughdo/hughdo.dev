import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { COLOR_THEME_COOKIE_NAME } from '@/constants'
import localFont from 'next/font/local'
import clsx from 'clsx'

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
  const theme = savedTheme?.value || 'light'

  return (
    <html lang='en' className={clsx(theme, firaCode.variable)}>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
