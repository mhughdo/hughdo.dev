const ShortIntro = () => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-8xl font-semibold'>
        <span
          data-before='Hey, '
          className='before:text-fill-color relative before:absolute before:bottom-0 before:left-[-29px]  before:right-0 before:top-[7px] before:z-0  before:block before:w-full before:animate-hey-text-background before:bg-geist-text-gradient before:bg-gradient-to-b before:to-white before:bg-clip-text before:text-center before:content-[attr(data-before)]'>
          <span
            className={`z-1 text-fill-color relative animate-hey-text-foreground select-none bg-gradient-to-l from-blue-600 to-teal-600 bg-clip-text `}>
            Hey,{' '}
          </span>
        </span>

        <span className='text-fill-color select-none bg-gradient-to-l from-violet-700 to-pink-600 bg-clip-text'>
          I&apos;m
        </span>
        <span className='text-fill-color block select-none bg-gradient-to-l from-rose-600 to-yellow-500 bg-clip-text text-center'>
          Hugh Do
        </span>
      </h1>
    </div>
  )
}

export default ShortIntro
