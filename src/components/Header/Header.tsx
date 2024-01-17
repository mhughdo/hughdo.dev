import dynamic from 'next/dynamic'
import Link from 'next/link'

import CommandPaletteToggle from '@/components/CommandPaletteToggle'
import BlogNavItem from '@/components/Header/BlogNavItem'
import { getCategories } from '@/helpers'

const headerItems = [
  {
    name: 'Latest',
    href: '/latest',
  },
  {
    name: 'Blog',
    href: '/category',
    component: BlogNavItem,
  },
  {
    name: 'Photos',
    href: '/photos',
  },
]

const DarkModeToggle = dynamic(() => import('../DarkModeToggle').then((mod) => mod.default), { ssr: false })

const Header = async () => {
  const categories = getCategories()

  return (
    <div>
      <header className='wrapper flex items-center justify-between py-9 lg:py-12'>
        <div className='text-primary-color flex flex-1 items-baseline'>
          <Link className='mr-8 text-xl' href='/'>
            <h1>Hugh Do</h1>
          </Link>
          <nav className='hidden lg:block'>
            <ul className='text-secondary-color flex'>
              {headerItems.map((item) => {
                return (
                  <li key={item.name} className='px-3 py-2'>
                    {item.component ? (
                      <item.component key={item.name} name={item.name} href={item.href} categories={categories} />
                    ) : (
                      <Link href={item.href} className='block text-base font-medium'>
                        {item.name}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className='flex gap-4'>
          <CommandPaletteToggle />
          <DarkModeToggle />
        </div>
      </header>
    </div>
  )
}

export default Header
