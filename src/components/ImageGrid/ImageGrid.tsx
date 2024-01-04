import Image from 'next/image'

import { MotionDiv } from '@/components/MotionComponents'
import { Image as ImageType } from '@/types'

type ImageGridProps = {
  imageList: ImageType[]
  // this prop is used to not animate the first image grid because when the internet is slow,
  // the framer motion package will not be loaded immediately so the first image grid containing blurred images will not be shown
  // which is not good for user experience
  first?: boolean
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const ImageGrid = ({ imageList, first }: ImageGridProps) => {
  return (
    <MotionDiv className='mb-4 grid grid-cols-12 gap-4'>
      {imageList.map((image, index) => (
        <MotionDiv
          {...(!first && {
            initial: 'hidden',
            animate: 'visible',
            variants: variants,
            transition: {
              ease: 'easeInOut',
              delay: index * 0.15,
              duration: 0.5,
            },
          })}
          key={image.id}
          className='relative col-span-8 aspect-square md:col-span-6 lg:col-span-4'>
          <Image
            src={image.key}
            alt='image'
            placeholder='blur'
            sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            blurDataURL={image.blurDataURL!}
            fill
            className='rounded-md object-cover'
          />
        </MotionDiv>
      ))}
    </MotionDiv>
  )
}

export default ImageGrid
