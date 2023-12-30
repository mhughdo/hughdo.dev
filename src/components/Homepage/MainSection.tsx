import NewestPosts from '@/components/Homepage/NewestPosts'
import Topics from '@/components/Homepage/Topics'

const MainSection = () => {
  return (
    <main className='mt-20 grid grid-cols-1 items-start md:mt-32 md:grid-cols-[2fr_1fr] lg:mt-40'>
      <NewestPosts />
      <Topics />
    </main>
  )
}

export default MainSection
