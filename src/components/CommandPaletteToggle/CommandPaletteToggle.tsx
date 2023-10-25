import React, { MouseEvent } from 'react'

import { Command } from '../Icons'

interface CommandPaletteToggleProps {
  size?: number
}

const CommandPaletteToggle = ({ size = 25 }: CommandPaletteToggleProps) => {
  function handleToggleCommandPalette(event: MouseEvent<HTMLButtonElement>): void {
    throw new Error('Function not implemented.')
  }

  return (
    <button
      aria-label='Show command palette'
      title='Show command palette'
      onClick={handleToggleCommandPalette}
      className='text-primary opacity-70 hover:opacity-100'>
      <Command width={size} height={size} />
      <span className='sr-only'>Show command palette</span>
    </button>
  )
}

export default CommandPaletteToggle
