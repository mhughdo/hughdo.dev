type Layout = 'Article' | 'Tutorial'

export type Category = {
  name: string
  slug: string
}

export type Options = {
  limit?: number
  categorySlug?: string
  slug?: string
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
  bannerCloudinaryPath: string
  bannerAlt?: string
  image?: string
}

export type GrayMatterFile = {
  content: string
  data: Frontmatter
}

export type PostMetadata = {
  pathname: string
  slug: string
  humanReadableDate: string
  frontmatter: Frontmatter
}

export type Post = {
  metadata: PostMetadata
  content: string
}

export type MdxFile = {
  pathname: string
  slug: string
  grayMatterFile: GrayMatterFile
}

export type GetMdxFilesOptions = {
  dir?: string
  options?: Options
}

export type GetMdxFilesMetadataOptions = {
  dir?: string
  options?: Options
}
