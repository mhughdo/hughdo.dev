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
      <div className='text-center text-lg font-medium uppercase tracking-wider text-secondary'>Topics</div>
      <div className='mt-6 space-x-1 space-y-1'>
        {categories.map((category) => (
          <CategoryPill key={category.slug} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Topics
