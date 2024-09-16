import { forwardRef, LegacyRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const NextImage = forwardRef((props: any, ref: LegacyRef<HTMLImageElement | null>) => {
  return <Image src={''} alt={''} {...props} ref={ref} />
})

NextImage.displayName = 'NextImage'

export const MotionNextImage = motion(NextImage)
