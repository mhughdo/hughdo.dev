import { FC } from 'react'
import { recmaCodeHike, remarkCodeHike } from 'codehike/mdx'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import { Components } from '@/components/MDXComponents'

type MDXProps = Omit<MDXRemoteProps, 'components'>
type MDXOptions = Pick<MDXRemoteProps, 'options'>

const chConfig = {
  components: { code: 'CodeHike' },
}

const options: MDXOptions = {
  options: {
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, chConfig]],
      recmaPlugins: [[recmaCodeHike, chConfig]],
    },
  },
}

const MDX: FC<MDXProps> = (props) => {
  // @ts-ignore
  return <MDXRemote {...props} components={Components} options={options.options} />
}

export default MDX
