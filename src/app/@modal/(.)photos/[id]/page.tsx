import { notFound } from 'next/navigation'

import ImageDetail from '@/components/ImageDetail'
import ImageDetailModal from '@/components/ImageDetailModal'
import { findImageById } from '@/helpers'

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const image = await findImageById(+id)
  if (!image) notFound()

  return (
    <ImageDetailModal>
      <ImageDetail image={image!} />
    </ImageDetailModal>
  )
}

export default Page
