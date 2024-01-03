import React from 'react'
import Link from 'next/link'

import { Github, Twitter } from '@/components/Icons'
import { getCategories } from '@/helpers/content'

const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/mhughdo',
    Icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mhughdo',
    Icon: Twitter,
  },
]

const Footer = async () => {
  const categories = await getCategories()

  return (
    <footer className='mt-20 border-t dark:border-t-gray-600'>
      <div className='wrapper mx-auto flex flex-col items-center justify-between py-8 md:flex-row md:items-stretch'>
        <div className='flex flex-col justify-between'>
          <div>
            <Link href='/' className='text-primary-color text-xl font-medium tracking-wider'>
              Hugh Do
            </Link>
            <div className='mt-2 flex justify-center gap-4 md:justify-start'>
              {socialLinks.map((socialLink) => (
                <Link
                  key={socialLink.name}
                  href={socialLink.href}
                  target='_blank'
                  className='text-primary-color hover:text-secondary-color transition-colors duration-500'>
                  <socialLink.Icon width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
          <div className='hidden md:block'>
            <span className='text-secondary-color text-sm'>© 2024 Hugh Do —— Tokyo</span>
          </div>
        </div>
        <div className='mt-4 md:mt-0'>
          <p className='text-secondary-color text-center md:text-left'>Posts</p>
          <div className='text-primary-color mt-2 grid grid-cols-2 justify-items-center gap-2 text-sm md:justify-items-start'>
            {categories.map((category) => (
              <Link key={category.slug} href={`/posts/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-10 block md:hidden'>
          <span className='text-secondary-color text-sm'>© 2024 Hugh Do —— Tokyo</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
