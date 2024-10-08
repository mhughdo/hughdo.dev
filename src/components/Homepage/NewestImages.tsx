import clsx from 'clsx'
import Link from 'next/link'

import { getImages } from '@/helpers'

import { ImageCard, LayoutGrid } from './HomePageImageGrid'

const gridCols = [
  'col-span-full md:col-start-1 md:col-end-5',
  'col-span-full md:col-start-5 md:col-end-8',
  'col-span-full md:col-start-8 md:col-end-13',
  'col-span-full md:col-start-1 md:col-end-5',
  'col-span-full md:col-start-5 md:col-end-10',
  'col-span-full md:col-start-10 md:col-end-13',
]

const NewestImages = async () => {
  const imageList = await getImages({ limit: 6 })
  const cards = imageList.map((image, index) => ({
    id: image.id,
    className: clsx(`${gridCols[index]}`, 'h-96'),
    src: image.key,
    blurDataURL: image.blurDataURL,
  })) as ImageCard[]

  return (
    <div>
      <div className='text-md font-medium uppercase tracking-wider text-secondary'>Newest images</div>
      <LayoutGrid cards={cards} />
      <div className='mx-auto mt-8 w-max'>
        <Link
          href='/photos'
          className='text-primary-color hover:text-secondary-color relative rounded-full border border-zinc-500 bg-secondary p-2.5 text-sm hover:bg-zinc-100 dark:border-gray-600 dark:hover:bg-gray-800'>
          See more
          <div className='pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-600 via-violet-500 to-amber-600 opacity-40 blur-lg' />
        </Link>
      </div>
    </div>
  )
}

export default NewestImages
