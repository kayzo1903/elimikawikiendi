import React from "react";
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import TopIntro from "@/app/components/TopIntro/TopIntro";

const Authors = () => {
  return (
    <section className="w-full py-16 bg-primary dark:bg-gray-800 px-2 min-h-screen flex items-center flex-col gap-8">
      <TopIntro firstword={"Meet"} secondword={"Our Author"} />
      <div className="max-w-screen-md flex gap-4 items-center justify-center flex-wrap">
        <AuthorInfo />
        <AuthorInfo />
        <AuthorInfo />
        <AuthorInfo />
      </div>
    </section>
  );
};

export default Authors;
