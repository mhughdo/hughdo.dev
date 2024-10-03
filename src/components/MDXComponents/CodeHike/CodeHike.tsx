import { highlight, Pre, RawCode } from 'codehike/code'

import { diff, lineNumbers, mark } from './Extension'

export default async function CodeHike({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, 'github-from-css')
  return <Pre code={highlighted} handlers={[lineNumbers, mark, diff]} />
}
