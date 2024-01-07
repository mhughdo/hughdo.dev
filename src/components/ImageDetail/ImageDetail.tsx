import { FC } from 'react'
import Image from 'next/image'

import { Camera } from '@/components/Icons'
import ImageZoom from '@/components/ImageZoom'
import { Image as ImageType } from '@/types'

type ImageDetailProps = {
  image: ImageType
}

const ImageDetail: FC<ImageDetailProps> = ({ image }) => {
  return (
    <div>
      <div className='mb-6'>
        <div className='flex gap-2'>
          <div className='size-12'>
            <Image
              src='/photos-page/avatar.jpg'
              className='h-full rounded-full object-cover object-bottom'
              alt='profile picture'
              width={50}
              height={50}
            />
          </div>
          <div>
            <h3 className='text-primary-color font-bold'>Hugh Do</h3>
            <p className='text-secondary-color text-xs'>@mhughdo</p>
          </div>
        </div>
      </div>
      <ImageZoom image={image} />
      <div className='my-6'>
        <h2 className='text-md text-primary-color mb-6 text-center'>
          <Camera width={20} height={20} className='mr-2 inline-block' />
          Camera info
        </h2>
        <div className='grid auto-rows-fr grid-cols-4 items-start gap-4 md:grid-cols-9'>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>Make and Model</p>
            <span className='text-primary-color'>{image.imageMetadata.makeAndModel}</span>
          </div>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>Software</p>
            <span className='text-primary-color'>{image.imageMetadata.software}</span>
          </div>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>Lens</p>
            <span className='text-primary-color'>{image.imageMetadata.lens}</span>
          </div>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>Focal Length</p>
            <span className='text-primary-color'>{image.imageMetadata.focalLength}mm</span>
          </div>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>Aperture</p>
            <span className='text-primary-color'>{image.imageMetadata.aperture}</span>
          </div>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>Shutter Speed</p>
            <span className='text-primary-color'>{image.imageMetadata.shutterSpeed}</span>
          </div>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>ISO</p>
            <span className='text-primary-color'>{image.imageMetadata.iso}</span>
          </div>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>Dimensions</p>
            <span className='text-primary-color'>{image.imageMetadata.dimensions}</span>
          </div>
          <div className='col-span-2 text-center md:col-span-3'>
            <p className='text-primary'>Exposure Mode</p>
            <span className='text-primary-color'>
              {image.imageMetadata.exposureProgram} - {image.imageMetadata.exposureMode}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageDetail
