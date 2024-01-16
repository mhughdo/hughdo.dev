import { cache } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getFromCache, setToCache } from '@/helpers/cache'
import { CATEGORIES } from '@/helpers/category'
import { GrayMatterFile, MdxFile, Options, Post, PostMetadata } from '@/types'

import 'server-only'

const contentDirectory = `${process.cwd()}/src/content`

type CategorySlugs = (typeof CATEGORIES)[number]['slug']
type CatgegoryNames = (typeof CATEGORIES)[number]['name']

export const getCategories = cache(() => {
  return CATEGORIES
})

export const getPostsMetadata = cache(async (options?: Options) => {
  const postsMetadata = await getMdxFilesMetadata(options)
  return postsMetadata
})

export const getPostsMetadataGroupedByCategory = cache(async (options?: Options) => {
  const postsMetadata = await getMdxFilesMetadata(options)
  // Even though 1 post can have multiple categories, it can only be displayed in 1 category page
  // So we group posts by their first category
  const postsMetadataGroupedByCategory = postsMetadata.reduce(
    (acc, postMetadata) => {
      const firstCategory = postMetadata.frontmatter.categories[0] as CategorySlugs
      const name = CATEGORIES.find((category) => category.slug === firstCategory)?.name
      if (!name) {
        throw new Error(`Category name not found for slug: ${firstCategory}`)
      }
      if (!acc[name]) {
        acc[name] = []
      }
      acc[name].push(postMetadata)
      return acc
    },
    {} as Record<CatgegoryNames, PostMetadata[]>
  )
  return postsMetadataGroupedByCategory
})

const getMdxFilesMetadata = async (options?: Options): Promise<PostMetadata[]> => {
  console.time('getMdxFilesMetadata from cache')
  const { limit, categorySlug, slug: postSlug } = options || {}
  const cacheKey = `postsMetadata${limit != null ? `-${limit}` : ''}${categorySlug ? `-${categorySlug}` : ''}${
    postSlug ? `-${postSlug}` : ''
  }`

  let postsMetadata = await getFromCache<PostMetadata[]>(cacheKey)
  if (postsMetadata) {
    console.timeEnd('getMdxFilesMetadata from cache')
    return postsMetadata
  }

  console.time('getMdxFilesMetadata using fs')
  const mdxFiles = getMdxFiles(options)
  postsMetadata = mdxFiles.map(getMdxFileMetadata)
  console.timeEnd('getMdxFilesMetadata using fs')
  setToCache('postsMetadata', postsMetadata)
  return postsMetadata
}

const getMdxFileMetadata = (mdxFile: MdxFile): PostMetadata => {
  const humanReadableDate = new Date(mdxFile.grayMatterFile.data.publishedOn).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return {
    humanReadableDate,
    slug: mdxFile.slug,
    pathname: mdxFile.pathname,
    frontmatter: mdxFile.grayMatterFile.data,
  }
}

export const getPost = cache((slug: string): Post | null => {
  const mdxFiles = getMdxFiles({ slug })
  if (!mdxFiles.length) {
    return null
  }
  const mdxFile = mdxFiles[0]

  return {
    metadata: getMdxFileMetadata(mdxFile),
    content: mdxFile.grayMatterFile.content,
  }
})

const getMdxFiles = (options?: Options): MdxFile[] => {
  const mdxFiles: MdxFile[] = []
  const { limit, categorySlug, slug: postSlug, dir = contentDirectory } = options || {}

  const dirFiles = fs.readdirSync(dir)

  dirFiles.forEach((file) => {
    const filePath = path.join(dir, file)

    if (file.endsWith('.mdx')) {
      if (postSlug && file !== `${postSlug}.mdx`) {
        return
      }
      const content = fs.readFileSync(filePath, 'utf8')
      const data = matter(content) as unknown as GrayMatterFile
      const metadata = data.data

      if (!metadata.isPublished) {
        return
      }

      if (categorySlug && !metadata.categories.includes(categorySlug)) {
        return
      }
      const slug = file.replace(/\.mdx?$/, '')
      const pathname = `/blog/${slug}`
      mdxFiles.push({ pathname, slug, grayMatterFile: data })
      if (limit && mdxFiles.length >= limit) {
        return mdxFiles
      }
    }
  })

  return mdxFiles
}
