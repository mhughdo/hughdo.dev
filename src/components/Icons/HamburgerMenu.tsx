import { FC } from 'react'

import AccessibleIcon from '@/components/AccessibleIcon'
import { MotionPath } from '@/components/MotionComponents'

type HamburgerMenuProps = {
  className?: string
  size: string
  isMenuOpen: boolean
}

const lastPathVariants = {
  open: {
    translateY: [0, -6, -6],
    rotate: [0, 0, 45],
    originX: '12px 18px',
    transition: {
      duration: 0.4,
    },
  },
  closing: {
    translateY: [-6, -6, 0],
    rotate: [45, 0, 0],
    transition: {
      duration: 0.4,
    },
  },
}

const secondPathVariants = {
  closed: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
  open: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

const firstPathVariants = {
  open: {
    translateY: [0, 6, 6],
    rotate: [0, 0, -45],
    originX: '12px 6px',
    transition: {
      duration: 0.4,
    },
  },
  closing: {
    translateY: [6, 6, 0],
    rotate: [-45, 0, 0],
    transition: {
      duration: 0.4,
    },
  },
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ size = 24, className, isMenuOpen }) => {
  return (
    <AccessibleIcon label='Hamburger Menu'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}>
        <MotionPath
          d='M4 18L20 18'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          variants={lastPathVariants}
          initial={false}
          animate={isMenuOpen ? 'open' : 'closing'}
        />
        <MotionPath
          d='M4 12L20 12'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          variants={secondPathVariants}
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
        />
        <MotionPath
          d='M4 6L20 6'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          variants={firstPathVariants}
          initial={false}
          animate={isMenuOpen ? 'open' : 'closing'}
        />
      </svg>
    </AccessibleIcon>
  )
}

export default HamburgerMenu
