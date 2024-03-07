import React from "react";
import Heropage from "./components/Heropage/Heropage";
import Authors from "./components/AuthorPage/Authors";

const AboutUs = () => {
  return (
    <main className="w-full">
       <Heropage />
       <Authors />
    </main>
  );
};

export default AboutUs;
