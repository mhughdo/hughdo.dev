import { GetObjectCommand, ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3'
import { encode } from 'blurhash'
// @ts-ignore: This package is super old and doesn't have types
import exifParser from 'exif-parser'
import { NextResponse } from 'next/server'
import sharp from 'sharp'

import { findImageByName, insertImage } from '@/helpers'
import { ImageMetadata, NewImage } from '@/types'
import {
  blurHashToDataURL,
  convertExposureMode,
  convertExposureProgram,
  convertShutterSpeed,
  promisePool,
} from '@/utils'

// Only get all images from the photos folder
const prefix = 'photos-page/photos/'
const region = process.env.AWS_DEFAULT_REGION!
const bucket = process.env.AWS_BUCKET_NAME!

// An API for fetching images from the S3 bucket and save the information of each image like the name, type, url, etc. to the database.
export async function POST() {
  try {
    execute()
    return NextResponse.json({ message: 'done' }, { status: 200 })
  } catch (error) {
    console.log('Error running fetchImages: ', error)
    return NextResponse.json({ error }, { status: 500 })
  }
}

async function execute() {
  const client = new S3Client({ region: region })
  const command = new ListObjectsV2Command({
    Bucket: bucket,
    Prefix: prefix,
    Delimiter: '/',
    MaxKeys: 1000,
  })

  const objectKeys = []

  let isTruncated = true
  while (isTruncated) {
    const { Contents, IsTruncated, NextContinuationToken } = await client.send(command)
    if (!Contents || !Contents.length) {
      break
    }
    objectKeys.push(...Contents.map((content) => content.Key!).filter((key) => key !== prefix))
    isTruncated = !!IsTruncated
    command.input.ContinuationToken = NextContinuationToken
  }
  console.log('Number of total images: ', objectKeys.length)

  const unprocessedImagesKey = await findUnprocessedImages(objectKeys)
  console.log('Number of unprocessed images: ', unprocessedImagesKey.length)

  const promises = []
  for (const key of unprocessedImagesKey) {
    promises.push(() => processImage(client, region, bucket, key))
  }

  await promisePool(promises, 10)
  console.log('Done')
}

async function findUnprocessedImages(objectKeys: string[]) {
  const promises = []
  for (const key of objectKeys) {
    promises.push(() => findImageByName(key.replace(prefix, '')))
  }
  const images = await promisePool(promises, 30)
  const processedImagesName = images.filter((image) => image != null).map((image) => image!.name)
  return objectKeys.filter((key) => !processedImagesName.includes(key.replace(prefix, '')))
}

async function processImage(client: S3Client, region: string, bucket: string, key: string) {
  const getObjectCommand = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  })
  const response = await client.send(getObjectCommand)
  const buffer = await response.Body?.transformToByteArray()
  if (!buffer) {
    console.log('No buffer: ', key)
    return
  }
  console.log('Parsing image metadata: ', key)
  const parser = exifParser.create(buffer.buffer)
  const result = parser.parse()
  if (!result) {
    console.log('Cannot parse image metadata: ', key)
    return
  }
  const tags = result.tags
  const imageWidth = result?.imageSize?.width as number
  const imageHeight = result?.imageSize?.height as number
  const imageMetadata: ImageMetadata = {
    makeAndModel: `${tags?.Make} ${tags?.Model}`,
    createDate: tags?.CreateDate,
    modifyDate: tags?.ModifyDate,
    software: tags?.Software,
    lens: tags?.LensModel,
    focalLength: tags?.FocalLength,
    iso: tags?.ISO,
    aperture: `F/${tags?.FNumber}`,
    shutterSpeed: convertShutterSpeed(tags?.ExposureTime),
    dimensions: `${imageWidth}x${imageHeight}`,
    exposureCompensation: tags?.ExposureCompensation,
    exposureMode: convertExposureMode(tags?.ExposureMode),
    focalLengthIn35mmFormat: tags?.FocalLengthIn35mmFormat,
    exposureProgram: convertExposureProgram(tags?.ExposureProgram),
  }
  console.log('Generating blur data url: ', key)

  const { data: pixels, info: metadata } = await sharp(buffer.buffer)
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true })
  const blurHash = encode(new Uint8ClampedArray(pixels), metadata.width, metadata.height, 4, 4)
  const blurDataUrl = blurHashToDataURL(blurHash)

  const imageName: string = key.replace(prefix, '')
  const newImage: NewImage = {
    name: imageName,
    type: imageName.split('.')[1],
    key,
    url: `https://s3.${region}.amazonaws.com/${bucket}/${key}`,
    blurDataURL: blurDataUrl,
    imageMetadata,
    createDate: tags?.CreateDate ? new Date(Number(`${tags?.CreateDate}000`)) : null,
    modifyDate: tags?.ModifyDate ? new Date(Number(`${tags?.ModifyDate}000`)) : null,
  }
  const image = await findImageByName(imageName)
  if (!image) {
    console.log('Inserting image: ', imageName)
    await insertImage(newImage)
    console.log('Inserted image: ', imageName)
  }
}
