import React from "react";
import TopIntro from "../TopIntro/TopIntro";

const Category = () => {
  return (
    <div className="w-full space-y-8">
      <TopIntro firstword={"Categories"} secondword={""} />
      <div className="w-full space-y-8">
          <div className="flex justify-between items-center border-b-[.4px] border-gray-500 dark:text-gray-300">
               <h6 className="text-sm font-medium">Lifestyle</h6>
               <span>45</span>
          </div>
          <div className="flex justify-between items-center border-b-[.4px] border-gray-500 dark:text-gray-300">
               <h6 className="text-sm font-medium">Travel</h6>
               <span>23</span>
          </div>
          <div className="flex justify-between items-center border-b-[.4px] border-gray-500 dark:text-gray-300">
               <h6 className="text-sm font-medium">Food</h6>
               <span>24</span>
          </div>
      </div>
    </div>
  );
};

export default Category;
