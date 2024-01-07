'use client'
import { FC, ReactNode, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'

import { Close } from '@/components/Icons'

const ImageDetailModal: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!open) {
      router.back()
    }
  }, [open, router])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 grid place-items-center overflow-y-scroll bg-zinc-950/60 px-0 py-8 focus:outline-none'>
          <Dialog.Content className='wrapper bg-primary py-4 max-sm:px-0 md:py-8 lg:py-12'>{children}</Dialog.Content>
          <button className='fixed left-0 top-0 p-2' onClick={() => setOpen(false)}>
            <Close width={24} height={24} className='text-white' />
          </button>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ImageDetailModal
