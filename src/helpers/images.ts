import { cache } from 'react'
import { and, desc, eq, isNull } from 'drizzle-orm'

import { db } from '@/db'
import { images } from '@/db/schema'
import { GetImagesOptions, NewImage } from '@/types'

import 'server-only'
const imagesPerPage = 12

export const findImageById = cache(async (id: number) => {
  try {
    const image = await db.query.images.findFirst({ where: and(eq(images.id, id), isNull(images.deletedAt)) })
    return image
  } catch (error) {
    console.error('Error finding image by name: ', id, error)
  }
})

export const findImageByName = cache(async (name: string) => {
  try {
    const image = await db.query.images.findFirst({ where: and(eq(images.name, name), isNull(images.deletedAt)) })
    return image
  } catch (error) {
    console.error('Error finding image by name: ', name, error)
  }
})

export const getImages = cache(async (options: GetImagesOptions) => {
  let offset = 0
  const { limit = 12, page = 0, orderBy = [desc(images.modifyDate)] } = options
  if (page > 0) {
    offset = page * imagesPerPage
  }

  try {
    console.time('getImages from db')
    const imageList = await db.query.images.findMany({
      limit,
      offset,
      orderBy,
      where: isNull(images.deletedAt),
    })
    console.timeEnd('getImages from db')
    return imageList
  } catch (error) {
    console.error('Error getting images: ', error)
  }
  return []
})

export const insertImage = async (image: NewImage) => {
  try {
    await db.insert(images).values(image)
  } catch (error) {
    console.error('Error inserting image: ', image.name, error)
  }
}
