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

const CustomCode: FC<CustomCodeProps> = (props) => {
  return <Code lang='js' lineNumbers {...props} />
}

export default CustomCode
