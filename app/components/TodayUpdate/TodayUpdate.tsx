import React from 'react'
import TopIntro from '../TopIntro/TopIntro'

const TodayUpdate = () => {
  return (
    <div className='w-full space-y-8'>
        <TopIntro firstword={"Today's"} secondword={"Update"} />
        <div className='w-full flex flex-wrap gap-4 text-gray-900'>
             <div className='bg-red-200 h-36 w-36 flex justify-center items-center'>
                <div>
                    {/* new post number */}
                    <h6 className='text-2xl font-bold text-center'>5</h6> 
                    <span className='capitalize text-sm'>new post</span>
                </div>   
             </div>
             <div className='bg-red-200 h-36 w-36 flex justify-center items-center'>
                <div>
                    {/* new post number */}
                    <h6 className='text-2xl font-bold text-center'>45</h6> 
                    <span className='capitalize text-sm'>new subscriber</span>
                </div>   
             </div>
             <div className='bg-red-200 h-36 w-36 flex justify-center items-center'>
                <div>
                    {/* new post number */}
                    <h6 className='text-2xl font-bold text-center'>455</h6> 
                    <span className='capitalize text-sm'>new visitors</span>
                </div>   
             </div>
             <div className='bg-red-200 h-36 w-36 flex justify-center items-center'>
                <div>
                    {/* new post number */}
                    <h6 className='text-2xl font-bold text-center'>5</h6> 
                    <span className='capitalize text-sm'>Blog read</span>
                </div>   
             </div>
        </div>
    </div>
  )
}
  
export default TodayUpdate