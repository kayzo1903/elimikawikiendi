import Authorpage from "@/app/components/Author/authorpage";
import React from "react";
import TodayUpdate from "@/app/components/TodayUpdate/TodayUpdate";
import Searchtag from "@/app/components/SearchTag/Searchtag";
import Category from "@/app/components/category/Category";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const Postpage = () => {
  return (
    <main>
      <section className="w-full py-16 flex gap-8 bg-primary dark:bg-gray-800 px-2">
        <article className="space-y-8 w-full xl:w-[70%]">
          <div className="space-y-4">
            <span className="text-xs md:text-sm py-2 px-4 bg-skin text-white rounded-md">
              politics
            </span>
            {/* title */}
            <h3 className="capitalize text-sm md:text-xl">
              How AI transform Our agriculture sector in tanzania
            </h3>
            {/* author + date*/}
            <div className="text-gray-600 dark:text-gray-300 flex items-center justify-between max-w-96">
              {/* author-image */}
              <div className="h-6 w-6 relative rounded-full overflow-hidden bg-gray-600"></div>
              {/* author-name */}
              <h6 className="text-xs">kay mmari</h6>
              <span>:</span>
              {/* publishing-date */}
              <div className="text-xs w-28 space-x-1">
                <IoCalendarOutline className=" text-sm inline-block" />
                <h6 className="text-xs text-nowrap inline-block">
                  27 feb 2024
                </h6>
              </div>
              <span>:</span>
              {/* time-to-read */}
              <div className="flex gap-2 items-center text-xs">
                <IoMdTime />
                <span className="capitalize">3 min.</span>
              </div>
            </div>
          </div>
        </article>
        <aside className="hidden xl:block space-y-8 w-[30%] pr-4">
          <Authorpage />
          <Category />
          <TodayUpdate />
          <Searchtag />
        </aside>
      </section>
    </main>
  );
};

export default Postpage;
