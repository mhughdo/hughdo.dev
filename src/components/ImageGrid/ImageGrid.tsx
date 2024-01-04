import React from 'react'
import Image from 'next/image'

import { Image as ImageType } from '@/types'

type ImageGridProps = {
  imageList: ImageType[]
}

const ImageGrid = ({ imageList }: ImageGridProps) => {
  return (
    <div className='mb-4 grid grid-cols-12 gap-4'>
      {imageList.map((image) => (
        <div key={image.id} className='relative col-span-8 aspect-square md:col-span-6 lg:col-span-4'>
          <Image
            src={image.key}
            alt='image'
            placeholder='blur'
            sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            blurDataURL={image.blurDataURL!}
            fill
            className='rounded-md object-cover'
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
