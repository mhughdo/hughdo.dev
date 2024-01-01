import { SVGProps } from 'react'

import AccessibleIcon from '@/components/AccessibleIcon'

type DottedCircleProps = {
  className?: string
} & SVGProps<SVGSVGElement>

const Arrow = ({ width, height, className }: DottedCircleProps) => {
  return (
    <AccessibleIcon label='Arrow'>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z'
          fill='currentColor'></path>
      </svg>
    </AccessibleIcon>
  )
}

export default Arrow
