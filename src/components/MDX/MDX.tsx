import { FC } from 'react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import { Components } from '@/components/MDXComponents'

type MDXProps = Omit<MDXRemoteProps, 'components'>

const MDX: FC<MDXProps> = (props) => {
  // @ts-ignore
  return <MDXRemote {...props} components={Components} />
}

export default MDX
