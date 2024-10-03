import { ReactNode } from 'react'
import clsx from 'clsx'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'

import AccessibilityCheck from '@/components/AccessibilityCheck'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LazyMotion from '@/components/LazyMotion'
import { getTheme } from '@/utils/getTheme'

import './globals.css'
import '../components/MDXComponents/Theme/GithubFromCSS.css'

const uncutSans = localFont({
  src: '../fonts/UncutSans-Variable.woff2',
  display: 'swap',
  variable: '--font-uncut-sans',
  fallback: ['Adjusted Arial Fallback'],
  adjustFontFallback: false,
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
  return (
    <>
      <html lang='en' data-theme={'light'} suppressHydrationWarning className={clsx(uncutSans.variable)}>
        <head>
          <script dangerouslySetInnerHTML={{ __html: getTheme }} />
        </head>
        <body className='flex min-h-dvh flex-col justify-between bg-white font-sans antialiased transition duration-500 dark:bg-gray-900'>
          <LazyMotion>
            <Header />
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
