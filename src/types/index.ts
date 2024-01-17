export * from './content'
export * from './image'

const ColorTheme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export type ColorThemeType = (typeof ColorTheme)[keyof typeof ColorTheme]
export { ColorTheme }
export type PromiseFunctionType<T> = () => Promise<T>

declare global {
  interface Window {
    __theme: ColorThemeType
    __onThemeChange: (theme: ColorThemeType) => void
    __setPreferredTheme: (theme: ColorThemeType) => void
  }
}
