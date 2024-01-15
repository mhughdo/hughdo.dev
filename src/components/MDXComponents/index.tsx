import { HTMLAttributes } from 'react'

import { CustomLink, Headings, RoundedImage } from '@/components/MDXComponents/BaseHTMLElements'
import { List } from '@/components/MDXComponents/BaseHTMLElements'
import Callout from '@/components/MDXComponents/Callout'
import { CustomCode, InlineCode } from '@/components/MDXComponents/CustomCode'

// TODO: add more components here
export const Components = {
  ...Headings,
  ul: (props: HTMLAttributes<HTMLUListElement>) => <List variant='unordered' {...props} />,
  ol: (props: HTMLAttributes<HTMLOListElement>) => <List variant='ordered' {...props} />,
  li: List.Item,
  a: CustomLink,
  pre: CustomCode,
  Image: RoundedImage,
  InlineCode,
  Callout,
}
