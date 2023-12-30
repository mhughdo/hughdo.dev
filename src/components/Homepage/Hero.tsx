'use client'
import clsx from 'clsx'

import { HeroIntro, HeroTitle } from '@/components/Homepage'
import { DottedCircle } from '@/components/Icons'

const Hero = () => {
  return (
    <div
      className={clsx(
        'relative mt-16 min-h-60 lg:mt-20',
        'before:mask before:absolute before:left-[calc(var(--line-offset)/2*-1)] before:top-0 before:h-[var(--line-width)] before:w-0 before:animate-intro-line-width before:bg-horizontal-intro-line before:bg-horizontal-intro-line-size'
      )}>
      <DottedCircle className='animate-dotted-circle left-[calc(var(--dotted-circle-size)/2*-1)] top-[calc(var(--dotted-circle-size)/2*-1)] h-[--dotted-circle-size] w-[--dotted-circle-size] opacity-0' />
      <HeroTitle className='after:mask relative after:absolute after:bottom-[-10px] after:left-[calc(var(--line-offset)/2*-1)] after:h-[var(--line-width)] after:w-0 after:animate-intro-line-width after:bg-horizontal-intro-line after:bg-horizontal-intro-line-size' />
      <div
        className='mask absolute left-0 top-[calc(var(--line-offset)/2*-1)] h-0 w-[var(--line-width)] animate-intro-line-height bg-vertical-intro-line bg-vertical-intro-line-size'
        aria-hidden='true'
      />
      <HeroIntro className='after:mask relative after:absolute after:bottom-0 after:left-[calc(var(--line-offset)/2*-1)] after:h-[var(--line-width)] after:w-0 after:animate-intro-line-width after:bg-horizontal-intro-line after:bg-horizontal-intro-line-size' />
      <div
        className='mask absolute right-0 top-[calc(var(--line-offset)/2*-1)] h-0 w-[var(--line-width)] animate-intro-line-height bg-vertical-intro-line bg-vertical-intro-line-size'
        aria-hidden='true'
      />
      <DottedCircle className='animate-dotted-circle bottom-[calc(var(--dotted-circle-size)/2*-1)] right-[calc(var(--dotted-circle-size)/2*-1)] hidden h-[--dotted-circle-size] w-[--dotted-circle-size] rotate-180 opacity-0 lg:block' />
    </div>
  )
}

export default Hero
