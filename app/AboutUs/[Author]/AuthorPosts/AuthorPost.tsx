import TopIntro from '@/app/components/TopIntro/TopIntro'
import React from 'react'
import Postcards from './PostCards/Postcards'

const AuthorPost = () => {
  return (
    <section className="w-full bg-secondary dark:bg-gray-800 min-h-screen py-16 px-2 space-y-8">
      <TopIntro firstword={"Read"} secondword={"Author Blogs"} />
      <article className='w-full flex gap-6 flex-wrap items-center'>
          <Postcards />
          <Postcards />
          <Postcards />
          <Postcards />
          <Postcards />
      </article>
    </section>
  )
}

export default AuthorPost