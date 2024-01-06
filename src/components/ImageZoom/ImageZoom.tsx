'use client'
import { FC, useState } from 'react'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import defaultTheme from 'tailwindcss/defaultTheme'

import { ZoomIn, ZoomOut } from '@/components/Icons'
import { Image as ImageType } from '@/types'
type ImageZoomProps = {
  image: ImageType
}

const ImageZoom: FC<ImageZoomProps> = ({ image }) => {
  const dimensions = image.imageMetadata.dimensions.split('x')
  const width = +dimensions[0]
  const height = +dimensions[1]
  const aspectRatio = width / height
  const maxWidth = `min(calc(calc(100vh - 210px) * ${aspectRatio}), 72rem)`
  const [open, setOpen] = useState(false)

  const toggleFullScreenImage = () => {
    // Don't open the full screen image if the screen is too small
    if (window.innerWidth < +defaultTheme.screens.md.replace('px', '')) return

    setOpen(!open)
  }
  return (
    <div style={{ maxWidth }} className='relative mx-auto'>
      <button className='group cursor-default hover:md:cursor-zoom-in' onClick={toggleFullScreenImage}>
        <Image
          style={{ aspectRatio: `${width}/${height}` }}
          src={image.key}
          alt='image'
          width={width}
          height={height}
          placeholder='blur'
          sizes='100vw'
          blurDataURL={image.blurDataURL!}
          className='rounded-md object-cover'
        />
        <div className='absolute right-0 top-0 p-4 opacity-0 transition-opacity duration-300 group-hover:md:opacity-100 '>
          <ZoomIn width={24} height={24} />
        </div>
      </button>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className='focus:outline-non fixed inset-0 overflow-y-scroll bg-zinc-950/95 p-0'>
            <Dialog.Content className='relative h-full'>
              <button className='group h-full hover:cursor-zoom-out' onClick={toggleFullScreenImage}>
                <Image
                  style={{ aspectRatio: `${width}/${height}` }}
                  src={image.key}
                  alt='image'
                  width={width}
                  height={height}
                  placeholder='blur'
                  sizes='100vw'
                  blurDataURL={image.blurDataURL!}
                  className='rounded-md object-cover align-middle'
                />
                <div className='absolute right-0 top-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                  <ZoomOut width={24} height={24} />
                </div>
              </button>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default ImageZoom
