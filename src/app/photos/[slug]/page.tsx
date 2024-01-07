import { notFound } from 'next/navigation'

import ImageDetail from '@/components/ImageDetail'
import { findImageByName } from '@/helpers'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const image = await findImageByName(slug)
  if (!image) notFound()

  return (
    <div className='wrapper'>
      <ImageDetail image={image} />
    </div>
  )
}

export default Page
