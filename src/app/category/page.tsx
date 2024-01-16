import BlogList from '@/components/BlogList'
import { getPostsMetadataGroupedByCategory } from '@/helpers'

const Page = async () => {
  const postsMetadataGroupedByCategory = await getPostsMetadataGroupedByCategory()

  return (
    <main className='wrapper text-primary-color space-y-16 pt-16'>
      {Object.entries(postsMetadataGroupedByCategory).map(([category, postsMetadata]) => (
        <BlogList key={category} title={category} postsMetadata={postsMetadata} />
      ))}
    </main>
  )
}

export default Page
