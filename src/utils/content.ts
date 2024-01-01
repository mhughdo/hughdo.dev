import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { GetMdxFilesMetadataOptions, GetMdxFilesOptions, GrayMatterFile, Options, Post, PostMetadata } from '@/types'

import 'server-only'

const contentDirectory = `${process.cwd()}/src/content`

export const getCategories = async () => {
  const { CATEGORIES } = await import('./category')
  return CATEGORIES
}

export const getPostsMetadata = async (options?: Options) => {
  const postsMetadata = await getMdxFilesMetadata({ dir: contentDirectory, options })
  return postsMetadata
}

const getMdxFilesMetadata = async ({ dir, options }: GetMdxFilesMetadataOptions): Promise<PostMetadata[]> => {
  const posts = await getMdxFiles({ dir, posts: [], options })
  return posts.map((post) => {
    const pathname = `/posts/${post.fileName.replace(/\.mdx?$/, '')}`
    return {
      pathname,
      frontmatter: post.grayMatterFile.data,
    }
  })
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
