import clsx from 'clsx'

const gridCols = [
  'col-span-full md:col-start-1 md:col-end-5',
  'col-span-full md:col-start-5 md:col-end-8',
  'col-span-full md:col-start-8 md:col-end-13',
  'col-span-full md:col-start-1 md:col-end-5',
  'col-span-full md:col-start-5 md:col-end-10',
  'col-span-full md:col-start-10 md:col-end-13',
]

const NewestImagesSkeleton = () => {
  return (
    <div>
      <div className='text-md font-medium uppercase tracking-wider text-secondary'>Newest images</div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-12'>
        {gridCols.map((_, index) => (
          <div
            key={index}
            className={clsx(`${gridCols[index]}`, 'relative h-96 animate-pulse bg-gray-200 dark:bg-gray-800')}
          />
        ))}
      </div>
    </div>
  )
}

export default NewestImagesSkeleton
