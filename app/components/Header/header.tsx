"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Modeswitcher } from "../Modetoggle/Modeswitcher";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import SidenavBar from "./sidenavbar";


const Header = () => {
  const [isnavOpen, setNavOpen] = useState(false);

  return (
    <section className="w-full h-16 relative bg-[#dee4e2] text-gray-900 dark:bg-gray-900 dark:text-white">
      <nav className="flex justify-between items-center pt-4 px-2">
        <div className="gap-4 items-center text-sm hidden md:flex">
          <Link href={"/"}>Home</Link>
          <Link href={"/AboutUs"}>About</Link>
          <Link href={"/Categories"}>Categories</Link>
        </div>
        <h3 className="text-base md:text-xl font-semibold">
          Elimika<span className="text-skin">wikiendi</span>
        </h3>
        <div className="flex gap-4 items-center text-sm">
          <Link
            href={"/"}
            className="h-6 w-6 flex justify-center items-center text-xl"
          >
            <IoSearchSharp />
          </Link>
          <Link href={"/Contacts"} className="hidden md:block text-sm">
            Contacts
          </Link>
          <Modeswitcher />
        </div>
        <button
          className="block md:hidden"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <AiOutlineBars className="text-xl" />
        </button>
      </nav>
      <div
        className={`absolute top-16 ${
          isnavOpen ? "left-0 opacity-100" : "-left-[100%] opacity-0"
        } z-50 w-full`}
      >
        <div className="w-full min-h-screen pt-16 bg-primary dark:bg-gray-900 relative">
          <SidenavBar closeNav={setNavOpen}/>
        </div>
      </div>
    </section>
  );
};

export default Header;
