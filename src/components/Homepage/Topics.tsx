import { FC } from 'react'

import { Category } from '@/types'

import CategoryPill from '../CategoryPill'

type TopicsProps = {
  className?: string
  categories: Category[]
}

const Topics: FC<TopicsProps> = ({ categories }) => {
  return (
    <div>
      <div className='text-md text-left font-medium uppercase tracking-wider text-secondary md:text-right'>Topics</div>
      <div className='mt-6 flex flex-row flex-wrap gap-1.5 md:flex-row-reverse'>
        {categories.map((category) => (
          <CategoryPill key={category.slug} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Topics
