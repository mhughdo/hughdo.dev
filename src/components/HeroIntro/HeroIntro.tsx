const HeroIntro = () => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-8xl font-semibold'>
        <span
          data-before='Hey, '
          className='before:text-fill-color relative before:absolute before:bottom-0 before:left-[-29px]  before:right-0 before:top-[7px] before:z-0  before:block before:w-full before:animate-hey-text-background before:bg-geist-text-gradient before:bg-gradient-to-b before:to-white before:bg-clip-text before:text-center before:content-[attr(data-before)]'>
          <span className='z-1 text-fill-color relative animate-hey-text-foreground select-none bg-gradient-to-l from-blue-600 to-teal-600 bg-clip-text'>
            Hey,{' '}
          </span>
        </span>

        <span
          data-before="I'm"
          className='before:text-fill-color before:animate-im-text-background relative before:absolute before:bottom-0 before:right-0 before:top-[7px]  before:z-0 before:block before:w-full before:bg-geist-text-gradient before:bg-gradient-to-b before:to-white before:bg-clip-text before:text-center before:content-[attr(data-before)]'>
          <span className='z-1 text-fill-color animate-im-text-foreground relative select-none bg-gradient-to-l from-violet-700 to-pink-600 bg-clip-text'>
            I&apos;m
          </span>
        </span>

        <span
          data-before='Hugh Do'
          className='fill-color before:animate-hughdo-text-background relative block text-center before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:block before:w-full before:bg-geist-text-gradient before:bg-gradient-to-b before:to-white before:bg-clip-text before:text-center before:content-[attr(data-before)]'>
          <span className='z-1 animate-hughdo-text-foreground text-fill-color relative select-none bg-gradient-to-l from-rose-600 to-yellow-500 bg-clip-text'>
            Hugh Do
          </span>
        </span>
      </h1>
    </div>
  )
}

export default HeroIntro
