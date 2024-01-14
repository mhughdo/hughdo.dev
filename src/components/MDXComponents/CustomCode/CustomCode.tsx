import { FC, ReactNode } from 'react'
import { Code } from 'bright'

import MaterialThemePaleNight from './MaterialThemePaleNight.json'
import NightOwlLightNoItalics from './NightOwlLightNoItalics.json'
Code.theme = {
  light: NightOwlLightNoItalics,
  dark: MaterialThemePaleNight,
  lightSelector: 'html[data-theme="light"]',
}

type CustomCodeProps = {
  children: ReactNode
}

// Code component uses Mono font by feault so there is no need to specify the `font-mono` class
const CustomCode: FC<CustomCodeProps> = (props) => {
  return <Code lang='js' lineNumbers {...props} />
}

export default CustomCode
