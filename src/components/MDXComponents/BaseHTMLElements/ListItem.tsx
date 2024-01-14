import { FC, HTMLAttributes } from 'react'

import { Arrow } from '@/components/Icons'

type ListItemProps = HTMLAttributes<HTMLLIElement>

const ListItem: FC<ListItemProps> = ({ children, ...props }) => {
  return (
    <li {...props}>
      <span>
        <Arrow width={20} height={20} className='text-primary' />
      </span>
      <div>{children}</div>
    </li>
  )
}

export default ListItem
