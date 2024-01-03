'use client'

import { FC } from 'react'
import Link from 'next/link'

import CommandPaletteToggle from '@/components/CommandPaletteToggle'
import DarkModeToggle from '@/components/DarkModeToggle'
import { ColorThemeType } from '@/types'

const headerLinks = [
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Photos',
    href: '/photos',
  },
]

interface HeaderProps {
  initialTheme: ColorThemeType
}

const Header: FC<HeaderProps> = ({ initialTheme }) => {
  return (
    <div>
      <header className='wrapper flex items-center justify-between py-9 lg:py-12'>
        <div className='text-primary-color flex flex-1 items-baseline'>
          <Link className='mr-8 text-xl' href='/'>
            <h1>Hugh Do</h1>
          </Link>
          <nav className='hidden lg:block'>
            <ul className='text-secondary-color flex'>
              {headerLinks.map((link) => (
                <li key={link.name} className='px-3 py-2'>
                  <Link href={link.href} className='block text-base font-medium'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='flex gap-4'>
          <CommandPaletteToggle />
          <DarkModeToggle initialTheme={initialTheme} />
        </div>
      </header>
    </div>
  )
}

export default Header
