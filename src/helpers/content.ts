import { cache } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getFromCache, setToCache } from '@/helpers/cache'
import { CATEGORIES } from '@/helpers/category'
import { GetMdxFilesMetadataOptions, GetMdxFilesOptions, GrayMatterFile, Options, Post, PostMetadata } from '@/types'

import 'server-only'

const contentDirectory = `${process.cwd()}/src/content`

export const getCategories = cache(async () => {
  return CATEGORIES
})

export const getPostsMetadata = cache(async (options?: Options) => {
  const postsMetadata = await getMdxFilesMetadata({ dir: contentDirectory, options })
  return postsMetadata
})

const getMdxFilesMetadata = async ({ dir, options }: GetMdxFilesMetadataOptions): Promise<PostMetadata[]> => {
  console.time('getMdxFilesMetadata from cache')
  let postsMetadata = await getFromCache<PostMetadata[]>('postsMetadata')
  if (postsMetadata) {
    return postsMetadata
  }
  console.timeEnd('getMdxFilesMetadata from cache')
  console.time('getMdxFilesMetadata using fs')
  const posts = await getMdxFiles({ dir, posts: [], options })
  postsMetadata = posts.map((post) => {
    const pathname = `/blog/${post.fileName.replace(/\.mdx?$/, '')}`
    return {
      pathname,
      frontmatter: post.grayMatterFile.data,
    }
  })
  console.timeEnd('getMdxFilesMetadata using fs')
  setToCache('postsMetadata', postsMetadata)
  return postsMetadata
}

const getMdxFiles = async ({ dir, posts, options }: GetMdxFilesOptions): Promise<Post[]> => {
  const { limit = 20, categorySlug } = options || {}

  const dirFiles = fs.readdirSync(dir)

  dirFiles.forEach((file) => {
    const filePath = path.join(dir, file)
    const fileStat = fs.lstatSync(filePath)

    if (fileStat.isDirectory()) {
      return getMdxFiles({ dir: filePath, posts, options })
    } else if (file.endsWith('.mdx')) {
      const content = fs.readFileSync(filePath, 'utf8')
      const data = matter(content) as unknown as GrayMatterFile
      const metadata = data.data

      if (!metadata.isPublished) {
        return
      }

      if (categorySlug && !metadata.categories.includes(categorySlug)) {
        return
      }

      posts.push({ fileName: file, grayMatterFile: data })
      if (limit && posts.length >= limit) {
        return posts
      }
    }
  })

  return posts
}
