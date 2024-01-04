'use server'

import { ImageGrid } from '@/components/ImageGrid'
import { getImages } from '@/helpers'

export const fetchImages = async (page: number, limit?: number) => {
  const images = await getImages({ page, limit })

  if (!images || !images.length) {
    return null
  }
  return <ImageGrid imageList={images} />
}
