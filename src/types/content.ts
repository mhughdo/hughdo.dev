type Layout = 'Article' | 'Tutorial'

export type Category = {
  name: string
  slug: string
}

export type Options = {
  limit?: number
  categorySlug?: string
}

export type Frontmatter = {
  title: string
  seoTitle: string
  description: string
  isPublished: boolean
  publishedOn: string
  updatedOn?: string
  categories: string[]
  meta: {
    keywords: string[]
  }
  layout: Layout
  bannerCloudinaryPath: string
  bannerAlt?: string
}

export type GrayMatterFile = {
  content: string
  data: Frontmatter
}

export type PostMetadata = {
  pathname: string
  frontmatter: Frontmatter
}

export type Post = {
  fileName: string
  grayMatterFile: GrayMatterFile
}

export type GetMdxFilesOptions = {
  dir: string
  posts: Post[]
  options?: Options
}

export type GetMdxFilesMetadataOptions = {
  dir: string
  options?: Options
}
