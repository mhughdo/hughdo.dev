import { eq } from 'drizzle-orm'

import { db } from '@/db'
import { images } from '@/db/schema'
import { NewImage } from '@/types'

export const findImageByName = async (name: string) => {
  try {
    const image = await db.query.images.findFirst({ where: eq(images.name, name) })
    return image
  } catch (error) {
    console.error('Error finding image by name: ', name, error)
  }
}

export const insertImage = async (image: NewImage) => {
  try {
    await db.insert(images).values(image)
  } catch (error) {
    console.error('Error inserting image: ', image.name, error)
  }
}
