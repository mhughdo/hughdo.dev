import NewestPosts from '@/components/Homepage/NewestPosts'
import Topics from '@/components/Homepage/Topics'
import { getCategories, getPostsMetadata } from '@/utils/content'

const MainSection = async () => {
  const [postsMetadata, categories] = await Promise.all([getPostsMetadata(), getCategories()])

  return (
    <main className='mt-20 grid grid-cols-1 items-start md:mt-32 md:grid-cols-[4fr_1fr] lg:mt-40'>
      <NewestPosts postsMetadata={postsMetadata} />
      <Topics />
    </main>
  )
}

export default MainSection
