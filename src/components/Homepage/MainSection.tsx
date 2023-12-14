import NewestPosts from '@/components/Homepage/NewestPosts'
import Topics from '@/components/Homepage/Topics'

const MainSection = () => {
  return (
    <main className='grid grid-cols-1 items-start pt-16 md:grid-cols-[2fr_1fr] lg:pt-24'>
      <NewestPosts />
      <Topics />
    </main>
  )
}

export default MainSection
