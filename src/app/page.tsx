import { Hero, MainSection } from '@/components/Homepage'

export default async function Home() {
  return (
    <div className='wrapper'>
      <Hero />
      <MainSection />
    </div>
  )
}
