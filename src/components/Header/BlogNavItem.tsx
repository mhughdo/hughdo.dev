'use client'
import { FC } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

import { DropDownTrigger } from '@/components/Icons'
import { Category } from '@/types'

type BlogNavItemProps = {
  name: string
  href: string
  categories: Category[]
}

const BlogNavItem: FC<BlogNavItemProps> = ({ name, href, categories }) => {
  return (
    <div>
      <Link href={href}>{name}</Link>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className='relative ml-1 align-middle'>
          <DropDownTrigger size='16' />
          {/* Increase the target size */}
          <span className='absolute inset-[-8px]' />
          <span />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className='relative mt-4 grid grid-cols-2 gap-x-8 gap-y-2 rounded-xl bg-zinc-50 px-6 py-4 text-sm text-black after:absolute after:left-[47%] after:top-[-3%] after:h-[15px] after:w-[15px] after:rotate-45 after:bg-zinc-50 dark:bg-white dark:after:bg-white'>
            {categories.map((category) => (
              <Link key={category.name} href={`/category/${category.slug}`} className='block'>
                <DropdownMenu.Item className='p-2 hover:text-primary hover:!outline-none focus:outline-primary'>
                  {category.name}
                </DropdownMenu.Item>
              </Link>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

export default BlogNavItem
