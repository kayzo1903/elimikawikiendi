import PostListCard from '@/app/components/BlogPostComponents/PostListCard'
import React from 'react'

const Postcards = () => {
  return (
    <div className='max-w-[380px] space-y-4'>
        <div className='w-[380px] h-[240px] bg-slate-500 overflow-hidden rounded-md'>  
        </div>
        <div className='w-full'>
           <PostListCard />
        </div>
    </div>
  )
}

export default Postcards