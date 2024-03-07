import React from 'react'
import TopIntro from '../TopIntro/TopIntro'

const Searchtag = () => {
  return (
    <div className='w-full space-y-8'>
     <TopIntro firstword={"search"} secondword={"with Tags"} />
     <div className='flex gap-2 items-center justify-start flex-wrap'>
        <button className='bg-skin  text-gray-50 capitalize w-fit px-4 py-2 text-sm border-[.4px] rounded-lg border-gray-500 dark:border-gray-300'>
            politics
        </button>
        <button className=' capitalize  w-fit px-4 py-2 text-sm border-[.4px] rounded-lg border-gray-500 dark:border-gray-300'>
            Lifestyle
        </button>
        <button className=' capitalize  w-fit px-4 py-2 text-sm border-[.4px] rounded-lg border-gray-500 dark:border-gray-300'>
            science
        </button>
        <button className=' capitalize  w-fit px-4 py-2 text-sm border-[.4px] rounded-lg border-gray-500 dark:border-gray-300'>
            food
        </button>
        <button className=' capitalize  w-fit px-4 py-2 text-sm border-[.4px] rounded-lg border-gray-500 dark:border-gray-300'>
            Art
        </button>
     </div>
    </div>
  )
}

export default Searchtag