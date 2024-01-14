'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

  return (
    <MotionDiv className='mb-4 grid grid-cols-1 gap-4 md:grid-cols-12'>
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
          onClick={() => router.push(`/photos/${image.id}`)}
          className='relative col-span-8 aspect-square hover:cursor-zoom-in md:col-span-6 lg:col-span-4'>
          <Image
            src={image.key}
            alt='image'
            placeholder='blur'
            sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            quality={90}
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
