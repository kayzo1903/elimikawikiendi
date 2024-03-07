import React from "react";
import { FaCamera } from "react-icons/fa";

const CategoriesCard = () => {
  return (
    <div className="w-44 h-36 bg-skin2 flex justify-center items-center">
      <div className="flex items-center flex-col">
        <FaCamera className="text-3xl text-skin"/>
        <h6 className="text-sm text-gray-950">Photography</h6>
      </div>
    </div>
  );
};

export default CategoriesCard;
