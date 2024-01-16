import AccessibleIcon from '@/components/AccessibleIcon'

type DropDownTrigger = {
  className?: string
  size: string
}

const DropDownTrigger = ({ size = '16', className }: DropDownTrigger) => {
  return (
    <AccessibleIcon label='DropDown Trigger'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <polyline points='6 9 12 15 18 9'></polyline>
      </svg>
    </AccessibleIcon>
  )
}

export default DropDownTrigger
