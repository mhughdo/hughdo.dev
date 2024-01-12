import { Suspense } from 'react'

import { NewestImages } from '@/components/Homepage'
import NewestImagesSkeleton from '@/components/Homepage/NewestImagesSkeleton'
import NewestPosts from '@/components/Homepage/NewestPosts'
import Topics from '@/components/Homepage/Topics'
import { getImages } from '@/helpers'
import { getCategories, getPostsMetadata } from '@/helpers/content'

const MainSection = async () => {
  const [postsMetadata, categories, imageList] = await Promise.all([
    getPostsMetadata(),
    getCategories(),
    getImages({ limit: 6 }),
  ])

  return (
    <main>
      <div className='mt-20 grid grid-cols-1 items-start gap-6 md:mt-32 md:grid-cols-[4fr_1fr] lg:mt-40'>
        <NewestPosts postsMetadata={postsMetadata} />
        <Topics categories={categories} />
      </div>
      <div className='mt-8'>
        <Suspense fallback={<NewestImagesSkeleton />}>
          <NewestImages imageList={imageList} />
        </Suspense>
      </div>
    </main>
  )
}

export default MainSection
