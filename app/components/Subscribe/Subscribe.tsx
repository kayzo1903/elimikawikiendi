import React from "react";


const Subscribe = () => {
  return (
    <form>
      <div className="flex justify-center">
        <input type="email" className="bg-[#dee4e2] h-8 outline-none px-2 w-64 text-gray-950 text-xs rounded-l-md" />
        <button
          type="submit"
          className="text-xs h-8 px-4 rounded-r-md text-white bg-skin hover:text-gray-300"
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
