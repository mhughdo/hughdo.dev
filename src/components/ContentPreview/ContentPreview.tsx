import { FC } from 'react'
import Link from 'next/link'

import { PostMetadata } from '@/types'

type ContentPreviewProps = {
  postMetadata: PostMetadata
}

const ContentPreview: FC<ContentPreviewProps> = ({ postMetadata }) => {
  const { title, description } = postMetadata.frontmatter
  const { pathname } = postMetadata

  return (
    <article className='text-primary-color group relative cursor-pointer rounded-2xl border bg-zinc-50/20 p-4 drop-shadow-md transition duration-500 hover:relative hover:z-10 hover:scale-110 dark:border-0 dark:bg-gray-800'>
      <Link href={pathname}>
        <h3 className='text-2xl font-semibold group-hover:text-primary'>{title}</h3>
        <p className='text-normal mt-4'>{description} </p>
        <div className='mt-4 flex items-center font-semibold'>
          <span>Read more</span>
          <svg
            className='-rotate-90 transform transition duration-500 group-hover:translate-x-2 group-hover:text-primary'
            width='24'
            height='24'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z'
              fill='currentColor'></path>
          </svg>
        </div>
      </Link>
      <div className='running-line-mask absolute inset-0 hidden h-full w-full rounded-2xl p-px group-hover:block'>
        <div className='hover:animate-running-line bg-running-line absolute left-1/2 top-1/2 h-full w-full translate-x-[-50%] translate-y-[-50%]' />
      </div>
    </article>
  )
}

export default ContentPreview
