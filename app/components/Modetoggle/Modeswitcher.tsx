"use client";

import * as React from "react";
import { BsMoon } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'

export const Modeswitcher = () => {
   const [mounted, setMounted] = useState(false)
   const { setTheme } = useTheme()
 
   // useEffect only runs on the client, so now we can safely show the UI
   useEffect(() => {
     setMounted(true)
   }, [])
 
   if (!mounted) {
     return null
   }

  return (
    <div className="w-fit px-2 flex gap-4 items-center justify-center">
      <button
        onClick={() => setTheme("dark")}
        className="h-6 w-6 flex justify-center items-center rounded-full"
      >
        <BsMoon className="text-xl" />
      </button>
      <button
        onClick={() => setTheme("light")}
        className="h-6 w-6 flex justify-center items-center rounded-full"
      >
        <IoMdSunny className="text-xl text-yellow-400" />
      </button>
    </div>
  );
};
