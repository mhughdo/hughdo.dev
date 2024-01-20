'use client'
import { FC, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import DarkModeToggle from '@/components/DarkModeToggle'
import BlogNavItem from '@/components/Header/BlogNavItem'
import { HamburgerMenu } from '@/components/Icons'
import { MotionDiv } from '@/components/MotionComponents'

type MobileHeaderProps = {
  headerItems: {
    name: string
    href: string
    component?: typeof BlogNavItem
  }[]
}

const variants = {
  open: {
    x: 0,
  },
  closed: {
    x: '-100%',
  },
}

const MobileHeader: FC<MobileHeaderProps> = ({ headerItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Dialog.Trigger
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={clsx(
            isMenuOpen && ['z-[9999]', 'fixed', 'right-[16px]', 'top-[38px]', 'isolate', 'w-[32px]', 'h-[32px]']
          )}>
          <HamburgerMenu size='32' isMenuOpen={isMenuOpen} className='text-secondary-color' />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='h-100dvh fixed inset-0 w-screen bg-zinc-100/95 transition-opacity duration-500 dark:bg-zinc-900/95'>
            <Dialog.Content className='fixed bottom-[100px] left-0 h-[75%] w-[75%]'>
              <nav className='flex h-full flex-col justify-between' aria-label='mobile navigation'>
                {
                  <div className='text-primary'>
                    <AnimatePresence>
                      {headerItems.map((item, idx) => {
                        return (
                          <MotionDiv
                            key={item.name}
                            variants={variants}
                            initial='closed'
                            animate={isMenuOpen ? 'open' : 'closed'}
                            transition={{
                              type: 'spring',
                              stiffness: 680,
                              damping: isMenuOpen ? 60 : 20,
                              mass: 1,
                              delay: idx * 0.2,
                            }}>
                            <Link
                              className='block p-4 pl-8 text-3xl font-medium'
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}>
                              {item.name}
                            </Link>
                          </MotionDiv>
                        )
                      })}
                    </AnimatePresence>
                  </div>
                }
                <div className='pl-8'>
                  <DarkModeToggle />
                </div>
              </nav>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default MobileHeader
