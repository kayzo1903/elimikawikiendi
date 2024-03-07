import React from "react";
import CategoriesCard from "./components/CategoriesCard";

const CategoriesPage = () => {
  return (
    <main className="w-full">
      <section className="gap-8 flex flex-col items-center justify-start py-32 min-h-screen">
        <h6 className="text-xl">categories</h6>
        <div className="gap-4 flex flex-wrap items-center justify-center max-w-screen-md">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </section>
    </main>
  );
};

export default CategoriesPage;
