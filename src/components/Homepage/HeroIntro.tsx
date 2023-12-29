'use client'
import { motion } from 'framer-motion'

const HeroIntro = () => {
  return (
    <div className='text-secondary-color md:xl text-balance md:px-18 mt-6 text-center text-lg lg:px-24 lg:text-2xl'>
      This is my blog. Here, I share my experience as a{' '}
      <span className='relative whitespace-nowrap'>
        software engineer{' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 85 49'
          preserveAspectRatio='none'
          className='absolute bottom-0 left-[-6px] right-0 top-[-3px] -z-[1] h-[135%] min-w-[105%]'>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              mass: 10,
              stiffness: 100,
              damping: 60,
            }}
            strokeLinecap='round'
            strokeWidth='2'
            className='stroke-sky-500'
            pathLength='1'
            strokeDashoffset='0px'
            strokeDasharray='0 1'
            d='M43.276 47.002s-39.06-.82-42-18.5c-3.217-19.34 22.395-27.374 42-27.5 17.922-.115 40.766 4.594 40 22.5-.788 18.404-44 17-44 17'></motion.path>
        </svg>
      </span>{' '}
      and what I&apos;ve learned along the way, mostly about{' '}
      <span className='relative whitespace-nowrap'>
        React, Kubernetes, AWS
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 192 7'
          preserveAspectRatio='none'
          className='h-10px md:top[24px] absolute bottom-0 left-0 right-0 top-[22px] -z-[1] min-w-[105%] lg:top-[26px]'>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              mass: 10,
              stiffness: 100,
              damping: 60,
            }}
            strokeLinecap='round'
            strokeWidth='2'
            pathLength='1'
            strokeDashoffset='0px'
            className='stroke-indigo-500'
            strokeDasharray='0 1'
            d='M1 3.409S50.376-.539 85 1.673c13.942.891 16.501 3.618 30.5 3.472 12.647-.133 19.355-3.662 32-3.472 11.105.168 14.5 6.596 28 3.472C189 2.02 191 3.409 191 3.409'></motion.path>
        </svg>
      </span>
      , and more through{' '}
      <span className='relative whitespace-nowrap'>
        interactive articles.
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 114 7'
          preserveAspectRatio='none'
          className='h-10px absolute bottom-0 left-0 right-0 top-[20px] -z-[1] min-w-[105%] md:top-[22px] lg:top-[26px]'>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              mass: 10,
              stiffness: 100,
              damping: 60,
            }}
            strokeLinecap='round'
            strokeWidth='2'
            pathLength='1'
            strokeDashoffset='0px'
            className='stroke-amber-500'
            strokeDasharray='0 1'
            d='M1 2l4.935 1.763c1.261.45 2.669.133 3.615-.813v0a3.464 3.464 0 014.9 0l.8.8a4.596 4.596 0 006.5 0v0a4.596 4.596 0 016.5 0l.75.75a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0l.285-.285a3.938 3.938 0 014.872-.555l1.988 1.243A6.885 6.885 0 0098 5.157l2.454-1.291a11.712 11.712 0 017.49-1.17l4.555.804'></motion.path>
        </svg>
      </span>
    </div>
  )
}

export default HeroIntro
