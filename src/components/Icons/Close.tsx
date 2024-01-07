import { FC, SVGProps } from 'react'

import AccessibleIcon from '@/components/AccessibleIcon'

type CloseProps = {
  className?: string
} & SVGProps<SVGElement>

const Close: FC<CloseProps> = ({ width, height, className }) => {
  return (
    <AccessibleIcon label='Close'>
      <svg
        fill='currentColor'
        className={className}
        width={width}
        height={height}
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'>
        <desc lang='en-US'>An X shape</desc>
        <path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z'></path>
      </svg>
    </AccessibleIcon>
  )
}

export default Close
