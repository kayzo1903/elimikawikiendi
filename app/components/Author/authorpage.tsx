import React from "react";
import TopIntro from "../TopIntro/TopIntro";
import Authorcards from "./Authorcards";

const Authorpage = () => {
  return (
    <div className="w-full">
      <div className="py-2">
        <TopIntro firstword={"Top"} secondword={"Author"} />
      </div>
      <div className="space-y-8">
        <Authorcards />
        <Authorcards />
        <Authorcards />
      </div>
    </div>
  );
};

export default Authorpage;
