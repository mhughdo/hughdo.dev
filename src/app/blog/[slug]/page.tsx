import { notFound } from 'next/navigation'

import MDX from '@/components/MDX'
import { getPost } from '@/helpers'

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
