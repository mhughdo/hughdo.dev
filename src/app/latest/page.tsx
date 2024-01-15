import BlogList from '@/components/BlogList'
import { getPostsMetadata } from '@/helpers'

const Page = async () => {
  const postsMetadata = await getPostsMetadata()

  return (
    <main className='wrapper text-primary-color pt-16'>
      <BlogList title='Latest posts' postsMetadata={postsMetadata} />
    </main>
  )
}

export default Page
