import { ColorThemeType } from '@/types'

// https://github.com/vercel/next.js/discussions/53063#discussioncomment-6996549
const code = function () {
  window.__onThemeChange = function () {}

  function setTheme(newTheme: ColorThemeType) {
    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark')
    }
    window.__theme = newTheme
    preferredTheme = newTheme
    window.__onThemeChange(newTheme)
    document.documentElement.dataset.theme = newTheme
    if (newTheme === 'dark') {
      document.documentElement.classList.add(newTheme)
    }
  }

  var preferredTheme

  try {
    preferredTheme = localStorage.getItem('color-theme') as ColorThemeType
  } catch (err) {}

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme)
    try {
      localStorage.setItem('color-theme', newTheme)
    } catch (err) {}
  }

  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  darkQuery.addEventListener('change', function (e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light')
  })

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
}

export const getTheme = `(${code})();`
