import { notFound } from 'next/navigation'

import ImageDetail from '@/components/ImageDetail'
import ImageDetailModal from '@/components/ImageDetailModal'
import { findImageById, getImages } from '@/helpers'

export const dynamicParams = false
export const revalidate = 3600
export const dynamic = 'force-static'
export async function generateStaticParams() {
  const images = await getImages()
  return images.map((img) => ({ id: img.id.toString() }))
}

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
