import React from 'react'
import { notFound } from 'next/navigation'

import BlogList from '@/components/BlogList'
import { getCategories, getPostsMetadata } from '@/helpers'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const promises = [getCategories(), getPostsMetadata({ categorySlug: slug })] as const
  const [CATEGORIES, postsMetadata] = await Promise.all(promises)
  const category = CATEGORIES.find((category) => category.slug === slug)
  if (!category) {
    notFound()
  }

  return (
    <main className='wrapper text-primary-color pt-16'>
      <BlogList title={category.name} postsMetadata={postsMetadata} />
    </main>
  )
}

export default Page
