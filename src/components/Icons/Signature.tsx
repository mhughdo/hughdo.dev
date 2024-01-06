'use client'
import { FC, SVGProps, useRef } from 'react'
import { useInView } from 'framer-motion'

import AccessibleIcon from '@/components/AccessibleIcon'
import { MotionPath, MotionSvg } from '@/components/MotionComponents'

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1 },
}

const svgVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export type SignatureProps = SVGProps<SVGElement>

const Signature: FC<SignatureProps> = ({ width = 90, height = 50 }) => {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref)

  return (
    <AccessibleIcon label='Signature'>
      <MotionSvg
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        variants={svgVariants}
        ref={ref}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 909.5 507.82'
        width={width}
        height={height}>
        <g>
          <MotionPath
            fill='none'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            variants={pathVariants}
            className='stroke-black dark:stroke-white'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='13px'
            d='m160.37,6.5c-43.04,170.37-79.48,322.15-120.77,494.82'
          />
          <MotionPath
            fill='none'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeInOut' }}
            variants={pathVariants}
            className='stroke-black dark:stroke-white'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='13px'
            d='m366.93,6.5c-43.04,170.37-79.48,322.15-120.77,494.82'
          />
          <MotionPath
            fill='none'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
            variants={pathVariants}
            className='stroke-black dark:stroke-white'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='13px'
            d='m6.5,299.52c35.47-10.36,114.05-24.92,196.67-38.42,70.19-11.48,172.71-22.75,201.22-22.75l.85-1.92,6.93-15.51c-4.39,9.78-10.12,22.63-16.76,37.77-8.61,19.63-21.14,48.61-14.67,55.19.75.76,1.62,1.17,1.62,1.17,5.6,2.59,14.53-5.63,18.43-9.3,19.03-17.86,38.45-35.3,57.7-52.93,11.18-10.24,20.53-18.03,22.39-16.44.41.35.37,1.08.27,1.66-3.53,9.62-6.33,18.18-8.52,25.35-2.79,9.14-4.33,15.11-1.16,19.8,1.59,2.36,3.75,3.47,4.84,4.02,8.4,4.22,18.97-.21,24.13-2.56,14.16-6.45,42.72-22.4,79.01-45.3,2.04-3.47,5.03-8.32,8.97-13.94,3.72-5.3,5.69-8.09,8.97-11.41,5.17-5.24,10.06-10.21,16.89-10.17,1.21,0,5.14.03,8.2,2.68,5.61,4.87,3.81,14.69,2.69,20.79-.67,3.66-2.21,9.51-6.22,16.09,4.01-6.57,5.55-12.43,6.22-16.09,1.12-6.1,2.92-15.92-2.69-20.79-3.09-2.68-7.08-2.7-8.2-2.68-7.82.1-13.7,6.5-16.89,10.17-12.03,13.86-20.09,28.63-25.61,39.24,0,0-10.46,20.09-13.62,43.6-.2,1.47-.57,4.64,1.09,5.81,3.13,2.21,11.24-4.33,13.99-6.54,22.31-17.97,71.91-89.48,78.46-93.36.46-.27,1.81-1.07,3.01-.6,1.75.68,2.12,3.64,2.25,4.81,1.81,15.95-3.64,43.88-3.64,43.88-1.03,6.27-2.55,14.83-4.68,24.92-5.15,24.34-10.69,42.41-14.37,54.32-5.58,18.07-11.39,34.15-16.83,48.09-1.84,4.71-3.53,8.84-5.15,12.76-9.54,22.99-18.85,45.17-35.39,68.01-13.86,19.14-22.63,24.64-26.99,27.03-5.49,3.02-20.45,11.26-31.42,4.84-5.89-3.45-8.14-9.68-9.2-12.7-4.01-11.5-1.85-24.95,9.76-47.4,10.35-20.02,22.2-35.53,36.59-51.93,19.33-22.02,36.53-37.95,46.35-46.7,27.87-24.84,53.74-43,73.19-55.41,18.66-11.91,42.19-25.42,70.4-38.34,4.32-4.36,10.48-10.73,17.6-18.64,18.62-20.7,30.52-37.17,46.17-59.12h0c18.36-26.78,31.28-47.82,34.46-53.02,20.67-33.83,26.98-48.6,30.19-56.69,6.05-15.25,9.7-28.51,4.53-32.71-.98-.79-2.21-1.22-4.19-1.34-12.84-.8-25.24,13.19-28.09,16.48-27.96,32.24-40.85,59.34-40.85,59.34-19.25,40.49-28.87,60.73-37.41,82.86-4.39,11.39-17.95,47.24-29.86,95.61-1.29,5.26-10.69,43.74-7.38,44.79,2.49.78,10.33-20.05,31.68-57.61,0,0,8.72-15.33,27.25-34.32,6.43-6.59,14.66-14.1,22.25-12.07,2.32.62,3.88,1.95,4.64,2.61,6.25,5.44,5.5,14.98,5.7,24.34.4,18.82.6,28.28,5.81,32.42,9.03,7.18,29.92-4.22,46.45-13.25,12.8-6.99,22.42-14.13,28.48-19.02'
          />
        </g>
      </MotionSvg>
    </AccessibleIcon>
  )
}

export default Signature
