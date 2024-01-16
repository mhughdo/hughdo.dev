const Info = ({ size = '20', className }: { size: string; className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      width={size}
      height={size}
      version='1.1'
      viewBox='0 0 128 128'
      fill='currentColor'
      className={className}>
      <circle cx='64' cy='64' r='55' fill='transparent' />
      <path
        fill='currentColor'
        d='M64,122C32,122,6,96,6,64S32,6,64,6s58,26,58,58S96,122,64,122z M64,12c-28.7,0-52,23.3-52,52s23.3,52,52,52 s52-23.3,52-52S92.7,12,64,12z'
      />
      <path fill='currentColor' d='M64,90c-1.7,0-3-1.3-3-3V61c0-1.7,1.3-3,3-3s3,1.3,3,3v26C67,88.7,65.7,90,64,90z' />
      <path fill='currentColor' d='M64,49c-1.7,0-3-1.3-3-3v-5c0-1.7,1.3-3,3-3s3,1.3,3,3v5C67,47.7,65.7,49,64,49z' />
    </svg>
  )
}

const Danger = ({ size = '20', className }: { size: string; className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      width={size}
      height={size}
      fill='currentColor'
      className={className}>
      <path d='M 24 5.0527344 C 22.445544 5.0527344 20.891089 5.8107396 20.050781 7.328125 L 4.5703125 35.294922 C 2.9376946 38.244782 5.1480864 42 8.5195312 42 L 39.482422 42 C 42.853867 42 45.064258 38.244782 43.431641 35.294922 L 27.949219 7.328125 C 27.108911 5.8107396 25.554456 5.0527344 24 5.0527344 z M 24 7.9492188 C 24.508544 7.9492188 25.016527 8.2256354 25.324219 8.78125 L 40.806641 36.748047 C 41.400023 37.820187 40.704977 39 39.482422 39 L 8.5195312 39 C 7.2969763 39 6.6019304 37.820187 7.1953125 36.748047 L 22.675781 8.78125 C 22.983473 8.2256354 23.491456 7.9492187 24 7.9492188 z M 23.976562 15.978516 A 1.50015 1.50015 0 0 0 22.5 17.5 L 22.5 27.5 A 1.50015 1.50015 0 1 0 25.5 27.5 L 25.5 17.5 A 1.50015 1.50015 0 0 0 23.976562 15.978516 z M 24 32 A 2 2 0 0 0 24 36 A 2 2 0 0 0 24 32 z' />
    </svg>
  )
}

export { Danger, Info }