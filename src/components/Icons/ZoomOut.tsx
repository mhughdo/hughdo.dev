import { FC, SVGProps } from 'react'

import AccessibleIcon from '@/components/AccessibleIcon'

type ZoomOutProps = {
  className?: string
} & SVGProps<SVGElement>

const ZoomOut: FC<ZoomOutProps> = ({ width, height }) => {
  return (
    <AccessibleIcon label='Zoom out'>
      <svg fill='#fff' width={width} height={height} viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Zoom out</desc>
        <path d='M19.6 3 15 7.5V3.9h-2V11h7.1V9h-3.6L21 4.4 19.6 3ZM3.9 13v2h3.6L3 19.6 4.4 21 9 16.5v3.6h2V13H3.9Z'></path>
      </svg>
    </AccessibleIcon>
  )
}

export default ZoomOut
