'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { MotionNextImage } from '@/components/MotionComponents/MotionNextImage'
import { cn } from '@/utils/index'

export type ImageCard = {
  id: number
  className: string
  src: string
  blurDataURL: string | undefined
}

export const LayoutGrid = ({ cards }: { cards: ImageCard[] }) => {
  const [selected, setSelected] = useState<ImageCard | null>(null)
  const [lastSelected, setLastSelected] = useState<ImageCard | null>(null)

  const handleClick = (card: ImageCard) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  return (
    <div className='relative mt-6 grid grid-cols-1 gap-4 md:grid-cols-12'>
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, 'cursor-pointer')}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              // card.className,
              'relative overflow-hidden',
              selected?.id === card.id
                ? 'absolute inset-0 z-50 m-auto flex h-1/4 w-9/12 cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:h-1/2 md:w-1/2'
                : lastSelected?.id === card.id
                  ? 'z-40 h-full w-full'
                  : 'h-full w-full'
            )}
            layoutId={`card-${card.id}`}>
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute left-0 top-0 z-10 h-full w-full bg-gray-800 opacity-0',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  )
}

const ImageComponent = ({ card }: { card: ImageCard }) => {
  return (
    <MotionNextImage
      layoutId={`image-${card.id}-image`}
      src={card.src}
      alt='one of the newest images'
      placeholder='blur'
      blurDataURL={card.blurDataURL}
      quality={90}
      fill
      sizes='(min-width: 768px) 33vw, 100vw'
      className='rounded-md object-cover object-center'
    />
  )
}
