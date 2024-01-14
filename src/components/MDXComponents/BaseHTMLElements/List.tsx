import { FC, HTMLAttributes } from 'react'

import ListItem from './ListItem'

type UnorderedListProps = {
  variant: 'unordered'
} & HTMLAttributes<HTMLUListElement>

type OrderedListProps = {
  variant: 'ordered'
} & HTMLAttributes<HTMLOListElement>

type ListProps = UnorderedListProps | OrderedListProps

const List: FC<ListProps> & { Item: typeof ListItem } = ({ variant, children, ...props }) => {
  if (variant === 'unordered') {
    return <ul {...props}>{children}</ul>
  }
  return <ol {...props}>{children}</ol>
}

List.Item = ListItem

export default List
