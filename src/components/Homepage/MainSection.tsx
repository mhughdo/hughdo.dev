import { Suspense } from 'react'

import { NewestImages } from '@/components/Homepage'
import NewestImagesSkeleton from '@/components/Homepage/NewestImagesSkeleton'
import NewestPosts from '@/components/Homepage/NewestPosts'
import Topics from '@/components/Homepage/Topics'
import { getCategories, getPostsMetadata } from '@/helpers/content'

export const revalidate = 3600

const MainSection = async () => {
  const [postsMetadata, categories] = await Promise.all([getPostsMetadata({ limit: 20 }), getCategories()])

  return (
    <main>
      <div className='mt-20 grid grid-cols-1 items-start gap-6 md:mt-32 md:grid-cols-[4fr_1fr] lg:mt-40'>
        <NewestPosts postsMetadata={postsMetadata} />
        <Topics categories={categories} />
      </div>
      <div className='mt-8'>
        <Suspense fallback={<NewestImagesSkeleton />}>
          <NewestImages />
        </Suspense>
      </div>
    </main>
  )
}

export default MainSection
