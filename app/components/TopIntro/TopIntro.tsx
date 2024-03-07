import React from "react";

interface topProp {
   firstword : String ;
   secondword : String 
}

const TopIntro = ({firstword , secondword} : topProp ) => {
  return (
    <div className="py-2">
      <h6 className="uppercase">
        <span className="bg-skin text-white px-1">{firstword}</span>
        <span className="px-1">{secondword}</span>
      </h6>
    </div>
  );
};

export default TopIntro;
