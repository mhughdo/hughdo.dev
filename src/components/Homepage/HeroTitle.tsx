import clsx from 'clsx'

type HeroTitleProps = {
  className?: string
}

const HeroTitle = ({ className }: HeroTitleProps) => {
  return (
    <div className={clsx('flex justify-center p-2 lg:p-4', className)}>
      <h1 className='text-primary-color text-3xl font-semibold md:text-5xl lg:text-6xl'>
        <span
          data-before='Hey,'
          className='relative inline-block before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:z-0 before:block before:w-full before:animate-hey-text-background before:bg-geist-text-gradient before:bg-gradient-to-b before:to-white before:bg-clip-text before:text-center before:content-[attr(data-before)]'>
          <span className='z-1 text-fill-color relative animate-hey-text-foreground select-none bg-gradient-to-l from-blue-600 to-teal-600 bg-clip-text'>
            Hey,
          </span>
        </span>{' '}
        <span
          data-before="I'm"
          className='relative inline-block before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0  before:block before:w-full before:animate-im-text-background before:bg-geist-text-gradient before:bg-gradient-to-b before:to-white before:bg-clip-text before:text-center before:content-[attr(data-before)]'>
          <span className='z-1 text-fill-color relative animate-im-text-foreground select-none bg-gradient-to-l from-violet-700 to-pink-600 bg-clip-text'>
            I&apos;m
          </span>
        </span>{' '}
        <span
          data-before='Hugh'
          className='fill-color relative inline-block text-center before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:block before:w-full before:animate-hughdo-text-background before:bg-geist-text-gradient before:bg-gradient-to-b before:to-white before:bg-clip-text before:text-center before:content-[attr(data-before)]'>
          <span className='z-1 text-fill-color relative animate-hughdo-text-foreground select-none bg-gradient-to-l from-rose-600 to-yellow-500 bg-clip-text'>
            Hugh
          </span>
        </span>
      </h1>
    </div>
  )
}

export default HeroTitle
