import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { getImages } from '@/helpers'

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

  return (
    <div>
      <div className='text-md font-medium uppercase tracking-wider text-secondary'>Newest images</div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-12'>
        {imageList.map((image, index) => (
          <div key={image.id} className={clsx(`${gridCols[index]}`, 'relative h-96')}>
            <Image
              src={image.key}
              alt='one of the newest images'
              placeholder='blur'
              blurDataURL={image.blurDataURL!}
              quality={90}
              fill
              sizes='(min-width: 768px) 33vw, 100vw'
              className='rounded-md object-cover object-center'
            />
          </div>
        ))}
      </div>
      <div className='mx-auto mt-6 w-max'>
        <Link
          href='/photos'
          className='text-primary-color hover:text-secondary-color relative rounded-full border border-zinc-500 bg-secondary p-2 text-sm hover:bg-zinc-100 dark:border-gray-600 dark:hover:bg-gray-800'>
          See more
          <div className='pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-600 via-violet-500 to-amber-600 opacity-60 blur-md' />
        </Link>
      </div>
    </div>
  )
}

export default NewestImages
