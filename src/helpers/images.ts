import { cache } from 'react'
import { and, desc, eq, isNull } from 'drizzle-orm'

import { db } from '@/db'
import { images } from '@/db/schema'
import { getFromCache, setToCache } from '@/helpers/cache'
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

export const findImageByName = async (name: string) => {
  try {
    const image = await db.query.images.findFirst({ where: and(eq(images.name, name), isNull(images.deletedAt)) })
    return image
  } catch (error) {
    console.error('Error finding image by name: ', name, error)
  }
}

export const getImages = cache(async (options?: GetImagesOptions) => {
  let offset = 0
  const { limit, page = 0, orderBy = [desc(images.modifyDate)] } = options || {}
  if (page > 0) {
    offset = page * imagesPerPage
  }

  try {
    const imageListQuery = db
      .select()
      .from(images)
      .where(isNull(images.deletedAt))
      .orderBy(...orderBy)
      .offset(offset)
      .$dynamic()
    if (limit) {
      imageListQuery.limit(limit)
    }
    const rawSql = buildRawSql(imageListQuery.toSQL())
    let imageList = await getFromCache<(typeof images.$inferSelect)[]>(rawSql)
    if (imageList) {
      return imageList
    }
    imageList = await imageListQuery
    setToCache(rawSql, imageList, 60 * 60 * 24)
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

const buildRawSql = ({ sql, params }: { sql: string; params: unknown[] }) => {
  let sqlStatement = sql
  params.forEach((param, index) => {
    const paramIndex = index + 1
    const paramValue = param as number
    sqlStatement = sqlStatement.replace(`$${paramIndex}`, paramValue.toString())
  })
  return sqlStatement
}
