import { HTMLAttributes } from 'react'

import { CustomLink, Headings } from '@/components/MDXComponents/BaseHTMLElements'
import { List } from '@/components/MDXComponents/BaseHTMLElements'
import CustomCode from '@/components/MDXComponents/CustomCode'

// TODO: add more components here
export const Components = {
  ...Headings,
  ul: (props: HTMLAttributes<HTMLUListElement>) => <List variant='unordered' {...props} />,
  ol: (props: HTMLAttributes<HTMLOListElement>) => <List variant='ordered' {...props} />,
  li: List.Item,
  a: CustomLink,
  pre: CustomCode,
}
