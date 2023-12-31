type CloudinaryLoader = {
  src: string
  width: number
  quality: number
}

export default function cloudinaryLoader({ src, width, quality }: CloudinaryLoader) {
  if (quality > 100) {
    // The original image will be served
    return src
  }

  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://https://res.cloudinary.com/hughdo-dev/image/upload/${params.join(',')}${src}`
}
