import { notFound } from 'next/navigation'

import ImageDetail from '@/components/ImageDetail'
import { findImageById } from '@/helpers'

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const image = await findImageById(+id)
  if (!image) notFound()

  return (
    <div className='wrapper'>
      <ImageDetail image={image} />
    </div>
  )
}

export default Page
