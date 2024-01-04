import { FC, SVGProps } from 'react'

type SpinnerProps = {
  className?: string
} & SVGProps<SVGSVGElement>

const Spinner: FC<SpinnerProps> = ({ width, height, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 200 200'
      className={className}
      preserveAspectRatio='xMinYMin meet'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient id='spinner-1704372580435' x1='0%' y1='0%' x2='65%' y2='0%'>
          <stop offset='0%' stopColor='currentColor'></stop>
          <stop offset='100%' stopColor='currentColor' stopOpacity='0'></stop>
        </linearGradient>
      </defs>
      <circle
        cx='100'
        cy='100'
        r='90'
        fill='transparent'
        stroke='url(#spinner-1704372580435)'
        strokeWidth='20'></circle>
    </svg>
  )
}

export default Spinner
