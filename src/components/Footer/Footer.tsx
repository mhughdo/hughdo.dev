import React from 'react'
import Link from 'next/link'

import { Github, Twitter } from '@/components/Icons'
import { getCategories } from '@/utils/content'

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
      <div className='wrapper mx-auto flex justify-between py-8'>
        <div className='flex flex-col justify-between'>
          <div>
            <Link href='/' className='text-primary-color text-2xl font-medium tracking-wider'>
              Hugh Do
            </Link>
            <div className='mt-2 flex gap-4'>
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
          <div>
            <span className='text-secondary-color'>© 2024 Hugh Do —— Tokyo</span>
          </div>
        </div>
        <div>
          <p className='text-secondary-color'>Posts</p>
          <div className='text-primary-color mt-2 grid grid-cols-2 gap-2'>
            {categories.map((category) => (
              <Link key={category.slug} href={`/posts/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
