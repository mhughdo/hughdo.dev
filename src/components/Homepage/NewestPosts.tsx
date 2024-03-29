import { FC } from 'react'

import ContentPreview from '@/components/ContentPreview'
import { PostMetadata } from '@/types'

type NewestPostsProps = {
  className?: string
  postsMetadata: PostMetadata[]
}

const NewestPosts: FC<NewestPostsProps> = ({ postsMetadata }) => {
  return (
    <div>
      <div className='text-md font-medium uppercase tracking-wider text-secondary'>Recently published</div>
      <div className='mt-6' />
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {postsMetadata.map((postMetadata) => {
          return (
            <div key={postMetadata.pathname}>
              <ContentPreview postMetadata={postMetadata} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewestPosts
