import Image from 'next/image'

import bannerBlurDataUrl from '@/helpers/bannerBlurDataUrl'

const Banner = () => {
  return (
    <div className='absolute inset-0 -z-10'>
      <div className='lg:h-74 relative h-60'>
        <Image
          alt='Mountains'
          src='/photos-page/_DSC9244-Enhanced-NR.jpg'
          placeholder='blur'
          blurDataURL={bannerBlurDataUrl}
          quality={90}
          fill
          sizes='100vw'
          className='object-cover object-center'
        />
      </div>
    </div>
  )
}

export default Banner
