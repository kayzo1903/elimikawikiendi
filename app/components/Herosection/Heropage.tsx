import React from "react";
import style from "./scrollbar.module.css"
import PostListCard from "../BlogPostComponents/PostListCard";
import BlogPostCard from "../BlogPostComponents/BlogPostCard";

const Heropage = () => {
  return (
    <section className="w-full py-8 flex gap-8 bg-secondary dark:bg-gray-900 px-2">
      <article className="space-y-8 w-full xl:w-[70%]">
        <div className="py-2">
          <h6 className="uppercase">
            <span className="bg-skin text-white px-1">featured</span>
            <span className="px-1">This month</span>
          </h6>
        </div>
        {/* post-list */} 
        <div className={`flex gap-4 flex-wrap w-full xl:h-[420px] lg:overflow-auto`}>
           <BlogPostCard />
           <BlogPostCard />
           <BlogPostCard />
           <BlogPostCard />
        </div>
      </article>
      <aside className="hidden xl:block space-y-8 w-[30%] pr-4">
        <div className="py-2">
          <h6 className="uppercase">
            <span className="bg-skin text-white px-1">Popular</span>
            <span className="px-1">post</span>
          </h6>
        </div>
        {/* popular-post list*/}
        <div className={`flex flex-col gap-8 justify-start ${style.scrollbar}`}>
            <PostListCard />
            <PostListCard />
        </div>
      </aside>
    </section>
  );
};

export default Heropage;
