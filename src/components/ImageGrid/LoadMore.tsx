'use client'
import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { fetchImages } from '@/actions'
import { Spinner } from '@/components/Icons'

let page = 1

const LoadMore = () => {
  const { ref, inView } = useInView({})
  const [imageGrid, setImageGrid] = useState<ReactNode[]>([])
  const [endOfList, setEndOfList] = useState(false)

  useEffect(() => {
    if (!inView) return
    fetchImages(page).then((returnedImageGrid) => {
      if (!returnedImageGrid) {
        setEndOfList(true)
        return
      }
      setImageGrid((prev) => [...prev, returnedImageGrid])
      page++
    })
  }, [inView, imageGrid])

  return (
    <div>
      {imageGrid}
      {!endOfList && (
        <div ref={ref} className='mx-auto w-max'>
          <Spinner width={25} height={25} className='animate-spin text-indigo-400' />
        </div>
      )}
    </div>
  )
}

export default LoadMore
