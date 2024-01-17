import { notFound } from 'next/navigation'

import ImageDetail from '@/components/ImageDetail'
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
    <div className='wrapper'>
      <ImageDetail image={image} />
    </div>
  )
}

export default Page
