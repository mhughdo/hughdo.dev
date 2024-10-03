import { FC, ReactNode } from 'react'
import { Code } from 'bright'

import MaterialThemePaleNight from '../Theme/MaterialThemePaleNight.json'
import NightOwlLightNoItalics from '../Theme/NightOwlLightNoItalics.json'

Code.theme = {
  light: NightOwlLightNoItalics,
  dark: MaterialThemePaleNight,
  lightSelector: 'html[data-theme="light"]',
}

type CustomCodeProps = {
  children: ReactNode
  lang?: string
  lineNumbers?: boolean
  title?: string
}

// Code component uses Mono font by feault so there is no need to specify the `font-mono` class
const CustomCode: FC<CustomCodeProps> = async (props) => {
  const { lang = 'js', lineNumbers = true, title } = props
  // @ts-ignore
  const content = props?.children?.props?.children as string
  return (
    <Code lang={lang} lineNumbers={lineNumbers} title={title} {...props}>
      {content}
    </Code>
  )
}

export default CustomCode
