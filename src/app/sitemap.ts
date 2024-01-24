import { getCategories, getPostsMetadata } from '@/helpers'

export default async function sitemap() {
  let posts = getPostsMetadata().map((post) => ({
    url: `https://hughdo.dev/blog/${post.slug}`,
    lastModified: post.frontmatter.updatedOn,
  }))

  const categoryRoutes = getCategories().map((category) => `/category/${category}`)

  let routes = ['', '/blog', '/latest', '/photos', '/category', ...categoryRoutes].map((route) => ({
    url: `https://hughdo.dev${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts]
}
