export * from './content'

const ColorTheme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export type ColorThemeType = (typeof ColorTheme)[keyof typeof ColorTheme]
export { ColorTheme }
