export type Category = {
  name: string
  slug: string
}

export type Options = {
  dir?: string
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
  bannerPath: string
  bannerAlt: string
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
  humanReadableUpdateDate: string
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
