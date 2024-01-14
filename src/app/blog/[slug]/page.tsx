import { notFound } from 'next/navigation'

import MDX from '@/components/MDX'
import { getPost, getPostsMetadata } from '@/helpers'

export const dynamicParams = false

export async function generateStaticParams() {
  const postsMetadata = await getPostsMetadata({ limit: -1 })
  return postsMetadata.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) {
    return
  }

  const { seoTitle: title, publishedOn: publishedTime, description, image } = post.metadata.frontmatter
  const keywords = post.metadata.frontmatter.meta.keywords || []
  const ogImage = image ? `https://hughdo.dev${image}` : `https://hughdo.dev/og?title=${title}`
  return {
    title,
    description,
    ...(keywords.length > 0 && { keywords }),
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://hughdo.dev/blog/${post.metadata.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = await getPost(slug)
  if (!post) {
    notFound()
  }
  const { metadata, content } = post
  const { frontmatter } = metadata

  return (
    <div>
      <div className='py-16'>
        <h1 className='text-primary-color text-balane text-center text-4xl font-medium tracking-tighter'>
          {frontmatter.title}
        </h1>
        <p className='text-secondary-color mt-1 text-center text-sm'>{metadata.humanReadableDate}</p>
      </div>
      <div className='blog-wrapper text-primary-color'>
        <MDX source={content} />
      </div>
    </div>
  )
}

export default Page
