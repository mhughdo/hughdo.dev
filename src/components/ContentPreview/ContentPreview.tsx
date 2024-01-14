import { FC } from 'react'
import Link from 'next/link'

import { Arrow } from '@/components/Icons'
import { PostMetadata } from '@/types'

type ContentPreviewProps = {
  postMetadata: PostMetadata
}

const ContentPreview: FC<ContentPreviewProps> = ({ postMetadata }) => {
  const { title, description } = postMetadata.frontmatter
  const { pathname } = postMetadata

  return (
    <Link href={pathname}>
      <article className='text-primary-color group relative cursor-pointer rounded-2xl border bg-zinc-50/20 p-4 drop-shadow-md transition duration-500 hover:relative hover:z-10 hover:scale-110 dark:border-0 dark:bg-gray-800'>
        <h3 className='text-lg font-semibold group-hover:text-primary'>{title}</h3>
        <p className='mt-4 text-sm'>{description} </p>
        <div className='mt-4 flex items-center text-xs font-semibold'>
          <span>Read more</span>
          <Arrow
            className='transform transition duration-500 group-hover:translate-x-2 group-hover:text-primary'
            width={24}
            height={24}
          />
        </div>
        <div className='running-line-mask absolute inset-0 hidden h-full w-full overflow-hidden rounded-2xl p-[1.5px] group-hover:lg:block'>
          <div className='absolute left-1/2 top-1/2 h-full w-full translate-x-[-50%] translate-y-[-50%] bg-running-line group-hover:lg:animate-running-line' />
        </div>
      </article>
    </Link>
  )
}

export default ContentPreview
