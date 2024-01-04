import Banner from '@/components/Banner'
import { ImageGrid, LoadMore } from '@/components/ImageGrid'
import ProfileInfo from '@/components/ProfileInfo'
import { getImages } from '@/helpers'

export const revalidate = 3600

const Photos = async () => {
  const imageList = await getImages({})
  return (
    <div>
      <Banner />
      <ProfileInfo />
      <div className='wrapper-plus my-10'>
        <ImageGrid imageList={imageList} />
        <LoadMore />
      </div>
    </div>
  )
}

export default Photos
