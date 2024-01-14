import { FC, HTMLAttributes } from 'react'

type InlineCodeProps = HTMLAttributes<HTMLElement>
const InlineCode: FC<InlineCodeProps> = (props) => {
  return <code className='inline-code'>{props.children}</code>
}

export default InlineCode
