'use client'

import { FC } from 'react'
import Link from 'next/link'

import DarkModeToggle from '@/components/DarkModeToggle'
import { ColorThemeType } from '@/types'

import CommandPaletteToggle from '../CommandPaletteToggle'

const headerLinks = [
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Gallery',
    href: '/gallery',
  },
]

interface HeaderProps {
  initialTheme: ColorThemeType
}

const Header: FC<HeaderProps> = ({ initialTheme }) => {
  return (
    <div className='px-12 py-9 lg:py-12'>
      <header className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <div className='text-primary flex flex-1 items-center '>
          <Link className='mr-8 text-2xl' href='/'>
            <h1>Hugh Do</h1>
          </Link>
          <nav className='hidden lg:block'>
            <ul className='text-secondary flex'>
              {headerLinks.map((link) => (
                <li key={link.name} className='px-3 py-2'>
                  <Link href={link.href} className='block text-lg font-medium'>
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
