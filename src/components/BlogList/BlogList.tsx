import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { PostMetadata } from '@/types'

type BlogListProps = {
  title: string
  postsMetadata: PostMetadata[]
}

const BlogList: FC<BlogListProps> = ({ title, postsMetadata }) => {
  return (
    <div>
      <div className='mb-8 flex items-baseline justify-between'>
        <h1 className='text-4xl'>{title}</h1>
        <span className='pr-8 text-lg'>{postsMetadata.length} posts</span>
      </div>
      <div className='grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12'>
        {postsMetadata.map((post) => {
          return (
            <div key={post.slug} className='col-span-4'>
              <Link href={`/blog/${post.slug}`} className='group block'>
                <div className='relative aspect-[3/4]'>
                  <Image
                    src={post.frontmatter.bannerPath}
                    alt={post.frontmatter.bannerAlt}
                    layout='fill'
                    className='rounded-lg object-cover'
                  />
                </div>
                <div className='text-secondary-color mt-4 text-lg font-medium'>{post.humanReadableDate}</div>
                <div className='text-primary-color mt-2 text-xl font-medium transition-colors duration-100 group-hover:text-primary md:text-2xl'>
                  {post.frontmatter.title}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogList
