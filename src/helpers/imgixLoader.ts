type ImgixLoader = {
  src: string
  width: number
  quality: number
}

const imgixUrl = 'https://hughdo-dev.imgix.net/'

export default function imgixLoader({ src, width, quality }: ImgixLoader) {
  // TODO: Handle dpr, ar
  const url = new URL(`${imgixUrl}${src}`)
  const params = url.searchParams
  params.set('auto', params.getAll('auto').join(',') || 'format')
  params.set('fit', params.get('fit') || 'max')
  params.set('w', params.get('w') || width.toString())
  params.set('q', (quality || 100).toString())
  return url.href
}
