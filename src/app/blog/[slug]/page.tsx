import clsx from 'clsx'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'

import MDX from '@/components/MDX'
import { getPost, getPostsMetadata } from '@/helpers'

export const revalidate = 3600
export async function generateStaticParams() {
  const postsMetadata = getPostsMetadata()
  return postsMetadata.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
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
      creator: '@hughdo',
      images: [ogImage],
    },
  }
}

const robotoMono = localFont({
  src: [
    {
      path: '../../../fonts/RobotoMono-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../fonts/RobotoMono-SemiBold.woff2',
      style: 'semibold',
      weight: '600',
    },
  ],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = getPost(slug)
  if (!post) {
    notFound()
  }
  const { metadata, content } = post
  const { frontmatter } = metadata

  return (
    <div>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: frontmatter.title,
            datePublished: frontmatter.publishedOn,
            dateModified: frontmatter.updatedOn || frontmatter.publishedOn,
            description: frontmatter.description,
            image: frontmatter.image
              ? `https://hughdo.dev${frontmatter.image}`
              : `https://hughdo.dev/og?title=${frontmatter.title}`,
            url: `https://hughdo.dev/blog/${slug}`,
            author: {
              '@type': 'Person',
              name: 'Hugh Do',
            },
          }),
        }}
      />
      <div className='py-16'>
        <h1 className='text-primary-color text-balane text-center text-4xl font-medium tracking-tighter'>
          {frontmatter.title}
        </h1>
        <p className='text-secondary-color mt-1 text-center text-sm'>{metadata.humanReadableDate}</p>
      </div>
      <main
        className={clsx(
          'blog-wrapper text-primary-color prose-quoteless md:prose-md prose prose-neutral dark:prose-invert',
          robotoMono.variable
        )}>
        <MDX source={content} />
        <div className='pt-8'>
          <div className='text-secondary-color text-xs font-medium uppercase'>Last updated</div>
          <div className='text-primary-color'>{metadata.humanReadableUpdateDate}</div>
        </div>
      </main>
    </div>
  )
}

export default Page
