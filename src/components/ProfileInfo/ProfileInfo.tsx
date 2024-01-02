import React from 'react'
import Image from 'next/image'

const ProfileInfo = () => {
  return (
    <div className='wrapper pt-8'>
      <div className='mx-auto flex w-96 flex-col items-center rounded-md bg-primary px-2 py-4 drop-shadow-sm'>
        <div className='size-40 rounded-full bg-gray-100'>
          <Image
            src='/photos-page/avatar.jpg'
            className='h-full rounded-full object-cover object-bottom'
            alt='profile picture'
            width={160}
            height={160}
          />
        </div>
        <div className='mt-1 text-center'>
          <h1 className='text-2xl font-bold'>Hugh Do</h1>
          <p className='text-secondary-color'>@mhughdo</p>
          <p className='text-secondary-color text-md'>Hobbyist photographer</p>
          <div className='text-secondary-color'>
            <svg
              className='mr-1 inline-block'
              width={14}
              height={14}
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='-4808 -20688 14.286 20'>
              <g>
                <path d='M-4800.857-20688a7.143 7.143 0 0 0-7.143 7.143c0 5.714 7.143 12.857 7.143 12.857s7.143-7.143 7.143-12.857a7.142 7.142 0 0 0-7.143-7.143zm0 10a2.857 2.857 0 1 1 2.857-2.859 2.858 2.858 0 0 1-2.857 2.859z'></path>
              </g>
            </svg>
            <span>Tokyo, Japan</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
