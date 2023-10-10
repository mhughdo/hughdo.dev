import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { COLOR_THEME_COOKIE_NAME } from '@/constants'

export const meta: Metadata = {
  title: 'Hugh Do',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME)
  const theme = savedTheme?.value || 'light'

  return (
    <html lang='en'>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
