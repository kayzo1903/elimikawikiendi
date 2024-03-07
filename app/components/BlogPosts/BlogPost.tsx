import React from "react";
import Postcards from "../BlogPostComponents/Postcards";
import Authorcards from "../Author/Authorcards";
import Category from "../category/Category";
import TodayUpdate from "../TodayUpdate/TodayUpdate";
import Searchtag from "../SearchTag/Searchtag";
import TopIntro from "../TopIntro/TopIntro";
import Authorpage from "../Author/authorpage";

const BlogPost = () => {
  return (
    <section className="w-full py-16 flex gap-8 bg-primary dark:bg-gray-800 px-2">
      <article className="space-y-8 w-full xl:w-[70%]">
        <div className="py-2">
          <TopIntro firstword={"Recent"} secondword={"Post"} />
        </div>
        <div>
          <Postcards />
          <Postcards />
          <Postcards />
        </div>
      </article>
      <aside className="hidden xl:block space-y-8 w-[30%] pr-4">
        <Authorpage />
        <Category />
        <TodayUpdate />
        <Searchtag />
      </aside>
    </section>
  );
};

export default BlogPost;
