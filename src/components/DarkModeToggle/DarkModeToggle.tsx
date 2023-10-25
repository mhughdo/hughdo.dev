'use client'

import { useState } from 'react'
import Cookie from 'js-cookie'

import { SunMoon } from '@/components/Icons'
import { COLOR_THEME_COOKIE_NAME } from '@/constants'
import { ColorTheme, ColorThemeType } from '@/types'

interface DarkModeToggleProps {
  initialTheme: ColorThemeType
  size?: number
}

const DarkModeToggle = ({ initialTheme, size = 25 }: DarkModeToggleProps) => {
  const [theme, setTheme] = useState(initialTheme)
  const reverseTheme = theme === ColorTheme.LIGHT ? ColorTheme.DARK : ColorTheme.LIGHT
  const isDark = theme === ColorTheme.DARK

  function handleToggleTheme() {
    const newTheme = theme === ColorTheme.LIGHT ? ColorTheme.DARK : ColorTheme.LIGHT
    setTheme(newTheme)
    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 1000,
    })

    if (newTheme === ColorTheme.DARK) {
      document.documentElement.classList.add(ColorTheme.DARK)
    } else {
      document.documentElement.classList.remove(ColorTheme.DARK)
    }
  }

  return (
    <button
      aria-label={`Activate ${reverseTheme} mode`}
      title={`Activate ${reverseTheme} mode`}
      onClick={handleToggleTheme}
      className='text-primary opacity-70 hover:opacity-100'>
      <SunMoon width={size} height={size} isDark={isDark} />
      <span className='sr-only'>switch to {reverseTheme} mode</span>
    </button>
  )
}

export default DarkModeToggle
