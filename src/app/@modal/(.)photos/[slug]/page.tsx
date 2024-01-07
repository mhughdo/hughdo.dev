import { notFound } from 'next/navigation'

import ImageDetail from '@/components/ImageDetail'
import ImageDetailModal from '@/components/ImageDetailModal'
import { findImageByName } from '@/helpers'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const image = await findImageByName(slug)
  if (!image) notFound()

  return (
    <ImageDetailModal>
      <ImageDetail image={image!} />
    </ImageDetailModal>
  )
}

export default Page
