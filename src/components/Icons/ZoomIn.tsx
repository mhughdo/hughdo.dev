import { FC, SVGProps } from 'react'

import AccessibleIcon from '@/components/AccessibleIcon'

type ZoomInProps = {
  className?: string
} & SVGProps<SVGElement>

const ZoomIn: FC<ZoomInProps> = ({ width, height }) => {
  return (
    <AccessibleIcon label='Zoom in'>
      <svg fill='#fff' width={width} height={height} viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Zoom in</desc>
        <path d='M10 21v-2H6.4l4.5-4.5-1.4-1.4L5 17.6V14H3v7h7Zm4.5-10.1L19 6.4V10h2V3h-7v2h3.6l-4.5 4.5 1.4 1.4Z'></path>
      </svg>
    </AccessibleIcon>
  )
}

export default ZoomIn
