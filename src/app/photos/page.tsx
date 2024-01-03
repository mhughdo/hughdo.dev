import Banner from '@/components/Banner'
import ImageGrid from '@/components/ImageGrid'
import ProfileInfo from '@/components/ProfileInfo'
import { getImages } from '@/helpers'

export const revalidate = 3600

const Photos = async () => {
  const imageList = await getImages({})
  return (
    <div>
      <Banner />
      <ProfileInfo />
      <ImageGrid imageList={imageList} />
    </div>
  )
}

export default Photos
