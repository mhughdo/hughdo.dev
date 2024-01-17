'use client'
import { useEffect, useState } from 'react'

import { SunMoon } from '@/components/Icons'
import { ColorTheme } from '@/types'

interface DarkModeToggleProps {
  size?: number
}

const DarkModeToggle = ({ size = 25 }: DarkModeToggleProps) => {
  const [theme, setTheme] = useState(global.window?.__theme || ColorTheme.LIGHT)
  const reverseTheme = theme === ColorTheme.LIGHT ? ColorTheme.DARK : ColorTheme.LIGHT
  const isDark = theme === ColorTheme.DARK

  useEffect(() => {
    global.window.__onThemeChange = setTheme
  }, [])

  function handleToggleTheme() {
    global.window?.__setPreferredTheme(theme === ColorTheme.LIGHT ? ColorTheme.DARK : ColorTheme.LIGHT)
  }

  return (
    <button
      aria-label={`Activate ${reverseTheme} mode`}
      title={`Activate ${reverseTheme} mode`}
      onClick={handleToggleTheme}
      className='text-primary-color opacity-70 hover:opacity-100'>
      <SunMoon width={size} height={size} isDark={isDark} />
      <span className='sr-only'>switch to {reverseTheme} mode</span>
    </button>
  )
}

export default DarkModeToggle
