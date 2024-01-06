import { FC } from 'react'
import Link from 'next/link'

import { Category } from '@/types'

type CategoryPillProps = {
  category: Category
}

const CategoryPill: FC<CategoryPillProps> = ({ category }) => {
  return (
    <Link
      href={`/posts/${category.slug}`}
      className='text-primary-color inline-block scale-[95%] rounded-lg bg-sky-200 px-2.5 py-1.5 text-xs font-medium opacity-80 transition duration-200 hover:scale-100 hover:opacity-100 dark:bg-sky-700 md:px-2 md:py-1'>
      {category.name}
    </Link>
  )
}

export default CategoryPill
