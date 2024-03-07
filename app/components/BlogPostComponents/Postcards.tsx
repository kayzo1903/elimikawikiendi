import React from "react";
import blogpostAi from "../../../public/Ai.jpg";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import Image from "next/image";

const Postcards = () => {
  return (
    <div className="w-full min-h-64 lg:flex lg:flex-nowrap lg:gap-4">
      {/* post-image */}
      <div className="w-[360px] lg:64 h-60 py-2 relative">
        <Image
          alt="blog post"
          src={blogpostAi}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* post-datas */}
      <div className="w-[360px] h-60 py-4">
        <div className="space-y-4">
          {/* category */}
          <span className="text-xs md:text-sm py-2 px-4 bg-skin text-white rounded-md">
            politics
          </span>
          {/* title */}
          <h3 className="capitalize text-sm md:text-xl">
            How AI transform Our agriculture sector in tanzania
          </h3>
          {/* author + date*/}
          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-between">
            {/* author-image */}
            <div className="h-6 w-6 relative rounded-full overflow-hidden">
              <Image
                alt="blog post"
                src={blogpostAi}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* author-name */}
            <h6 className="text-xs">kay mmari</h6>
            <span>:</span>
            {/* publishing-date */}
            <div className="text-xs w-28 space-x-1">
              <IoCalendarOutline className=" text-sm inline-block" />
              <h6 className="text-xs text-nowrap inline-block">27 feb 2024</h6>
            </div>
            <span>:</span>
            {/* time-to-read */}
            <div className="flex gap-2 items-center text-xs">
              <IoMdTime />
              <span className="capitalize">3 min.</span>
            </div>
          </div>
          <div className="line-clamp-2 text-sm text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            fugiat nemo ut, facilis dolor dolore eveniet sint commodi nihil
            similique ipsam delectus natus, voluptatem quisquam, sed rerum est
            quos dignissimos?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postcards;
