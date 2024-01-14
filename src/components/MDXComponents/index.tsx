import CustomCode from '@/components/MDXComponents/CustomCode'

import { CustomLink, Headings } from './BaseHTMLElements'

// TODO: add more components here
export const Components = {
  ...Headings,
  a: CustomLink,
  pre: CustomCode,
}
