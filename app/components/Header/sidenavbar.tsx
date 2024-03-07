'use client'
import Link from 'next/link'
import React from 'react'

interface sidenavProp {
  closeNav : any
}

const SidenavBar = ({ closeNav} : sidenavProp) => {
  return (
    <div className='w-full min-h-screen pt-32 bg-primary dark:bg-gray-900 relative'>
        <div className="gap-4 items-center flex-col justify-center flex">
            <Link
              href={"/"}
              className="text-xl hover:text-skin"
              onClick={() => closeNav(false)}
            >
              Home
            </Link>
            <Link
              href={"/AboutUs"}
              className="text-xl hover:text-skin"
              onClick={() => closeNav(false)}
            >
              About
            </Link>
            <Link
              href={"/Categories"}
              className="text-xl hover:text-skin"
              onClick={() => closeNav(false)}
            >
              Categories
            </Link>
            <Link
              href={"/Contacts"}
              className="text-xl hover:text-skin"
              onClick={() => closeNav(false)}
            >
              Contacts
            </Link>
          </div>
    </div>
  )
}

export default SidenavBar