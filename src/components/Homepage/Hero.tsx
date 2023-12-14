import React from 'react'

import { HeroIntro, HeroTitle } from '@/components/Homepage'

const Hero = () => {
  return (
    <div className='mt-10 lg:mt-16'>
      <HeroTitle />
      <HeroIntro />
    </div>
  )
}

export default Hero
