'use client'
import { FC, ReactNode } from 'react'
import { LazyMotion as FramerLazyMotion } from 'framer-motion'

const loadFeatures = () => import('./framerMotionFeatures').then((res) => res.default)
const LazyMotion: FC<{ children: ReactNode }> = ({ children }) => {
  return <FramerLazyMotion features={loadFeatures}>{children}</FramerLazyMotion>
}

export default LazyMotion
