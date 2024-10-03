import { AnnotationHandler, BlockAnnotation, InnerLine } from 'codehike/code'

// TODO: Make those hardcoded css values css variables

export const lineNumbers: AnnotationHandler = {
  name: 'line-numbers',
  Line: (props) => {
    const width = props.totalLines.toString().length + 1
    return (
      <div className='flex'>
        <span className='text-primary-color select-none text-center opacity-50' style={{ minWidth: `${width}ch` }}>
          {props.lineNumber}
        </span>
        <InnerLine merge={props} className='flex-1 pl-2' />
      </div>
    )
  },
}

export const diff: AnnotationHandler = {
  name: 'diff',
  onlyIfAnnotated: true,
  transform: (annotation: BlockAnnotation) => {
    const color = annotation.query == '-' ? '#f85149' : '#3fb950'
    return [annotation, { ...annotation, name: 'mark', query: color }]
  },
  Line: ({ annotation, ...props }) => (
    <>
      <div className='box-content min-w-[1ch] select-none pl-2 opacity-70'>{annotation?.query}</div>
      <InnerLine merge={props} />
    </>
  ),
}

export const mark: AnnotationHandler = {
  name: 'mark',
  Line: ({ annotation, ...props }) => {
    const color = annotation?.query || 'rgb(14 165 233)'
    return (
      <div
        className='flex'
        style={{
          borderLeft: 'solid 2px transparent',
          borderLeftColor: annotation && color,
          backgroundColor: annotation && `rgb(from ${color} r g b / 0.1)`,
        }}>
        <InnerLine merge={props} className='flex-1 px-2' />
      </div>
    )
  },
  Inline: ({ annotation, children }) => {
    const color = annotation?.query || 'rgb(14 165 233)'
    return (
      <span
        className='-mx-0.5 rounded px-0.5 py-0'
        style={{
          outline: `solid 1px rgb(from ${color} r g b / 0.5)`,
          background: `rgb(from ${color} r g b / 0.13)`,
        }}>
        {children}
      </span>
    )
  },
}
