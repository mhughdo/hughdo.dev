import { SQL } from 'drizzle-orm'

import { images } from '@/db/schema'

export type ImageMetadata = {
  makeAndModel: string
  software: string
  lens: string
  focalLength: string
  iso: number
  aperture: string
  shutterSpeed: string
  dimensions: string
  exposureCompensation: string
  exposureMode: string
  exposureProgram: string
  focalLengthIn35mmFormat: string
  createDate: number
  modifyDate: number
}

export type GetImagesOptions = {
  limit?: number
  offset?: number
  page?: number
  orderBy?: SQL<unknown>[]
}

export type Image = typeof images.$inferSelect
export type NewImage = typeof images.$inferInsert
